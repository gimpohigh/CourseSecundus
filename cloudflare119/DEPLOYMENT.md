# Cloudflare 무료 DB 연결 작업본 1.19

현재 상태: 코드와 로컬 검증 완료. Cloudflare 계정 로그인이 필요해 실제 DB 생성·배포는 아직 하지 않았습니다. 기존 운영 index.html은 변경하지 않았습니다.

- worker.mjs: 배포용 단일 모듈. Firebase ID 토큰 검증, D1 사용자별 저장, 2학년 잠금, 동시 저장 충돌, 삭제 표식, WebSocket 접속자 집계.
- schema.sql: D1 테이블. DB 이름 course-secundus, 바인딩 DB.
- wrangler.jsonc: REALTIME → RealtimeHub, SQLite Durable Object. database_id는 실제 생성된 DB ID로 교체해야 합니다.
- client.js: 기존 Firebase ref 호출과 호환되는 연결 계층. 공통 DB는 기존 권한 규칙을 적용하는 HTTPS REST로, 2학년 선택·AI 대화·추천·구성은 D1으로 저장합니다.
- prepare-integration.py: 작업 폴더의 CoursePrimus, CourseSecundus, reportchat index.html에 연결 계층을 삽입하고 Apps Script 삭제 연동 코드를 생성하는 스크립트입니다. 스크립트는 세 저장소 폴더가 들어 있는 상위 작업 폴더에서 실행하도록 설계했습니다.

검증: 실제 SQLite 문장으로 700명 동시 저장, 2학년 변경 거절, 충돌 보존, AI 기록 600개 보존, 전체 사용자 기록 삭제 및 재생성 차단. JWT 위조·만료·다른 프로젝트 거절. 클라이언트 저장·구독·자식 추가/변경/삭제·로그아웃 격리 검사 통과.

아직 수행하지 않은 검증: 실제 Cloudflare 서버 접속, 각 사이트 350개 기기의 실서버 부하 시험, 배포 후 관리자 삭제 왕복 확인.

배포 순서: 무료 D1 생성 → schema.sql 적용 → Worker 및 REALTIME 바인딩/마이그레이션 → /health 확인 → 실제 URL로 prepare-integration.py 실행 → 기존 Apps Script 배포 URL을 유지하며 새 버전 배포 및 connectCloudflare119 실행 → 세 사이트 연결 반영 → 실서버 검사. 유료 플랜·결제 카드는 설정하지 않습니다.

외부 배포 전의 준비본이므로 DB가 연결되었다고 간주하면 안 됩니다.
