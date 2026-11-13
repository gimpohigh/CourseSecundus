from pathlib import Path
import argparse, json, re

root = Path(__file__).resolve().parent
parser = argparse.ArgumentParser()
parser.add_argument('--endpoint', default='')
args = parser.parse_args()
endpoint = args.endpoint.rstrip('/')
if endpoint and not re.fullmatch(r'https://[a-z0-9-]+\.[a-z0-9-]+\.workers\.dev', endpoint):
    raise SystemExit('An actual workers.dev endpoint is required.')
client = (root/'CourseSecundus/cloud-database.js').read_text(encoding='utf8')
assert '</script' not in client.lower()
for name,site in [('CoursePrimus','primus'),('CourseSecundus','secundus'),('reportchat','admin')]:
    path = root/name/'index.html'
    backup = path.with_name('index.before-cloud119.html')
    if not backup.exists(): backup.write_bytes(path.read_bytes())
    source = backup.read_text(encoding='utf8')
    marker = '<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"></script>'
    assert marker in source
    source = source.replace(marker, '<script>window.COURSE_CLOUDFLARE_URL='+json.dumps(endpoint)+';</script>\n<script>'+client+'</script>\n'+marker,1)
    needle = 'api.storage=adminSession.app.storage();' if name=='reportchat' else 'api.storage=firebase.storage();'
    binding = "if(window.COURSE_CLOUDFLARE_URL){api.cloud=CourseCloud.create({auth:api.auth,endpoint:window.COURSE_CLOUDFLARE_URL,site:'"+site+"',primaryURL:config.databaseURL});api.db=api.cloud.primary;"+('api.courseDb=api.cloud.secondary;' if name=='CourseSecundus' else '')+'}'
    assert source.count(needle)==1
    source = source.replace(needle,binding+needle)
    needle='function start({db,uid=null,serverTimestamp,onCount=()=>{},onConnection=()=>{},onError=()=>{},onReadSuccess=()=>{},onWriteSuccess=()=>{},clock=Date.now,schedule=setInterval,unschedule=clearInterval,events=typeof window===\'undefined\'?null:window,documentObject=typeof document===\'undefined\'?null:document}){'
    assert source.count(needle)==1
    source=source.replace(needle,needle+'\n if(db.coursePresence)return db.coursePresence({onCount,onConnection,onError,onReadSuccess,onWriteSuccess});')
    needle=' return result.result;\n}};'
    assert source.count(needle)==1
    source=source.replace(needle,"  root.App.cloud?.notify(data.uid||user.uid);\n"+needle)
    if name=='reportchat':
        needle="if(['studioSaveStudent','studioDeleteStart','studioDeleteStep'].includes(action))invalidate();return value.result;"
        assert needle in source
        source=source.replace(needle,"if(['studioSaveStudent','studioDeleteStart','studioDeleteStep'].includes(action))invalidate();if(['studioPublish','studioRestoreVersion','studioSaveStudent','studioDeleteStart','studioDeleteStep','studioSyncDirectory'].includes(action))App.cloud?.notify(data.uid||owner,true);return value.result;")
    path.write_text(source,encoding='utf8',newline='\n')

path=root/'server.full118.gs'
backup=root/'server.before-cloud119.gs'
if not backup.exists(): backup.write_bytes(path.read_bytes())
source=backup.read_text(encoding='utf8')
needle="    if (input.action === 'syncStudentIdentity')"
assert needle in source
source=source.replace(needle,"    if(input.action==='cloudflareDeleteCheck119')return json_({ok:true,result:cloudflareDeleteCheck119_(input.ticket)});\n"+needle,1)
needle='function secondaryPurge118_(uids){'
assert source.count(needle)==1
source=source.replace(needle,needle+"if(PropertiesService.getScriptProperties().getProperty('COURSE_CLOUDFLARE_URL'))return cloudflarePurge119_(uids);",1)
source+='''
// Cloudflare D1 deletion follows the same already-confirmed student deletion job.
function cloudflareDeleteCheck119_(ticket){
 if(typeof ticket!=='string'||ticket.length>10000)throw fault_('invalid-request');
 const parts=ticket.split('.');if(parts.length!==2||!constantTimeEqual_(parts[1],tokenSignature_('cloudflare-purge-119:'+parts[0])))throw fault_('invalid-approval');
 let payload;try{payload=JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(parts[0])).getDataAsString());}catch(error){throw fault_('invalid-request');}
 const uids=payload.uids;if(!Number.isFinite(payload.expiresAt)||payload.expiresAt<Date.now()||payload.expiresAt>Date.now()+5*60*1000||!Array.isArray(uids)||!uids.length||uids.length>20||uids.some(uid=>!validKey_(uid)||studioIsProtected_(uid)||!read_('private/deletedStudents/'+uid)))throw fault_('studio-protected');
 return{allowed:true,uids:uids};
}
function cloudflarePurge119_(uids){
 const endpoint=PropertiesService.getScriptProperties().getProperty('COURSE_CLOUDFLARE_URL');
 if(!/^https:\\/\\/[a-z0-9-]+\\.[a-z0-9-]+\\.workers\\.dev$/.test(endpoint||''))throw fault_('cloudflare-not-configured');
 for(let start=0;start<uids.length;start+=20){
  const payload=Utilities.base64EncodeWebSafe(JSON.stringify({uids:uids.slice(start,start+20),expiresAt:Date.now()+5*60*1000})),ticket=payload+'.'+tokenSignature_('cloudflare-purge-119:'+payload);
  const response=UrlFetchApp.fetch(endpoint+'/admin/purge',{method:'post',contentType:'application/json',payload:JSON.stringify({ticket:ticket}),muteHttpExceptions:true});
  if(response.getResponseCode()!==200)throw fault_('cloudflare-purge-'+response.getResponseCode());
  const result=JSON.parse(response.getContentText());if(result.ok!==true)throw fault_('cloudflare-purge-failed');
 }
}
'''
if endpoint:
    source+='\nfunction connectCloudflare119(){const endpoint='+json.dumps(endpoint)+";const response=UrlFetchApp.fetch(endpoint+'/health',{muteHttpExceptions:true});if(response.getResponseCode()!==200||JSON.parse(response.getContentText()).ok!==true)throw Error('DB 연결 검사 실패');PropertiesService.getScriptProperties().setProperty('COURSE_CLOUDFLARE_URL',endpoint);return{ok:true,endpoint:endpoint};}\n"
(root/'server.cloud119.gs').write_text(source,encoding='utf8',newline='\n')
print('Prepared client integration and Apps Script deletion hook; endpoint:',endpoint or '(not deployed)')
