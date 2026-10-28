// @ts-nocheck
import React,{useState,useMemo,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom/client';



const P={image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',clip:'<path d="m21.4 11.1-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',bookmark:'<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>',building:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',book:'<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',msg:'<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',star:'<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M5 12h14M12 5v14"/>',file:'<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6"/>',cap:'<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'};
const I=({n,c='w-5 h-5'})=><svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html:P[n]}}/>;

let PEOPLE=[];

const DET=[
{n:'Phillips Exeter Academy',t:'School',co:'United States',city:'Exeter, NH',r:2,st:1100,ac:16,tu:'$68k',f:1781,str:['Humanities','Math','Harkness method'],ins:'Famed for the Harkness discussion method and a 5:1 student-teacher ratio.'},
{n:'Stuyvesant High School',t:'School',co:'United States',city:'New York',r:4,st:3300,ac:3,tu:'Free (public)',f:1904,str:['STEM','Computer Science','Math'],ins:'Selective specialized public school with one of the strongest STEM programs in the US.'},
{n:'Eton College',t:'School',co:'United Kingdom',city:'Windsor',r:6,st:1350,ac:20,tu:'£53k',f:1440,str:['Humanities','Debate','Sport'],ins:'Historic boarding school with a vast alumni network and superb facilities.'},
{n:'Raffles Institution',t:'School',co:'Singapore',city:'Singapore',r:9,st:1800,ac:12,tu:'S$300/yr',f:1823,str:['Science','Leadership','Arts'],ins:'Leading Singapore school producing top scholars across disciplines.'}];

const QS=`1|MIT|United States|Cambridge|massachusetts-institute-technology-mit
2|Imperial College London|United Kingdom|London|imperial-college-london
2|Stanford University|United States|Stanford|stanford-university
4|University of Oxford|United Kingdom|Oxford|university-oxford
5|Harvard University|United States|Cambridge|harvard-university
6|University of Cambridge|United Kingdom|Cambridge|university-cambridge
7|Caltech|United States|Pasadena|california-institute-technology-caltech
8|ETH Zurich|Switzerland|Zürich|eth-zurich
8|UCL|United Kingdom|London|ucl
10|National University of Singapore (NUS)|Singapore|Singapore|national-university-singapore-nus
11|The University of Hong Kong|Hong Kong SAR China|Hong Kong|university-hong-kong
12|Nanyang Technological University (NTU)|Singapore|Singapore|nanyang-technological-university-singapore-ntu-singapore
13|Peking University|China|Beijing|peking-university
14|Tsinghua University|China|Beijing|tsinghua-university
15|University of Pennsylvania|United States|Philadelphia|university-pennsylvania
16|Cornell University|United States|Ithaca|cornell-university
16|Yale University|United States|New Haven|yale-university
18|The Chinese University of Hong Kong (CUHK)|Hong Kong SAR China|Hong Kong|chinese-university-hong-kong-cuhk
19|UNSW Sydney|Australia|Sydney|university-new-south-wales-unsw-sydney
20|Johns Hopkins University|United States|Baltimore|johns-hopkins-university
20|UC Berkeley|United States|Berkeley|university-california-berkeley-ucb
22|EPFL|Switzerland|Lausanne|epfl-ecole-polytechnique-federale-de-lausanne
22|The University of Melbourne|Australia|Melbourne|university-melbourne
24|University of Chicago|United States|Chicago|university-chicago
25|Technical University of Munich|Germany|Munich|technical-university-munich
26|Fudan University|China|Shanghai|fudan-university
27|Princeton University|United States|Princeton|princeton-university
28|The University of Sydney|Australia|Sydney|university-sydney
29|Australian National University (ANU)|Australia|Canberra|australian-national-university-anu
30|McGill University|Canada|Montreal|mcgill-university
31|Monash University|Australia|Melbourne|monash-university
32|University of Toronto|Canada|Toronto|university-toronto
33|HKUST|Hong Kong SAR China|Hong Kong|hong-kong-university-science-technology
34|Université PSL|France|Paris|universite-psl
35|The University of Edinburgh|United Kingdom|Edinburgh|university-edinburgh
36|Shanghai Jiao Tong University|China|Shanghai|shanghai-jiao-tong-university
37|King’s College London|United Kingdom|London|kings-college-london
38|Seoul National University|South Korea|Seoul|seoul-national-university
39|The University of Tokyo|Japan|Tokyo|university-tokyo
40|The University of Manchester|United Kingdom|Manchester|university-manchester
40|The University of Queensland|Australia|Brisbane|university-queensland
42|Yonsei University|South Korea|Seoul|yonsei-university
43|Columbia University|United States|New York City|columbia-university
43|Institut Polytechnique de Paris|France|Paris|institut-polytechnique-de-paris
45|Northwestern University|United States|Evanston|northwestern-university
45|University of British Columbia|Canada|Vancouver|university-british-columbia
47|Zhejiang University|China|Hangzhou|zhejiang-university
48|Delft University of Technology|Netherlands|Delft|delft-university-technology
49|UCLA|United States|Los Angeles|university-california-los-angeles-ucla
50|The Hong Kong Polytechnic University|Hong Kong SAR China|Hong Kong|hong-kong-polytechnic-university
51|University of Michigan-Ann Arbor|United States|Ann Arbor|university-michigan-ann-arbor
52|City University of Hong Kong|Hong Kong SAR China|Hong Kong|city-university-hong-kong-cityuhk
52|Korea University|South Korea|Seoul|korea-university
54|National Taiwan University (NTU)|Taiwan|Taipei|national-taiwan-university-ntu
55|Carnegie Mellon University|United States|Pittsburgh|carnegie-mellon-university
56|Universiti Malaya (UM)|Malaysia|Kuala Lumpur|universiti-malaya-um
57|University of Bristol|United Kingdom|Bristol|university-bristol
58|New York University (NYU)|United States|New York City|new-york-university-nyu
59|KU Leuven|Belgium|Leuven|ku-leuven
60|University of Amsterdam|Netherlands|Amsterdam|university-amsterdam
61|Ludwig-Maximilians-Universität München|Germany|Munich|ludwig-maximilians-universitat-munchen
62|London School of Economics (LSE)|United Kingdom|London|london-school-economics-political-science-lse
63|KFUPM|Saudi Arabia|Dhahran|kfupm
64|Kyoto University|Japan|Kyoto|kyoto-university
65|KAIST|South Korea|Daejeon|kaist
66|Brown University|United States|Providence|brown-university
67|The University of Auckland|New Zealand|Auckland|university-auckland
68|University of Warwick|United Kingdom|Coventry|university-warwick
68|University of Birmingham|United Kingdom|Birmingham|university-birmingham
70|Duke University|United States|Durham|duke-university
71|Lund University|Sweden|Lund|lund-university
72|University of Texas at Austin|United States|Austin|university-texas-austin
73|Sorbonne University|France|Paris|sorbonne-university
74|University of Illinois Urbana-Champaign|United States|Champaign|university-illinois-urbana-champaign
75|Trinity College Dublin|Ireland|Dublin|trinity-college-dublin-university-dublin
76|Université Paris-Saclay|France|Paris|universite-paris-saclay
77|The University of Western Australia|Australia|Perth|university-western-australia
77|University of Leeds|United Kingdom|Leeds|university-leeds
79|Adelaide University|Australia|Adelaide|adelaide-university
80|University of Glasgow|United Kingdom|Glasgow|university-glasgow
81|UC San Diego|United States|San Diego|university-california-san-diego-ucsd
82|KTH Royal Institute of Technology|Sweden|Stockholm|kth-royal-institute-technology
82|The University of Sheffield|United Kingdom|Sheffield|university-sheffield
84|Universidad de Buenos Aires (UBA)|Argentina|Buenos Aires|universidad-de-buenos-aires-uba
85|Durham University|United Kingdom|Durham|durham-university
86|Universität Heidelberg|Germany|Heidelberg|universitat-heidelberg
87|Politecnico di Milano|Italy|Milan|politecnico-di-milano
87|University of Technology Sydney (UTS)|Australia|Sydney|university-technology-sydney-uts
87|Uppsala University|Sweden|Uppsala|uppsala-university
90|Nanjing University|China|Nanjing|nanjing-university
90|University of Copenhagen|Denmark|Copenhagen|university-copenhagen
92|Pennsylvania State University|United States|University Park|pennsylvania-state-university
92|University of Washington|United States|Seattle|university-washington
94|Boston University|United States|Boston|boston-university
95|The University of Osaka|Japan|Osaka|university-osaka
96|University of Alberta|Canada|Edmonton|university-alberta
97|Institute of Science Tokyo|Japan|Tokyo|institute-science-tokyo
97|University of Nottingham|United Kingdom|Nottingham|university-nottingham
98|Freie Universität Berlin|Germany|Berlin|freie-universitaet-berlin
98|University of Zurich|Switzerland|Zürich|university-zurich
100|Purdue University|United States|West Lafayette|purdue-university
100|University College Dublin|Ireland|Dublin|university-college-dublin`;
const UNI=QS.split('\n').map(l=>{const [r,n,co,city,slug]=l.split('|');return {n,t:'University',co,city,r:+r,slug,st:null,intl:null,fac:null,ac:null,tu:null,f:null,str:[],ins:`Ranked #${r} in the QS World University Rankings 2027. Open the QS profile for admissions, fees and student data.`}});
Object.assign(UNI[0],{st:11694,intl:3808,fac:3112,ins:'Ranked #1 in the QS World University Rankings 2027. Student and staff figures are from the QS profile.'});
const INST=[...UNI,...DET.filter(d=>d.t==='School')];


