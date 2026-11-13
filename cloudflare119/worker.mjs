// CourseSecundus: D1 storage and a hibernating WebSocket coordinator.
// Firebase Authentication remains the identity authority for both grade sites.
const BASE_COURSES = [{"id":"11_01","sem":"1-1","name":"공통국어 1","type":"공통","cat":"국어","grade":"5단계/등급O","req":true,"cred":4},{"id":"11_02","sem":"1-1","name":"공통수학 1","type":"공통","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"11_03","sem":"1-1","name":"공통영어 1","type":"공통","cat":"영어","grade":"5단계/등급O","req":true,"cred":3},{"id":"11_04","sem":"1-1","name":"한국사 1","type":"공통","cat":"한국사","grade":"5단계/등급O","req":true,"cred":3},{"id":"11_05","sem":"1-1","name":"통합사회 1","type":"공통","cat":"사회","grade":"5단계/등급O","req":true,"cred":3},{"id":"11_06","sem":"1-1","name":"통합과학 1","type":"공통","cat":"과학","grade":"5단계/등급O","req":true,"cred":4},{"id":"11_07","sem":"1-1","name":"과학탐구실험 1","type":"공통","cat":"과학","grade":"3단계/등급X","req":true,"cred":1},{"id":"11_08","sem":"1-1","name":"체육 1","type":"공통","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"11_09","sem":"1-1","name":"음악/미술","type":"공통","cat":"예술","grade":"3단계/등급X","req":true,"cred":2},{"id":"11_10","sem":"1-1","name":"정보/한문","type":"공통","cat":"정보","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_01","sem":"1-2","name":"공통국어 2","type":"공통","cat":"국어","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_02","sem":"1-2","name":"공통수학 2","type":"공통","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"12_03","sem":"1-2","name":"공통영어 2","type":"공통","cat":"영어","grade":"5단계/등급O","req":true,"cred":4},{"id":"12_04","sem":"1-2","name":"한국사 2","type":"공통","cat":"한국사","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_05","sem":"1-2","name":"통합사회 2","type":"공통","cat":"사회","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_06","sem":"1-2","name":"통합과학 2","type":"공통","cat":"과학","grade":"5단계/등급O","req":true,"cred":4},{"id":"12_07","sem":"1-2","name":"과학탐구실험 2","type":"공통","cat":"과학","grade":"3단계/등급X","req":true,"cred":1},{"id":"12_08","sem":"1-2","name":"체육 2","type":"공통","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"12_09","sem":"1-2","name":"미술/음악","type":"공통","cat":"예술","grade":"3단계/등급X","req":true,"cred":2},{"id":"12_10","sem":"1-2","name":"한문/정보","type":"공통","cat":"한문","grade":"5단계/등급O","req":true,"cred":3},{"id":"21_01","sem":"2-1","name":"문학","type":"일반","cat":"국어","grade":"5단계/등급O","req":true,"cred":4},{"id":"21_02","sem":"2-1","name":"대수","type":"일반","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"21_03","sem":"2-1","name":"영어 I","type":"일반","cat":"영어","grade":"5단계/등급O","req":true,"cred":4},{"id":"21_04","sem":"2-1","name":"스포츠 생활 1","type":"융합","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"21_s01","sem":"2-1","name":"주제 탐구 독서","type":"진로","cat":"국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s02","sem":"2-1","name":"인공지능 수학","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s03","sem":"2-1","name":"영어 독해와 작문","type":"진로","cat":"영어","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s04","sem":"2-1","name":"세계 시민과 지리","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s05","sem":"2-1","name":"세계사","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s06","sem":"2-1","name":"현대사회와 윤리","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s07","sem":"2-1","name":"정치","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s08","sem":"2-1","name":"경제","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s09","sem":"2-1","name":"물리학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s10","sem":"2-1","name":"화학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s11","sem":"2-1","name":"생명과학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s12","sem":"2-1","name":"지구과학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s13","sem":"2-1","name":"기초 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기1"},{"id":"21_s14","sem":"2-1","name":"인공지능 기초","type":"진로","cat":"정보","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s15","sem":"2-1","name":"일본어","type":"일반","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s16","sem":"2-1","name":"중국어","type":"일반","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_01","sem":"2-2","name":"화법과 언어","type":"일반","cat":"국어","grade":"5단계/등급O","req":true,"cred":4},{"id":"22_02","sem":"2-2","name":"미적분 I","type":"일반","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"22_03","sem":"2-2","name":"영어 II","type":"일반","cat":"영어","grade":"5단계/등급O","req":true,"cred":4},{"id":"22_04","sem":"2-2","name":"스포츠 생활 2","type":"융합","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"22_s01","sem":"2-2","name":"문학과 영상","type":"진로","cat":"국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s02","sem":"2-2","name":"기하","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s03","sem":"2-2","name":"영어 발표와 토론","type":"진로","cat":"영어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s04","sem":"2-2","name":"동아시아 역사 기행","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s05","sem":"2-2","name":"법과 사회","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s06","sem":"2-2","name":"윤리와 사상","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s07","sem":"2-2","name":"한국지리 탐구","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s08","sem":"2-2","name":"금융과 경제생활","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3},{"id":"22_s09","sem":"2-2","name":"역학과 에너지","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s10","sem":"2-2","name":"물질과 에너지","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s11","sem":"2-2","name":"세포와 물질대사","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s12","sem":"2-2","name":"지구시스템 과학","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s13","sem":"2-2","name":"융합과학 탐구","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3},{"id":"22_s14","sem":"2-2","name":"기초 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기1"},{"id":"22_s15","sem":"2-2","name":"데이터 과학","type":"진로","cat":"정보","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s16","sem":"2-2","name":"일본어 회화","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s17","sem":"2-2","name":"중국 문화","type":"융합","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_01","sem":"3-1","name":"독서와 작문","type":"일반","cat":"국어","grade":"5단계/등급O","req":true,"cred":3},{"id":"31_02","sem":"3-1","name":"확률과 통계","type":"일반","cat":"수학","grade":"5단계/등급O","req":true,"cred":3},{"id":"31_03","sem":"3-1","name":"심화 영어 독해와 작문","type":"진로","cat":"영어","grade":"5단계/등급O","req":true,"cred":3},{"id":"31_04","sem":"3-1","name":"스포츠 문화","type":"진로","cat":"체육","grade":"3단계/등급X","req":true,"cred":1},{"id":"31_05","sem":"3-1","name":"고시외 과목","type":"융합","cat":"교양","grade":"P/F","req":true,"cred":1},{"id":"31_s01","sem":"3-1","name":"언어생활 탐구","type":"융합","cat":"국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s02","sem":"3-1","name":"미적분 II","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s03","sem":"3-1","name":"세계 문화와 영어","type":"융합","cat":"영어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s04","sem":"3-1","name":"도시의 미래 탐구","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s05","sem":"3-1","name":"사회와 문화","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s06","sem":"3-1","name":"인문학과 윤리","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s07","sem":"3-1","name":"역사로 탐구하는 현대 세계","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3},{"id":"31_s08","sem":"3-1","name":"기후변화와 지속 가능한 세계","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후지속"},{"id":"31_s09","sem":"3-1","name":"전자기와 양자","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"전자기"},{"id":"31_s10","sem":"3-1","name":"화학 반응의 세계","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"화학반응"},{"id":"31_s11","sem":"3-1","name":"생물의 유전","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"유전"},{"id":"31_s12","sem":"3-1","name":"행성우주과학","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"행성"},{"id":"31_s13","sem":"3-1","name":"기후변화와 환경생태","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후환경"},{"id":"31_s14","sem":"3-1","name":"음악 연주와 창작","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3},{"id":"31_s15","sem":"3-1","name":"미술 창작","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3},{"id":"31_s16","sem":"3-1","name":"심화 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기2"},{"id":"31_s17","sem":"3-1","name":"정보 과학","type":"진로","cat":"정보","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s18","sem":"3-1","name":"일본 문화","type":"융합","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s19","sem":"3-1","name":"관광 중국어","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s20","sem":"3-1","name":"논리와 사고","type":"진로","cat":"교양","grade":"P/F","req":false,"cred":3,"pair":"논리"},{"id":"32_01","sem":"3-2","name":"독서 토론과 글쓰기","type":"융합","cat":"국어","grade":"5단계/등급O","req":true,"cred":3},{"id":"32_02","sem":"3-2","name":"수학과 문화","type":"융합","cat":"수학","grade":"5단계/등급O","req":true,"cred":3},{"id":"32_03","sem":"3-2","name":"심화 영어","type":"진로","cat":"영어","grade":"5단계/등급O","req":true,"cred":3},{"id":"32_04","sem":"3-2","name":"스포츠 과학","type":"진로","cat":"체육","grade":"3단계/등급X","req":true,"cred":1},{"id":"32_05","sem":"3-2","name":"고시외 과목","type":"융합","cat":"교양","grade":"P/F","req":true,"cred":1},{"id":"32_s01","sem":"3-2","name":"매체 의사소통","type":"융합","cat":"국어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s02","sem":"3-2","name":"경제 수학","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s03","sem":"3-2","name":"전문 수학","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s04","sem":"3-2","name":"미디어 영어","type":"융합","cat":"영어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s05","sem":"3-2","name":"윤리문제 탐구","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s06","sem":"3-2","name":"여행지리","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s07","sem":"3-2","name":"문화로 보는 한국사","type":"융합","cat":"사회","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s08","sem":"3-2","name":"전자기와 양자","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"전자기","g":0},{"id":"32_s09","sem":"3-2","name":"화학 반응의 세계","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"화학반응","g":0},{"id":"32_s10","sem":"3-2","name":"생물의 유전","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"유전","g":0},{"id":"32_s11","sem":"3-2","name":"행성우주과학","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"행성","g":0},{"id":"32_s12","sem":"3-2","name":"음악 감상과 비평","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s13","sem":"3-2","name":"미술 감상과 비평","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s14","sem":"3-2","name":"심화 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기2","g":0},{"id":"32_s15","sem":"3-2","name":"소프트웨어와 생활","type":"융합","cat":"정보","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s16","sem":"3-2","name":"심화 일본어","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s17","sem":"3-2","name":"중국어 회화","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s18","sem":"3-2","name":"논리와 사고","type":"진로","cat":"교양","grade":"P/F","req":false,"cred":3,"pair":"논리","g":0},{"id":"32_s19","sem":"3-2","name":"기후변화와 지속 가능한 세계","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후지속","g":1},{"id":"32_s20","sem":"3-2","name":"사회문제 탐구","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"g":1},{"id":"32_s21","sem":"3-2","name":"과학의 역사와 문화","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3,"g":2},{"id":"32_s22","sem":"3-2","name":"기후변화와 환경생태","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후환경","g":2}];

import { DurableObject } from 'cloudflare:workers';

const PROJECT = 'gimpo-monitoring';
const PRIMARY = 'https://gimpo-monitoring-default-rtdb.firebaseio.com';
const ORIGIN = 'https://gimpohigh.github.io';
const GAS = 'https://script.google.com/macros/s/AKfycbzHSzopZm8oQcPGqSmteuCJKanULIptcelUfvqG9OgGlz4vD019ZgndZnYNwGZy9EcMoA/exec';
const BUCKETS = new Set(['selections', 'slots', 'aiHistory', 'recommendations']);
const bad = (code, message = code) => Object.assign(new Error(message), {code});
const clone = value => value == null ? null : JSON.parse(JSON.stringify(value));
const plain = value => value && typeof value === 'object' && !Array.isArray(value);
const keyOK = value => typeof value === 'string' && /^[A-Za-z0-9_-]{1,128}$/.test(value) && !['__proto__', 'constructor', 'prototype'].includes(value);
let jwksCache, jwksLoading;

function bytes(value) {
  const data = atob(value.replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(data, c => c.charCodeAt(0));
}
export async function verifyToken(token, fetcher = fetch) {
  if (typeof token !== 'string' || token.length > 10000) throw bad('unauthenticated');
  const parts = token.split('.');
  if (parts.length !== 3) throw bad('unauthenticated');
  let head, claims;
  try { head = JSON.parse(new TextDecoder().decode(bytes(parts[0]))); claims = JSON.parse(new TextDecoder().decode(bytes(parts[1]))); }
  catch { throw bad('unauthenticated'); }
  const now = Date.now() / 1000;
  if (head.alg !== 'RS256' || typeof head.kid !== 'string' || claims.aud !== PROJECT ||
      claims.iss !== 'https://securetoken.google.com/' + PROJECT || !keyOK(claims.sub) ||
      !Number.isFinite(claims.exp) || claims.exp <= now || claims.iat > now + 30 ||
      !Number.isFinite(claims.iat) || !Number.isFinite(claims.auth_time) || claims.auth_time > now + 30) throw bad('unauthenticated');
  if (!jwksCache || jwksCache.until < Date.now()) {
    if (!jwksLoading) jwksLoading = (async()=>{
      const response = await fetcher('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com');
      if (!response.ok) throw bad('unavailable');
      const body = await response.json();
      jwksCache = {keys: body.keys, until: Date.now() + Math.min(3600, Number(/max-age=(\d+)/.exec(response.headers.get('cache-control') || '')?.[1]) || 300) * 1000};
    })().finally(()=>{jwksLoading=null;});
    await jwksLoading;
  }
  const jwk = jwksCache.keys?.find(k => k.kid === head.kid && k.kty === 'RSA');
  if (!jwk) throw bad('unauthenticated');
  const publicKey = await crypto.subtle.importKey('jwk', jwk, {name:'RSASSA-PKCS1-v1_5', hash:'SHA-256'}, false, ['verify']);
  if (!await crypto.subtle.verify('RSASSA-PKCS1-v1_5', publicKey, bytes(parts[2]), new TextEncoder().encode(parts[0] + '.' + parts[1]))) throw bad('unauthenticated');
  return {uid:claims.sub, exp:claims.exp, admin:claims.admin === true};
}
async function primaryRead(path, token) {
  const response = await fetch(PRIMARY + '/' + path + '.json?auth=' + encodeURIComponent(token), {signal:AbortSignal.timeout(12000)});
  if (!response.ok) throw bad(response.status === 401 || response.status === 403 ? 'permission-denied' : 'unavailable');
  return response.json();
}
export function parsePath(path, uid) {
  const parts = typeof path === 'string' ? path.split('/') : [];
  if (parts.length < 3 || parts.length > 4 || parts[0] !== 'v2' || !BUCKETS.has(parts[1]) || parts[2] !== uid ||
      parts.slice(2).some(p => !keyOK(p)) || (parts.length === 4 && !['slots', 'aiHistory'].includes(parts[1]))) throw bad('permission-denied');
  return {bucket:parts[1], child:parts[3]};
}
export function resolveTimestamps(value, now = Date.now(), depth = 0) {
  if (depth > 15) throw bad('invalid-data');
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (Array.isArray(value)) return value.map(v => resolveTimestamps(v, now, depth + 1));
  if (!plain(value)) throw bad('invalid-data');
  if (Object.keys(value).length === 1 && value['.sv'] === 'timestamp') return now;
  const out = {};
  for (const [key, item] of Object.entries(value)) {
    if (!keyOK(key)) throw bad('invalid-data');
    out[key] = resolveTimestamps(item, now, depth + 1);
  }
  return out;
}
export function stateValue(input, baseline, courses, metadata = []) {
  if (!plain(input) || Object.keys(input).some(k => !['courses','pinned','sciTrack',...metadata].includes(k)) ||
      !Array.isArray(input.courses) || !Array.isArray(input.pinned) || typeof input.sciTrack !== 'boolean') throw bad('invalid-state');
  const known = new Map(courses.map(c => [c.id,c])), frozen = id => !['3-1','3-2'].includes(known.get(id)?.sem);
  for (const ids of [input.courses,input.pinned]) if (ids.length > 300 || new Set(ids).size !== ids.length || ids.some(id => !known.has(id))) throw bad('invalid-state');
  const fixed = (baseline?.courses || []).filter(id => known.has(id) && frozen(id)).sort();
  if (JSON.stringify(input.courses.filter(frozen).sort()) !== JSON.stringify(fixed) || input.sciTrack !== baseline.sciTrack || input.pinned.some(frozen)) throw bad('locked-semester', '2학년 과목은 변경할 수 없습니다.');
  if (courses.some(c => c.req && !input.courses.includes(c.id))) throw bad('invalid-state');
  return input;
}
export function validateBucket(bucket, value, baseline, courses) {
  if (value == null) { if (bucket === 'selections') throw bad('locked-semester'); return; }
  if (!plain(value)) throw bad('invalid-data');
  if (bucket === 'selections' || bucket === 'recommendations') {
    stateValue(value, baseline, courses, ['revision','updatedAt']);
    if (bucket === 'selections' && (!Number.isSafeInteger(value.revision) || value.revision < 1)) throw bad('invalid-revision');
  } else if (bucket === 'slots') {
    if (Object.keys(value).length > 30) throw bad('resource-exhausted');
    for (const [id,slot] of Object.entries(value)) {
      if (!keyOK(id) || slot.id !== id || typeof slot.name !== 'string' || !slot.name.trim() || slot.name.length > 40) throw bad('invalid-slot');
      stateValue(slot, baseline, courses, ['id','name']);
    }
  } else {
    if (Object.keys(value).length > 100) throw bad('resource-exhausted');
    for (const [id,message] of Object.entries(value)) {
      if (!keyOK(id) || !plain(message) || Object.keys(message).some(k => !['text','role','timestamp'].includes(k)) ||
          !['user','assistant'].includes(message.role) || typeof message.text !== 'string' || message.text.length > 32000 || !Number.isFinite(message.timestamp)) throw bad('invalid-message');
    }
  }
  if (new TextEncoder().encode(JSON.stringify(value)).length > 1000000) throw bad('resource-exhausted');
}
export class StudentStore {
  constructor(db) { this.db = db; }
  async assertActive(uid) {
    if (await this.db.prepare('SELECT uid FROM deleted_students WHERE uid = ?').bind(uid).first()) throw bad('permission-denied');
  }
  async get(uid,bucket,child) {
    await this.assertActive(uid);
    if(bucket === 'aiHistory') {
      const rows = child
        ? (await this.db.prepare('SELECT bucket, body FROM student_data WHERE uid=? AND bucket=?').bind(uid,'aiHistory/'+child).all()).results
        : (await this.db.prepare("SELECT bucket, body FROM student_data WHERE uid=? AND bucket>='aiHistory/' AND bucket<'aiHistory0' ORDER BY bucket DESC LIMIT 100").bind(uid).all()).results;
      return {value:rows.length?Object.fromEntries(rows.map(row=>[row.bucket.slice(10),JSON.parse(row.body)])):null,revision:0};
    }
    const row = await this.db.prepare('SELECT body, revision FROM student_data WHERE uid = ? AND bucket = ?').bind(uid,bucket).first();
    return {value:row ? JSON.parse(row.body) : null, revision:row?.revision || 0};
  }
  async seed(uid,value,courses) {
    await this.assertActive(uid);
    const ids = new Set(Array.isArray(value?.courses) ? value.courses : []);
    courses.filter(c => c.req || value?.sciTrack && c.sciReq).forEach(c => ids.add(c.id));
    const normalized = {courses:courses.filter(c => ids.has(c.id)).map(c => c.id), pinned:[], sciTrack:value?.sciTrack === true, revision:1, updatedAt:Date.now()};
    await this.db.prepare('INSERT OR IGNORE INTO student_data (uid,bucket,body,revision,updated_at) SELECT ?,?,?,1,? WHERE NOT EXISTS (SELECT 1 FROM deleted_students WHERE uid=?)').bind(uid,'selections',JSON.stringify(normalized),Date.now(),uid).run();
    return this.get(uid,'selections');
  }
  async write(uid,bucket,child,input,method,expected,courses) {
    await this.assertActive(uid);
    if(bucket==='aiHistory') {
      if(expected!==undefined)throw bad('unsupported-transaction');
      let updates;
      if(child)updates={[child]:resolveTimestamps(input)};
      else if(method==='patch'&&plain(input))updates=resolveTimestamps(input);
      else if(method==='put'&&input===null){await this.db.prepare("DELETE FROM student_data WHERE uid=? AND bucket>='aiHistory/' AND bucket<'aiHistory0'").bind(uid).run();return{value:null,revision:0,committed:true};}
      else throw bad('invalid-operation');
      validateBucket('aiHistory',Object.fromEntries(Object.entries(updates).filter(([,v])=>v!==null)),null,courses);
      const statements=Object.entries(updates).map(([id,message])=>message===null
        ?this.db.prepare('DELETE FROM student_data WHERE uid=? AND bucket=?').bind(uid,'aiHistory/'+id)
        :this.db.prepare('INSERT INTO student_data (uid,bucket,body,revision,updated_at) SELECT ?,?,?,1,? WHERE NOT EXISTS (SELECT 1 FROM deleted_students WHERE uid=?) ON CONFLICT(uid,bucket) DO UPDATE SET body=excluded.body,revision=student_data.revision+1,updated_at=excluded.updated_at WHERE NOT EXISTS (SELECT 1 FROM deleted_students WHERE uid=?)').bind(uid,'aiHistory/'+id,JSON.stringify(message),Date.now(),uid,uid));
      if(statements.length)await this.db.batch(statements);await this.assertActive(uid);
      return{...await this.get(uid,bucket,child),committed:true};
    }
    for (let attempt=0;attempt<8;attempt++) {
      const current = await this.get(uid,bucket), baseline = bucket === 'selections' ? current.value : (await this.get(uid,'selections')).value;
      if (!baseline) throw bad('not-initialized');
      if (expected !== undefined && expected !== current.revision) return {...current, committed:false};
      let value = clone(current.value);
      const update = resolveTimestamps(input);
      if (method === 'patch') {
        if (child || !plain(update)) throw bad('invalid-data');
        value ||= {};
        for (const [key,item] of Object.entries(update)) { if (!keyOK(key)) throw bad('invalid-data'); if (item === null) delete value[key]; else value[key] = item; }
      } else if (method === 'put') {
        if (child) { value ||= {}; if (update === null) delete value[child]; else value[child] = update; }
        else value = update;
      } else throw bad('invalid-operation');
      validateBucket(bucket,value,baseline,courses);
      if (bucket === 'selections' && value.revision !== current.value.revision+1) throw bad('invalid-revision');
      const body = JSON.stringify(value), now = Date.now();
      const statement = current.revision
        ? this.db.prepare('UPDATE student_data SET body=?, revision=revision+1, updated_at=? WHERE uid=? AND bucket=? AND revision=? AND NOT EXISTS (SELECT 1 FROM deleted_students WHERE uid=?)').bind(body,now,uid,bucket,current.revision,uid)
        : this.db.prepare('INSERT OR IGNORE INTO student_data (body,updated_at,uid,bucket,revision) SELECT ?,?,?,?,1 WHERE NOT EXISTS (SELECT 1 FROM deleted_students WHERE uid=?)').bind(body,now,uid,bucket,uid);
      if ((await statement.run()).meta.changes) return {value,revision:current.revision+1,committed:true};
      await this.assertActive(uid);
    }
    throw bad('conflict');
  }
  async purge(uids) {
    const statements = uids.flatMap(uid => [
      this.db.prepare('INSERT OR IGNORE INTO deleted_students (uid,deleted_at) VALUES (?,?)').bind(uid,Date.now()),
      this.db.prepare('DELETE FROM student_data WHERE uid=?').bind(uid)
    ]);
    await this.db.batch(statements);
  }
}

export class RealtimeHub extends DurableObject {
  constructor(ctx,env) {
    super(ctx,env);
    this.ctx=ctx;this.env=env;this.store=new StudentStore(env.DB);this.sessions=new Map();this.catalogues=new Map();
    for (const ws of ctx.getWebSockets()) {const data=ws.deserializeAttachment();if(data)this.sessions.set(ws,data);}
    ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair('ping','pong'));
  }
  save(ws,data) {this.sessions.set(ws,data);ws.serializeAttachment(data);}
  send(ws,message) {try{ws.send(JSON.stringify(message));}catch{this.sessions.delete(ws);}}
  broadcast(message,predicate=()=>true) {for(const [ws,data] of this.sessions)if(data.uid&&data.exp>Date.now()/1000&&predicate(data))this.send(ws,message);}
  counts() {
    const sites={primus:new Set(),secundus:new Set(),admin:new Set()};
    for (const data of this.sessions.values()) if(data.uid&&data.exp>Date.now()/1000) sites[data.site]?.add(data.device);
    return Object.fromEntries(Object.entries(sites).map(([site,set])=>[site,set.size]));
  }
  announce() {this.broadcast({type:'presence',counts:this.counts()});}
  async fetch(request) {
    if(request.headers.get('Upgrade')?.toLowerCase()!=='websocket')return new Response('WebSocket required',{status:426});
    const pair=new WebSocketPair(),client=pair[0],server=pair[1];this.ctx.acceptWebSocket(server);
    this.save(server,{joinedAt:Date.now()});await this.ctx.storage.setAlarm(Date.now()+15000);
    return new Response(null,{status:101,webSocket:client});
  }
  async courses(token,uid) {
    const cached=this.catalogues.get(uid);if(cached&&cached.until>Date.now())return cached.value;
    const record=await primaryRead('v2/siteContent/course',token);let courses=BASE_COURSES;
    if(record?.dataJSON) {const custom=JSON.parse(record.dataJSON)?.catalogue;if(custom?.courses)courses=custom.courses;}
    if(!Array.isArray(courses)||courses.length>300||courses.some(c=>!keyOK(c.id)||!['1-1','1-2','2-1','2-2','3-1','3-2'].includes(c.sem)))throw bad('invalid-catalogue');
    this.catalogues.set(uid,{value:courses,until:Date.now()+60000});return courses;
  }
  async webSocketMessage(ws,raw) {
    let message;
    try {
      if(typeof raw!=='string'||raw.length>1100000)throw bad('invalid-request');
      message=JSON.parse(raw);if(!plain(message))throw bad('invalid-request');
      let data=this.sessions.get(ws)||{};
      if(message.type==='auth') {
        const auth=await verifyToken(message.token);
        if(data.uid&&data.uid!==auth.uid)throw bad('account-changed');
        if(!['primus','secundus','admin'].includes(message.site)||!/^d_[a-f0-9]{32}$/.test(message.device))throw bad('invalid-request');
        await this.store.assertActive(auth.uid);
        // The primary rules reject disabled/deleted students; no private profile is copied.
        await primaryRead('v2/profiles/'+auth.uid,message.token);
        data={...auth,site:message.site,device:message.device,joinedAt:Date.now(),window:Date.now(),count:0};this.save(ws,data);
        this.send(ws,{id:message.id,ok:true,value:{uid:auth.uid}});this.announce();return;
      }
      if(!data.uid||data.exp<=Date.now()/1000)throw bad('unauthenticated');
      const now=Date.now();if(now-data.window>10000){data.window=now;data.count=0;}if(++data.count>80)throw bad('resource-exhausted');this.save(ws,data);
      if(message.type==='invalidate') {
        const target=message.uid||data.uid;if(!keyOK(target)||target!==data.uid&&!data.admin)throw bad('permission-denied');
        this.broadcast({type:'invalidate',uid:target,global:message.global===true&&data.admin},s=>s.uid===target||s.admin||message.global===true&&data.admin);
        this.send(ws,{id:message.id,ok:true,value:null});return;
      }
      if(message.type==='get'||message.type==='put'||message.type==='patch') {
        const path=parsePath(message.path,data.uid),tokenAuth=await verifyToken(message.token);
        if(tokenAuth.uid!==data.uid)throw bad('account-changed');
        const courses=await this.courses(message.token,data.uid);
        if(!(await this.store.get(data.uid,'selections')).value) await this.store.seed(data.uid,await primaryRead('v2/selections/'+data.uid,message.token),courses);
        let result;
        if(message.type==='get') result=await this.store.get(data.uid,path.bucket,path.child);
        else result=await this.store.write(data.uid,path.bucket,path.child,message.value,message.type,message.expected,courses);
        if(path.child)result.value=result.value?.[path.child]??null;
        this.send(ws,{id:message.id,ok:true,...result});
        if(result.committed)this.broadcast({type:'change',path:'v2/'+path.bucket+'/'+data.uid},s=>s.uid===data.uid);
        return;
      }
      throw bad('invalid-request');
    } catch(error) {this.send(ws,{id:message?.id,ok:false,error:{code:error.code||'unavailable',message:error.code?error.message:'서버 요청을 처리하지 못했습니다.'}});if(['unauthenticated','account-changed'].includes(error.code))ws.close(4001,'Authentication required');}
  }
  webSocketClose(ws) {this.sessions.delete(ws);this.announce();}
  webSocketError(ws) {this.sessions.delete(ws);try{ws.close(1011,'Connection error');}catch{}this.announce();}
  async alarm() {
    const now=Date.now();
    for(const [ws,data] of this.sessions) {
      const last=this.ctx.getWebSocketAutoResponseTimestamp(ws)?.getTime()||data.joinedAt;
      if(!data.uid&&now-data.joinedAt>15000||data.uid&&(data.exp<=now/1000||now-last>65000)) {try{ws.close(4000,'Reconnect');}catch{}this.sessions.delete(ws);}
    }
    this.announce();if(this.sessions.size)await this.ctx.storage.setAlarm(now+15000);
  }
  async evict(uids) {for(const [ws,data] of this.sessions)if(uids.includes(data.uid)){ws.close(4003,'Student deleted');this.sessions.delete(ws);}this.announce();}
}

export default {
  async fetch(request,env) {
    const url=new URL(request.url),origin=request.headers.get('origin');
    const headers={'content-type':'application/json','cache-control':'no-store','x-content-type-options':'nosniff'};
    if(origin===ORIGIN){headers['access-control-allow-origin']=ORIGIN;headers['vary']='Origin';headers['access-control-allow-headers']='Authorization, Content-Type';headers['access-control-allow-methods']='GET, POST, OPTIONS';}
    const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers});
    if(origin&&origin!==ORIGIN)return json({error:'forbidden-origin'},403);
    if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
    try {
      if(url.pathname==='/health'&&request.method==='GET') {await env.DB.prepare('SELECT 1 FROM student_data LIMIT 1').first();return json({ok:true,service:'CourseSecundus',version:'1.19',database:'D1'});}
      const hub=env.REALTIME.get(env.REALTIME.idFromName('school'));
      if(url.pathname==='/live'&&request.method==='GET')return hub.fetch(request);
      if(url.pathname==='/admin/purge'&&request.method==='POST') {
        const raw=await request.text();if(raw.length>20000)throw bad('invalid-request');
        const {ticket}=JSON.parse(raw);if(typeof ticket!=='string'||ticket.length>18000)throw bad('invalid-request');
        // A five-minute, deletion-only HMAC ticket is validated by the existing mail server.
        // Its signing key stays in Apps Script; the Worker never receives it.
        const check=await fetch(GAS,{method:'POST',headers:{'content-type':'text/plain'},body:JSON.stringify({action:'cloudflareDeleteCheck119',ticket})});
        const result=await check.json(),uids=result.result?.uids;
        if(!result.ok||result.result?.allowed!==true||!Array.isArray(uids)||!uids.length||uids.length>20||uids.some(uid=>!keyOK(uid)))throw bad('permission-denied');
        await new StudentStore(env.DB).purge(uids);await hub.evict(uids);return json({ok:true,count:uids.length});
      }
      return json({error:'not-found'},404);
    } catch(error) {return json({ok:false,error:error.code||'unavailable'},error.code==='permission-denied'?403:error.code==='unauthenticated'?401:503);}
  }
};
