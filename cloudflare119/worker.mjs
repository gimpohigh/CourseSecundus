const CourseEngine=(function(){"use strict";
 function create(override){
const DATA = {"version":"2026-1-v2","courses":[{"id":"11_01","sem":"1-1","name":"공통국어 1","type":"공통","cat":"국어","grade":"5단계/등급O","req":true,"cred":4},{"id":"11_02","sem":"1-1","name":"공통수학 1","type":"공통","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"11_03","sem":"1-1","name":"공통영어 1","type":"공통","cat":"영어","grade":"5단계/등급O","req":true,"cred":3},{"id":"11_04","sem":"1-1","name":"한국사 1","type":"공통","cat":"한국사","grade":"5단계/등급O","req":true,"cred":3},{"id":"11_05","sem":"1-1","name":"통합사회 1","type":"공통","cat":"사회","grade":"5단계/등급O","req":true,"cred":3},{"id":"11_06","sem":"1-1","name":"통합과학 1","type":"공통","cat":"과학","grade":"5단계/등급O","req":true,"cred":4},{"id":"11_07","sem":"1-1","name":"과학탐구실험 1","type":"공통","cat":"과학","grade":"3단계/등급X","req":true,"cred":1},{"id":"11_08","sem":"1-1","name":"체육 1","type":"공통","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"11_09","sem":"1-1","name":"음악/미술","type":"공통","cat":"예술","grade":"3단계/등급X","req":true,"cred":2},{"id":"11_10","sem":"1-1","name":"정보/한문","type":"공통","cat":"정보","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_01","sem":"1-2","name":"공통국어 2","type":"공통","cat":"국어","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_02","sem":"1-2","name":"공통수학 2","type":"공통","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"12_03","sem":"1-2","name":"공통영어 2","type":"공통","cat":"영어","grade":"5단계/등급O","req":true,"cred":4},{"id":"12_04","sem":"1-2","name":"한국사 2","type":"공통","cat":"한국사","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_05","sem":"1-2","name":"통합사회 2","type":"공통","cat":"사회","grade":"5단계/등급O","req":true,"cred":3},{"id":"12_06","sem":"1-2","name":"통합과학 2","type":"공통","cat":"과학","grade":"5단계/등급O","req":true,"cred":4},{"id":"12_07","sem":"1-2","name":"과학탐구실험 2","type":"공통","cat":"과학","grade":"3단계/등급X","req":true,"cred":1},{"id":"12_08","sem":"1-2","name":"체육 2","type":"공통","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"12_09","sem":"1-2","name":"미술/음악","type":"공통","cat":"예술","grade":"3단계/등급X","req":true,"cred":2},{"id":"12_10","sem":"1-2","name":"한문/정보","type":"공통","cat":"한문","grade":"5단계/등급O","req":true,"cred":3},{"id":"21_01","sem":"2-1","name":"문학","type":"일반","cat":"국어","grade":"5단계/등급O","req":true,"cred":4},{"id":"21_02","sem":"2-1","name":"대수","type":"일반","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"21_03","sem":"2-1","name":"영어 I","type":"일반","cat":"영어","grade":"5단계/등급O","req":true,"cred":4},{"id":"21_04","sem":"2-1","name":"스포츠 생활 1","type":"융합","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"21_s01","sem":"2-1","name":"주제 탐구 독서","type":"진로","cat":"국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s02","sem":"2-1","name":"인공지능 수학","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s03","sem":"2-1","name":"영어 독해와 작문","type":"진로","cat":"영어","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s04","sem":"2-1","name":"세계 시민과 지리","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s05","sem":"2-1","name":"세계사","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s06","sem":"2-1","name":"현대사회와 윤리","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s07","sem":"2-1","name":"정치","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s08","sem":"2-1","name":"경제","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s09","sem":"2-1","name":"물리학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s10","sem":"2-1","name":"화학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s11","sem":"2-1","name":"생명과학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s12","sem":"2-1","name":"지구과학","type":"일반","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciReq":true},{"id":"21_s13","sem":"2-1","name":"기초 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기1"},{"id":"21_s14","sem":"2-1","name":"인공지능 기초","type":"진로","cat":"정보","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s15","sem":"2-1","name":"일본어","type":"일반","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"21_s16","sem":"2-1","name":"중국어","type":"일반","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_01","sem":"2-2","name":"화법과 언어","type":"일반","cat":"국어","grade":"5단계/등급O","req":true,"cred":4},{"id":"22_02","sem":"2-2","name":"미적분 I","type":"일반","cat":"수학","grade":"5단계/등급O","req":true,"cred":4},{"id":"22_03","sem":"2-2","name":"영어 II","type":"일반","cat":"영어","grade":"5단계/등급O","req":true,"cred":4},{"id":"22_04","sem":"2-2","name":"스포츠 생활 2","type":"융합","cat":"체육","grade":"3단계/등급X","req":true,"cred":2},{"id":"22_s01","sem":"2-2","name":"문학과 영상","type":"진로","cat":"국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s02","sem":"2-2","name":"기하","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s03","sem":"2-2","name":"영어 발표와 토론","type":"진로","cat":"영어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s04","sem":"2-2","name":"동아시아 역사 기행","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s05","sem":"2-2","name":"법과 사회","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s06","sem":"2-2","name":"윤리와 사상","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s07","sem":"2-2","name":"한국지리 탐구","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s08","sem":"2-2","name":"금융과 경제생활","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3},{"id":"22_s09","sem":"2-2","name":"역학과 에너지","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s10","sem":"2-2","name":"물질과 에너지","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s11","sem":"2-2","name":"세포와 물질대사","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s12","sem":"2-2","name":"지구시스템 과학","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true},{"id":"22_s13","sem":"2-2","name":"융합과학 탐구","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3},{"id":"22_s14","sem":"2-2","name":"기초 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기1"},{"id":"22_s15","sem":"2-2","name":"데이터 과학","type":"진로","cat":"정보","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s16","sem":"2-2","name":"일본어 회화","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"22_s17","sem":"2-2","name":"중국 문화","type":"융합","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_01","sem":"3-1","name":"독서와 작문","type":"일반","cat":"국어","grade":"5단계/등급O","req":true,"cred":3},{"id":"31_02","sem":"3-1","name":"확률과 통계","type":"일반","cat":"수학","grade":"5단계/등급O","req":true,"cred":3},{"id":"31_03","sem":"3-1","name":"심화 영어 독해와 작문","type":"진로","cat":"영어","grade":"5단계/등급O","req":true,"cred":3},{"id":"31_04","sem":"3-1","name":"스포츠 문화","type":"진로","cat":"체육","grade":"3단계/등급X","req":true,"cred":1},{"id":"31_05","sem":"3-1","name":"고시외 과목","type":"융합","cat":"교양","grade":"P/F","req":true,"cred":1},{"id":"31_s01","sem":"3-1","name":"언어생활 탐구","type":"융합","cat":"국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s02","sem":"3-1","name":"미적분 II","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s03","sem":"3-1","name":"세계 문화와 영어","type":"융합","cat":"영어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s04","sem":"3-1","name":"도시의 미래 탐구","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s05","sem":"3-1","name":"사회와 문화","type":"일반","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s06","sem":"3-1","name":"인문학과 윤리","type":"진로","cat":"사회","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s07","sem":"3-1","name":"역사로 탐구하는 현대 세계","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3},{"id":"31_s08","sem":"3-1","name":"기후변화와 지속 가능한 세계","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후지속"},{"id":"31_s09","sem":"3-1","name":"전자기와 양자","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"전자기"},{"id":"31_s10","sem":"3-1","name":"화학 반응의 세계","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"화학반응"},{"id":"31_s11","sem":"3-1","name":"생물의 유전","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"유전"},{"id":"31_s12","sem":"3-1","name":"행성우주과학","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"행성"},{"id":"31_s13","sem":"3-1","name":"기후변화와 환경생태","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후환경"},{"id":"31_s14","sem":"3-1","name":"음악 연주와 창작","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3},{"id":"31_s15","sem":"3-1","name":"미술 창작","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3},{"id":"31_s16","sem":"3-1","name":"심화 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기2"},{"id":"31_s17","sem":"3-1","name":"정보 과학","type":"진로","cat":"정보","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s18","sem":"3-1","name":"일본 문화","type":"융합","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s19","sem":"3-1","name":"관광 중국어","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3},{"id":"31_s20","sem":"3-1","name":"논리와 사고","type":"진로","cat":"교양","grade":"P/F","req":false,"cred":3,"pair":"논리"},{"id":"32_01","sem":"3-2","name":"독서 토론과 글쓰기","type":"융합","cat":"국어","grade":"5단계/등급O","req":true,"cred":3},{"id":"32_02","sem":"3-2","name":"수학과 문화","type":"융합","cat":"수학","grade":"5단계/등급O","req":true,"cred":3},{"id":"32_03","sem":"3-2","name":"심화 영어","type":"진로","cat":"영어","grade":"5단계/등급O","req":true,"cred":3},{"id":"32_04","sem":"3-2","name":"스포츠 과학","type":"진로","cat":"체육","grade":"3단계/등급X","req":true,"cred":1},{"id":"32_05","sem":"3-2","name":"고시외 과목","type":"융합","cat":"교양","grade":"P/F","req":true,"cred":1},{"id":"32_s01","sem":"3-2","name":"매체 의사소통","type":"융합","cat":"국어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s02","sem":"3-2","name":"경제 수학","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s03","sem":"3-2","name":"전문 수학","type":"진로","cat":"수학","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s04","sem":"3-2","name":"미디어 영어","type":"융합","cat":"영어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s05","sem":"3-2","name":"윤리문제 탐구","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s06","sem":"3-2","name":"여행지리","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s07","sem":"3-2","name":"문화로 보는 한국사","type":"융합","cat":"사회","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s08","sem":"3-2","name":"전자기와 양자","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"전자기","g":0},{"id":"32_s09","sem":"3-2","name":"화학 반응의 세계","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"화학반응","g":0},{"id":"32_s10","sem":"3-2","name":"생물의 유전","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"유전","g":0},{"id":"32_s11","sem":"3-2","name":"행성우주과학","type":"진로","cat":"과학","grade":"5단계/등급O","req":false,"cred":3,"sciAdv":true,"pair":"행성","g":0},{"id":"32_s12","sem":"3-2","name":"음악 감상과 비평","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s13","sem":"3-2","name":"미술 감상과 비평","type":"진로","cat":"예술","grade":"3단계/등급X","req":false,"cred":3,"g":0},{"id":"32_s14","sem":"3-2","name":"심화 체육 전공 실기","type":"진로","cat":"체육","grade":"5단계/등급O","req":false,"cred":3,"pair":"체육실기2","g":0},{"id":"32_s15","sem":"3-2","name":"소프트웨어와 생활","type":"융합","cat":"정보","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s16","sem":"3-2","name":"심화 일본어","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s17","sem":"3-2","name":"중국어 회화","type":"진로","cat":"제2외국어","grade":"5단계/등급O","req":false,"cred":3,"g":0},{"id":"32_s18","sem":"3-2","name":"논리와 사고","type":"진로","cat":"교양","grade":"P/F","req":false,"cred":3,"pair":"논리","g":0},{"id":"32_s19","sem":"3-2","name":"기후변화와 지속 가능한 세계","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후지속","g":1},{"id":"32_s20","sem":"3-2","name":"사회문제 탐구","type":"융합","cat":"사회","grade":"5단계/등급X","req":false,"cred":3,"g":1},{"id":"32_s21","sem":"3-2","name":"과학의 역사와 문화","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3,"g":2},{"id":"32_s22","sem":"3-2","name":"기후변화와 환경생태","type":"융합","cat":"과학","grade":"5단계/등급X","req":false,"cred":3,"pair":"기후환경","g":2}],"semesters":[{"key":"1-1","title":"1학년 1학기","limit":0},{"key":"1-2","title":"1학년 2학기","limit":0},{"key":"2-1","title":"2학년 1학기","limit":5},{"key":"2-2","title":"2학년 2학기","limit":5},{"key":"3-1","title":"3학년 1학기","limit":6},{"key":"3-2","title":"3학년 2학기","limit":6}]};
  const effective=override||DATA;
  const courses = effective.courses.map(c => Object.freeze(c));
  const semesters = effective.semesters.map(s => Object.freeze(s));
  const byId = new Map(courses.map(c => [c.id, c]));
  const required = courses.filter(c => c.req).map(c => c.id);
  const baseScience = courses.filter(c => c.sciReq).map(c => c.id);
  const groupDefs = [
    {key:'2-1',sem:'2-1',limit:5}, {key:'2-2',sem:'2-2',limit:5},
    {key:'3-1',sem:'3-1',limit:6}, {key:'3-2:0',sem:'3-2',g:0,limit:4},
    {key:'3-2:1',sem:'3-2',g:1,limit:1}, {key:'3-2:2',sem:'3-2',g:2,limit:1}
  ];
  const groupOf = c => c.sem === '3-2' ? c.sem+':'+c.g : c.sem;
  const groupMap = new Map(groupDefs.map(g=>[g.key,g]));
  const unique = value => Array.isArray(value) ? [...new Set(value.filter(x=>typeof x==='string'))] : [];
  function normalize(input = {}) {
    input = input && typeof input === 'object' ? input : {};
    const chosen = new Set(unique(input.courses).filter(id=>byId.has(id)));
    required.forEach(id=>chosen.add(id));
    const sciTrack = input.sciTrack === true;
    if(sciTrack) baseScience.forEach(id=>chosen.add(id));
    return {courses:courses.filter(c=>chosen.has(c.id)).map(c=>c.id),
      // Recommendation pins are preferences. They do not select or lock practice courses.
      pinned:unique(input.pinned).filter(id=>byId.has(id)&&!byId.get(id).req),sciTrack};
  }
  function analyze(input = {}) {
    input = input && typeof input === 'object' ? input : {};
    const errors=[],warnings=[], ids=unique(input.courses), chosen=new Set(ids);
    const totals={total:0,kys:0,msi:0,kor:0,math:0,eng:0,his:0,soc:0,sci:0,pe:0,art:0,etc:0,info:0};
    const counts=Object.fromEntries(semesters.map(s=>[s.key,0])), groups={0:0,1:0,2:0};
    const categoryKeys={'국어':'kor','수학':'math','영어':'eng','한국사':'his','사회':'soc','과학':'sci','체육':'pe','예술':'art'};
    let advanced=0,mathElectives=0; const pairs=new Map();
    if(input.courses !== undefined && !Array.isArray(input.courses)) errors.push('저장된 과목 목록 형식이 올바르지 않습니다.');
    for(const id of ids) {
      const c=byId.get(id);
      if(!c){errors.push('현재 교육과정에 없는 과목 ID가 있습니다: '+id);continue;}
      totals.total+=c.cred;
      totals[categoryKeys[c.cat]||'etc']+=c.cred;
      if(c.cat==='정보')totals.info+=c.cred;
      if(!c.req){counts[c.sem]++;if(c.sem==='3-2')groups[c.g]++;}
      if(c.sciAdv)advanced++;
      if(!c.req&&c.cat==='수학')mathElectives++;
      if(c.pair){if(pairs.has(c.pair))errors.push(c.name+' 과목은 다른 학기와 중복 선택할 수 없습니다.');pairs.set(c.pair,c.id);}
    }
    totals.kys=totals.kor+totals.math+totals.eng;
    totals.msi=totals.math+totals.sci+totals.info;
    if(required.some(id=>!chosen.has(id)))errors.push('학교 지정 필수 과목이 누락되었습니다.');
    for(const g of groupDefs){const count=g.sem==='3-2'?groups[g.g]:counts[g.sem];
      if(count!==g.limit)errors.push((semesters.find(s=>s.key===g.sem).title)+(g.sem==='3-2'?' '+(g.g===0?'택4':'택1-'+g.g):'')+'는 '+g.limit+'과목을 선택해야 합니다. (현재 '+count+'과목)');}
    if(totals.total!==174)errors.push('총 교과 학점은 174학점이어야 합니다. (현재 '+totals.total+'학점)');
    if(totals.kys>81)errors.push('국·영·수 합계가 81학점을 초과합니다. (현재 '+totals.kys+'학점)');
    const minima={kor:8,math:8,eng:8,his:6,soc:8,sci:10,pe:10,art:6,etc:15};
    const labels={kor:'국어',math:'수학',eng:'영어',his:'한국사',soc:'사회',sci:'과학',pe:'체육',art:'예술',etc:'정보·제2외국어·한문·교양'};
    for(const [key,min]of Object.entries(minima))if(totals[key]<min)errors.push(labels[key]+' 최소 '+min+'학점을 충족하지 못했습니다. (현재 '+totals[key]+'학점)');
    if(input.sciTrack===true){
      if(baseScience.some(id=>!chosen.has(id)))errors.push('과학중점 과정은 물리학·화학·생명과학·지구과학이 모두 필요합니다.');
      if(advanced<6)errors.push('과학중점 심화 지정 과목은 6과목 이상이어야 합니다. (현재 '+advanced+'과목)');
      if(totals.msi<79)errors.push('과학중점 수학·과학·정보 합계는 79학점 이상이어야 합니다. (현재 '+totals.msi+'학점)');
      if(mathElectives<4)warnings.push('과학중점 과정은 수학 선택과목 4과목 이상을 권장합니다.');
    }
    const links=[['21_s09',['22_s09'],'역학과 에너지'],['21_s10',['22_s10'],'물질과 에너지'],['21_s11',['22_s11'],'세포와 물질대사'],['21_s12',['22_s12'],'지구시스템 과학'],['21_s09',['31_s09','32_s08'],'전자기와 양자'],['21_s10',['31_s10','32_s09'],'화학 반응의 세계'],['21_s11',['31_s11','32_s10'],'생물의 유전'],['21_s12',['31_s12','32_s11'],'행성우주과학']];
    for(const [base,advancedIds,name]of links)if(!chosen.has(base)&&advancedIds.some(id=>chosen.has(id)))warnings.push(name+((name.charCodeAt(name.length-1)-0xAC00)%28===0?'는 ':'은 ')+byId.get(base).name+'과 연계되므로 '+byId.get(base).name+'을 듣는 것을 권장드립니다.');
    return {valid:errors.length===0,errors,warnings,totals,counts,groups,advanced,mathElectives};
  }
  function partialError(ids) {
    const counts=new Map(),pairs=new Set();let kys=0;
    for(const id of ids){const c=byId.get(id);if(!c)continue;
      if(['국어','수학','영어'].includes(c.cat))kys+=c.cred;
      if(c.req)continue;const key=groupOf(c),count=(counts.get(key)||0)+1;counts.set(key,count);
      if(groupMap.has(key)&&count>groupMap.get(key).limit)return '해당 학기 또는 선택 그룹의 과목 수 한도를 초과합니다.';
      if(c.pair){if(pairs.has(c.pair))return c.name+' 과목이 다른 학기와 중복됩니다.';pairs.add(c.pair);}
    }
    if(kys>81)return '국·영·수 합계 81학점을 초과합니다.';
    return '';
  }
  function canToggle(input,id) {
    const state=normalize(input),c=byId.get(id);
    if(!c)return {ok:false,reason:'존재하지 않는 과목입니다.',state};
    if(c.req)return {ok:false,reason:'지정된 과목은 취소할 수 없습니다.',state};
    if(state.sciTrack&&c.sciReq)return {ok:false,reason:'과학 중점 과정 필수 과목입니다.',state};
    const selected=new Set(state.courses);
    if(selected.has(id))selected.delete(id);
    else{selected.add(id);const reason=partialError(selected);if(reason)return {ok:false,reason,state};}
    return {ok:true,reason:'',state:normalize({...state,courses:[...selected]})};
  }
  function toggleTrack(input) {
    const state=normalize(input);
    if(state.sciTrack)return {ok:true,reason:'',state:normalize({...state,sciTrack:false,courses:state.courses.filter(id=>!baseScience.includes(id))})};
    const selected=new Set([...state.courses,...baseScience]);
    const nonSci=courses.filter(c=>c.sem==='2-1'&&!c.req&&!c.sciReq&&selected.has(c.id));
    nonSci.slice(1).forEach(c=>selected.delete(c.id));
    return {ok:true,reason:nonSci.length>1?'과학 중점 필수 지정으로 인해 기존 선택 과목이 취소되었습니다.':'',state:normalize({...state,courses:[...selected],sciTrack:true})};
  }
  // Specific majors precede general words. In particular, 천문학 must not match 문학.
  const careerRules=[
    {test:/천문|천체|우주|항공우주|astronom|astrophys/i,primary:['지구과학','물리학','지구시스템 과학','행성우주과학'],names:['기하','미적분 II','역학과 에너지','전자기와 양자','인공지능 수학','데이터 과학','정보 과학']},
    {test:/컴공|컴퓨터|소프트|개발|로봇|전기|전자|정보보안|\bit\b|\bai\b/i,primary:['물리학','인공지능 수학','인공지능 기초'],names:['정보 과학','데이터 과학','미적분 II','소프트웨어와 생활','기하','역학과 에너지','전자기와 양자']},
    {test:/의학|의대|의약|간호|생명|약대|보건|의사|약학/,primary:['생명과학','화학'],names:['세포와 물질대사','생물의 유전','미적분 II','화학 반응의 세계','물질과 에너지']},
    {test:/경영|경제|회계|금융/,primary:['경제','경제 수학','금융과 경제생활'],names:['사회문제 탐구','확률과 통계','데이터 과학','미적분 II']},
    {test:/심리|상담/,primary:['생명과학','현대사회와 윤리'],names:['사회문제 탐구','논리와 사고','확률과 통계']},
    {test:/언론|미디어|신문|방송|영상/,primary:['매체 의사소통','문학과 영상'],names:['미디어 영어','사회문제 탐구','정치','현대사회와 윤리']},
    {test:/사범|교육|교사/,primary:['현대사회와 윤리'],names:['사회문제 탐구','윤리문제 탐구','논리와 사고','주제 탐구 독서']},
    {test:/예체능|미술|미대|디자인/,primary:['미술 창작','미술 감상과 비평'],names:['문학과 영상','매체 의사소통']},
    {test:/음악|음대/,primary:['음악 연주와 창작','음악 감상과 비평'],names:[]},
    {test:/체대|체육|스포츠/,primary:['기초 체육 전공 실기','심화 체육 전공 실기'],names:[]},
    {test:/환경|기후|지구|지리/,primary:['지구과학','지구시스템 과학'],names:['행성우주과학','기후변화와 지속 가능한 세계','기후변화와 환경생태','세계 시민과 지리']},
    {test:/물리|기계|항공/,primary:['물리학','역학과 에너지'],names:['전자기와 양자','기하','미적분 II','인공지능 수학','데이터 과학']},
    {test:/화학|화공|신소재/,primary:['화학','물질과 에너지','화학 반응의 세계'],names:['물리학','미적분 II','생명과학']},
    {test:/수학|통계/,primary:['인공지능 수학','기하','미적분 II'],names:['전문 수학','경제 수학','데이터 과학','물리학']},
    {test:/공학|공대/,primary:['물리학','기하'],names:['미적분 II','역학과 에너지','전자기와 양자','인공지능 수학','데이터 과학']},
    {test:/인문|문과|어문|문학|국어|역사|철학/,primary:['주제 탐구 독서','세계사','현대사회와 윤리'],names:['언어생활 탐구','인문학과 윤리','논리와 사고','역사로 탐구하는 현대 세계','문화로 보는 한국사']}
  ];
  function recommend(input,keyword='') {
    const state=normalize(input),fixed=new Set([...required,...state.pinned,...(state.sciTrack?baseScience:[])]);
    const conflict=partialError(fixed);if(conflict)return {ok:false,state,reason:'고정 과목을 유지하면 '+conflict};
    const text=String(keyword).slice(0,500),matched=careerRules.find(r=>r.test.test(text));
    const primary=new Set(matched?.primary||[]),targets=new Set([...(matched?.primary||[]),...(matched?.names||[])]);
    const pairNames=[...new Set(courses.filter(c=>c.pair).map(c=>c.pair))];
    const pairBit=c=>c.pair?1<<pairNames.indexOf(c.pair):0;
    const fixedPairs=new Set([...fixed].map(id=>byId.get(id).pair).filter(Boolean));
    // The existing school's validation criteria are unchanged.
    const metric=c=>[['국어','수학','영어'].includes(c.cat)?c.cred:0,c.cat==='사회'?c.cred:0,c.cat==='예술'?c.cred:0,['정보','제2외국어','한문','교양'].includes(c.cat)?c.cred:0,['수학','과학','정보'].includes(c.cat)?c.cred:0,c.sciAdv?1:0];
    const add=(a,b)=>a.map((v,i)=>v+b[i]);
    const base=required.reduce((sum,id)=>add(sum,metric(byId.get(id))),Array(6).fill(0));
    const minima=[0,8,6,15,state.sciTrack?79:0,state.sciTrack?6:0];
    const score=c=>(primary.has(c.name)?5000:targets.has(c.name)?500:0)+(state.sciTrack&&c.sciAdv?20:0)+(state.sciTrack&&c.cat==='수학'?10:0);
    const prepared=new Map(courses.map(c=>[c.id,{c,bit:pairBit(c),m:metric(c),score:score(c)-(targets.has(c.name)?0:metric(c)[0])}]));
    const tasks=groupDefs.map(g=>{
      const sem=g.sem,limit=g.limit;
      const all=courses.filter(c=>!c.req&&groupOf(c)===g.key),mandatory=all.filter(c=>fixed.has(c.id));
      const optional=all.filter(c=>!fixed.has(c.id)&&(!c.pair||!fixedPairs.has(c.pair))).map(c=>prepared.get(c.id)),need=limit-mandatory.length,options=new Map();
      let initialMask=0,initialMetrics=Array(6).fill(0),initialValue=0;
      for(const c of mandatory){const p=prepared.get(c.id);initialMask|=p.bit;initialMetrics=add(initialMetrics,p.m);initialValue+=p.score;}
      function emit(chosen,mask,m,value){
        // No future semester can distinguish candidates with the same constraints.
        // Keep the better career choice before searching combinations of semesters.
        const key=mask+'|'+m.join(','),previous=options.get(key);
        if(!previous||value>previous.score)options.set(key,{ids:[...mandatory.map(c=>c.id),...chosen],mask,m,score:value});
      }
      function combine(start,left,chosen,mask,m,value){if(left===0){emit(chosen,mask,m,value);return;}
        for(let i=start;i<=optional.length-left;i++){const p=optional[i];if(mask&p.bit)continue;const next=add(m,p.m);
          if(base[0]+next[0]>81)continue;
          chosen.push(p.c.id);combine(i+1,left-1,chosen,mask|p.bit,next,value+p.score);chosen.pop();
        }}
      if(need>=0)combine(0,need,[],initialMask,initialMetrics,initialValue);
      return {key:sem,options:[...options.values()].sort((a,b)=>b.score-a.score||a.ids.join().localeCompare(b.ids.join()))};
    });
    if(tasks.some(t=>!t.options.length))return {ok:false,state,reason:'고정 과목과 학기별 선택 개수를 동시에 만족할 수 없습니다.'};
    tasks.sort((a,b)=>a.options.length-b.options.length);
    const remaining=[];remaining[tasks.length]={max:Array(6).fill(0),min:Array(6).fill(0),score:0};
    for(let i=tasks.length-1;i>=0;i--){const task=tasks[i],next=remaining[i+1];const max=Array(6).fill(-Infinity),min=Array(6).fill(Infinity);
      for(const option of task.options)for(let k=0;k<6;k++){max[k]=Math.max(max[k],option.m[k]);min[k]=Math.min(min[k],option.m[k]);}
      remaining[i]={max:add(max,next.max),min:add(min,next.min),score:task.options[0].score+next.score};
    }
    let nodes=0,answer=null,bestScore=-Infinity,lastImprovement=0,limited=false;const MAX_NODES=350000,IMPROVEMENT_BUDGET=10000,visited=new Map();
    function search(index,mask,total,ids,value){
      // Bound both the initial feasibility search and extra work after a valid result.
      // A bounded result is never described as a globally optimal configuration.
      if(++nodes>MAX_NODES||answer&&nodes-lastImprovement>IMPROVEMENT_BUDGET){limited=true;return;}
      if(value+remaining[index].score<=bestScore||total[0]+remaining[index].min[0]>81)return;
      for(let k=1;k<6;k++)if(total[k]+remaining[index].max[k]<minima[k])return;
      if(index===tasks.length){const candidate={courses:[...required,...ids],pinned:[...state.pinned],sciTrack:state.sciTrack};
        if(analyze(candidate).valid){answer=candidate;bestScore=value;lastImprovement=nodes;}return;}
      const key=index+':'+mask+':'+total[0]+':'+total.slice(1).map((v,i)=>Math.min(v,minima[i+1])).join(',');
      if((visited.get(key)??-Infinity)>=value)return;visited.set(key,value);
      for(const option of tasks[index].options){if(mask&option.mask)continue;
        if(value+option.score+remaining[index+1].score<=bestScore)break;
        search(index+1,mask|option.mask,add(total,option.m),[...ids,...option.ids],value+option.score);
        if(limited)return;
      }
    }
    search(0,0,base,[],0);
    if(!answer)return {ok:false,state,reason:limited?'정해진 탐색 범위에서 조건에 맞는 구성을 찾지 못했습니다. 고정 과목을 줄여 다시 시도해주세요.':'고정 과목을 유지하면서 모든 이수 조건을 만족하는 구성이 없습니다.'};
    const missingPrimary=[...primary].filter(name=>!answer.courses.some(id=>byId.get(id).name===name));
    return {ok:true,state:normalize(answer),reason:targets.size?'이수 조건을 확인한 진로 맞춤 구성을 만들었습니다.':'이수 조건을 확인한 기본 구성을 만들었습니다. 진로 키워드를 입력하면 선호 과목을 반영합니다.',missingPrimary};
  }
  return Object.freeze({version:effective.version,courses:Object.freeze(courses),semesters:Object.freeze(semesters),normalize,analyze,canToggle,toggleTrack,recommend});
 }
 return Object.freeze({...create(),create});
})();
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
  const response = await fetch(PRIMARY + '/' + path + '.json' + (token?'?auth='+encodeURIComponent(token):''), {signal:AbortSignal.timeout(12000)});
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
      stateValue(slot, slot, courses, ['id','name']);
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
      const writeResult=bucket==='selections' ? (await this.db.batch([statement,this.db.prepare('INSERT INTO primary_students120(uid,secondary_edited) SELECT ?,1 WHERE changes()>0 ON CONFLICT(uid) DO UPDATE SET secondary_edited=1').bind(uid)]))[0] : await statement.run();
      if (writeResult.meta.changes) return {value,revision:current.revision+1,committed:true};
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
  async importPrimaryStatistics(rows) {
    let changed=false;
    for(const row of rows){
      await this.serial119(row.uid,async()=>{
        if(await this.env.DB.prepare('SELECT 1 FROM deleted_students WHERE uid=?').bind(row.uid).first())return;
        const ids=row.courses===null?null:['__students__',...row.courses];
        const result=await this.store.updateStatisticsIds(row.uid,'primus',ids,row.revision);
        changed=changed||result.changed;
      });
    }
    if(changed)await this.refreshStatistics119('primus');
  }
  async mirror120(rows){
    const courses=await this.courses('',null);
    for(const row of rows)await this.serial119(row.uid,async()=>{
      const {uid,profile,account,slots,selection}=row;if(await this.env.DB.prepare('SELECT 1 FROM deleted_students WHERE uid=?').bind(uid).first())return;
      const revision=Number(selection?.revision)||0,old=await this.env.DB.prepare('SELECT revision FROM primary_statistics_revisions WHERE uid=?').bind(uid).first();
      const stale=old&&old.revision>revision;
      if(!stale){const merged=await this.store.syncPrimary(uid,selection,courses);await this.store.updateStatistics(uid,'primus',selection,courses);await this.store.updateStatistics(uid,'secundus',merged.value,courses);}
      await this.env.DB.prepare('INSERT INTO primary_students120(uid,profile,account,slots,primary_revision,synced_at) VALUES(?,?,?,?,?,?) ON CONFLICT(uid) DO UPDATE SET profile=excluded.profile,account=excluded.account,slots=excluded.slots,primary_revision=MAX(primary_revision,excluded.primary_revision),synced_at=excluded.synced_at WHERE excluded.synced_at>=synced_at').bind(uid,JSON.stringify(profile||null),JSON.stringify(account||null),JSON.stringify(slots||{}),revision,row.capturedAt).run();
    });
    await this.refreshStatistics119('primus');
  }
  async fetch(request) {
    if(request.headers.get('Upgrade')?.toLowerCase()!=='websocket')return new Response('WebSocket required',{status:426});
    const pair=new WebSocketPair(),client=pair[0],server=pair[1];this.ctx.acceptWebSocket(server);
    this.save(server,{joinedAt:Date.now()});await this.ctx.storage.setAlarm(Date.now()+15000);
    return new Response(null,{status:101,webSocket:client});
  }
  async courses(token,uid) {
    const cached=this.catalogues.get('public');if(cached&&cached.until>Date.now())return cached.value;
    const record=await primaryRead('v2/siteContent/course',token);let courses=BASE_COURSES;
    if(record?.dataJSON) {const custom=JSON.parse(record.dataJSON)?.catalogue;if(custom&&typeof custom==='object')courses=BASE_COURSES.map(c=>({...c,...custom[c.id]}));}
    if(!Array.isArray(courses)||courses.length>300||courses.some(c=>!keyOK(c.id)||!['1-1','1-2','2-1','2-2','3-1','3-2'].includes(c.sem)))throw bad('invalid-catalogue');
    this.catalogues.set('public',{value:courses,until:Date.now()+30000});return courses;
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
        const [,reportAdmin,studioAdmin]=await Promise.all([primaryRead('v2/profiles/'+auth.uid,message.token),primaryRead('private/reportAdmins/'+auth.uid,message.token),primaryRead('private/studioAdmins/'+auth.uid,message.token)]);auth.admin=auth.admin||reportAdmin===true||studioAdmin===true;
        data={...auth,site:message.site,device:message.device,joinedAt:Date.now(),window:Date.now(),count:0};this.save(ws,data);
        this.send(ws,{id:message.id,ok:true,value:{uid:auth.uid}});this.announce();return;
      }
      if(!data.uid||data.exp<=Date.now()/1000)throw bad('unauthenticated');
      const now=Date.now();if(now-data.window>10000){data.window=now;data.count=0;}if(++data.count>80)throw bad('resource-exhausted');this.save(ws,data);
      if(message.type==='invalidate') {
        const target=message.uid||data.uid;if(!keyOK(target)||target!==data.uid&&!data.admin)throw bad('permission-denied');this.baselines119?.delete(target);if(message.global===true&&data.admin)this.catalogues.clear();
        this.broadcast({type:'invalidate',uid:target,global:message.global===true&&data.admin},s=>s.uid===target||s.admin||message.global===true&&data.admin);
        this.send(ws,{id:message.id,ok:true,value:null});return;
      }
      if(message.type==='statisticsGet'||message.type==='statisticsPublish'||message.type==='syncBaseline') {
        const verified=await verifyToken(message.token);if(verified.uid!==data.uid)throw bad('account-changed');
        if(message.type==='statisticsGet'){this.send(ws,{id:message.id,ok:true,value:await this.store.statistics(data.site)});return;}
        await this.serial119(data.uid,async()=>{
          const courses=await this.courses(message.token,data.uid),primary=await this.primary119(data.uid,message.token,true);
          let selection=primary;
          const merged=await this.store.syncPrimary(data.uid,primary,courses);
          if(data.site==='primus'){const secondary=await this.store.updateStatistics(data.uid,'secundus',merged.value,courses);if(secondary.changed)await this.refreshStatistics119('secundus');this.broadcast({type:'change',path:'v2/selections/'+data.uid},s=>s.uid===data.uid&&s.site==='secundus');}
          if(data.site==='secundus'){selection=merged.value;this.broadcast({type:'change',path:'v2/selections/'+data.uid},s=>s.uid===data.uid&&s.site==='secundus');}
          const result=await this.store.updateStatistics(data.uid,data.site,selection,courses);this.send(ws,{id:message.id,ok:true,value:result});if(result.changed)await this.refreshStatistics119(data.site);
        });return;
      }
      if(message.type==='get'||message.type==='put'||message.type==='patch') {
        const path=parsePath(message.path,data.uid),tokenAuth=await verifyToken(message.token);
        if(tokenAuth.uid!==data.uid)throw bad('account-changed');
        const courses=await this.courses(message.token,data.uid);
        const result=await this.serial119(data.uid,async()=>{
          const primary=await this.primary119(data.uid,message.token);
          await this.store.syncPrimary(data.uid,primary,courses);
          const result=message.type==='get'?await this.store.get(data.uid,path.bucket,path.child):await this.store.write(data.uid,path.bucket,path.child,message.value,message.type,message.expected,courses);
          if(result.committed&&path.bucket==='selections'){const counts=await this.store.updateStatistics(data.uid,'secundus',result.value,courses);await this.refreshStatistics119('secundus');}
          return result;
        });
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
  async evict(uids) {for(const [ws,data] of this.sessions)if(uids.includes(data.uid)){ws.close(4003,'Student deleted');this.sessions.delete(ws);}this.announce();await this.refreshStatistics119('primus');await this.refreshStatistics119('secundus');}
}

export default {
  async scheduled(event,env){await cleanMedia120(env);}
  ,async fetch(request,env) {
    const url=new URL(request.url),origin=request.headers.get('origin');
    const headers={'content-type':'application/json','cache-control':'no-store','x-content-type-options':'nosniff'};
    if(origin===ORIGIN){headers['access-control-allow-origin']=ORIGIN;headers['vary']='Origin';headers['access-control-allow-headers']='Authorization, Content-Type';headers['access-control-allow-methods']='GET, POST, OPTIONS';}
    const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers});
    if(origin&&origin!==ORIGIN)return json({error:'forbidden-origin'},403);
    if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
    try {
      if(url.pathname==='/health'&&request.method==='GET') {await Promise.all(['student_data','deleted_students','statistics_members','statistics_counts','primary_students120','media_files120'].map(table=>env.DB.prepare('SELECT 1 FROM '+table+' LIMIT 1').first()));if(!env.REALTIME)throw bad('realtime-not-configured');return json({ok:true,service:'CourseSecundus',version:'1.20',database:'D1',features:['baseline119','statistics119','delete119','mirror120','media120']});}
      const hub=env.REALTIME.get(env.REALTIME.idFromName('school'));
      if(url.pathname.startsWith('/media/'))return await mediaHttp120(request,env,url,json,headers);
      if(url.pathname.startsWith('/service/')&&request.method==='POST'){
        const scope=url.pathname.slice(9);if(!['mirror','claim','mail','remove'].includes(scope))throw bad('invalid-request');
        const payload=await signed120(request,scope);
        if(scope==='mirror'){if(!Array.isArray(payload)||payload.length>10||payload.some(r=>!keyOK(r.uid)||!Number.isSafeInteger(r.capturedAt)))throw bad('invalid-request');for(const row of payload)await hub.mirror120([row]);return json({ok:true,count:payload.length});}
        return await mediaService120(env,scope,payload,json);
      }
      if(url.pathname==='/live'&&request.method==='GET')return hub.fetch(request);
      if(url.pathname==='/admin/selection-rates'&&request.method==='POST'){
        const length=Number(request.headers.get('content-length'));if(length>90000)throw bad('invalid-request');
        const raw=await request.text();if(raw.length>90000)throw bad('invalid-request');
        const {payload,expires,signature}=JSON.parse(raw);
        if(typeof payload!=='string'||!Number.isSafeInteger(expires)||expires<Date.now()||expires>Date.now()+300000||!/^[a-f0-9]{64}$/.test(signature||''))throw bad('permission-denied');
        const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(payload))),n=>n.toString(16).padStart(2,'0')).join('');
        const check=await fetch(GAS,{method:'POST',headers:{'content-type':'text/plain'},body:JSON.stringify({action:'checkRateBatch119',hash,expires,signature})});
        const verified=await check.json();if(verified.ok!==true||verified.result?.allowed!==true)throw bad('permission-denied');
        const rows=JSON.parse(payload);
        if(!Array.isArray(rows)||rows.length>25||rows.some(row=>!plain(row)||!keyOK(row.uid)||!Number.isSafeInteger(row.revision)||row.revision<0||(row.courses!==null&&(!Array.isArray(row.courses)||row.courses.length>300||row.courses.some(id=>!keyOK(id))||new Set(row.courses).size!==row.courses.length))))throw bad('invalid-request');
        await hub.importPrimaryStatistics(rows);return json({ok:true,count:rows.length});
      }
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

// Merge only immutable terms from the verified primary record; retain grade-three work.
StudentStore.prototype.syncPrimary = async function(uid,primary,courses){
 let current=await this.get(uid,'selections');if(!current.value)return this.seed(uid,primary,courses);
 const frozen=c=>!['3-1','3-2'].includes(c.sem),old=current.value,primaryIds=new Set(primary?.courses||[]),ownIds=new Set(old.courses||[]),track=primary?.sciTrack===true;
 let flags=await this.db.prepare('SELECT secondary_edited FROM primary_students120 WHERE uid=?').bind(uid).first();
 if(!flags){
  const customized=current.revision>1 && (old.pinned?.length>0 || Number(old.updatedAt)>Number(primary?.updatedAt||0) && courses.some(c=>!frozen(c)&&!c.req&&ownIds.has(c.id)!==primaryIds.has(c.id)));
  await this.db.prepare('INSERT OR IGNORE INTO primary_students120(uid,secondary_edited) VALUES(?,?)').bind(uid,customized?1:0).run();flags={secondary_edited:customized};
 }
 const next={...old,sciTrack:track,courses:courses.filter(c=>c.req||track&&c.sciReq||(frozen(c)||!flags.secondary_edited?primaryIds:ownIds).has(c.id)).map(c=>c.id),pinned:(old.pinned||[]).filter(id=>courses.some(c=>c.id===id&&!frozen(c)))};
 if(JSON.stringify({...old,revision:0,updatedAt:0})===JSON.stringify({...next,revision:0,updatedAt:0}))return current;
 next.revision=old.revision+1;next.updatedAt=Date.now();
 const result=await this.db.prepare('UPDATE student_data SET body=?,revision=revision+1,updated_at=? WHERE uid=? AND bucket=? AND revision=? AND NOT EXISTS (SELECT 1 FROM deleted_students WHERE uid=?)').bind(JSON.stringify(next),next.updatedAt,uid,'selections',current.revision,uid).run();
 if(!result.meta.changes)throw bad('conflict');return this.get(uid,'selections');
};
StudentStore.prototype.updateStatistics = async function(uid,site,selection,courses){
 const engine=CourseEngine.create({version:CourseEngine.version,semesters:CourseEngine.semesters,courses}),valid=engine.analyze(selection||{}).valid;
 const ids=valid?['__students__',...engine.normalize(selection).courses]:null;
 return this.updateStatisticsIds(uid,site,ids,Number(selection?.revision)||0);
};
StudentStore.prototype.updateStatisticsIds = async function(uid,site,ids,revision){
 await this.assertActive(uid);if(!['primus','secundus'].includes(site))throw bad('invalid-site');
 const valid=ids!==null;
 const last=site==='primus'?await this.db.prepare('SELECT revision FROM primary_statistics_revisions WHERE uid=?').bind(uid).first():null;
 if(last&&last.revision>revision)return{eligible:valid,changed:false};
 const body=JSON.stringify(ids||[]),previous=await this.db.prepare('SELECT body FROM statistics_members WHERE uid=? AND site=?').bind(uid,site).first();
 const remember=site==='primus'&&revision>(last?.revision||0)?this.db.prepare('INSERT INTO primary_statistics_revisions(uid,revision) SELECT ?,? WHERE NOT EXISTS(SELECT 1 FROM deleted_students WHERE uid=?) ON CONFLICT(uid) DO UPDATE SET revision=MAX(revision,excluded.revision)').bind(uid,revision,uid):null;
 if(previous?.body===body||!previous&&!ids){if(remember)await remember.run();return{eligible:valid,changed:false};}
 const statements=[this.db.prepare("INSERT INTO statistics_counts(site,course_id,total) SELECT site,j.value,-1 FROM statistics_members,json_each(body) AS j WHERE uid=? AND site=? AND j.value NOT IN (SELECT value FROM json_each(?)) ON CONFLICT(site,course_id) DO UPDATE SET total=statistics_counts.total+excluded.total").bind(uid,site,body)];
 if(ids){
  statements.push(this.db.prepare("INSERT INTO statistics_counts(site,course_id,total) SELECT ?,j.value,1 FROM json_each(?) AS j WHERE j.value NOT IN (SELECT old.value FROM statistics_members,json_each(body) AS old WHERE uid=? AND site=?) AND NOT EXISTS(SELECT 1 FROM deleted_students WHERE uid=?) ON CONFLICT(site,course_id) DO UPDATE SET total=statistics_counts.total+excluded.total").bind(site,body,uid,site,uid));
  statements.push(this.db.prepare('INSERT INTO statistics_members(uid,site,body) SELECT ?,?,? WHERE NOT EXISTS(SELECT 1 FROM deleted_students WHERE uid=?) ON CONFLICT(uid,site) DO UPDATE SET body=excluded.body').bind(uid,site,body,uid));
 }else statements.push(this.db.prepare('DELETE FROM statistics_members WHERE uid=? AND site=?').bind(uid,site));
 if(remember)statements.push(remember);await this.db.batch(statements);return{eligible:valid,changed:true};
};
StudentStore.prototype.statistics = async function(site){
 const rows=site==='secundus'?(await this.db.prepare("SELECT j.value AS course_id,COUNT(*) AS total FROM statistics_members m LEFT JOIN primary_students120 p ON p.uid=m.uid,json_each(m.body) j WHERE (m.site='primus' AND COALESCE(p.secondary_edited,0)=0) OR (m.site='secundus' AND p.secondary_edited=1) GROUP BY j.value").all()).results:(await this.db.prepare('SELECT course_id,total FROM statistics_counts WHERE site=? AND total>0').bind(site).all()).results;
 return{totalUsers:Number(rows.find(r=>r.course_id==='__students__')?.total)||0,courses:Object.fromEntries(rows.filter(r=>r.course_id!=='__students__').map(r=>[r.course_id,Number(r.total)]))};
};
const purgeBefore119=StudentStore.prototype.purge;
StudentStore.prototype.purge=async function(uids){
 // Repeated deletion is harmless, including a retry after the data purge succeeds.
 await purgeBefore119.call(this,uids);
 const placeholders=uids.map(()=>'?').join(',');
 if(uids.length)await this.db.batch([
  this.db.prepare(`INSERT INTO statistics_counts(site,course_id,total) SELECT site,j.value,-COUNT(*) FROM statistics_members,json_each(body) AS j WHERE uid IN (${placeholders}) GROUP BY site,j.value ON CONFLICT(site,course_id) DO UPDATE SET total=statistics_counts.total+excluded.total`).bind(...uids),
  this.db.prepare(`DELETE FROM statistics_members WHERE uid IN (${placeholders})`).bind(...uids),
  this.db.prepare("UPDATE media_files120 SET state='deleting' WHERE room IN ("+placeholders+") OR actor IN ("+placeholders+")").bind(...uids,...uids),
  this.db.prepare("DELETE FROM media_ready120 WHERE room IN ("+placeholders+") OR viewer IN ("+placeholders+")").bind(...uids,...uids),
  this.db.prepare('DELETE FROM primary_students120 WHERE uid IN ('+placeholders+')').bind(...uids),
  this.db.prepare(`DELETE FROM primary_statistics_revisions WHERE uid IN (${placeholders})`).bind(...uids)
 ]);
};
RealtimeHub.prototype.serial119=function(uid,fn){
 this.jobs119||=new Map();const prior=this.jobs119.get(uid)||Promise.resolve(),task=prior.catch(()=>{}).then(fn);this.jobs119.set(uid,task);task.then(()=>{if(this.jobs119.get(uid)===task)this.jobs119.delete(uid);},()=>{if(this.jobs119.get(uid)===task)this.jobs119.delete(uid);});return task;
};
RealtimeHub.prototype.refreshStatistics119=function(site){
 this.statisticsPending119||=new Map();if(this.statisticsPending119.has(site))return this.statisticsPending119.get(site);
 const task=new Promise(resolve=>setTimeout(resolve,50)).then(async()=>{this.statisticsPending119.delete(site);const value=await this.store.statistics(site);this.broadcast({type:'statistics',site,value},s=>s.site===site);if(site==='primus')await this.refreshStatistics119('secundus');});this.statisticsPending119.set(site,task);return task;
};
RealtimeHub.prototype.primary119=async function(uid,token,force=false){
 this.baselines119||=new Map();const previous=this.baselines119.get(uid);if(!force&&previous&&previous.until>Date.now())return previous.value;
 const value=await primaryRead('v2/selections/'+uid,token);this.baselines119.set(uid,{value,until:Date.now()+2000});return value;
};

// Binary uploads use one private SQLite-backed Durable Object per file.
const CHUNK120=768*1024, MAX_FILE120=128*1024*1024;
const mediaId120=id=>typeof id==='string'&&/^[a-f0-9-]{36}$/.test(id);
const mediaTypes120=new Set(['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm','video/quicktime','application/octet-stream']);
function matchesMedia120(mime,b){
 const ascii=(i,n)=>String.fromCharCode(...b.slice(i,i+n));
 if(mime==='image/jpeg')return b[0]===255&&b[1]===216;
 if(mime==='image/png')return b[0]===137&&ascii(1,3)==='PNG';
 if(mime==='image/gif')return /^GIF8[79]a$/.test(ascii(0,6));
 if(mime==='image/webp')return ascii(0,4)==='RIFF'&&ascii(8,4)==='WEBP';
 if(mime==='video/webm')return [26,69,223,163].every((v,i)=>b[i]===v);
 if(mime==='video/mp4'||mime==='video/quicktime')return ['ftyp','moov','mdat','wide','free','skip'].includes(ascii(4,4));
 return mime==='application/octet-stream';
}
export class Attachment120 extends DurableObject {
 constructor(ctx,env){super(ctx,env);this.ctx=ctx;this.env=env;this.sql=ctx.storage.sql;}
 async init(id,size,mime,grant){
  const meta=await this.ctx.storage.get('meta');if(meta)return meta.grant===grant&&meta.size===size;
  this.sql.exec('CREATE TABLE IF NOT EXISTS pieces (n INTEGER PRIMARY KEY, data BLOB NOT NULL)');
  await this.ctx.storage.put('meta',{id,size,mime,grant});await this.ctx.storage.setAlarm(Date.now()+86400000);return true;
 }
 async fetch(req){
  const meta=await this.ctx.storage.get('meta');if(!meta||meta.finished||req.headers.get('authorization')!=='Upload '+meta.grant)return new Response(null,{status:403});
  const url=new URL(req.url),n=Number(url.searchParams.get('n')),expected=Math.min(CHUNK120,meta.size-n*CHUNK120);
  if(!Number.isInteger(n)||n<0||expected<=0||Number(req.headers.get('content-length'))>expected)return new Response(null,{status:400});
  const buf=await req.arrayBuffer();if(buf.byteLength!==expected||n===0&&!matchesMedia120(meta.mime,new Uint8Array(buf)))return new Response(null,{status:400});
  this.sql.exec('INSERT OR REPLACE INTO pieces(n,data) VALUES(?,?)',n,buf);return new Response(null,{status:204});
 }
 async finish(grant){const m=await this.ctx.storage.get('meta');if(!m||m.grant!==grant)return false;if(m.finished)return true;
  if(this.sql.exec('SELECT COUNT(*) AS n FROM pieces').one().n!==Math.ceil(m.size/CHUNK120))return false;
  await this.ctx.storage.put('meta',{...m,finished:true});return true;
 }
 async read(){
  const meta=await this.ctx.storage.get('meta');if(!meta?.finished)return new Response(null,{status:404});
  let n=0;const sql=this.sql,count=Math.ceil(meta.size/CHUNK120);
  const stream=new ReadableStream({pull(controller){if(n===count){controller.close();return;}const row=sql.exec('SELECT data FROM pieces WHERE n=?',n++).one();controller.enqueue(new Uint8Array(row.data));}});
  return new Response(stream,{headers:{'content-type':meta.mime,'content-length':String(meta.size),'cache-control':'private, no-store','x-content-type-options':'nosniff'}});
 }
 async destroy(){await this.ctx.storage.deleteAlarm();await this.ctx.storage.deleteAll();}
 async alarm(){const m=await this.ctx.storage.get('meta');if(!m)return;
  const row=await this.env.DB.prepare('SELECT state FROM media_files120 WHERE id=?').bind(m.id).first();
  if(row?.state==='attached')return;
  await this.env.DB.prepare("DELETE FROM media_files120 WHERE id=? AND state!='attached'").bind(m.id).run();
  if(await this.env.DB.prepare("SELECT id FROM media_files120 WHERE id=? AND state='attached'").bind(m.id).first())return;
  await this.destroy();
 }
}
const mediaStub120=(env,id)=>env.MEDIA.get(env.MEDIA.idFromName(id));
async function mediaScope120(request,env,room){
 const token=(request.headers.get('authorization')||'').replace(/^Bearer /,''),user=await verifyToken(token);
 if(!keyOK(room))throw bad('invalid-request');
 if(user.uid!==room&&!user.admin){const roles=await Promise.all(['reportAdmins','studioAdmins'].map(k=>primaryRead('private/'+k+'/'+user.uid,token)));if(!roles.includes(true))throw bad('permission-denied');}
 const gone=await env.DB.prepare('SELECT 1 FROM deleted_students WHERE uid IN (?,?) LIMIT 1').bind(room,user.uid).first();if(gone)throw bad('permission-denied');
 return user.uid;
}
async function mediaHttp120(request,env,url,json,headers){
 const action=url.pathname.slice('/media/'.length),room=url.searchParams.get('room'),id=url.searchParams.get('id'),post=request.method==='POST';
 if(action==='part'&&post&&mediaId120(id)){const r=await mediaStub120(env,id).fetch(request);return new Response(null,{status:r.status,headers});}
 if(action==='finish'&&post&&mediaId120(id)){
  const grant=(request.headers.get('authorization')||'').replace(/^Upload /,'');
  if(!await mediaStub120(env,id).finish(grant))throw bad('invalid-file');
  await env.DB.prepare("UPDATE media_files120 SET state='ready' WHERE id=? AND state='uploading'").bind(id).run();return json({ok:true});
 }
 const actor=await mediaScope120(request,env,room);
 if(action==='start'&&post){
  const p=await request.json();if(!mediaId120(p.id)||!mediaId120(p.grant)||!keyOK(p.messageId)||!mediaTypes120.has(p.mime)||typeof p.name!=='string'||!p.name.trim()||p.name.length>120||/[\u0000-\u001f]/.test(p.name)||!Number.isSafeInteger(p.size)||p.size<1||p.size>MAX_FILE120)throw bad('invalid-file');
  const db=env.DB,now=Date.now();const insert=await db.prepare("INSERT OR IGNORE INTO media_files120(id,room,actor,message_id,name,mime,size,state,created_at) SELECT ?,?,?,?,?,?,?,'uploading',? WHERE (SELECT COALESCE(SUM(size),0) FROM media_files120 WHERE actor=? AND state!='attached' AND created_at>?) + ? <= 1073741824").bind(p.id,room,actor,p.messageId,p.name,p.mime,p.size,now,actor,now-86400000,p.size).run();
  const row=await db.prepare('SELECT * FROM media_files120 WHERE id=?').bind(p.id).first();if(!row)throw bad('resource-exhausted');
  if(row.room!==room||row.actor!==actor||row.message_id!==p.messageId||row.size!==p.size||row.mime!==p.mime)throw bad('permission-denied');
  if(!await mediaStub120(env,p.id).init(p.id,p.size,p.mime,p.grant))throw bad('permission-denied');
  return json({ok:true,chunk:CHUNK120,finished:row.state!=='uploading'});
 }
 if(action==='receipt'&&keyOK(id)){
  if(post)await env.DB.prepare('INSERT OR IGNORE INTO media_ready120(viewer,room,media_id) VALUES (?,?,?)').bind(actor,room,id).run();
  else if(request.method!=='GET')throw bad('invalid-request');
  const ready=post||!!await env.DB.prepare('SELECT 1 FROM media_ready120 WHERE viewer=? AND room=? AND media_id=?').bind(actor,room,id).first();return json({ok:true,ready});
 }
 if(action==='read'&&!post&&mediaId120(id)){
  const file=await env.DB.prepare("SELECT * FROM media_files120 WHERE id=? AND room=? AND state='attached'").bind(id,room).first();if(!file)throw bad('permission-denied');
  const result=await mediaStub120(env,id).read();return new Response(result.body,{status:result.status,headers:{...headers,'content-type':file.mime,'content-length':String(file.size),'content-disposition':'attachment','cache-control':'private, no-store'}});
 }
 throw bad('invalid-request');
}
async function signed120(request,action){
 const raw=await request.text();if(raw.length>1800000)throw bad('invalid-request');
 const {payload,expires,signature}=JSON.parse(raw);if(typeof payload!=='string'||!Number.isSafeInteger(expires)||expires<Date.now()||expires>Date.now()+300000||!/^[a-f0-9]{64}$/.test(signature||''))throw bad('permission-denied');
 const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(payload))),n=>n.toString(16).padStart(2,'0')).join('');
 const r=await fetch(GAS,{method:'POST',headers:{'content-type':'text/plain'},body:JSON.stringify({action:'checkService120',scope:action,hash,expires,signature})});
 const v=await r.json();if(!v.ok||v.result?.allowed!==true)throw bad('permission-denied');return JSON.parse(payload);
}
async function mediaService120(env,scope,p,json){
 if(!keyOK(p.room))throw bad('invalid-request');
 const db=env.DB;
 if(scope==='claim'){
  if(!keyOK(p.actor)||!keyOK(p.messageId)||!Array.isArray(p.ids)||p.ids.length<1||p.ids.length>30||new Set(p.ids).size!==p.ids.length||p.ids.some(x=>!mediaId120(x)))throw bad('invalid-file');
  const placeholders=p.ids.map(()=>'?').join(',');
  const rows=(await db.prepare('SELECT * FROM media_files120 WHERE room=? AND actor=? AND message_id=? AND id IN ('+placeholders+')').bind(p.room,p.actor,p.messageId,...p.ids).all()).results;
  if(rows.length!==p.ids.length||rows.some(r=>!['ready','attached'].includes(r.state))||rows.reduce((n,r)=>n+r.size,0)>512*1048576)throw bad('invalid-file');
  await db.prepare("UPDATE media_files120 SET state='attached' WHERE room=? AND actor=? AND message_id=? AND id IN ("+placeholders+')').bind(p.room,p.actor,p.messageId,...p.ids).run();
  return json({ok:true,images:p.ids.map(id=>{const f=rows.find(r=>r.id===id);return{mediaId:id,room:p.room,name:f.name,mime:f.mime,size:f.size};})});
 }
 if(scope==='mail'){
  if(!mediaId120(p.id)||!keyOK(p.messageId))throw bad('invalid-request');
  const row=await db.prepare("SELECT size FROM media_files120 WHERE room=? AND id=? AND message_id=? AND state='attached'").bind(p.room,p.id,p.messageId).first();if(!row||row.size>8*1048576)throw bad('permission-denied');
  return mediaStub120(env,p.id).read();
 }
 if(scope==='remove'){
  if(!Array.isArray(p.ids)||p.ids.length>30||p.ids.some(id=>!mediaId120(id)))throw bad('invalid-request');
  for(const id of p.ids){const result=await db.prepare("UPDATE media_files120 SET state='deleting' WHERE room=? AND id=?").bind(p.room,id).run();if(result.meta.changes)await eraseMedia120(env,p.room,id);}
  return json({ok:true});
 }
 throw bad('invalid-request');
}
async function eraseMedia120(env,room,id){
 await mediaStub120(env,id).destroy();
 await env.DB.batch([env.DB.prepare('DELETE FROM media_ready120 WHERE room=? AND media_id=?').bind(room,id),env.DB.prepare("DELETE FROM media_files120 WHERE id=? AND room=? AND state='deleting'").bind(id,room)]);
}

async function cleanMedia120(env){const rows=(await env.DB.prepare("SELECT id,room FROM media_files120 WHERE state='deleting' LIMIT 20").all()).results;for(const row of rows)await eraseMedia120(env,row.room,row.id);}