const grad=h=>`linear-gradient(135deg,hsl(${h} 80% 60%),hsl(${(h+50)%360} 80% 50%))`;
const ini=n=>n.split(' ').map(w=>w[0]).slice(0,2).join('');
const Av=({p,s='w-12 h-12',x=''})=>p.photo?<img src={p.photo} alt="" className={`${s} ${x} rounded-2xl object-cover shrink-0 shadow-lg`}/>:<div className={`${s} ${x} rounded-2xl grid place-items-center text-white font-bold shrink-0 shadow-lg`} style={{background:grad(p.hue)}}>{ini(p.name)}</div>;
const Chip=({children,c=''})=><span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 ${c}`}>{children}</span>;
const card='rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300';
const inp='w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500/60 transition';
const btn='inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-95';
const prim=`${btn} text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:shadow-lg hover:shadow-violet-500/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none`;
const ghost=`${btn} border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10`;

const Modal=({onClose,children})=><div className="fixed inset-0 z-50 grid place-items-center p-4 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}><div className="pop relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-white/10 p-6 shadow-2xl" onClick={e=>e.stopPropagation()}><button onClick={onClose} className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"><I n="x" c="w-4 h-4"/></button>{children}</div></div>;
const Head=({t,s})=><div className="mb-6 up"><h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t}</h2><p className="text-slate-500 dark:text-slate-400 mt-1">{s}</p></div>;
const Tabs=({v,set,opts})=><div className="inline-flex p-1 rounded-2xl bg-slate-200/70 dark:bg-white/10 max-w-full overflow-x-auto">{opts.map(([k,l,ic])=><button key={k} onClick={()=>set(k)} className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${v===k?'bg-white dark:bg-slate-800 shadow text-violet-600 dark:text-violet-300':'text-slate-500 dark:text-slate-400'}`}>{ic&&<I n={ic} c="w-4 h-4"/>}{l}</button>)}</div>;

function Discover({myId,conn,connect,openChat,invite}){
  const MAJORS=[...new Set(PEOPLE.map(p=>p.major))];
  const [mode,setMode]=useState('partner'),[q,setQ]=useState(''),[maxAge,setMaxAge]=useState(30),[major,setMajor]=useState(''),[type,setType]=useState('All'),[sel,setSel]=useState(null);
  const list=useMemo(()=>PEOPLE.filter(p=>p.id!==myId&&(p.mode===mode||p.mode==='both')&&p.age<=maxAge&&(!major||p.major===major)&&(type==='All'||p.type===type)&&(`${p.name} ${p.inst} ${p.major} ${p.skills.join(' ')} ${p.goal}`).toLowerCase().includes(q.toLowerCase())),[mode,q,maxAge,major,type,PEOPLE]);
  return <div>
    <Head t={`Find your ${mode==='partner'?'study partner':'co-founder'}`} s="Match with students who share your goals, skills and ambition."/>
    <div className="flex flex-wrap gap-3 mb-4 up"><Tabs v={mode} set={setMode} opts={[['partner','Study Partners','book'],['cofounder','Startup Co-founders','rocket']]}/><Tabs v={type} set={setType} opts={[['All','All'],['University','Universities'],['School','Schools']]}/></div>
    <div className={`${card} hover:translate-y-0 hover:shadow-sm p-4 mb-6 grid gap-3 md:grid-cols-4 up`}>
      <div className="relative md:col-span-2"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder="Search name, skills, interests, institution…" value={q} onChange={e=>setQ(e.target.value)}/></div>
      <select className={inp} value={major} onChange={e=>setMajor(e.target.value)}><option value="">All majors</option>{MAJORS.map(m=><option key={m}>{m}</option>)}</select>
      <label className="text-xs text-slate-500 flex flex-col gap-1">Max age: <b className="text-slate-900 dark:text-white">{maxAge}</b><input type="range" min="16" max="30" value={maxAge} onChange={e=>setMaxAge(+e.target.value)} className="accent-violet-600"/></label>
    </div>
    {!list.length&&(PEOPLE.length?<div className="text-center py-16 text-slate-500">No matches yet. Try loosening your filters.</div>:<div className={`${card} hover:translate-y-0 p-10 text-center up`}><div className="w-14 h-14 mx-auto rounded-2xl grid place-items-center text-white bg-gradient-to-br from-violet-600 to-fuchsia-600"><I n="users" c="w-7 h-7"/></div><h3 className="text-xl font-extrabold mt-4">No students here yet</h3><p className="text-slate-500 mt-1 max-w-md mx-auto">Studymatch is empty. Students appear here once they join through your invite link and create a profile.</p><button className={prim+' mt-5'} onClick={invite}><I n="plus" c="w-4 h-4"/>Get invite link</button></div>)}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((p,i)=><div key={p.id} className={`${card} p-5 up cursor-pointer`} style={{animationDelay:`${i*50}ms`}} onClick={()=>setSel(p)}>
      <div className="flex gap-3 items-center"><Av p={p}/><div className="min-w-0"><h3 className="font-bold truncate">{p.name}</h3><p className="text-xs text-slate-500 truncate">{p.major} · {p.age} yrs</p></div></div>
      <p className="text-sm mt-4 text-slate-600 dark:text-slate-300 line-clamp-2">{p.goal}</p>
      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-3"><I n={p.type==='School'?'book':'cap'} c="w-3.5 h-3.5"/>{p.inst}</div>
      <div className="flex flex-wrap gap-1.5 mt-3">{p.skills.map(s=><Chip key={s}>{s}</Chip>)}</div>
      <button onClick={e=>{e.stopPropagation();conn.has(p.id)?openChat(p.id):connect(p.id)}} className={`${conn.has(p.id)?ghost:prim} w-full mt-4`}>{conn.has(p.id)?<><I n="msg" c="w-4 h-4"/>Message</>:<><I n="plus" c="w-4 h-4"/>Connect</>}</button>
    </div>)}</div>
    {sel&&<Modal onClose={()=>setSel(null)}><div className="flex gap-4 items-center"><Av p={sel} s="w-16 h-16"/><div><h3 className="text-xl font-extrabold">{sel.name}</h3><p className="text-sm text-slate-500">{sel.major} · {sel.age} yrs</p></div></div>
      <div className="mt-5 space-y-4 text-sm"><div><b>Institution</b><p className="text-slate-500">{sel.inst} ({sel.type})</p></div><div><b>Goal</b><p className="text-slate-500">{sel.goal}</p></div><div><b>Looking for</b><p className="text-slate-500">{sel.mode==='both'?'Study partner & co-founder':sel.mode==='partner'?'Study partner':'Startup co-founder'}</p></div><div className="flex flex-wrap gap-1.5">{sel.skills.map(s=><Chip key={s}>{s}</Chip>)}</div></div>
      <button className={`${conn.has(sel.id)?ghost:prim} w-full mt-6`} onClick={()=>{conn.has(sel.id)?openChat(sel.id):connect(sel.id);setSel(null)}}>{conn.has(sel.id)?'Open chat':'Start chat'}</button></Modal>}
  </div>;
}

