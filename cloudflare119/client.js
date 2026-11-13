(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.CourseCloud=factory();})(typeof globalThis==='object'?globalThis:this,function(){
'use strict';
const copy=value=>value==null?null:JSON.parse(JSON.stringify(value));
const fault=(code,message=code)=>Object.assign(new Error(message),{code});
const keyOK=key=>typeof key==='string'&&key.length>0&&!/[.#$\[\]\/\u0000-\u001f]/.test(key)&&!['__proto__','constructor','prototype'].includes(key);
function ordered(value,query={}) {
 if(!value||typeof value!=='object'||Array.isArray(value))return value;
 const order=entry=>query.orderBy&&query.orderBy!=='$key'?entry[1]?.[query.orderBy]??null:entry[0];
 const compare=(a,b)=>a===b?0:a==null?-1:b==null?1:typeof a===typeof b?(a<b?-1:1):typeof a==='number'?-1:1;
 let entries=Object.entries(value).sort((a,b)=>compare(order(a),order(b))||compare(a[0],b[0]));
 if(query.endAt!==undefined)entries=entries.filter(e=>compare(order(e),query.endAt)<0||compare(order(e),query.endAt)===0&&(!query.endKey||e[0]<=query.endKey));
 if(query.limitToLast)entries=entries.slice(-query.limitToLast);
 return entries.length?Object.fromEntries(entries):null;
}
class Snapshot {
 constructor(value,key=null,query={}){this.value=ordered(copy(value),query);this.key=key;}
 val(){return copy(this.value);}
 exists(){return this.value!==null&&this.value!==undefined;}
 child(path){let value=this.value;for(const key of path.split('/'))value=value?.[key];return new Snapshot(value,path.split('/').pop());}
 forEach(fn){for(const [key,value] of Object.entries(this.value||{}))if(fn(new Snapshot(value,key))===true)return true;return false;}
 numChildren(){return Object.keys(this.value||{}).length;}
}
function create({auth,endpoint,site,primaryURL='https://gimpo-monitoring-default-rtdb.firebaseio.com',fetcher=fetch,Socket=WebSocket,events=window}) {
 const url=new URL(endpoint);if(url.protocol!=='https:'||!url.hostname.endsWith('.workers.dev')||url.username||url.password||url.search||url.hash)throw fault('invalid-endpoint');
 const liveURL=new URL('/live',url);liveURL.protocol='wss:';
 let socket=null,ready=false,generation=0,requestId=0,connecting=null,retryTimer=null,retries=0,user=auth.currentUser,disposed=false;
 const pending=new Map(),watchers=new Set(),presenceListeners=new Set();let counts=null;
 const device=()=>{let id;try{id=events.localStorage.getItem('gimpo_presence_device_v1');}catch{}if(!/^d_[a-f0-9]{32}$/.test(id||'')){id='d_'+crypto.randomUUID().replaceAll('-','');try{events.localStorage.setItem('gimpo_presence_device_v1',id);}catch{}}return id;};
 const devicePromise=events.navigator?.locks?events.navigator.locks.request('gimpo-presence-device',device):Promise.resolve(device());
 const deliverPresence=()=>{for(const options of presenceListeners){options.onConnection?.(ready);options.onCount?.(ready&&counts?counts[site]:null);if(ready&&counts){options.onReadSuccess?.();options.onWriteSuccess?.();}}};
 function info(){for(const entry of watchers)if(entry.ref.path==='.info/connected')entry.success(new Snapshot(ready,'connected'));deliverPresence();}
 function rejectPending(error){for(const task of pending.values()){clearTimeout(task.timer);task.reject(error);}pending.clear();}
 function sendRaw(message,ws=socket){return new Promise((resolve,reject)=>{if(!ws||ws.readyState!==1)return reject(fault('unavailable'));const id=String(++requestId);const timer=setTimeout(()=>{pending.delete(id);reject(fault('database/timeout','서버 응답 시간이 초과되었습니다.'));},18000);pending.set(id,{resolve,reject,timer});ws.send(JSON.stringify({...message,id}));});}
 function scheduleReconnect(){if(disposed||retryTimer||!auth.currentUser)return;retryTimer=setTimeout(()=>{retryTimer=null;connect().catch(()=>{});},Math.min(15000,500*2**Math.min(retries++,5))+Math.random()*400);}
 async function connect(){
  if(disposed)throw fault('closed');
  if(ready&&user?.uid===auth.currentUser?.uid)return;
  if(connecting)return connecting;
  const owner=auth.currentUser,epoch=generation;if(!owner)throw fault('unauthenticated','로그인이 필요합니다.');
  const task=(async()=>{
   const [token,deviceId]=await Promise.all([owner.getIdToken(),devicePromise]);if(epoch!==generation||auth.currentUser?.uid!==owner.uid)throw fault('account-changed');
   const ws=new Socket(liveURL.href);socket=ws;
   await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{reject(fault('unavailable'));ws.close();},12000);
    ws.onopen=()=>{clearTimeout(timer);resolve();};ws.onerror=()=>{clearTimeout(timer);reject(fault('unavailable'));};
    ws.onmessage=event=>{
     if(ws!==socket)return;if(event.data==='pong')return;
     let message;try{message=JSON.parse(event.data);}catch{return;}
     if(message.id&&pending.has(message.id)){const entry=pending.get(message.id);pending.delete(message.id);clearTimeout(entry.timer);message.ok?entry.resolve(message):entry.reject(fault(message.error?.code||'unavailable',message.error?.message));}
     else if(message.type==='presence'){counts=message.counts;deliverPresence();}
     else if(message.type==='change')refreshWhere(ref=>ref.store==='secondary'&&(ref.path===message.path||ref.path.startsWith(message.path+'/')));
     else if(message.type==='invalidate')refreshWhere(ref=>ref.store==='primary'&&!ref.path.startsWith('.info/'));
    };
    ws.onclose=()=>{clearTimeout(timer);if(ws!==socket)return;socket=null;ready=false;counts=null;rejectPending(fault('unavailable'));info();scheduleReconnect();reject(fault('unavailable'));};
   });
   await sendRaw({type:'auth',token,site,device:deviceId},ws);
   if(epoch!==generation||auth.currentUser?.uid!==owner.uid){ws.close();throw fault('account-changed');}
   ready=true;user=owner;retries=0;info();refreshWhere(ref=>!ref.path.startsWith('.info/'));
  })();connecting=task;
  try{await task;}catch(error){scheduleReconnect();throw error;}finally{if(connecting===task)connecting=null;}
 }
 async function rpc(message){await connect();const owner=auth.currentUser,epoch=generation,token=await owner.getIdToken();if(epoch!==generation||owner.uid!==auth.currentUser?.uid)throw fault('account-changed');return sendRaw({...message,token});}
 async function rest(ref,method='GET',value,etag){
  const owner=auth.currentUser;if(!owner)throw fault('unauthenticated');const epoch=generation,token=await owner.getIdToken();if(epoch!==generation||auth.currentUser?.uid!==owner.uid)throw fault('account-changed');
  const address=new URL(primaryURL+'/'+ref.path.split('/').map(encodeURIComponent).join('/')+'.json');address.searchParams.set('auth',token);
  if(method==='GET')for(const [key,value]of Object.entries(ref.query))if(key!=='endKey'&&!(key==='limitToLast'&&ref.query.endKey))address.searchParams.set(key,JSON.stringify(value));
  const headers={};if(method==='GET'&&!Object.keys(ref.query).length)headers['X-Firebase-ETag']='true';if(etag)headers['if-match']=etag;
  const response=await fetcher(address.href,{method,headers,body:value===undefined?undefined:JSON.stringify(value),credentials:'omit',referrerPolicy:'no-referrer',cache:'no-store',signal:AbortSignal.timeout(15000)});
  if(epoch!==generation||auth.currentUser?.uid!==owner.uid)throw fault('account-changed');
  if(response.status===412)return{committed:false};
  if(!response.ok)throw fault([401,403].includes(response.status)?'permission-denied':'unavailable','서버 요청을 처리하지 못했습니다.');
  return{value:await response.json(),revision:response.headers.get('etag'),committed:true};
 }
 async function read(ref){if(ref.path==='.info/connected')return{value:ready};if(ref.path==='.info/serverTimeOffset')return{value:0};return ref.store==='primary'?rest(ref):rpc({type:'get',path:ref.path});}
 async function refresh(entry){
  if(entry.busy){entry.again=true;return;}if(!watchers.has(entry))return;entry.busy=true;const epoch=generation;
  try{const result=await read(entry.ref);if(!watchers.has(entry)||epoch!==generation)return;const snapshot=new Snapshot(result.value,entry.ref.key,entry.ref.query),hash=JSON.stringify(snapshot.value);if(hash===entry.hash)return;
   const before=entry.last||{},after=snapshot.value||{};entry.hash=hash;entry.last=copy(snapshot.value);
   if(entry.event==='value')entry.success(snapshot);
   else if(entry.event==='child_added'){for(const key of Object.keys(after))if(!Object.hasOwn(before,key))entry.success(new Snapshot(after[key],key));}
   else if(entry.event==='child_changed'){for(const key of Object.keys(after))if(Object.hasOwn(before,key)&&JSON.stringify(before[key])!==JSON.stringify(after[key]))entry.success(new Snapshot(after[key],key));}
   else if(entry.event==='child_removed'){for(const key of Object.keys(before))if(!Object.hasOwn(after,key))entry.success(new Snapshot(before[key],key));}
  }catch(error){if(watchers.has(entry)&&epoch===generation)entry.failure?.(error);}finally{entry.busy=false;if(entry.again){entry.again=false;queueMicrotask(()=>refresh(entry));}}
 }
 function refreshWhere(predicate){for(const entry of watchers)if(predicate(entry.ref))refresh(entry);}
 async function notify(uid=auth.currentUser?.uid,global=false){refreshWhere(ref=>ref.store==='primary'&&!ref.path.startsWith('.info/'));try{await rpc({type:'invalidate',uid,global});}catch{}}
 async function write(ref,method,value,expected){
  const result=ref.store==='primary'?await rest(ref,method==='put'?'PUT':'PATCH',value,expected):await rpc({type:method,path:ref.path,value,expected});
  if(result.committed){refreshWhere(other=>other.store===ref.store&&(other.path===ref.path||other.path.startsWith(ref.path+'/')||ref.path.startsWith(other.path+'/')));if(ref.store==='primary')notify(ref.path.split('/')[2]);}
  return result;
 }
 class Ref {
  constructor(store,path,query={}){if(typeof path!=='string')throw fault('invalid-path');this.store=store;this.path=path.replace(/^\/+|\/+$/g,'');if(!this.path.startsWith('.info/')&&this.path.split('/').some(part=>!keyOK(part)))throw fault('invalid-path');this.query=query;this.key=this.path.split('/').pop();}
  child(path){return new Ref(this.store,this.path+'/'+path);}
  orderByChild(value){if(!keyOK(value))throw fault('invalid-query');return new Ref(this.store,this.path,{...this.query,orderBy:value});}
  orderByKey(){return new Ref(this.store,this.path,{...this.query,orderBy:'$key'});}
  limitToLast(value){if(!Number.isInteger(value)||value<1||value>1000)throw fault('invalid-query');return new Ref(this.store,this.path,{...this.query,limitToLast:value});}
  endAt(value,key){return new Ref(this.store,this.path,{...this.query,endAt:value,...(key?{endKey:key}:{})});}
  async once(event){if(event!=='value')throw fault('unsupported-event');return new Snapshot((await read(this)).value,this.key,this.query);}
  on(event,success,failure){if(!['value','child_added','child_changed','child_removed'].includes(event))throw fault('unsupported-event');const entry={ref:this,event,success,failure};watchers.add(entry);refresh(entry);connect().catch(()=>{});return success;}
  off(event,callback){for(const entry of watchers)if(entry.ref.store===this.store&&entry.ref.path===this.path&&JSON.stringify(entry.ref.query)===JSON.stringify(this.query)&&(!event||entry.event===event)&&(!callback||entry.success===callback))watchers.delete(entry);}
  async set(value){await write(this,'put',value);}
  async update(value){await write(this,'patch',value);}
  async remove(){await this.set(null);}
  push(value){const ref=this.child(pushKey());if(value!==undefined){const saved=ref.set(value);ref.then=(a,b)=>saved.then(()=>new Ref(ref.store,ref.path)).then(a,b);}return ref;}
  async transaction(fn,callback){try{for(let attempt=0;attempt<8;attempt++){const before=await read(this),next=fn(copy(before.value));if(next===undefined){const result={committed:false,snapshot:new Snapshot(before.value,this.key)};callback?.(null,false,result.snapshot);return result;}const saved=await write(this,'put',next,before.revision);if(saved.committed){const result={committed:true,snapshot:new Snapshot(saved.value,this.key)};callback?.(null,true,result.snapshot);return result;}}throw fault('conflict','다른 기기의 변경과 충돌했습니다.');}catch(error){callback?.(error,false,null);throw error;}}
 }
 const primary={ref:path=>new Ref('primary',path),goOffline(){},goOnline(){connect().catch(()=>{});}},secondary={ref:path=>new Ref('secondary',path)};
 const presence=options=>{presenceListeners.add(options);deliverPresence();connect().catch(error=>options.onError?.('connection',error));return{remove(){presenceListeners.delete(options);return Promise.resolve();}};};
 primary.coursePresence=secondary.coursePresence=presence;
 const stopAuth=auth.onIdTokenChanged(next=>{
  if(next?.uid===user?.uid&&ready){next.getIdToken().then(async token=>sendRaw({type:'auth',token,site,device:await devicePromise})).catch(()=>socket?.close());return;}
  user=next;generation++;connecting=null;ready=false;counts=null;const old=socket;socket=null;old?.close();rejectPending(fault('account-changed'));for(const entry of watchers){entry.hash=undefined;entry.last=null;}info();if(next)connect().catch(()=>{});
 });
 const heartbeat=setInterval(()=>{if(socket?.readyState===1)socket.send('ping');},20000);
 // Reconcile changes made outside these pages (for example, approval from an email).
 const reconcile=setInterval(()=>{if(events.document?.visibilityState!=='hidden')refreshWhere(ref=>ref.store==='primary'&&!ref.path.startsWith('.info/'));},60000);
 const wake=()=>{connect().then(()=>refreshWhere(ref=>!ref.path.startsWith('.info/'))).catch(()=>{});};events.addEventListener('online',wake);events.addEventListener('focus',wake);
 return{primary,secondary,notify,connect,presence,close(){disposed=true;generation++;stopAuth();clearInterval(heartbeat);clearInterval(reconcile);clearTimeout(retryTimer);events.removeEventListener('online',wake);events.removeEventListener('focus',wake);const old=socket;socket=null;old?.close();watchers.clear();presenceListeners.clear();rejectPending(fault('closed'));}};
}
let lastTime=0,lastRandom=[];
function pushKey(){const chars='-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';let time=Date.now(),same=time===lastTime;lastTime=time;const out=Array(8);for(let i=7;i>=0;i--){out[i]=chars[time%64];time=Math.floor(time/64);}if(!same)lastRandom=Array.from(crypto.getRandomValues(new Uint8Array(12)),v=>v%64);else{let i=11;for(;i>=0&&lastRandom[i]===63;i--)lastRandom[i]=0;if(i>=0)lastRandom[i]++;}return out.join('')+lastRandom.map(i=>chars[i]).join('');}
return{create,Snapshot,ordered,pushKey};
});
