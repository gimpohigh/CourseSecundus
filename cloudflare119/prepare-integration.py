"""Configure current reviewed files; never restore an older page."""
from pathlib import Path
import argparse,json,re,urllib.request
parser=argparse.ArgumentParser()
parser.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[2])
parser.add_argument('--database-id')
parser.add_argument('--endpoint')
parser.add_argument('--course-commit')
parser.add_argument('--secundus-commit')
parser.add_argument('--admin-commit')
args=parser.parse_args()
root=args.root.resolve()
config_path=root/'connection119.json'
config=json.loads(config_path.read_text(encoding='utf-8')) if config_path.exists() else {}
changes={}
def atomic(path,text):
 temporary=path.with_name(path.name+'.configuring119')
 temporary.write_text(text,encoding='utf-8');temporary.replace(path)
if args.database_id:
 if not re.fullmatch(r'[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}',args.database_id):
  raise SystemExit('Use the actual D1 UUID returned by Cloudflare.')
 path=root/'CourseSecundus/cloudflare119/wrangler.jsonc'
 wrangler=json.loads(path.read_text(encoding='utf-8'))
 wrangler['d1_databases'][0]['database_id']=args.database_id
 changes[path]=json.dumps(wrangler,indent=2)+'\n'
if args.endpoint:
 endpoint=args.endpoint.rstrip('/')
 if not re.fullmatch(r'https://[a-z0-9-]+\.[a-z0-9-]+\.workers\.dev',endpoint):
  raise SystemExit('An actual deployed HTTPS workers.dev endpoint is required.')
 request=urllib.request.Request(endpoint+'/health',headers={'Origin':'https://gimpohigh.github.io','Accept':'application/json','User-Agent':'Gimpo-Course-Deployment/1.19'})
 with urllib.request.urlopen(request,timeout=20) as response:health=json.load(response)
 if health.get('ok') is not True or health.get('service')!='CourseSecundus' or health.get('version')!='1.19' or not {'baseline119','statistics119','delete119'}.issubset(health.get('features',[])):
  raise SystemExit('The deployed database is not ready for these pages.')
 for repo in ['CoursePrimus','CourseSecundus','reportchat']:
  path=root/repo/'index.html';source=path.read_text(encoding='utf-8')
  source,count=re.subn(r'window\.COURSE_CLOUDFLARE_URL="[^"]*";',lambda m:'window.COURSE_CLOUDFLARE_URL='+json.dumps(endpoint)+';',source)
  if count!=1:raise SystemExit('Missing or ambiguous endpoint marker: '+repo)
  changes[path]=source
 config['endpoint']=endpoint
for repo,sha in [('CoursePrimus',args.course_commit),('CourseSecundus',args.secundus_commit),('reportchat',args.admin_commit)]:
 if sha:
  if not re.fullmatch(r'[a-f0-9]{40}',sha):raise SystemExit('Use the full published commit SHA for '+repo)
  config.setdefault('sources',{})[repo]=f'https://github.com/gimpohigh/{repo}/blob/{sha}/index.html'
if args.endpoint or any([args.course_commit,args.secundus_commit,args.admin_commit]):
 server=root/'server.full119.gs';text=server.read_text(encoding='utf-8')
 text,n=re.subn(r'const COURSE_CLOUDFLARE_ENDPOINT119=(?:\x27[^\x27]*\x27|"[^"]*");',lambda m:'const COURSE_CLOUDFLARE_ENDPOINT119='+json.dumps(config.get('endpoint',''))+';',text)
 if n!=1:raise SystemExit('Missing server endpoint marker.')
 text,n=re.subn(r'const RELEASE_SOURCES119=\{[^;]*\};',lambda m:'const RELEASE_SOURCES119='+json.dumps(config.get('sources',{}))+';',text)
 if n!=1:raise SystemExit('Missing release source marker.')
 changes[server]=text
changes[config_path]=json.dumps(config,indent=2)+'\n'
for path,text in changes.items():atomic(path,text)
print('Updated '+str(len(changes))+' local configuration files. No deployment or student-data change performed.')