function Institutions(){
  const [q,setQ]=useState(''),[t,setT]=useState('All'),[sort,setSort]=useState('r'),[co,setCo]=useState(''),[sel,setSel]=useState(null);
  const list=INST.filter(i=>(t==='All'||i.t===t)&&(!co||i.co===co)&&(`${i.n} ${i.co} ${i.city} ${i.str.join(' ')}`).toLowerCase().includes(q.toLowerCase())).sort((a,b)=>sort==='r'?((a.t===b.t?0:a.t==='University'?-1:1)||a.r-b.r):sort==='s'?(b.st||0)-(a.st||0):a.n.localeCompare(b.n));
  const Stat=({l,v})=><div className="rounded-2xl bg-slate-100 dark:bg-white/5 p-3"><p className="text-xs text-slate-500">{l}</p><p className="font-bold">{v}</p></div>;
  return <div>
    <Head t="Educational institutions" s="Top 100 universities (QS World University Rankings 2027) plus leading schools."/>
    <div className="flex flex-wrap gap-3 mb-6 up"><Tabs v={t} set={setT} opts={[['All','All'],['University','All Universities','cap'],['School','All Schools','book']]}/>
      <div className="relative flex-1 min-w-[200px]"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder="Search institutions, countries, strengths…" value={q} onChange={e=>setQ(e.target.value)}/></div>
      <select className={inp+' !w-auto'} value={co} onChange={e=>setCo(e.target.value)}><option value="">All countries</option>{[...new Set(INST.map(i=>i.co))].sort().map(c=><option key={c}>{c}</option>)}</select><select className={inp+' !w-auto'} value={sort} onChange={e=>setSort(e.target.value)}><option value="r">Sort: Ranking</option><option value="s">Sort: Students</option><option value="n">Sort: Name</option></select></div>
    <p className="text-sm text-slate-500 mb-4">{list.length} institutions</p><div className="grid md:grid-cols-2 gap-5">{list.map((i,k)=><div key={i.n} onClick={()=>setSel(i)} className={`${card} p-5 flex gap-4 up cursor-pointer`} style={{animationDelay:`${k*40}ms`}}>
      <div className="w-14 h-14 rounded-2xl grid place-items-center text-white font-extrabold text-sm shrink-0 bg-gradient-to-br from-violet-600 to-fuchsia-600">#{i.r}</div>
      <div className="min-w-0"><div className="flex items-center gap-2 flex-wrap"><h3 className="font-bold">{i.n}</h3><Chip c={i.t==='School'?'!bg-amber-100 !text-amber-700 dark:!bg-amber-400/15 dark:!text-amber-300':'!bg-violet-100 !text-violet-700 dark:!bg-violet-400/15 dark:!text-violet-300'}>{i.t}</Chip></div>
        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1"><I n="pin" c="w-3 h-3"/>{i.city}, {i.co}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">{i.ins}</p></div></div>)}</div>
    {!list.length&&<div className="text-center py-16 text-slate-500">No institutions found.</div>}
    {sel&&<Modal onClose={()=>setSel(null)}><Chip>{sel.t}</Chip><h3 className="text-2xl font-extrabold mt-2">{sel.n}</h3><p className="text-sm text-slate-500 flex items-center gap-1"><I n="pin" c="w-3.5 h-3.5"/>{sel.city}, {sel.co}</p>
      <div className="grid grid-cols-2 gap-3 mt-5"><Stat l="Ranking" v={sel.t==='School'?`#${sel.r} (schools)`:`#${sel.r} (QS 2027)`}/><Stat l="Students" v={sel.st?sel.st.toLocaleString():'—'}/>{sel.t==='University'&&<><Stat l="International students" v={sel.intl?sel.intl.toLocaleString():'—'}/><Stat l="Faculty staff" v={sel.fac?sel.fac.toLocaleString():'—'}/></>}{sel.ac&&<Stat l="Acceptance rate" v={sel.ac+'%'}/>}{sel.tu&&<Stat l="Tuition" v={sel.tu}/>}{sel.f&&<Stat l="Founded" v={sel.f}/>}<Stat l="Studymatch members" v={PEOPLE.filter(p=>p.inst===sel.n).length}/></div>
      <h4 className="font-bold mt-5">Insights</h4><p className="text-sm text-slate-500 mt-1">{sel.ins}</p>{sel.str.length>0&&<><h4 className="font-bold mt-4">Top strengths</h4><div className="flex flex-wrap gap-1.5 mt-2">{sel.str.map(s=><Chip key={s}>{s}</Chip>)}</div></>}{sel.slug&&<a href={`https://www.topuniversities.com/universities/${sel.slug}`} target="_blank" rel="noopener noreferrer" className={ghost+' w-full mt-5'}>View full profile on QS</a>}</Modal>}
  </div>;
}

function Files({db,myId,me,flash}){
  const [items,setItems]=useState([]),[cat,setCat]=useState('All'),[q,setQ]=useState(''),[up,setUp]=useState(false),[f,setF]=useState({t:'',k:'Guide',s:''}),[file,setFile]=useState(null),[err,setErr]=useState(''),[busy,setBusy]=useState(false);
  const cats=['All','Guide','Template','Cheat sheet','Notes'];
  useEffect(()=>{if(!db)return;const off=db.collection('materials').onSnapshot(s=>setItems(s.docs.map(x=>({id:x.id,...x.data()})).sort((a,b)=>b.ts-a.ts)));return()=>typeof off==='function'&&off()},[db]);
  const list=items.filter(m=>(cat==='All'||m.k===cat)&&(m.t+m.s).toLowerCase().includes(q.toLowerCase()));
  const size=n=>n>1048576?(n/1048576).toFixed(1)+' MB':Math.max(1,Math.round(n/1024))+' KB';
  const publish=async()=>{if(!file||!f.t)return;setErr('');setBusy(true);try{const as=await claude.use('assets');if(!as)throw 0;const r=await as.upload(file);await db.collection('materials').add({t:f.t,k:f.k,s:f.s||'General',a:me.name||'Member',by:myId,url:r.url,fn:file.name,sz:file.size,ts:Date.now()});setUp(false);setF({t:'',k:'Guide',s:''});setFile(null)}catch(e){setErr('Upload failed: '+((e&&(e.message||e.code))||'unknown error')+'. Allowed: PDF, images, text, CSV, Markdown, JSON (max 20 MB).')}setBusy(false)};
  const dl=async m=>{try{const d=await claude.use('downloads');if(!d)throw 0;const b=await (await fetch(m.url)).blob();await d.save({filename:m.fn,data:b})}catch(e){flash('Download is not available right now.')}};
  const del=async m=>{try{await db.collection('materials').doc(m.id).delete()}catch(e){flash('Could not delete.')}};
  return <div>
    <div className="flex flex-wrap items-end justify-between gap-3"><Head t="Useful materials" s="Files shared by the community. Download anything with one tap."/><button className={prim+' mb-6'} onClick={()=>db?setUp(true):flash('Open the shared link while signed in to share files.')}><I n="plus" c="w-4 h-4"/>Share material</button></div>
    <div className="flex flex-wrap gap-3 mb-6 up"><Tabs v={cat} set={setCat} opts={cats.map(c=>[c,c])}/><div className="relative flex-1 min-w-[200px]"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder="Search materials…" value={q} onChange={e=>setQ(e.target.value)}/></div></div>
    {!list.length&&<div className={`${card} hover:translate-y-0 p-10 text-center up`}><div className="w-14 h-14 mx-auto rounded-2xl grid place-items-center bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300"><I n="file" c="w-7 h-7"/></div><h3 className="text-xl font-extrabold mt-4">{items.length?'Nothing matches':'No materials yet'}</h3><p className="text-slate-500 mt-1">{items.length?'Try another search or category.':'Share the first guide, template or notes with the community.'}</p></div>}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((m,i)=><div key={m.id} className={`${card} p-5 flex flex-col up`} style={{animationDelay:`${i*40}ms`}}>
      <div className="flex justify-between"><div className="w-11 h-11 rounded-2xl grid place-items-center bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300"><I n="file"/></div><Chip>{m.k}</Chip></div>
      <h3 className="font-bold mt-4 leading-snug">{m.t}</h3><p className="text-xs text-slate-500 mt-1">{m.s} · by {m.a}</p><p className="text-xs text-slate-400 mt-1 truncate">{m.fn} · {size(m.sz)}</p>
      <div className="flex items-center justify-end gap-2 mt-auto pt-4">{m.by===myId&&<button onClick={()=>del(m)} className="text-xs text-slate-500 hover:text-red-500 mr-auto">Delete</button>}<button onClick={()=>dl(m)} className={prim+' !px-4 !py-2'}><I n="dl" c="w-4 h-4"/>Download</button></div></div>)}</div>
    {up&&<Modal onClose={()=>setUp(false)}><h3 className="text-xl font-extrabold mb-4">Share a material</h3><div className="space-y-3">
      <input className={inp} placeholder="Title" value={f.t} onChange={e=>setF({...f,t:e.target.value})}/><input className={inp} placeholder="Subject (e.g. Physics)" value={f.s} onChange={e=>setF({...f,s:e.target.value})}/>
      <select className={inp} value={f.k} onChange={e=>setF({...f,k:e.target.value})}>{cats.slice(1).map(c=><option key={c}>{c}</option>)}</select>
      <label className="block rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/15 p-6 text-center text-sm text-slate-500 cursor-pointer hover:border-violet-500 transition">{file?file.name+' · '+size(file.size):'Click to choose a file (PDF, image, text, CSV, Markdown, JSON; up to 20 MB)'}<input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg,.gif,.webp,.txt,.md,.csv,.json" onChange={e=>setFile(e.target.files[0]||null)}/></label>
      <p className="text-xs text-slate-500">Only share files you created or have the right to share.</p>
      {(!f.t||!file)&&<p className="text-xs text-amber-600 dark:text-amber-400">{!f.t?'Add a title.':'Choose a file.'}</p>}{err&&<p className="text-xs text-red-500">{err}</p>}<button className={prim+' w-full'} disabled={!f.t||!file||busy} onClick={publish}>{busy?'Uploading…':'Publish'}</button></div></Modal>}
  </div>;
}

function Essays({db,myId,me,flash,send}){
  const SEC=['Identity','Challenge','Community','Other'];
  const [items,setItems]=useState([]),[sec,setSec]=useState('Identity'),[open,setOpen]=useState(null),[add,setAdd]=useState(false),[f,setF]=useState({t:'',sec:'Identity',body:'',rev:'',ok:false}),[to,setTo]=useState(''),[files,setFiles]=useState([]),[err,setErr]=useState(''),[busy,setBusy]=useState(false);
  useEffect(()=>{if(!db)return;const off=db.collection('essays').onSnapshot(s=>setItems(s.docs.map(x=>({id:x.id,...x.data()})).sort((a,b)=>b.ts-a.ts)));return()=>typeof off==='function'&&off()},[db]);
  const list=items.filter(e=>e.sec===sec);
  const save=async()=>{setErr('');setBusy(true);try{const imgs=[];if(files.length){const as=await claude.use('assets');if(!as)throw 0;for(const fl of files){const r=await as.upload(fl);imgs.push(r.url)}}await db.collection('essays').add({t:f.t,sec:f.sec,body:f.body,rev:f.rev,imgs,a:me.name||'Member',by:myId,ts:Date.now()});setAdd(false);setSec(f.sec);setF({t:'',sec:'Identity',body:'',rev:'',ok:false});setFiles([])}catch(e){setErr('Could not publish: '+((e&&(e.message||e.code))||'upload failed')+'. Use PNG, JPG or WebP images.')}setBusy(false)};
  const dl=async e=>{try{const d=await claude.use('downloads');if(!d)throw 0;const base=e.t.replace(/[^\w]+/g,'-').toLowerCase();if(e.imgs&&e.imgs.length){for(let i=0;i<e.imgs.length;i++){const b=await (await fetch(e.imgs[i])).blob();await d.save({filename:`${base}-${i+1}.${(b.type.split('/')[1]||'png').replace('jpeg','jpg')}`,data:b})}}else await d.save({filename:base+'.txt',data:`${e.t}\nby ${e.a}\n\n${e.body}\n\n${e.rev?'REVIEW\n'+e.rev:''}`})}catch(x){flash('Download is not available right now.')}};
  const share=e=>{if(!to)return flash('Choose a friend first.');send(to,`📄 I shared an essay with you: “${e.t}” (Materials › Essays › ${e.sec})`);flash('Sent in chat');setTo('')};
  const del=async e=>{try{await db.collection('essays').doc(e.id).delete();setOpen(null)}catch(x){flash('Could not delete.')}};
  return <div>
    <div className="flex flex-wrap items-end justify-between gap-3"><Head t="Essays" s="Read essays with reviews, download them, or send them to a friend."/><button className={prim+' mb-6'} onClick={()=>db?(setF(v=>({...v,sec})),setAdd(true)):flash('Open the shared link while signed in to add essays.')}><I n="plus" c="w-4 h-4"/>Add essay</button></div>
    <div className="mb-6 up"><Tabs v={sec} set={setSec} opts={SEC.map(c=>[c,c])}/></div>
    {!list.length&&<div className={`${card} hover:translate-y-0 p-10 text-center up`}><div className="w-14 h-14 mx-auto rounded-2xl grid place-items-center bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300"><I n="book" c="w-7 h-7"/></div><h3 className="text-xl font-extrabold mt-4">No essays in {sec} yet</h3><p className="text-slate-500 mt-1">Add your own essay and, if you like, a review for it.</p></div>}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((e,i)=><div key={e.id} onClick={()=>setOpen(e)} className={`${card} p-5 cursor-pointer up`} style={{animationDelay:`${i*40}ms`}}>{e.imgs&&e.imgs[0]&&<img src={e.imgs[0]} alt="" className="w-full h-40 object-cover object-top rounded-2xl mb-3"/>}<Chip>{e.sec}</Chip><h3 className="font-bold mt-3 leading-snug">{e.t}</h3><p className="text-xs text-slate-500 mt-1">by {e.a}{e.rev?' · with review':''}</p>{e.body&&<p className="text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-3">{e.body}</p>}</div>)}</div>
    {open&&<Modal onClose={()=>setOpen(null)}><Chip>{open.sec}</Chip><h3 className="text-2xl font-extrabold mt-2">{open.t}</h3><p className="text-sm text-slate-500">by {open.a}</p>
      {open.body&&<p className="mt-4 text-sm leading-relaxed whitespace-pre-line">{open.body}</p>}{(open.imgs||[]).map((u,i)=><img key={i} src={u} alt={`Page ${i+1}`} className="mt-4 w-full rounded-xl border border-slate-200 dark:border-white/10"/>)}
      {open.rev&&<div className="mt-5 rounded-2xl bg-violet-50 dark:bg-violet-500/10 p-4"><h4 className="font-bold text-sm mb-1">Review</h4><p className="text-sm whitespace-pre-line text-slate-600 dark:text-slate-300">{open.rev}</p></div>}
      <div className="mt-5 flex flex-wrap gap-2"><button className={prim} onClick={()=>dl(open)}><I n="dl" c="w-4 h-4"/>Download</button>{open.by===myId&&<button className={ghost} onClick={()=>del(open)}>Delete</button>}</div>
      <div className="mt-4 flex gap-2"><select className={inp} value={to} onChange={x=>setTo(x.target.value)}><option value="">Send to a friend…</option>{PEOPLE.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select><button className={ghost} onClick={()=>share(open)}><I n="send" c="w-4 h-4"/>Send</button></div></Modal>}
    {add&&<Modal onClose={()=>setAdd(false)}><h3 className="text-xl font-extrabold mb-4">Add an essay</h3><div className="space-y-3">
      <input className={inp} placeholder="Title" value={f.t} onChange={e=>setF({...f,t:e.target.value})}/>
      <select className={inp} value={f.sec} onChange={e=>setF({...f,sec:e.target.value})}>{SEC.map(c=><option key={c}>{c}</option>)}</select>
      <label className="block rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/15 p-6 text-center text-sm text-slate-500 cursor-pointer hover:border-violet-500 transition">{files.length?`${files.length} image${files.length>1?'s':''} selected`:'Click to upload essay images (PNG, JPG, WebP · up to 6 pages)'}<input type="file" multiple accept="image/png,image/jpeg,image/webp" className="hidden" onChange={e=>setFiles([...e.target.files].slice(0,6))}/></label><textarea rows="4" className={inp} placeholder="Essay text (optional if you upload images)" value={f.body} onChange={e=>setF({...f,body:e.target.value})}/>
      <textarea rows="4" className={inp} placeholder="Review (optional)" value={f.rev} onChange={e=>setF({...f,rev:e.target.value})}/>
      <label className="flex gap-2 text-xs text-slate-500"><input type="checkbox" checked={f.ok} onChange={e=>setF({...f,ok:e.target.checked})}/>I wrote this, or I have the right to share it.</label>
      {(()=>{const h=!f.t?'Add a title.':(!f.body&&!files.length)?'Upload an image or write the essay text.':!f.ok?'Tick the checkbox above to confirm you have the rights.':'';return h&&<p className="text-xs text-amber-600 dark:text-amber-400">{h}</p>})()}{err&&<p className="text-xs text-red-500">{err}</p>}<button className={prim+' w-full'} disabled={!f.t||(!f.body&&!files.length)||!f.ok||busy} onClick={save}>{busy?'Publishing…':'Publish'}</button></div></Modal>}
  </div>;
}
function Materials(p){const [m,setM]=useState('files');return <div><div className="mb-6"><Tabs v={m} set={setM} opts={[['files','Files','file'],['essays','Essays','book']]}/></div>{m==='files'?<Files {...p}/>:<Essays {...p}/>}</div>}

function Messages({conn,active,setActive,msgs,send,myId,saved,saveItem,delSaved,flash}){
  const [txt,setTxt]=useState(''),[busy,setBusy]=useState(false),[view,setView]=useState(null),[recOn,setRecOn]=useState(false),[sec,setSec]=useState(0),end=useRef(),mrRef=useRef(),chunks=useRef([]),cancel=useRef(false),t0=useRef(0),tm=useRef();
  const isS=active==='saved';
  const list=PEOPLE.filter(p=>conn.has(p.id)||msgs.some(x=>x.from===p.id&&x.to===myId)),cur=isS?{name:'Saved messages',saved:true}:PEOPLE.find(p=>p.id===active);
  const thread=id=>msgs.filter(x=>(x.from===myId&&x.to===id)||(x.from===id&&x.to===myId)).sort((a,b)=>a.ts-b.ts);
  const m=isS?saved.map(x=>({...x,from:myId})).sort((a,b)=>a.ts-b.ts):active?thread(active):[];
  useEffect(()=>{end.current&&end.current.scrollIntoView({behavior:'smooth'})},[m.length,active]);
  useEffect(()=>()=>{cancel.current=true;clearInterval(tm.current);try{mrRef.current&&mrRef.current.state!=='inactive'&&mrRef.current.stop()}catch(e){}},[]);
  const fmt=n=>`${Math.floor((n||0)/60)}:${String((n||0)%60).padStart(2,'0')}`;
  const label=x=>x.kind==='image'?'📷 Photo':x.kind==='voice'?'🎤 Voice message':x.kind==='file'?'📎 '+(x.fn||'File'):x.t;
  const upload=async b=>{const as=await claude.use('assets');if(!as)throw new Error('uploads are not available for your account');return (await as.upload(b)).url};
  const dlFile=async(url,fn)=>{try{const d=await claude.use('downloads');if(!d)throw 0;const b=await (await fetch(url)).blob();await d.save({filename:fn||'file',data:b})}catch(e){flash('Download is not available right now.')}};
  const deliver=async o=>{setBusy(true);try{let extra={};if(o.blob){const url=await upload(o.blob);extra={kind:o.kind,url,fn:o.fn||'',dur:o.dur||0}}if(isS)await saveItem(o.t||'',extra);else await send(active,o.t||'',extra)}catch(e){flash('Could not send: '+((e&&e.message)||'upload failed'))}setBusy(false)};
  const go=()=>{if(!txt.trim()||busy)return;deliver({t:txt.trim()});setTxt('')};
  const pickFiles=kind=>e=>{[...e.target.files].forEach(f=>deliver({kind,blob:f,fn:f.name}));e.target.value=''};
  const startRec=async()=>{try{const st=await navigator.mediaDevices.getUserMedia({audio:true});const mr=new MediaRecorder(st);chunks.current=[];cancel.current=false;mr.ondataavailable=e=>{e.data&&e.data.size&&chunks.current.push(e.data)};mr.onstop=()=>{st.getTracks().forEach(t=>t.stop());clearInterval(tm.current);setRecOn(false);const dur=Math.round((Date.now()-t0.current)/1000);if(cancel.current||dur<1||!chunks.current.length)return;const mime=(mr.mimeType||'audio/webm').includes('mp4')?'video/mp4':'video/webm';deliver({kind:'voice',blob:new Blob(chunks.current,{type:mime}),dur,fn:'voice-message'})};mr.start();mrRef.current=mr;t0.current=Date.now();setSec(0);tm.current=setInterval(()=>setSec(Math.round((Date.now()-t0.current)/1000)),500);setRecOn(true)}catch(e){flash('Microphone is not available. Allow microphone access for this page and try again.')}};
  const stopRec=ok=>{cancel.current=!ok;try{mrRef.current&&mrRef.current.state!=='inactive'&&mrRef.current.stop()}catch(e){}};
  const bub=(x,i)=>{const mine=x.from===myId;
    const body=x.kind==='image'?<img src={x.url} alt="" onClick={()=>setView(x.url)} className="rounded-xl max-w-[220px] sm:max-w-[280px] cursor-zoom-in"/>:x.kind==='voice'?<div className="flex items-center gap-2"><audio controls preload="metadata" src={x.url} className="h-10 w-48 max-w-full"/><span className="text-xs opacity-70">{fmt(x.dur)}</span></div>:x.kind==='file'?<button onClick={()=>dlFile(x.url,x.fn)} className="flex items-center gap-2 text-left"><I n="file" c="w-5 h-5 shrink-0"/><span className="text-sm underline break-all">{x.fn}</span></button>:null;
    const act=<span className="opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition flex gap-1 text-slate-400 shrink-0">{isS?<button title="Delete" onClick={()=>delSaved(x.id)}><I n="trash" c="w-4 h-4"/></button>:<button title="Save to Saved messages" onClick={()=>saveItem(x.t||'',{kind:x.kind,url:x.url,fn:x.fn,dur:x.dur})}><I n="bookmark" c="w-4 h-4"/></button>}</span>;
    return <div key={x.id||i} className={`group flex items-end gap-1.5 ${mine?'justify-end':''}`}>{mine&&act}<div className={`pop max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm ${mine?'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-br-md':'bg-slate-100 dark:bg-white/10 rounded-bl-md'}`}>{body}{x.t&&<p className={`whitespace-pre-line break-words ${body?'mt-1.5':''}`}>{x.t}</p>}</div>{!mine&&act}</div>};
  const row=(id,av,name,sub)=><button key={id} onClick={()=>setActive(id)} className={`w-full flex gap-3 p-4 text-left hover:bg-slate-100 dark:hover:bg-white/5 transition ${active===id?'bg-violet-50 dark:bg-violet-500/10':''}`}>{av}<div className="min-w-0"><p className="font-semibold text-sm">{name}</p><p className="text-xs text-slate-500 truncate">{sub}</p></div></button>;
  const sv=(c='w-11 h-11')=><div className={`${c} rounded-2xl grid place-items-center text-white shrink-0 bg-gradient-to-br from-sky-500 to-violet-600 shadow-lg`}><I n="bookmark" c="w-5 h-5"/></div>;
  const lastS=saved.slice().sort((a,b)=>b.ts-a.ts)[0];
  return <div>
    <Head t="Messages" s="Chat, send photos, files and voice messages, and keep notes in Saved messages."/>
    <div className={`${card} hover:translate-y-0 overflow-hidden grid md:grid-cols-[280px_1fr] h-[68vh] up`}>
      <div className={`border-r border-slate-200 dark:border-white/10 overflow-y-auto ${cur?'hidden md:block':''}`}>{row('saved',sv(),'Saved messages',lastS?label(lastS):'Keep notes, photos, files and voice')}{list.map(p=>{const l=thread(p.id).slice(-1)[0];return row(p.id,<Av p={p} s="w-11 h-11"/>,p.name,l?label(l):'Say hello 👋')})}{!list.length&&<p className="p-4 text-xs text-slate-500">Connect with someone in Discover to start a chat.</p>}</div>
      {cur?<div className="flex flex-col min-h-0"><div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-white/10"><button className="md:hidden text-sm text-violet-600" onClick={()=>setActive(null)}>←</button>{cur.saved?sv('w-10 h-10'):<Av p={cur} s="w-10 h-10"/>}<div><p className="font-semibold text-sm">{cur.name}</p><p className="text-xs text-slate-500">{cur.saved?'Only you can see this':cur.major}</p></div></div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">{!m.length&&<p className="text-center text-sm text-slate-500 pt-10">{isS?'Save anything you need here: notes, links, photos, files and voice messages.':'No messages yet.'}</p>}{m.map(bub)}<div ref={end}/></div>
        {recOn?<div className="p-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"/><span className="text-sm font-semibold tabular-nums">{fmt(sec)}</span><span className="text-sm text-slate-500 flex-1">Recording…</span><button onClick={()=>stopRec(false)} className={ghost+' !px-3'} title="Cancel"><I n="trash" c="w-4 h-4"/></button><button onClick={()=>stopRec(true)} className={prim+' !px-3.5'} title="Send voice"><I n="send" c="w-4 h-4"/></button></div>
        :<div className="p-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2"><label className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer" title="Send photo"><I n="image" c="w-5 h-5"/><input type="file" multiple accept="image/*" className="hidden" onChange={pickFiles('image')}/></label><label className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer" title="Send file"><I n="clip" c="w-5 h-5"/><input type="file" multiple accept=".pdf,.txt,.md,.csv,.json" className="hidden" onChange={pickFiles('file')}/></label>
          <input className={inp} placeholder={busy?'Sending…':isS?'Save a note…':'Write a message…'} value={txt} onChange={e=>setTxt(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()}/>
          {txt.trim()?<button onClick={go} disabled={busy} className={prim+' !px-3.5'}><I n="send" c="w-4 h-4"/></button>:<button onClick={startRec} disabled={busy} className={prim+' !px-3.5'} title="Record voice message"><I n="mic" c="w-4 h-4"/></button>}</div>}
      </div>:<div className="hidden md:grid place-items-center text-slate-500 text-sm">Select a conversation</div>}
    </div>
    {view&&<Modal onClose={()=>setView(null)}><img src={view} alt="" className="w-full rounded-xl mt-4"/></Modal>}
  </div>;
}

const L=({l,children})=><label className="block text-sm font-medium">{l}<div className="mt-1.5">{children}</div></label>;
function Profile({me,setMe}){
  const [f,setF]=useState(me),[ok,setOk]=useState(false),dirty=useRef(false),set=k=>e=>{dirty.current=true;setF({...f,[k]:e.target.value});setOk(false)};
  useEffect(()=>{if(!dirty.current)setF(me)},[me]);
  const pick=e=>{const file=e.target.files[0];if(!file)return;const img=new Image(),u=URL.createObjectURL(file);img.onload=()=>{const c=document.createElement('canvas');c.width=c.height=192;const m=Math.min(img.width,img.height);c.getContext('2d').drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,192,192);dirty.current=true;setF(v=>({...v,photo:c.toDataURL('image/jpeg',.82)}));setOk(false);URL.revokeObjectURL(u)};img.src=u};

  return <div className="grid lg:grid-cols-[320px_1fr] gap-6">
    <div className={`${card} p-6 text-center h-fit up`}><Av p={{name:f.name,hue:265,photo:f.photo}} s="w-24 h-24 !rounded-3xl text-2xl" x="mx-auto"/><div className="flex gap-2 justify-center mt-4"><label className={ghost+' cursor-pointer !py-2 !px-3'}>{f.photo?'Change photo':'Upload photo'}<input type="file" accept="image/*" className="hidden" onChange={pick}/></label>{f.photo&&<button className={ghost+' !py-2 !px-3'} onClick={()=>{dirty.current=true;setF({...f,photo:''});setOk(false)}}>Remove</button>}</div><h3 className="text-xl font-extrabold mt-4">{f.name}</h3><p className="text-sm text-slate-500">{f.major} · {f.age} yrs</p><p className="text-xs text-slate-500 mt-1">{f.inst}</p>
      <div className="flex flex-wrap gap-1.5 justify-center mt-4">{f.skills.split(',').filter(s=>s.trim()).map(s=><Chip key={s}>{s.trim()}</Chip>)}</div></div>
    <div className={`${card} hover:translate-y-0 p-6 space-y-4 up`}><h3 className="text-xl font-extrabold">Edit profile</h3>
      <div className="grid sm:grid-cols-2 gap-4"><L l="Full name"><input className={inp} value={f.name} onChange={set('name')}/></L><L l="Age"><input type="number" min="13" max="60" className={inp} value={f.age} onChange={set('age')}/></L>
        <L l="Major / field of study"><input className={inp} value={f.major} onChange={set('major')}/></L><L l="Educational institution"><input list="ins" className={inp} value={f.inst} onChange={set('inst')}/><datalist id="ins">{INST.map(i=><option key={i.n} value={i.n}/>)}</datalist></L></div>
      <L l="Institution type"><select className={inp} value={f.type||'University'} onChange={set('type')}><option>University</option><option>School</option></select></L><L l="I’m looking for"><select className={inp} value={f.mode} onChange={set('mode')}><option value="partner">Study partner</option><option value="cofounder">Startup co-founder</option><option value="both">Both</option></select></L><L l="Skills (comma separated)"><input className={inp} value={f.skills} onChange={set('skills')}/></L><L l="Goals"><textarea rows="3" className={inp} value={f.goal} onChange={set('goal')}/></L>
      <button className={prim} disabled={!(f.name||'').trim()} onClick={async()=>{const r=await setMe(f);setOk(r!==false);if(r!==false)dirty.current=false}}>{ok?<><I n="check" c="w-4 h-4"/>Saved</>:'Save changes'}</button>{!(f.name||'').trim()&&<span className="ml-3 text-xs text-amber-600 dark:text-amber-400">Enter your name to save.</span>}</div></div>;
}

function Landing({onEnter,dark,setDark}){
  const F=[['users','Study partners','Match with students who share your major, schedule and goals. Filter by age, field, institution and interests.'],['rocket','Startup co-founders','Find teammates with the skills your idea needs, from developers and designers to business minds.'],['building','Top 100 universities','Explore the QS World University Rankings 2027 with city, country, rank and direct links to full QS profiles. Schools included.'],['file','Useful materials','Share and download guides, templates, cheat sheets and notes shared by the community.'],['book','Essays with reviews','Read essays by category such as Identity, add your own as images or text, and download or send them to friends.'],['msg','Built-in chat','Message your connections right inside Studymatch. No calls, no extra apps.']];
  const S=[['1','Create your profile','Add your age, major, institution, skills, goals and a photo.'],['2','Discover people','Switch between study partners and co-founders, then filter and search.'],['3','Connect and chat','Send a connection, start a conversation and plan your first session.'],['4','Learn together','Use shared materials and essays, and explore universities worldwide.']];
  const Q=[['Who is Studymatch for?','Students from schools and universities who want a study partner, a startup co-founder, or both.'],['How do I join?','Open the invite link, create your profile and you appear in Discover for other members.'],['Can I upload my own materials?','Yes. Share PDFs, images, text, CSV, Markdown or JSON files, and add essays as images or text. Only share work you created or have the right to share.'],['Where does the university data come from?','Rankings, cities and links come from the QS World University Rankings 2027 on topuniversities.com. Open the QS profile for full details.']];
  const go=t=>()=>{window.scrollTo(0,0);onEnter(t)};
  return <div className="relative min-h-screen overflow-x-hidden">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] overflow-hidden"><div className="blob absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-violet-500/30"/><div className="blob absolute top-10 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/25"/></div>
    <header className="relative max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"><div className="flex items-center gap-2 font-extrabold text-xl tracking-tight"><span className="w-9 h-9 rounded-xl grid place-items-center text-white bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/30"><I n="flame" c="w-5 h-5"/></span>Study<span className="text-violet-600 dark:text-violet-400">match</span></div>
      <div className="flex gap-2"><button onClick={()=>setDark(!dark)} className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition" aria-label="Toggle theme"><I n={dark?'sun':'moon'} c="w-4 h-4"/></button><button onClick={go('discover')} className={prim+' !py-2'}>Enter app</button></div></header>
    <section className="relative max-w-4xl mx-auto px-4 pt-14 pb-20 text-center">
      <span className="up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"><I n="cap" c="w-4 h-4"/>For students at schools and universities</span>
      <h1 className="up mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">Find your <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">study partner</span> and your <span className="bg-gradient-to-r from-fuchsia-600 to-orange-500 bg-clip-text text-transparent">co-founder</span></h1>
      <p className="up mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Studymatch connects ambitious students. Match by major, skills and goals, chat in the app, share learning materials and explore the world’s top universities.</p>
      <div className="up mt-8 flex flex-wrap gap-3 justify-center"><button onClick={go('profile')} className={prim+' !px-6 !py-3'}>Create your profile</button><button onClick={go('discover')} className={ghost+' !px-6 !py-3'}>Browse students</button></div>
      <div className="up mt-12 grid grid-cols-3 gap-3 max-w-xl mx-auto">{[['100+','QS-ranked universities'],['2','Ways to match'],['1','Place for everything']].map(([a,b])=><div key={b} className={`${card} hover:translate-y-0 py-4`}><p className="text-2xl font-extrabold">{a}</p><p className="text-xs text-slate-500 mt-0.5 px-2">{b}</p></div>)}</div>
    </section>
    <section className="relative max-w-6xl mx-auto px-4 pb-20"><h2 className="text-center text-3xl font-extrabold tracking-tight">Everything students need in one place</h2><p className="text-center text-slate-500 mt-2 mb-10">Six sections, one platform.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{F.map(([ic,t,d],i)=><div key={t} className={`${card} p-6`}><div className="w-12 h-12 rounded-2xl grid place-items-center text-white bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20"><I n={ic}/></div><h3 className="font-bold text-lg mt-4">{t}</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5">{d}</p></div>)}</div></section>
    <section className="relative max-w-5xl mx-auto px-4 pb-20"><h2 className="text-center text-3xl font-extrabold tracking-tight mb-10">How it works</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{S.map(([n,t,d])=><div key={n} className={`${card} p-6`}><span className="w-9 h-9 rounded-full grid place-items-center text-sm font-extrabold bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">{n}</span><h3 className="font-bold mt-4">{t}</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{d}</p></div>)}</div></section>
    <section className="relative max-w-3xl mx-auto px-4 pb-20"><h2 className="text-center text-3xl font-extrabold tracking-tight mb-8">Questions</h2>
      <div className="space-y-3">{Q.map(([q,a])=><details key={q} className={`${card} hover:translate-y-0 px-5 py-4 group`}><summary className="font-semibold cursor-pointer list-none flex justify-between items-center">{q}<span className="text-violet-600 group-open:rotate-45 transition-transform"><I n="plus" c="w-4 h-4"/></span></summary><p className="text-sm text-slate-600 dark:text-slate-300 mt-3">{a}</p></details>)}</div></section>
    <section className="relative max-w-4xl mx-auto px-4 pb-16"><div className="rounded-3xl p-10 text-center text-white bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-2xl shadow-violet-500/30"><h2 className="text-3xl font-extrabold">Ready to meet your team?</h2><p className="mt-2 text-white/80">Create a profile in a minute and start connecting.</p><button onClick={go('profile')} className={`${btn} mt-6 bg-white text-violet-700 hover:shadow-lg !px-6 !py-3`}>Join Studymatch</button></div>
      <p className="text-center text-xs text-slate-500 mt-8">© Studymatch · University rankings: QS World University Rankings 2027</p></section>
  </div>;
}
function App(){
  const LINK=location.href.split('#')[0]+'#join';
  const [dark,setDark]=useState(()=>matchMedia('(prefers-color-scheme: dark)').matches),[tab,setTab]=useState(()=>location.hash==='#join'?'profile':'discover');
  const [me,setMe]=useState({name:'',age:'',major:'',inst:'',skills:'',goal:'',mode:'both',type:'University'}),[joined,setJoined]=useState(false);
  const [db,setDb]=useState(null),[myId,setMyId]=useState('local'),[people,setPeople]=useState([]),[all,setAll]=useState([]),[saved,setSaved]=useState([]);
  const [landing,setLanding]=useState(true),[conn,setConn]=useState(new Set()),[active,setActive]=useState(null),[inv,setInv]=useState(false),[toast,setToast]=useState('');
  PEOPLE=people;
  useEffect(()=>{document.documentElement.classList.toggle('dark',dark)},[dark]);
  useEffect(()=>{let off=[];(async()=>{try{if(!window.claude)return;const u=await claude.use('user'),d=await claude.use('db');const id=u?await u.id():'local';setMyId(id);if(!d)return;setDb(d);
    off.push(d.collection('members').onSnapshot(s=>{const a=s.docs.map(x=>({id:x.id,...x.data()}));setPeople(a.filter(p=>p.id!==id));const mine=a.find(p=>p.id===id);if(mine){setMe(m=>({...m,...mine,skills:(mine.skills||[]).join(', ')}));setJoined(true)}}));
    off.push(d.collection('msgs').onSnapshot(s=>setAll(s.docs.map(x=>x.data()))));off.push(d.collection('data/users/'+id).onSnapshot(s=>setSaved(s.docs.map(x=>({id:x.id,...x.data()})))));}catch(e){}})();return()=>off.forEach(f=>typeof f==='function'&&f())},[]);
  const flash=t=>{setToast(t);setTimeout(()=>setToast(''),3000)};
  const saveMe=async f=>{setMe(f);if(!db){flash('Open the shared link while signed in to join the community.');return false}
    try{await db.collection('members').doc(myId).set({name:f.name||'Student',age:+f.age||18,major:f.major||'—',inst:f.inst||'—',type:f.type||(INST.find(i=>i.n===f.inst)||{}).t||'University',skills:f.skills.split(',').map(s=>s.trim()).filter(Boolean),goal:f.goal||'',mode:f.mode||'both',photo:f.photo||'',hue:[...myId].reduce((a,c)=>a*31+c.charCodeAt(0),7)%360});setJoined(true);return true}catch(e){flash('Could not save profile.');return false}};
  const clean=o=>Object.fromEntries(Object.entries(o).filter(([,v])=>v!==undefined));
  const send=(to,t,extra={})=>{if(!db){flash('Sign in to send messages.');return Promise.reject(new Error('not signed in'))}return db.collection('msgs').add(clean({from:myId,to,t,ts:Date.now(),...extra}))};
  const saveItem=(t,extra={})=>{if(!db){flash('Sign in to use Saved messages.');return Promise.reject(new Error('not signed in'))}return db.collection('data/users/'+myId).add(clean({t:t||'',ts:Date.now(),...extra}))};
  const delSaved=id=>db&&db.collection('data/users/'+myId).doc(id).delete().catch(()=>flash('Could not delete.'));
  const openChat=id=>{setConn(c=>new Set(c).add(id));setActive(id);setTab('messages')};
  const copy=()=>{try{navigator.clipboard.writeText(LINK).then(()=>flash('Link copied'),()=>flash('Select the link and copy it'))}catch(e){flash('Select the link and copy it')}};
  if(landing)return <Landing dark={dark} setDark={setDark} onEnter={t=>{setTab(t);setLanding(false)}}/>;
  const nav=[['discover','Discover','users'],['institutions','Institutions','building'],['materials','Materials','book'],['messages','Messages','msg'],['profile','Profile','user']];
  return <div className="relative min-h-screen overflow-x-hidden">
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"><div className="blob absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-500/25"/><div className="blob absolute top-40 -right-24 w-96 h-96 rounded-full bg-fuchsia-500/20"/></div>
    <header style={{top:'env(safe-area-inset-top,0px)'}} className="sticky z-40 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/70 dark:border-white/10"><div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
      <div onClick={()=>setLanding(true)} className="flex items-center gap-2 font-extrabold text-xl tracking-tight cursor-pointer" title="About Studymatch"><span className="w-9 h-9 rounded-xl grid place-items-center text-white bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/30"><I n="flame" c="w-5 h-5"/></span>Study<span className="text-violet-600 dark:text-violet-400">match</span></div>
      <nav className="hidden md:flex gap-1">{nav.map(([k,l,ic])=><button key={k} onClick={()=>setTab(k)} className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition ${tab===k?'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300':'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'}`}><I n={ic} c="w-4 h-4"/>{l}</button>)}</nav>
      <div className="flex gap-2"><button onClick={()=>setInv(true)} className={ghost+' !py-2'}><I n="plus" c="w-4 h-4"/><span className="hidden sm:inline">Invite</span></button>
      <button onClick={()=>setDark(!dark)} className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition" aria-label="Toggle theme"><I n={dark?'sun':'moon'} c="w-4 h-4"/></button></div></div></header>
    <main className="relative max-w-6xl mx-auto px-4 py-8 pb-28 md:pb-12" key={tab}>
      {!joined&&tab!=='profile'&&<div className="mb-6 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 bg-violet-100 dark:bg-violet-500/15 text-violet-800 dark:text-violet-200 text-sm up"><span>Create your profile to appear in Discover and start chatting.</span><button className={prim+' !py-2'} onClick={()=>setTab('profile')}>Create profile</button></div>}
      {tab==='discover'&&<Discover myId={myId} conn={conn} connect={openChat} openChat={openChat} invite={()=>setInv(true)}/>}
      {tab==='institutions'&&<Institutions/>}
      {tab==='materials'&&<Materials db={db} myId={myId} me={me} flash={flash} send={send}/>}
      {tab==='messages'&&<Messages conn={conn} active={active} setActive={setActive} msgs={all} send={send} myId={myId} saved={saved} saveItem={saveItem} delSaved={delSaved} flash={flash}/>}
      {tab==='profile'&&<><Head t={joined?'Your profile':'Join Studymatch'} s="Keep it fresh so the right people find you."/><Profile me={me} setMe={saveMe}/></>}
    </main>
    {inv&&<Modal onClose={()=>setInv(false)}><h3 className="text-xl font-extrabold">Invite students</h3><p className="text-sm text-slate-500 mt-1 mb-4">Share this link. Whoever opens it can create a profile and join Studymatch.</p><input readOnly className={inp} value={LINK} onFocus={e=>e.target.select()}/><button className={prim+' w-full mt-3'} onClick={copy}>Copy link</button><p className="text-xs text-slate-500 mt-3">Demo mode: data is stored in each visitor’s own browser. Connect a backend (Supabase or Firebase) to share profiles between devices.</p></Modal>}
    {toast&&<div className="pop fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-8 z-[60] px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm shadow-xl">{toast}</div>}
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 backdrop-blur-xl bg-white/85 dark:bg-slate-950/85 border-t border-slate-200 dark:border-white/10 grid grid-cols-5" style={{paddingBottom:'env(safe-area-inset-bottom,0px)'}}>{nav.map(([k,l,ic])=><button key={k} onClick={()=>setTab(k)} className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-semibold ${tab===k?'text-violet-600 dark:text-violet-300':'text-slate-500'}`}><I n={ic} c="w-5 h-5"/>{l}</button>)}</nav>
  </div>;
}
class EB extends React.Component{constructor(p){super(p);this.state={e:null}}static getDerivedStateFromError(e){return{e}}render(){return this.state.e?<div className="min-h-screen grid place-items-center p-6 text-center"><div><h2 className="text-2xl font-extrabold">Something went wrong</h2><p className="text-slate-500 mt-2">Please reload the page.</p><button className={prim+' mt-4'} onClick={()=>location.reload()}>Reload</button></div></div>:this.props.children}}
ReactDOM.createRoot(document.getElementById('root')).render(<EB><App/></EB>);
