// @ts-nocheck
import React,{useState,useMemo,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom/client';
import { tr, LANG, setLang as setLang0 } from './i18n';
import { MAJORS, MAJOR_CATS, GUIDES, SCHOOLS, SAMPLE_TESTS, VISA, TYPICAL } from './data';
const L3=(o)=>o[LANG]||o.en;



const P={phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',video:'<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',calendar:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',ext:'<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',clip:'<path d="m21.4 11.1-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',bookmark:'<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',rocket:'<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>',building:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',book:'<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',msg:'<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>',user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',dl:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',star:'<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',plus:'<path d="M5 12h14M12 5v14"/>',file:'<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6"/>',cap:'<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'};
const I=({n,c='w-5 h-5',sw=2})=><svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html:P[n]}}/>;

let PEOPLE=[];


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
100|University College Dublin|Ireland|Dublin|university-college-dublin
102|Tohoku University|Japan
103|Queen Mary University of London|United Kingdom
104|RWTH Aachen University|Germany
105|Technical University of Denmark|Denmark
106|Pohang University of Science And Technology (POSTECH)|South Korea
107|King Saud University|Saudi Arabia
108|Sungkyunkwan University (SKKU)|South Korea
109|Qatar University|Qatar
110|KIT, Karlsruhe Institute of Technology|Germany
111|Sapienza University of Rome|Italy
111|University of Southampton|United Kingdom
113|University of Waterloo|Canada
113|Utrecht University|Netherlands
115|Lomonosov Moscow State University|Russia
115|University of St Andrews|United Kingdom
118|Indian Institute of Technology Delhi (IITD)|India
119|Leiden University|Netherlands
119|Pontificia Universidad Católica de Chile (UC)|Chile
119|RMIT University|Australia
122|Rice University|United States
123|Alma Mater Studiorum - Università di Bologna|Italy
123|University of Helsinki|Finland
125|University of Bath|United Kingdom
126|Aalto University|Finland
126|Macquarie University|Australia
128|Aarhus University|Denmark
128|Universiti Sains Malaysia (USM)|Malaysia
130|Universiti Kebangsaan Malaysia (UKM)|Malaysia
131|University of Oslo|Norway
131|University of Wisconsin-Madison|United States
133|Universidade de São Paulo|Brazil
134|Indian Institute of Technology Bombay (IITB)|India
134|University of Science and Technology of China|China
136|University of Exeter|United Kingdom
137|University of California, Davis|United States
138|Universiti Putra Malaysia (UPM)|Malaysia
139|University of Liverpool|United Kingdom
140|Humboldt-Universität zu Berlin|Germany
140|University of Vienna|Austria
142|Georgia Institute of Technology|United States
142|National Tsing Hua University (NTHU)|Taiwan
142|Western University|Canada
145|Universidad Nacional Autónoma de México (UNAM)|Mexico
146|Tongji University|China
147|Khalifa University|United Arab Emirates
148|Erasmus University Rotterdam|Netherlands
149|Newcastle University|United Kingdom
150|Ghent University|Belgium
150|University of Basel|Switzerland
152|Eindhoven University of Technology|Netherlands
153|University of Southern California|United States
154|Wageningen University & Research|Netherlands
155|Hanyang University|South Korea
156|Nagoya University|Japan
157|University of Groningen|Netherlands
158|Technische Universität Berlin (TU Berlin)|Germany
158|Universiti Teknologi Malaysia|Malaysia
158|University of North Carolina at Chapel Hill|United States
158|University of York|United Kingdom
162|Université de Montréal|Canada
162|Washington University in St. Louis|United States
164|Lancaster University|United Kingdom
165|Universitat de Barcelona|Spain
165|Wuhan University|China
167|Stockholm University|Sweden
168|University of Geneva|Switzerland
169|Texas A&M University|United States
170|Indian Institute of Technology Madras (IITM)|India
171|Kyushu University|Japan
172|Arizona State University|United States
173|University of California, Santa Barbara (UCSB)|United States
174|Chalmers University of Technology|Sweden
174|McMaster University|Canada
174|Queen’s University Belfast|United Kingdom
177|Al-Farabi Kazakh National University|Kazakhstan
177|National Yang Ming Chiao Tung University (NYCU)|Taiwan
179|Cardiff University|United Kingdom
179|Hokkaido University|Japan
179|Queen’s University at Kingston|Canada
182|Michigan State University|United States
183|Emory University|United States
184|University of Cape Town|South Africa
185|Technische Universität Dresden|Germany
185|Universidad de Chile|Chile
185|Vrije Universiteit Amsterdam|Netherlands
188|Tecnológico de Monterrey|Mexico
189|Curtin University|Australia
190|Harbin Institute of Technology|China
191|National Cheng Kung University (NCKU)|Taiwan
191|Technische Universität Wien|Austria
191|Universitas Indonesia|Indonesia
191|University of Bern|Switzerland
195|University of Wollongong|Australia
196|Université catholique de Louvain (UCLouvain)|Belgium
196|University of Reading|United Kingdom
198|University of Otago|New Zealand
199|Complutense University of Madrid|Spain
200|King Abdulaziz University (KAU)|Saudi Arabia
201|The Ohio State University|United States
201|Waseda University|Japan
203|Loughborough University|United Kingdom
204|Università di Padova|Italy
205|Indian Institute of Technology Kharagpur (IIT-KGP)|India
206|Gadjah Mada University|Indonesia
206|Politecnico di Torino|Italy
208|Tel Aviv University|Israel
209|Rheinische Friedrich-Wilhelms-Universität Bonn|Germany
209|Universität Hamburg|Germany
211|Universitat Autònoma de Barcelona|Spain
212|Chulalongkorn University|Thailand
213|Hamad Bin Khalifa University (HBKU)|Qatar
213|Keio University|Japan
215|Massey University|New Zealand
216|Hong Kong Baptist University|Hong Kong SAR China
217|United Arab Emirates University|United Arab Emirates
218|Friedrich-Alexander-Universität Erlangen-Nürnberg|Germany
218|The Hebrew University of Jerusalem|Israel
220|University College Cork|Ireland
221|Indian Institute of Science (IISc) Bangalore|India
221|Indian Institute of Technology Kanpur (IITK)|India
223|American University of Beirut (AUB)|Lebanon
223|University of Twente|Netherlands
225|University of Gothenburg|Sweden
226|Universidad Autónoma de Madrid|Spain
227|Deakin University|Australia
228|University of Florida|United States
228|University of Ottawa|Canada
230|Eberhard Karls Universität Tübingen|Germany
230|Griffith University|Australia
230|University of Strathclyde|United Kingdom
233|Universidad de los Andes|Colombia
233|University of Lausanne|Switzerland
235|École Normale Supérieure de Lyon|France
235|Tianjin University|China
237|Beijing Normal University|China
237|University of Lisbon|Portugal
239|Central European University|Austria
240|Queensland University of Technology (QUT)|Australia
241|La Trobe University|Australia
241|Victoria University of Wellington|New Zealand
243|Beijing Institute of Technology|China
244|The University of Newcastle, Australia|Australia
245|Albert-Ludwigs-Universität Freiburg|Germany
246|Université Paris 1 Panthéon-Sorbonne|France
246|University of Surrey|United Kingdom
248|Université libre de Bruxelles|Belgium
249|University of Calgary|Canada
250|Technical University of Darmstadt|Germany
251|University of Rochester|United States
252|University of California, Irvine|United States
252|University of Maryland, College Park|United States
254|Maastricht University|Netherlands
255|University of Minnesota (System)|United States
255|University of Porto|Portugal
257|University of Canterbury|New Zealand
258|American University of Sharjah|United Arab Emirates
258|Sun Yat-sen University|China
260|University of Massachusetts Amherst|United States
261|Universiti Teknologi PETRONAS (UTP)|Malaysia
261|University of Göttingen|Germany
263|Universitat Pompeu Fabra (Barcelona)|Spain
264|Norwegian University of Science and Technology|Norway
265|Vanderbilt University|United States
266|Singapore University of Technology and Design|Singapore
267|University of Macau|Macao SAR China
268|University of Virginia|United States
269|University of Cologne|Germany
270|Dartmouth College|United States
270|University of Milan|Italy
272|Taylor’s University|Malaysia
273|Charles University|Czechia
273|University of Sussex|United Kingdom
275|University of Galway|Ireland
276|Universitas Airlangga|Indonesia
277|Universidade Estadual de Campinas (Unicamp)|Brazil
277|University of Antwerp|Belgium
279|Istanbul Technical University|Türkiye
279|University of Navarra|Spain
279|University of Pittsburgh|United States
282|UCSI University|Malaysia
283|Radboud University|Netherlands
283|University of Bergen|Norway
283|University of Sharjah|United Arab Emirates
283|University of Southern Denmark (SDU)|Denmark
287|Institut Teknologi Bandung (ITB)|Indonesia
288|University of Aberdeen|United Kingdom
289|Georgetown University|United States
289|University of Warsaw|Poland
291|Swinburne University of Technology|Australia
292|University of Johannesburg|South Africa
293|Universidad Nacional de Colombia|Colombia
293|University of Waikato|New Zealand
295|Vrije Universiteit Brussel (VUB)|Belgium
296|Stellenbosch University|South Africa
296|Xi’an Jiaotong University|China
298|Dalhousie University|Canada
299|Ulsan National Institute of Science and Technology (UNIST)|South Korea
300|Sichuan University|China
300|University of Notre Dame|United States`;
const UNI=QS.split('\n').map(l=>{const [r,n,co,city,sl]=l.split('|');const slug=sl||('q'+r+'-'+n.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,40));return {n,t:'University',co,city:city||'',qs:!!sl,r:+r,slug,st:null,intl:null,fac:null,ac:null,tu:null,f:null,str:[],ins:`Ranked #${r} in the QS World University Rankings 2027.`}});
Object.assign(UNI[0],{st:11694,intl:3808,fac:3112,ins:'Ranked #1 in the QS World University Rankings 2027. Student and staff figures are from the QS profile.'});
const INST=UNI;


const grad=h=>`hsl(${h} 34% 40%)`;
const ini=n=>n.split(' ').map(w=>w[0]).slice(0,2).join('');
const Av=({p,s='w-12 h-12',x=''})=>p.photo?<img src={p.photo} alt="" className={`${s} ${x} rounded-2xl object-cover shrink-0 shadow-lg`}/>:<div className={`${s} ${x} rounded-2xl grid place-items-center text-white font-bold shrink-0 shadow-lg`} style={{background:grad(p.hue)}}>{ini(p.name)}</div>;
const Chip=({children,c=''})=><span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 ${c}`}>{children}</span>;
const card='rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 transition-colors hover:border-slate-300 dark:hover:border-white/25';
const inp='w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500/60 transition';
const btn='inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-95';
const prim=`${btn} text-white bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed`;
const ghost=`${btn} border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10`;

const Modal=({onClose,children})=><div className="fixed inset-0 z-50 grid place-items-center p-4 bg-slate-950/60 backdrop-blur-sm" onClick={onClose}><div className="pop relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-white/10 p-6 shadow-2xl" onClick={e=>e.stopPropagation()}><button onClick={onClose} className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10"><I n="x" c="w-4 h-4"/></button>{children}</div></div>;
const Head=({t,s})=><div className="mb-6 up"><h2 className="text-2xl sm:text-3xl">{tr(t)}</h2><p className="text-slate-500 dark:text-slate-400 mt-1">{tr(s)}</p></div>;
const Tabs=({v,set,opts})=><div className="inline-flex p-1 rounded-2xl bg-slate-200/70 dark:bg-white/10 max-w-full overflow-x-auto">{opts.map(([k,l,ic])=><button key={k} onClick={()=>set(k)} className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${v===k?'bg-white dark:bg-slate-800 shadow text-violet-600 dark:text-violet-300':'text-slate-500 dark:text-slate-400'}`}>{ic&&<I n={ic} c="w-4 h-4"/>}{tr(l)}</button>)}</div>;

const mj=en=>{const m=MAJORS.find(x=>x.en===en);return m?L3(m.name):en};
function Discover({myId,friends,sent,received,connect,accept,openChat,invite,initMajor}){
  const [mode,setMode]=useState('partner'),[q,setQ]=useState(''),[maxAge,setMaxAge]=useState(30),[major,setMajor]=useState(initMajor||''),[type,setType]=useState('All'),[sel,setSel]=useState(null);
  const extra=[...new Set(PEOPLE.map(p=>p.major))].filter(x=>x&&!MAJORS.some(m=>m.en===x));
  const list=useMemo(()=>PEOPLE.filter(p=>p.id!==myId&&(p.mode===mode||p.mode==='both')&&p.age<=maxAge&&(!major||p.major===major)&&(type==='All'||p.type===type)&&(`${p.name} ${p.inst} ${p.target||''} ${p.major} ${(p.skills||[]).join(' ')} ${p.goal}`).toLowerCase().includes(q.toLowerCase())),[mode,q,maxAge,major,type,PEOPLE]);
  const act=(p,cls='')=>friends.has(p.id)?<button onClick={e=>{e.stopPropagation();openChat(p.id);setSel(null)}} className={`${ghost} ${cls}`}><I n="msg" c="w-4 h-4"/>{tr('Message')}</button>
    :received.has(p.id)?<button onClick={e=>{e.stopPropagation();accept(received.get(p.id),'accepted')}} className={`${prim} ${cls}`}><I n="check" c="w-4 h-4"/>{tr('Accept request')}</button>
    :sent.has(p.id)?<button disabled className={`${ghost} ${cls} opacity-60`}>{tr('Request sent')}</button>
    :<button onClick={e=>{e.stopPropagation();connect(p.id)}} className={`${prim} ${cls}`}><I n="plus" c="w-4 h-4"/>{tr('Connect')}</button>;
  return <div>
    <Head t={mode==='partner'?'Find a study partner':'Find a co-founder'} s="Match with students who share your goals and skills."/>
    <div className="flex flex-wrap gap-3 mb-4 up"><Tabs v={mode} set={setMode} opts={[['partner','Study Partners','book'],['cofounder','Startup Co-founders','rocket']]}/><Tabs v={type} set={setType} opts={[['All','All'],['University','Universities'],['School','Schools']]}/></div>
    <div className={`${card} p-4 mb-6 grid gap-3 md:grid-cols-4 up`}>
      <div className="relative md:col-span-2"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder={tr('Search name, skills, interests, institution…')} value={q} onChange={e=>setQ(e.target.value)}/></div>
      <select className={inp} value={major} onChange={e=>setMajor(e.target.value)}><option value="">{tr('All majors')}</option>{MAJORS.map(m=><option key={m.en} value={m.en}>{L3(m.name)}</option>)}{extra.map(x=><option key={x} value={x}>{x}</option>)}</select>
      <label className="text-xs text-slate-500 flex flex-col gap-1">{tr('Max age')}: <b className="text-slate-900 dark:text-white">{maxAge}</b><input type="range" min="16" max="30" value={maxAge} onChange={e=>setMaxAge(+e.target.value)} className="accent-violet-600"/></label>
    </div>
    {!list.length&&(PEOPLE.length?<div className="text-center py-16 text-slate-500">{tr('No matches yet. Try loosening your filters.')}</div>:<div className={`${card} p-10 text-center up`}><h3 className="font-display text-xl">{tr('No students here yet')}</h3><p className="text-slate-500 mt-2 max-w-md mx-auto">{tr('Students appear here once they join through your invite link and create a profile.')}</p><button className={prim+' mt-5'} onClick={invite}><I n="plus" c="w-4 h-4"/>{tr('Get invite link')}</button></div>)}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((p,i)=><div key={p.id} className={`${card} p-5 up cursor-pointer`} style={{animationDelay:`${i*40}ms`}} onClick={()=>setSel(p)}>
      <div className="flex gap-3 items-center"><Av p={p}/><div className="min-w-0"><h3 className="font-semibold truncate">{p.name}</h3><p className="text-xs text-slate-500 truncate">{mj(p.major)} · {p.age}</p></div></div>
      <p className="text-sm mt-4 text-slate-600 dark:text-slate-300 line-clamp-2">{p.goal}</p>
      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-3"><I n={p.type==='School'?'book':'cap'} c="w-3.5 h-3.5"/>{p.type==='School'?`${tr('Target university')}: ${p.target||'—'}`:p.inst}</div>
      <div className="flex flex-wrap gap-1.5 mt-3">{(p.skills||[]).map(s=><Chip key={s}>{s}</Chip>)}</div>
      {act(p,'w-full mt-4')}
    </div>)}</div>
    {sel&&<Modal onClose={()=>setSel(null)}><div className="flex gap-4 items-center"><Av p={sel} s="w-16 h-16"/><div><h3 className="font-display text-xl">{sel.name}</h3><p className="text-sm text-slate-500">{mj(sel.major)} · {sel.age}</p></div></div>
      <div className="mt-5 space-y-4 text-sm"><div><b>{sel.type==='School'?tr('Target university'):tr('Institution')}</b><p className="text-slate-500">{sel.type==='School'?(sel.target||'—'):sel.inst} ({tr(sel.type)})</p></div><div><b>{tr('Goal')}</b><p className="text-slate-500">{sel.goal}</p></div><div><b>{tr('Looking for')}</b><p className="text-slate-500">{sel.mode==='both'?tr('Study partner')+' & '+tr('Startup co-founder'):sel.mode==='partner'?tr('Study partner'):tr('Startup co-founder')}</p></div><div className="flex flex-wrap gap-1.5">{(sel.skills||[]).map(s=><Chip key={s}>{s}</Chip>)}</div></div>
      <div className="mt-6">{act(sel,'w-full')}</div></Modal>}
  </div>;
}

function Majors({goMajor}){
  const [q,setQ]=useState(''),[cat,setCat]=useState('All'),[sel,setSel]=useState(null);
  const list=MAJORS.filter(m=>(cat==='All'||m.cat===cat)&&(`${m.name.en} ${m.name.ru} ${m.name.uz}`).toLowerCase().includes(q.toLowerCase()));
  const count=m=>PEOPLE.filter(p=>p.major===m.en).length;
  return <div>
    <Head t="Majors" s="Fields of study you can choose, in plain words. Pick one to see who studies it."/>
    <div className="flex flex-wrap gap-3 mb-6 up"><Tabs v={cat} set={setCat} opts={[['All','All'],...MAJOR_CATS.map(c=>[c,c])]}/><div className="relative flex-1 min-w-[200px]"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder={tr('Search majors…')} value={q} onChange={e=>setQ(e.target.value)}/></div></div>
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((m,i)=><div key={m.en} onClick={()=>setSel(m)} className={`${card} p-5 cursor-pointer up`} style={{animationDelay:`${i*25}ms`}}><Chip>{tr(m.cat)}</Chip><h3 className="font-display text-lg mt-3">{L3(m.name)}</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5">{L3(m.desc)}</p><p className="text-xs text-slate-500 mt-3">{count(m)} {tr('students on Studymatch')}</p></div>)}</div>
    {!list.length&&<p className="text-center py-16 text-slate-500">{tr('Nothing matches')}</p>}
    {sel&&<Modal onClose={()=>setSel(null)}><Chip>{tr(sel.cat)}</Chip><h3 className="font-display text-2xl mt-2">{L3(sel.name)}</h3><p className="text-slate-600 dark:text-slate-300 mt-3">{L3(sel.desc)}</p><button className={prim+' w-full mt-6'} onClick={()=>{goMajor(sel.en);setSel(null)}}>{tr('Find students in this major')}</button></Modal>}
  </div>;
}

const SATTXT={us:'SAT or ACT: required or optional depending on the university. Check each policy.',some:'SAT is sometimes accepted from international applicants. Check the university.',none:'SAT is usually not required. Admission is based on your school-leaving results.'};
const GRADES='Strong grades are expected, and more so at top-ranked universities.';
const VCOL={easy:'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',medium:'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',hard:'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'};
const VLAB={easy:'Easy',medium:'Medium',hard:'Hard'};
function Institutions({uinfo}){
  const [q,setQ]=useState(''),[t,setT]=useState('University'),[sort,setSort]=useState('r'),[co,setCo]=useState(''),[sel,setSel]=useState(null);
  const hit=s=>s.toLowerCase().includes(q.toLowerCase());
  const ul=(t==='School'?[]:INST.filter(i=>(!co||i.co===co)&&hit(`${i.n} ${i.co} ${i.city}`))).sort((a,b)=>sort==='s'?(b.st||0)-(a.st||0):sort==='n'?a.n.localeCompare(b.n):a.r-b.r);
  const sl=t==='University'?[]:SCHOOLS.filter(s=>(!co||s.co===co)&&hit(`${s.n} ${s.co} ${s.city}`));
  const countries=[...new Set([...INST.map(i=>i.co),...SCHOOLS.map(s=>s.co)])].sort();
  const Stat=({l,v})=><div className="rounded-xl bg-slate-100 dark:bg-white/5 p-3"><p className="text-xs text-slate-500">{tr(l)}</p><p className="font-semibold">{v}</p></div>;
  const n=x=>x?x.toLocaleString():'—';
  return <div>
    <Head t="Universities and schools" s="The QS World University Rankings 2027 top 300, and schools that offer scholarships or aid."/>
    <div className="flex flex-wrap gap-3 mb-6 up"><Tabs v={t} set={setT} opts={[['University','All Universities','cap'],['School','All Schools','book']]}/>
      <div className="relative flex-1 min-w-[200px]"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder={tr('Search by name, country or city…')} value={q} onChange={e=>setQ(e.target.value)}/></div>
      <select className={inp+' !w-auto'} value={co} onChange={e=>setCo(e.target.value)}><option value="">{tr('All countries')}</option>{countries.map(c=><option key={c} value={c}>{tr(c)}</option>)}</select>
      <select className={inp+' !w-auto'} value={sort} onChange={e=>setSort(e.target.value)}><option value="r">{tr('Sort: Ranking')}</option><option value="s">{tr('Sort: Students')}</option><option value="n">{tr('Sort: Name')}</option></select></div>
    {t!=='School'&&<p className="text-xs text-slate-500 mb-4">{tr('Ranks are from QS World University Rankings 2027. Ties share a rank. Full ranking:')} <a className="underline" href="https://www.topuniversities.com/world-university-rankings" target="_blank" rel="noopener noreferrer">topuniversities.com</a></p>}
    {t!=='University'&&<div className={`${card} p-4 mb-6 text-sm text-slate-600 dark:text-slate-300`}>{tr('Schools marked “Confirmed for Uzbek students” have a scholarship we checked on the school’s own pages. The others are known for offering aid to some international students, so check each school. Schools in Kazakhstan, Kyrgyzstan and Tajikistan are not listed because we could not verify them.')}</div>}
    <div className="grid md:grid-cols-2 gap-5">
      {sl.map((s,k)=><div key={s.n} onClick={()=>setSel({...s,school:true})} className={`${card} p-5 up cursor-pointer`} style={{animationDelay:`${k*40}ms`}}><Chip c={s.tier!=='check'?'!bg-violet-100 !text-violet-700 dark:!bg-violet-400/15 dark:!text-violet-300':''}>{s.tier==='uzbek'?tr('Confirmed for Uzbek students'):s.tier==='local'?tr('School in Uzbekistan'):tr('Check aid for international students')}</Chip><h3 className="font-semibold mt-3">{s.n}</h3><p className="text-xs text-slate-500 flex items-center gap-1 mt-1"><I n="pin" c="w-3 h-3"/>{s.city}, {tr(s.co)}</p><p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3">{L3(s.scholar)}</p></div>)}
      {ul.map((i,k)=><div key={i.n} onClick={()=>setSel(i)} className={`${card} p-5 flex gap-4 up cursor-pointer`} style={{animationDelay:`${k*20}ms`}}>
        <div className="w-14 h-14 rounded-xl grid place-items-center text-white font-semibold text-sm shrink-0 bg-slate-800 dark:bg-slate-700">#{i.r}</div>
        <div className="min-w-0"><h3 className="font-semibold">{i.n}</h3><p className="text-xs text-slate-500 flex items-center gap-1 mt-1"><I n="pin" c="w-3 h-3"/>{i.city?i.city+', ':''}{tr(i.co)}</p></div></div>)}
    </div>
    {!ul.length&&!sl.length&&<div className="text-center py-16 text-slate-500">{tr('No institutions found.')}</div>}
    {sel&&sel.school&&<Modal onClose={()=>setSel(null)}><div className="flex flex-wrap gap-2"><Chip>{tr('School')}</Chip><Chip c={sel.tier!=='check'?'!bg-violet-100 !text-violet-700 dark:!bg-violet-400/15 dark:!text-violet-300':''}>{sel.tier==='uzbek'?tr('Confirmed for Uzbek students'):sel.tier==='local'?tr('School in Uzbekistan'):tr('Check aid for international students')}</Chip></div><h3 className="font-display text-2xl mt-2">{sel.n}</h3><p className="text-sm text-slate-500 flex items-center gap-1"><I n="pin" c="w-3.5 h-3.5"/>{sel.city?sel.city+', ':''}{tr(sel.co)}</p>
      <h4 className="font-semibold mt-5">{tr('Scholarship')}</h4><p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{L3(sel.scholar)}</p>
      <h4 className="font-semibold mt-4">{tr('How to apply')}</h4><p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{L3(sel.how)}</p>
      <a href={sel.url} target="_blank" rel="noopener noreferrer" className={ghost+' w-full mt-5'}>{tr('Official website')}<I n="ext" c="w-4 h-4"/></a></Modal>}
    {sel&&!sel.school&&<Modal onClose={()=>setSel(null)}><Chip>{tr('University')}</Chip><h3 className="font-display text-2xl mt-2">{sel.n}</h3><p className="text-sm text-slate-500 flex items-center gap-1"><I n="pin" c="w-3.5 h-3.5"/>{sel.city?sel.city+', ':''}{tr(sel.co)}</p>
      <div className="grid grid-cols-2 gap-3 mt-5"><Stat l="Ranking" v={`#${sel.r} (QS 2027)`}/><Stat l="Students" v={n(sel.st)}/><Stat l="International students" v={n(sel.intl)}/><Stat l="Faculty staff" v={n(sel.fac)}/><Stat l="Studymatch members" v={PEOPLE.filter(p=>p.inst===sel.n).length}/></div>
      {(()=>{const ty=TYPICAL[sel.co]||TYPICAL.default,vi=VISA[sel.co]||'medium';return <div className="mt-5 rounded-xl bg-slate-100 dark:bg-white/5 p-4 text-sm"><h4 className="font-semibold">{tr('Typical for universities in this country')}</h4>
        <ul className="mt-2 space-y-1.5 text-slate-600 dark:text-slate-300"><li><b>{tr('English test')}:</b> {ty.e}</li><li><b>SAT / ACT:</b> {tr(SATTXT[ty.s])}</li><li><b>{tr('Grades')}:</b> {tr(GRADES)}</li></ul>
        <p className="mt-3 flex items-center gap-2"><b>{tr('Visa for Uzbek citizens')}:</b><span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${VCOL[vi]}`}>{tr(VLAB[vi])}</span></p>
        <p className="text-xs text-slate-500 mt-3">{tr('Our rough guide, not official. These are general ranges for the country, not this university’s own requirements. Rules change and differ by programme, so check the university and the embassy.')}</p></div>})()}
      {(()=>{const u=(uinfo&&uinfo[sel.slug])||{};const has=u.ielts||u.toefl||u.sat||u.gpa||u.deadline||u.scholarship||u.how;return <div className="mt-5"><h4 className="font-semibold">{tr('Admission requirements')}</h4>
        {has?<><div className="grid grid-cols-2 gap-3 mt-2">{[['IELTS',u.ielts],['TOEFL',u.toefl],['SAT / ACT',u.sat],['GPA',u.gpa],['Application deadline',u.deadline]].map(([l,v])=><Stat key={l} l={l} v={v||'—'}/>)}</div>
          {u.scholarship&&<><h4 className="font-semibold mt-4">{tr('Scholarships')}</h4><p className="text-sm text-slate-600 dark:text-slate-300 mt-1 whitespace-pre-line">{u.scholarship}</p></>}
          {u.how&&<><h4 className="font-semibold mt-4">{tr('How to apply')}</h4><p className="text-sm text-slate-600 dark:text-slate-300 mt-1 whitespace-pre-line">{u.how}</p></>}</>
        :<p className="text-sm text-slate-500 mt-2">{tr('Admission details have not been added for this university yet. Open the QS profile or the official admissions page.')}</p>}
        {u.url&&<a href={u.url} target="_blank" rel="noopener noreferrer" className={ghost+' w-full mt-4'}>{tr('Official admissions page')}<I n="ext" c="w-4 h-4"/></a>}</div>})()}
      <p className="text-xs text-slate-500 mt-4">{tr('Student and staff numbers are filled in where the QS profile was available. Open the QS profile for admissions, fees and more.')}</p>
      <a href={sel.qs?`https://www.topuniversities.com/universities/${sel.slug}`:'https://www.topuniversities.com/world-university-rankings'} target="_blank" rel="noopener noreferrer" className={ghost+' w-full mt-5'}>{sel.qs?tr('View full profile on QS'):tr('View full ranking on QS')}<I n="ext" c="w-4 h-4"/></a></Modal>}
  </div>;
}

function Guides(){
  const [c,setC]=useState('IELTS');
  const list=GUIDES.filter(g=>g.cat===c);
  return <div>
    <Head t="Guides" s="Exam prep and study-abroad notes for students in Uzbekistan. Links go to official sources."/>
    <div className="mb-6 up"><Tabs v={c} set={setC} opts={[['IELTS','IELTS'],['SAT','SAT'],['Abroad','Studied abroad'],['Scholarships','Scholarships'],['Resources','Free resources']]}/></div>
    <div className="grid lg:grid-cols-2 gap-5">{list.map(g=><div key={g.id} className={`${card} p-6 up`}><h3 className="font-display text-xl">{L3(g.title)}</h3><p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">{L3(g.sum)}</p>
      <ul className="mt-4 space-y-2.5 text-sm list-disc pl-5 marker:text-violet-600">{(g.pts[LANG]||g.pts.en).map((x,i)=><li key={i}>{x}</li>)}</ul>
      <div className="flex flex-wrap gap-2 mt-5">{g.links.map(k=><a key={k.u} href={k.u} target="_blank" rel="noopener noreferrer" className={ghost+' !py-2 !px-3 text-xs'}>{k.l}<I n="ext" c="w-3.5 h-3.5"/></a>)}</div></div>)}</div>
  </div>;
}

function Files({db,myId,me,flash}){
  const [items,setItems]=useState([]),[cat,setCat]=useState('All'),[q,setQ]=useState(''),[up,setUp]=useState(false),[f,setF]=useState({t:'',k:'Guide',s:''}),[file,setFile]=useState(null),[err,setErr]=useState(''),[busy,setBusy]=useState(false);
  const cats=['All','Guide','Template','Cheat sheet','Notes'];
  useEffect(()=>{if(!db)return;const off=db.collection('materials').onSnapshot(s=>setItems(s.docs.map(x=>({id:x.id,...x.data()})).sort((a,b)=>b.ts-a.ts)));return()=>typeof off==='function'&&off()},[db]);
  const list=items.filter(m=>(cat==='All'||m.k===cat)&&(m.t+m.s).toLowerCase().includes(q.toLowerCase()));
  const size=n=>n>1048576?(n/1048576).toFixed(1)+' MB':Math.max(1,Math.round(n/1024))+' KB';
  const publish=async()=>{if(!file||!f.t)return;setErr('');setBusy(true);try{const as=await claude.use('assets');if(!as)throw 0;const r=await as.upload(file);await db.collection('materials').add({t:f.t,k:f.k,s:f.s||'General',a:me.name||'Member',by:myId,url:r.url,fn:file.name,sz:file.size,ts:Date.now()});setUp(false);setF({t:'',k:'Guide',s:''});setFile(null)}catch(e){setErr(tr('Upload failed')+': '+((e&&(e.message||e.code))||'unknown error')+'. '+tr('Allowed: PDF, images, text, CSV, Markdown, JSON (max 20 MB).'))}setBusy(false)};
  const dl=async m=>{try{const d=await claude.use('downloads');if(!d)throw 0;const b=await (await fetch(m.url)).blob();await d.save({filename:m.fn,data:b})}catch(e){flash(tr('Download is not available right now.'))}};
  const del=async m=>{try{await db.collection('materials').doc(m.id).delete()}catch(e){flash(tr('Could not delete.'))}};
  return <div>
    <div className="flex flex-wrap items-end justify-between gap-3"><Head t="Useful materials" s="Files shared by the community. Download anything with one tap."/><button className={prim+' mb-6'} onClick={()=>db?setUp(true):flash(tr('Open the shared link while signed in to share files.'))}><I n="plus" c="w-4 h-4"/>{tr("Share material")}</button></div>
    <div className="flex flex-wrap gap-3 mb-6 up"><Tabs v={cat} set={setCat} opts={cats.map(c=>[c,c])}/><div className="relative flex-1 min-w-[200px]"><span className="absolute left-3 top-3 text-slate-400"><I n="search" c="w-4 h-4"/></span><input className={inp+' pl-9'} placeholder={tr("Search materials…")} value={q} onChange={e=>setQ(e.target.value)}/></div></div>
    {!list.length&&<div className={`${card} hover:translate-y-0 p-10 text-center up`}><div className="w-14 h-14 mx-auto rounded-2xl grid place-items-center bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300"><I n="file" c="w-7 h-7"/></div><h3 className="text-xl font-extrabold mt-4">{items.length?tr('Nothing matches'):tr('No materials yet')}</h3><p className="text-slate-500 mt-1">{items.length?tr('Try another search or category.'):tr('Share the first guide, template or notes with the community.')}</p></div>}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((m,i)=><div key={m.id} className={`${card} p-5 flex flex-col up`} style={{animationDelay:`${i*40}ms`}}>
      <div className="flex justify-between"><div className="w-11 h-11 rounded-2xl grid place-items-center bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300"><I n="file"/></div><Chip>{tr(m.k)}</Chip></div>
      <h3 className="font-bold mt-4 leading-snug">{m.t}</h3><p className="text-xs text-slate-500 mt-1">{m.s} · by {m.a}</p><p className="text-xs text-slate-400 mt-1 truncate">{m.fn} · {size(m.sz)}</p>
      <div className="flex items-center justify-end gap-2 mt-auto pt-4">{m.by===myId&&<button onClick={()=>del(m)} className="text-xs text-slate-500 hover:text-red-500 mr-auto">{tr("Delete")}</button>}<button onClick={()=>dl(m)} className={prim+' !px-4 !py-2'}><I n="dl" c="w-4 h-4"/>{tr("Download")}</button></div></div>)}</div>
    {up&&<Modal onClose={()=>setUp(false)}><h3 className="text-xl font-extrabold mb-4">{tr("Share a material")}</h3><div className="space-y-3">
      <input className={inp} placeholder={tr("Title")} value={f.t} onChange={e=>setF({...f,t:e.target.value})}/><input className={inp} placeholder={tr("Subject (e.g. Physics)")} value={f.s} onChange={e=>setF({...f,s:e.target.value})}/>
      <select className={inp} value={f.k} onChange={e=>setF({...f,k:e.target.value})}>{cats.slice(1).map(c=><option key={c} value={c}>{tr(c)}</option>)}</select>
      <label className="block rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/15 p-6 text-center text-sm text-slate-500 cursor-pointer hover:border-violet-500 transition">{file?file.name+' · '+size(file.size):'Click to choose a file (PDF, image, text, CSV, Markdown, JSON; up to 20 MB)'}<input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg,.gif,.webp,.txt,.md,.csv,.json" onChange={e=>setFile(e.target.files[0]||null)}/></label>
      <p className="text-xs text-slate-500">{tr("Only share files you created or have the right to share.")}</p>
      {(!f.t||!file)&&<p className="text-xs text-amber-600 dark:text-amber-400">{!f.t?tr('Add a title.'):tr('Choose a file.')}</p>}{err&&<p className="text-xs text-red-500">{err}</p>}<button className={prim+' w-full'} disabled={!f.t||!file||busy} onClick={publish}>{busy?tr('Uploading…'):tr('Publish')}</button></div></Modal>}
  </div>;
}

function Essays({db,myId,me,flash,send}){
  const SEC=['Identity','Challenge','Community','Other'];
  const [items,setItems]=useState([]),[sec,setSec]=useState('Identity'),[open,setOpen]=useState(null),[add,setAdd]=useState(false),[f,setF]=useState({t:'',sec:'Identity',body:'',rev:'',ok:false}),[to,setTo]=useState(''),[files,setFiles]=useState([]),[err,setErr]=useState(''),[busy,setBusy]=useState(false);
  useEffect(()=>{if(!db)return;const off=db.collection('essays').onSnapshot(s=>setItems(s.docs.map(x=>({id:x.id,...x.data()})).sort((a,b)=>b.ts-a.ts)));return()=>typeof off==='function'&&off()},[db]);
  const list=items.filter(e=>e.sec===sec);
  const save=async()=>{setErr('');setBusy(true);try{const imgs=[];if(files.length){const as=await claude.use('assets');if(!as)throw 0;for(const fl of files){const r=await as.upload(fl);imgs.push(r.url)}}await db.collection('essays').add({t:f.t,sec:f.sec,body:f.body,rev:f.rev,imgs,a:me.name||'Member',by:myId,ts:Date.now()});setAdd(false);setSec(f.sec);setF({t:'',sec:'Identity',body:'',rev:'',ok:false});setFiles([])}catch(e){setErr(tr('Could not publish')+': '+((e&&(e.message||e.code))||'upload failed')+'. '+tr('Use PNG, JPG or WebP images.'))}setBusy(false)};
  const dl=async e=>{try{const d=await claude.use('downloads');if(!d)throw 0;const base=e.t.replace(/[^\w]+/g,'-').toLowerCase();if(e.imgs&&e.imgs.length){for(let i=0;i<e.imgs.length;i++){const b=await (await fetch(e.imgs[i])).blob();await d.save({filename:`${base}-${i+1}.${(b.type.split('/')[1]||'png').replace('jpeg','jpg')}`,data:b})}}else await d.save({filename:base+'.txt',data:`${e.t}\nby ${e.a}\n\n${e.body}\n\n${e.rev?'REVIEW\n'+e.rev:''}`})}catch(x){flash(tr('Download is not available right now.'))}};
  const share=e=>{if(!to)return flash(tr('Choose a friend first.'));send(to,`${tr('I shared an essay with you')}: “${e.t}” (${tr('Materials')} › ${tr('Essays')} › ${tr(e.sec)})`);flash(tr('Sent in chat'));setTo('')};
  const del=async e=>{try{await db.collection('essays').doc(e.id).delete();setOpen(null)}catch(x){flash(tr('Could not delete.'))}};
  return <div>
    <div className="flex flex-wrap items-end justify-between gap-3"><Head t="Essays" s="Read essays with reviews, download them, or send them to a friend."/><button className={prim+' mb-6'} onClick={()=>db?(setF(v=>({...v,sec})),setAdd(true)):flash(tr('Open the shared link while signed in to add essays.'))}><I n="plus" c="w-4 h-4"/>{tr("Add essay")}</button></div>
    <div className="mb-6 up"><Tabs v={sec} set={setSec} opts={SEC.map(c=>[c,c])}/></div>
    {!list.length&&<div className={`${card} hover:translate-y-0 p-10 text-center up`}><div className="w-14 h-14 mx-auto rounded-2xl grid place-items-center bg-violet-100 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300"><I n="book" c="w-7 h-7"/></div><h3 className="text-xl font-extrabold mt-4">No essays in {tr(sec)} yet</h3><p className="text-slate-500 mt-1">{tr("Add your own essay and, if you like, a review for it.")}</p></div>}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((e,i)=><div key={e.id} onClick={()=>setOpen(e)} className={`${card} p-5 cursor-pointer up`} style={{animationDelay:`${i*40}ms`}}>{e.imgs&&e.imgs[0]&&<img src={e.imgs[0]} alt="" className="w-full h-40 object-cover object-top rounded-2xl mb-3"/>}<Chip>{tr(e.sec)}</Chip><h3 className="font-bold mt-3 leading-snug">{e.t}</h3><p className="text-xs text-slate-500 mt-1">by {e.a}{e.rev?' · with review':''}</p>{e.body&&<p className="text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-3">{e.body}</p>}</div>)}</div>
    {open&&<Modal onClose={()=>setOpen(null)}><Chip>{tr(open.sec)}</Chip><h3 className="text-2xl font-extrabold mt-2">{open.t}</h3><p className="text-sm text-slate-500">by {open.a}</p>
      {open.body&&<p className="mt-4 text-sm leading-relaxed whitespace-pre-line">{open.body}</p>}{(open.imgs||[]).map((u,i)=><img key={i} src={u} alt={`Page ${i+1}`} className="mt-4 w-full rounded-xl border border-slate-200 dark:border-white/10"/>)}
      {open.rev&&<div className="mt-5 rounded-2xl bg-violet-50 dark:bg-violet-500/10 p-4"><h4 className="font-bold text-sm mb-1">{tr("Review")}</h4><p className="text-sm whitespace-pre-line text-slate-600 dark:text-slate-300">{open.rev}</p></div>}
      <div className="mt-5 flex flex-wrap gap-2"><button className={prim} onClick={()=>dl(open)}><I n="dl" c="w-4 h-4"/>{tr("Download")}</button>{open.by===myId&&<button className={ghost} onClick={()=>del(open)}>{tr("Delete")}</button>}</div>
      <div className="mt-4 flex gap-2"><select className={inp} value={to} onChange={x=>setTo(x.target.value)}><option value="">{tr("Send to a friend…")}</option>{PEOPLE.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select><button className={ghost} onClick={()=>share(open)}><I n="send" c="w-4 h-4"/>{tr("Send")}</button></div></Modal>}
    {add&&<Modal onClose={()=>setAdd(false)}><h3 className="text-xl font-extrabold mb-4">{tr("Add an essay")}</h3><div className="space-y-3">
      <input className={inp} placeholder={tr("Title")} value={f.t} onChange={e=>setF({...f,t:e.target.value})}/>
      <select className={inp} value={f.sec} onChange={e=>setF({...f,sec:e.target.value})}>{SEC.map(c=><option key={c} value={c}>{tr(c)}</option>)}</select>
      <label className="block rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/15 p-6 text-center text-sm text-slate-500 cursor-pointer hover:border-violet-500 transition">{files.length?`${files.length} image${files.length>1?'s':''} selected`:'Click to upload essay images (PNG, JPG, WebP · up to 6 pages)'}<input type="file" multiple accept="image/png,image/jpeg,image/webp" className="hidden" onChange={e=>setFiles([...e.target.files].slice(0,6))}/></label><textarea rows="4" className={inp} placeholder={tr("Essay text (optional if you upload images)")} value={f.body} onChange={e=>setF({...f,body:e.target.value})}/>
      <textarea rows="4" className={inp} placeholder={tr("Review (optional)")} value={f.rev} onChange={e=>setF({...f,rev:e.target.value})}/>
      <label className="flex gap-2 text-xs text-slate-500"><input type="checkbox" checked={f.ok} onChange={e=>setF({...f,ok:e.target.checked})}/>{tr("I wrote this, or I have the right to share it.")}</label>
      {(()=>{const h=!f.t?tr('Add a title.'):(!f.body&&!files.length)?tr('Upload an image or write the essay text.'):!f.ok?tr('Tick the checkbox above to confirm you have the rights.'):'';return h&&<p className="text-xs text-amber-600 dark:text-amber-400">{h}</p>})()}{err&&<p className="text-xs text-red-500">{err}</p>}<button className={prim+' w-full'} disabled={!f.t||(!f.body&&!files.length)||!f.ok||busy} onClick={save}>{busy?tr('Publishing…'):tr('Publish')}</button></div></Modal>}
  </div>;
}
function Materials(p){const [m,setM]=useState('guides');return <div><div className="mb-6"><Tabs v={m} set={setM} opts={[['guides','Guides','cap'],['practice','Practice','file'],['files','Files','file'],['essays','Essays','book']]}/></div>{m==='guides'?<Guides/>:m==='practice'?<Practice tests={p.tests||[]}/>:m==='files'?<Files {...p}/>:<Essays {...p}/>}</div>}


function Composer({busy,isS,onText,onFiles,onMic}){
  const [txt,setTxt]=useState('');
  const go=()=>{const t=txt.trim();if(!t||busy)return;onText(t);setTxt('')};
  const rb='w-10 h-10 rounded-full grid place-items-center shrink-0 transition active:scale-95';
  const soft=`${rb} bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 cursor-pointer`;
  return <div className="p-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
    <label className={soft} title={tr("Send photo")}><I n="image" c="w-5 h-5" sw={1.75}/><input type="file" multiple accept="image/*" className="hidden" onChange={e=>{onFiles('image',[...e.target.files]);e.target.value=''}}/></label>
    <label className={soft} title={tr("Send file")}><I n="clip" c="w-5 h-5" sw={1.75}/><input type="file" multiple accept=".pdf,.txt,.md,.csv,.json" className="hidden" onChange={e=>{onFiles('file',[...e.target.files]);e.target.value=''}}/></label>
    <input className={inp+' !rounded-full !px-4'} placeholder={busy?tr('Sending…'):isS?tr('Save a note…'):tr('Write a message…')} value={txt} onChange={e=>setTxt(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()}/>
    {txt.trim()?<button onClick={go} disabled={busy} className={`${rb} bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50`}><I n="send" c="w-5 h-5" sw={1.75}/></button>
    :<button onClick={onMic} disabled={busy} className={`${rb} bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-50`} title={tr("Record voice message")}><I n="mic" c="w-5 h-5" sw={1.75}/></button>}
  </div>;
}

function Messages({conn,active,setActive,msgs,send,myId,saved,saveItem,delSaved,flash,startCall}){
  const [busy,setBusy]=useState(false),[view,setView]=useState(null),[recOn,setRecOn]=useState(false),[sec,setSec]=useState(0),end=useRef(),mrRef=useRef(),chunks=useRef([]),cancel=useRef(false),t0=useRef(0),tm=useRef();
  const isS=active==='saved';
  const list=PEOPLE.filter(p=>conn.has(p.id)||msgs.some(x=>x.from===p.id&&x.to===myId)),cur=isS?{name:tr('Saved messages'),saved:true}:PEOPLE.find(p=>p.id===active);
  const thread=id=>msgs.filter(x=>(x.from===myId&&x.to===id)||(x.from===id&&x.to===myId)).sort((a,b)=>a.ts-b.ts);
  const m=useMemo(()=>isS?saved.map(x=>({...x,from:myId})).sort((a,b)=>a.ts-b.ts):active?thread(active):[],[msgs,saved,active,myId]);
  useEffect(()=>{end.current&&end.current.scrollIntoView({behavior:'smooth'})},[m.length,active]);
  useEffect(()=>()=>{cancel.current=true;clearInterval(tm.current);try{mrRef.current&&mrRef.current.state!=='inactive'&&mrRef.current.stop()}catch(e){}},[]);
  const fmt=n=>`${Math.floor((n||0)/60)}:${String((n||0)%60).padStart(2,'0')}`;
  const label=x=>x.kind==='image'?tr('Photo'):x.kind==='voice'?tr('Voice message'):x.kind==='file'?(x.fn||tr('File')):x.t;
  const upload=async b=>{const as=await claude.use('assets');if(!as)throw new Error('uploads are not available for your account');return (await as.upload(b)).url};
  const dlFile=async(url,fn)=>{try{const d=await claude.use('downloads');if(!d)throw 0;const b=await (await fetch(url)).blob();await d.save({filename:fn||'file',data:b})}catch(e){flash(tr('Download is not available right now.'))}};
  const deliver=async o=>{setBusy(true);try{let extra={};if(o.blob){const url=await upload(o.blob);extra={kind:o.kind,url,fn:o.fn||'',dur:o.dur||0}}if(isS)await saveItem(o.t||'',extra);else await send(active,o.t||'',extra)}catch(e){flash(tr('Could not send')+': '+((e&&e.message)||'upload failed'))}setBusy(false)};
  const sendText=t=>{if(!busy)deliver({t})};
  const sendFiles=(kind,files)=>files.forEach(f=>deliver({kind,blob:f,fn:f.name}));
  const startRec=async()=>{try{const st=await navigator.mediaDevices.getUserMedia({audio:true});const mr=new MediaRecorder(st);chunks.current=[];cancel.current=false;mr.ondataavailable=e=>{e.data&&e.data.size&&chunks.current.push(e.data)};mr.onstop=()=>{st.getTracks().forEach(t=>t.stop());clearInterval(tm.current);setRecOn(false);const dur=Math.round((Date.now()-t0.current)/1000);if(cancel.current||dur<1||!chunks.current.length)return;const mime=(mr.mimeType||'audio/webm').includes('mp4')?'video/mp4':'video/webm';deliver({kind:'voice',blob:new Blob(chunks.current,{type:mime}),dur,fn:'voice-message'})};mr.start();mrRef.current=mr;t0.current=Date.now();setSec(0);tm.current=setInterval(()=>setSec(Math.round((Date.now()-t0.current)/1000)),500);setRecOn(true)}catch(e){flash(tr('Microphone is not available. Allow microphone access for this page and try again.'))}};
  const stopRec=ok=>{cancel.current=!ok;try{mrRef.current&&mrRef.current.state!=='inactive'&&mrRef.current.stop()}catch(e){}};
  const bub=(x,i)=>{const mine=x.from===myId;
    const body=x.kind==='image'?<img src={x.url} alt="" loading="lazy" onClick={()=>setView(x.url)} className="rounded-xl max-w-[220px] sm:max-w-[280px] cursor-zoom-in"/>:x.kind==='voice'?<div className="flex items-center gap-2"><audio controls preload="none" src={x.url} className="h-10 w-48 max-w-full"/><span className="text-xs opacity-70">{fmt(x.dur)}</span></div>:x.kind==='file'?<button onClick={()=>dlFile(x.url,x.fn)} className="flex items-center gap-2 text-left"><I n="file" c="w-5 h-5 shrink-0"/><span className="text-sm underline break-all">{x.fn}</span></button>:null;
    const act=<span className="opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition flex gap-1 text-slate-400 shrink-0">{isS?<button title={tr("Delete")} onClick={()=>delSaved(x.id)}><I n="trash" c="w-4 h-4"/></button>:<button title={tr("Save to Saved messages")} onClick={()=>saveItem(x.t||'',{kind:x.kind,url:x.url,fn:x.fn,dur:x.dur})}><I n="bookmark" c="w-4 h-4"/></button>}</span>;
    return <div key={x.id||i} className={`group flex items-end gap-1.5 ${mine?'justify-end':''}`}>{mine&&act}<div className={`pop max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm ${mine?'bg-violet-600 text-white rounded-br-md':'bg-slate-100 dark:bg-white/10 rounded-bl-md'}`}>{body}{x.t&&<p className={`whitespace-pre-line break-words ${body?'mt-1.5':''}`}>{x.t}</p>}</div>{!mine&&act}</div>};
  const items=useMemo(()=>m.map(bub),[m,myId,isS]);
  const row=(id,av,name,sub)=><button key={id} onClick={()=>setActive(id)} className={`w-full flex gap-3 p-4 text-left hover:bg-slate-100 dark:hover:bg-white/5 transition ${active===id?'bg-violet-50 dark:bg-violet-500/10':''}`}>{av}<div className="min-w-0"><p className="font-semibold text-sm">{name}</p><p className="text-xs text-slate-500 truncate">{sub}</p></div></button>;
  const sv=(c='w-11 h-11')=><div className={`${c} rounded-2xl grid place-items-center text-white shrink-0 bg-violet-600 shadow-lg`}><I n="bookmark" c="w-5 h-5"/></div>;
  const lastS=saved.slice().sort((a,b)=>b.ts-a.ts)[0];
  return <div>
    <Head t="Messages" s="Chat, send photos, files and voice messages, and keep notes in Saved messages."/>
    <div className={`${card} hover:translate-y-0 overflow-hidden grid md:grid-cols-[280px_1fr] h-[68vh] up`}>
      <div className={`border-r border-slate-200 dark:border-white/10 overflow-y-auto ${cur?'hidden md:block':''}`}>{row('saved',sv(),tr('Saved messages'),lastS?label(lastS):tr('Keep notes, photos, files and voice'))}{list.map(p=>{const l=thread(p.id).slice(-1)[0];return row(p.id,<Av p={p} s="w-11 h-11"/>,p.name,l?label(l):tr('Say hello'))})}{!list.length&&<p className="p-4 text-xs text-slate-500">{tr("Connect with someone in Discover to start a chat.")}</p>}</div>
      {cur?<div className="flex flex-col min-h-0"><div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-white/10"><button className="md:hidden text-sm text-violet-600" onClick={()=>setActive(null)}>←</button>{cur.saved?sv('w-10 h-10'):<Av p={cur} s="w-10 h-10"/>}<div><p className="font-semibold text-sm">{cur.name}</p><p className="text-xs text-slate-500">{cur.saved?tr('Only you can see this'):mj(cur.major)}</p></div>{!cur.saved&&<div className="ml-auto flex gap-1"><button onClick={()=>startCall(cur.id,false)} className="w-10 h-10 rounded-full grid place-items-center bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 transition active:scale-95" title={tr('Voice call')}><I n="phone" c="w-5 h-5" sw={1.75}/></button><button onClick={()=>startCall(cur.id,true)} className="w-10 h-10 rounded-full grid place-items-center bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-500/15 dark:text-violet-300 transition active:scale-95" title={tr('Video call')}><I n="video" c="w-5 h-5" sw={1.75}/></button></div>}</div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">{!m.length&&<p className="text-center text-sm text-slate-500 pt-10">{isS?tr('Save anything you need here: notes, links, photos, files and voice messages.'):tr('No messages yet.')}</p>}{items}<div ref={end}/></div>
        {recOn?<div className="p-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-3"><span className="flex items-end gap-0.5 h-6">{[0,1,2,3,4,5].map(i=><i key={i} className="w-1 rounded-full bg-red-500 animate-pulse" style={{height:`${35+((i*41)%65)}%`,animationDelay:`${i*110}ms`}}/>)}</span><span className="text-sm font-semibold tabular-nums">{fmt(sec)}</span><span className="text-sm text-slate-500 flex-1">{tr("Recording…")}</span><button onClick={()=>stopRec(false)} className="w-10 h-10 rounded-full grid place-items-center bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20" title={tr("Cancel")}><I n="trash" c="w-5 h-5" sw={1.75}/></button><button onClick={()=>stopRec(true)} className="w-10 h-10 rounded-full grid place-items-center bg-violet-600 text-white hover:bg-violet-700" title={tr("Send voice")}><I n="send" c="w-5 h-5" sw={1.75}/></button></div>
        :<Composer busy={busy} isS={isS} onText={sendText} onFiles={sendFiles} onMic={startRec}/>}
      </div>:<div className="hidden md:grid place-items-center text-slate-500 text-sm">{tr("Select a conversation")}</div>}
    </div>
    {view&&<Modal onClose={()=>setView(null)}><img src={view} alt="" className="w-full rounded-xl mt-4"/></Modal>}
  </div>;
}

const L=({l,children})=><label className="block text-sm font-medium">{tr(l)}<div className="mt-1.5">{children}</div></label>;
function Profile({me,setMe}){
  const [f,setF]=useState(me),[ok,setOk]=useState(false),dirty=useRef(false),set=k=>e=>{dirty.current=true;setF({...f,[k]:e.target.value});setOk(false)};
  useEffect(()=>{if(!dirty.current)setF(me)},[me]);
  const need=[!(f.name||'').trim()&&'Full name',!(+f.age>=10)&&'Age',!(f.major||'').trim()&&'Major / field of study',(f.type==='School'?!(f.target||'').trim():!(f.inst||'').trim())&&(f.type==='School'?'Target university':'Educational institution')].filter(Boolean);
  const pick=e=>{const file=e.target.files[0];if(!file)return;const img=new Image(),u=URL.createObjectURL(file);img.onload=()=>{const c=document.createElement('canvas');c.width=c.height=192;const m=Math.min(img.width,img.height);c.getContext('2d').drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,192,192);dirty.current=true;setF(v=>({...v,photo:c.toDataURL('image/jpeg',.82)}));setOk(false);URL.revokeObjectURL(u)};img.src=u};

  return <div className="grid lg:grid-cols-[320px_1fr] gap-6">
    <div className={`${card} p-6 text-center h-fit up`}><Av p={{name:f.name,hue:265,photo:f.photo}} s="w-24 h-24 !rounded-2xl text-2xl" x="mx-auto"/><div className="flex gap-2 justify-center mt-4"><label className={ghost+' cursor-pointer !py-2 !px-3'}>{f.photo?tr('Change photo'):tr('Upload photo')}<input type="file" accept="image/*" className="hidden" onChange={pick}/></label>{f.photo&&<button className={ghost+' !py-2 !px-3'} onClick={()=>{dirty.current=true;setF({...f,photo:''});setOk(false)}}>{tr("Remove")}</button>}</div><h3 className="text-xl font-extrabold mt-4">{f.name}</h3><p className="text-sm text-slate-500">{f.major} · {f.age} yrs</p><p className="text-xs text-slate-500 mt-1">{f.type==='School'?(f.target?tr('Target university')+': '+f.target:''):f.inst}</p>
      <div className="flex flex-wrap gap-1.5 justify-center mt-4">{f.skills.split(',').filter(s=>s.trim()).map(s=><Chip key={s}>{s.trim()}</Chip>)}</div></div>
    <div className={`${card} hover:translate-y-0 p-6 space-y-4 up`}><h3 className="text-xl font-extrabold">{tr("Edit profile")}</h3>
      <div className="grid sm:grid-cols-2 gap-4"><L l="Full name"><input className={inp} value={f.name} onChange={set('name')}/></L><L l="Age"><input type="number" min="13" max="60" className={inp} value={f.age} onChange={set('age')}/></L><L l="Institution type"><select className={inp} value={f.type||'University'} onChange={set('type')}><option value="University">{tr("University")}</option><option value="School">{tr("School")}</option></select></L>
        <L l="Major / field of study"><select className={inp} value={MAJORS.some(m=>m.en===f.major)?f.major:(f.major?'__other':'')} onChange={e=>{dirty.current=true;setOk(false);setF({...f,major:e.target.value==='__other'?' ':e.target.value})}}><option value="">{tr('Choose…')}</option>{MAJORS.map(m=><option key={m.en} value={m.en}>{L3(m.name)}</option>)}<option value="__other">{tr('Other')}</option></select>{f.major&&!MAJORS.some(m=>m.en===f.major)&&<input className={inp+' mt-2'} placeholder={tr('Your major')} value={f.major.trim()} onChange={set('major')}/>}</L>{f.type==='School'?<L l="Target university"><input list="ins" className={inp} placeholder={tr('Your dream university')} value={f.target||''} onChange={set('target')}/><datalist id="ins">{INST.map(i=><option key={i.n} value={i.n}/>)}</datalist></L>:<L l="Educational institution"><input list="ins" className={inp} value={f.inst} onChange={set('inst')}/><datalist id="ins">{INST.map(i=><option key={i.n} value={i.n}/>)}</datalist></L>}</div>
      <L l="I’m looking for"><select className={inp} value={f.mode} onChange={set('mode')}><option value="partner">{tr("Study partner")}</option><option value="cofounder">{tr("Startup co-founder")}</option><option value="both">{tr("Both")}</option></select></L><L l="Skills (comma separated)"><input className={inp} value={f.skills} onChange={set('skills')}/></L><L l="Goals"><textarea rows="3" className={inp} value={f.goal} onChange={set('goal')}/></L>
      <button className={prim} disabled={need.length>0} onClick={async()=>{const r=await setMe(f);setOk(r!==false);if(r!==false)dirty.current=false}}>{ok?<><I n="check" c="w-4 h-4"/>{tr("Saved")}</>:tr('Save changes')}</button>{need.length>0&&<p className="mt-3 text-xs text-amber-600 dark:text-amber-400">{tr('Fill in to create your profile')}: {need.map(x=>tr(x)).join(', ')}</p>}</div></div>;
}

const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const LOC={en:'en-GB',ru:'ru-RU',uz:'uz-UZ'};
const pname=id=>(PEOPLE.find(p=>p.id===id)||{}).name||tr('Someone');

function Calendar({myId,friends,deadlines,sessions,addDeadline,toggleDeadline,delDeadline,book,answer,cancel,call}){
  const [intro,setIntro]=useState(()=>{try{return !localStorage.getItem('sm-cal-intro')}catch(e){return false}});
  const closeIntro=()=>{try{localStorage.setItem('sm-cal-intro','1')}catch(e){}setIntro(false)};
  const [cur,setCur]=useState(()=>{const d=new Date();d.setDate(1);return d}),[day,setDay]=useState(iso(new Date())),[modal,setModal]=useState(null),[f,setF]=useState({title:'',date:iso(new Date()),time:'16:00',to:''});
  const y=cur.getFullYear(),m=cur.getMonth(),off=(new Date(y,m,1).getDay()+6)%7,dim=new Date(y,m+1,0).getDate();
  const cells=[...Array(off).fill(null),...Array.from({length:dim},(_,i)=>i+1)];
  const key=d=>`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  const live=sessions.filter(s=>s.status!=='declined');
  const dl=date=>deadlines.filter(x=>x.date===date),ss=date=>live.filter(x=>x.date===date).sort((a,b)=>a.time.localeCompare(b.time));
  const title=new Intl.DateTimeFormat(LOC[LANG],{month:'long',year:'numeric'}).format(cur);
  const wd=Array.from({length:7},(_,i)=>new Intl.DateTimeFormat(LOC[LANG],{weekday:'short'}).format(new Date(2024,0,1+i)));
  const fl=PEOPLE.filter(p=>friends.has(p.id));
  const open=k=>{setF({title:'',date:day,time:'16:00',to:fl[0]?fl[0].id:''});setModal(k)};
  const today=iso(new Date());
  const badge=s=>s.status==='accepted'?tr('Confirmed'):tr('Waiting for reply');
  return <div>
    <Head t="Calendar" s="Your deadlines and study sessions with friends."/>
    <div className="grid lg:grid-cols-[1fr_360px] gap-6">
      <div className={`${card} hover:border-slate-200 p-5 up`}>
        <div className="flex items-center justify-between mb-4"><h3 className="font-display text-xl capitalize">{title}</h3><div className="flex gap-1"><button className={ghost+' !px-3 !py-1.5'} onClick={()=>setCur(new Date(y,m-1,1))}>←</button><button className={ghost+' !px-3 !py-1.5'} onClick={()=>{const d=new Date();d.setDate(1);setCur(d);setDay(today)}}>{tr('Today')}</button><button className={ghost+' !px-3 !py-1.5'} onClick={()=>setCur(new Date(y,m+1,1))}>→</button></div></div>
        <div className="grid grid-cols-7 text-center text-xs text-slate-500 mb-1">{wd.map(w=><div key={w} className="py-1">{w}</div>)}</div>
        <div className="grid grid-cols-7 gap-1">{cells.map((d,i)=>d==null?<div key={i}/>:<button key={i} onClick={()=>setDay(key(d))} className={`aspect-square rounded-lg text-sm flex flex-col items-center justify-center gap-1 transition ${key(d)===day?'bg-violet-600 text-white':key(d)===today?'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300':'hover:bg-slate-100 dark:hover:bg-white/10'}`}>{d}<span className="flex gap-0.5 h-1.5">{dl(key(d)).length>0&&<i className={`w-1.5 h-1.5 rounded-full ${key(d)===day?'bg-white':'bg-orange-500'}`}/>}{ss(key(d)).length>0&&<i className={`w-1.5 h-1.5 rounded-full ${key(d)===day?'bg-white/70':'bg-slate-700 dark:bg-slate-300'}`}/>}</span></button>)}</div>
        <p className="text-xs text-slate-500 mt-4"><i className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-1"/>{tr('Deadline')} <i className="inline-block w-2 h-2 rounded-full bg-slate-700 dark:bg-slate-300 ml-3 mr-1"/>{tr('Session')}</p>
      </div>
      <div className="space-y-4 up">
        <div className={`${card} hover:border-slate-200 p-5`}><h3 className="font-semibold mb-3">{new Intl.DateTimeFormat(LOC[LANG],{day:'numeric',month:'long',weekday:'long'}).format(new Date(day+'T12:00'))}</h3>
          {ss(day).map(s=>{const other=s.from===myId?s.to:s.from;return <div key={s.id} className="mb-3 rounded-xl bg-slate-100 dark:bg-white/5 p-3 text-sm"><div className="flex justify-between gap-2"><b>{s.time} · {s.title}</b><Chip>{badge(s)}</Chip></div><p className="text-slate-500 mt-1">{tr('With')} {pname(other)}</p>
            <div className="flex flex-wrap gap-2 mt-2">{s.to===myId&&s.status==='pending'&&<><button className={prim+' !py-1.5 !px-3 text-xs'} onClick={()=>answer(s,'accepted')}>{tr('Accept')}</button><button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>answer(s,'declined')}>{tr('Decline')}</button></>}{s.status==='accepted'&&<button className={prim+' !py-1.5 !px-3 text-xs'} onClick={()=>call(other,true)}><I n="video" c="w-3.5 h-3.5"/>{tr('Join call')}</button>}{(s.from===myId||s.status==='accepted')&&<button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>cancel(s)}>{tr('Cancel')}</button>}</div></div>})}
          {dl(day).map(d=><label key={d.id} className="flex items-center gap-2 py-1.5 text-sm"><input type="checkbox" checked={!!d.done} onChange={()=>toggleDeadline(d)} className="accent-violet-600"/><span className={d.done?'line-through text-slate-400':''}>{d.title}</span><button onClick={e=>{e.preventDefault();delDeadline(d)}} className="ml-auto text-slate-400 hover:text-red-500" title={tr('Delete')}><I n="trash" c="w-4 h-4"/></button></label>)}
          {!ss(day).length&&!dl(day).length&&<p className="text-sm text-slate-500">{tr('Nothing planned for this day.')}</p>}
        </div>
        <div className="flex gap-2"><button className={prim+' flex-1'} onClick={()=>open('deadline')}><I n="plus" c="w-4 h-4"/>{tr('Add deadline')}</button><button className={ghost+' flex-1'} onClick={()=>open('session')}><I n="calendar" c="w-4 h-4"/>{tr('Book a session')}</button></div>
      </div>
    </div>
    {intro&&<Modal onClose={closeIntro}><h3 className="font-display text-xl">{tr('How the calendar works')}</h3><ol className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">{['Add a deadline for anything with a date: exam registration, an application, a project.','Book a session with a friend. They get an invitation, and it shows in both calendars once they accept.','On the day, press Join call to talk without leaving Studymatch.'].map((x,i)=><li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300 grid place-items-center text-xs font-semibold shrink-0">{i+1}</span>{tr(x)}</li>)}</ol><button className={prim+' w-full mt-6'} onClick={closeIntro}>{tr('Got it')}</button></Modal>}
    {modal==='deadline'&&<Modal onClose={()=>setModal(null)}><h3 className="font-display text-xl mb-4">{tr('Add deadline')}</h3><div className="space-y-3"><input className={inp} placeholder={tr('What is due? (e.g. IELTS registration)')} value={f.title} onChange={e=>setF({...f,title:e.target.value})}/><input type="date" className={inp} value={f.date} onChange={e=>setF({...f,date:e.target.value})}/><button className={prim+' w-full'} disabled={!f.title.trim()||!f.date} onClick={()=>{addDeadline(f.title.trim(),f.date);setDay(f.date);setModal(null)}}>{tr('Save')}</button></div></Modal>}
    {modal==='session'&&<Modal onClose={()=>setModal(null)}><h3 className="font-display text-xl mb-4">{tr('Book a session')}</h3>
      {!fl.length?<p className="text-sm text-slate-500">{tr('You can book sessions with friends. Send a connection request in Discover first.')}</p>:<div className="space-y-3">
        <select className={inp} value={f.to} onChange={e=>setF({...f,to:e.target.value})}>{fl.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
        <input className={inp} placeholder={tr('Topic (e.g. SAT math practice)')} value={f.title} onChange={e=>setF({...f,title:e.target.value})}/>
        <div className="grid grid-cols-2 gap-3"><input type="date" className={inp} value={f.date} onChange={e=>setF({...f,date:e.target.value})}/><input type="time" className={inp} value={f.time} onChange={e=>setF({...f,time:e.target.value})}/></div>
        <button className={prim+' w-full'} disabled={!f.to||!f.title.trim()||!f.date||!f.time} onClick={()=>{book({to:f.to,title:f.title.trim(),date:f.date,time:f.time});setDay(f.date);setModal(null)}}>{tr('Send invitation')}</button></div>}</Modal>}
  </div>;
}

function CallLayer({rt,myId,meName,cmd,flash}){
  const [st,setSt]=useState(null),[mic,setMic]=useState(true),[cam,setCam]=useState(true),[sec,setSec]=useState(0);
  const [blocked,setBlocked]=useState(false),ra=useRef(null),rs=useRef(null),pc=useRef(null),local=useRef(null),pend=useRef([]),stRef=useRef(null),lv=useRef(null),rv=useRef(null),tm=useRef(),to=useRef(),h=useRef();
  stRef.current=st;
  const sig=(peer,m)=>rt&&rt.send('u:'+peer,{...m,from:myId,name:meName}).catch(()=>{});
  const cleanup=()=>{clearInterval(tm.current);clearTimeout(to.current);try{pc.current&&pc.current.close()}catch(e){}pc.current=null;if(local.current){local.current.getTracks().forEach(t=>t.stop());local.current=null}pend.current=[];rs.current=null;if(ra.current)ra.current.srcObject=null;setBlocked(false);setSt(null);setSec(0);setMic(true);setCam(true)};
  const media=async v=>{local.current=await navigator.mediaDevices.getUserMedia({audio:true,video:v});return local.current};
  const mkpc=peer=>{const p=new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});local.current.getTracks().forEach(t=>p.addTrack(t,local.current));
    p.onicecandidate=e=>{if(e.candidate)sig(peer,{t:'ice',c:e.candidate})};
    p.ontrack=e=>{const ms=rs.current||(rs.current=new MediaStream());ms.addTrack(e.track);if(rv.current)rv.current.srcObject=ms;if(ra.current){ra.current.srcObject=ms;const pl=ra.current.play();if(pl&&pl.catch)pl.catch(()=>setBlocked(true))}};
    p.onconnectionstatechange=()=>{if(p.connectionState==='connected'){setSt(s=>s&&{...s,status:'active'});if(ra.current&&ra.current.srcObject){const pl=ra.current.play();if(pl&&pl.catch)pl.catch(()=>setBlocked(true))}clearTimeout(to.current);clearInterval(tm.current);const t0=Date.now();tm.current=setInterval(()=>setSec(Math.round((Date.now()-t0)/1000)),1000)}else if(p.connectionState==='failed'){flash(tr('Call failed. Your network may block direct calls.'));cleanup()}};
    pc.current=p;return p};
  const start=async(peer,v)=>{
    if(!rt)return flash(tr('Calls need the online version of Studymatch.'));
    if(stRef.current)return;
    if(!window.RTCPeerConnection||!navigator.mediaDevices)return flash(tr('Calls are not supported in this browser.'));
    try{await media(v)}catch(e){return flash(tr('Camera or microphone is not available.'))}
    setSt({status:'calling',peer,name:pname(peer),video:v});sig(peer,{t:'invite',video:v});
    to.current=setTimeout(()=>{sig(peer,{t:'end'});flash(tr('No answer'));cleanup()},45000)};
  const accept=async()=>{const s=stRef.current;try{await media(s.video)}catch(e){sig(s.peer,{t:'decline'});flash(tr('Camera or microphone is not available.'));return cleanup()}clearTimeout(to.current);mkpc(s.peer);setSt({...s,status:'connecting'});sig(s.peer,{t:'accept'})};
  const hang=()=>{const s=stRef.current;if(s)sig(s.peer,{t:s.status==='ringing'?'decline':'end'});cleanup()};
  h.current=async m=>{const s=stRef.current;
    if(m.t==='invite'){if(s){sig(m.from,{t:'busy'});return}setSt({status:'ringing',peer:m.from,name:pname(m.from)!==tr('Someone')?pname(m.from):(m.name||tr('Someone')),video:!!m.video});to.current=setTimeout(cleanup,45000);return}
    if(!s||m.from!==s.peer)return;
    try{
      if(m.t==='accept'){clearTimeout(to.current);const p=mkpc(s.peer);const o=await p.createOffer();await p.setLocalDescription(o);sig(s.peer,{t:'offer',sdp:o});setSt({...s,status:'connecting'})}
      else if(m.t==='offer'&&pc.current){await pc.current.setRemoteDescription(m.sdp);for(const c of pend.current)await pc.current.addIceCandidate(c);pend.current=[];const a=await pc.current.createAnswer();await pc.current.setLocalDescription(a);sig(s.peer,{t:'answer',sdp:a})}
      else if(m.t==='answer'&&pc.current){await pc.current.setRemoteDescription(m.sdp);for(const c of pend.current)await pc.current.addIceCandidate(c);pend.current=[]}
      else if(m.t==='ice'){if(pc.current&&pc.current.remoteDescription)await pc.current.addIceCandidate(m.c);else pend.current.push(m.c)}
      else if(['decline','busy','end'].includes(m.t)){flash(m.t==='busy'?tr('Line is busy'):m.t==='decline'?tr('Call declined'):tr('Call ended'));cleanup()}
    }catch(e){cleanup()}};
  useEffect(()=>{if(!rt||!myId||myId==='local')return;return rt.subscribe('u:'+myId,m=>h.current(m))},[rt,myId]);
  useEffect(()=>{if(cmd)start(cmd.peer,cmd.video)},[cmd]);
  useEffect(()=>()=>cleanup(),[]);
  useEffect(()=>{if(lv.current&&local.current)lv.current.srcObject=local.current},[st&&st.status]);
  if(!st)return null;
  const fmt=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
  const label=st.status==='ringing'?tr('Incoming call'):st.status==='calling'?tr('Calling…'):st.status==='connecting'?tr('Connecting…'):fmt(sec);
  const showV=st.video&&st.status==='active';
  return <div className="fixed inset-0 z-[70] bg-slate-950 text-white flex flex-col">
    <audio ref={ra} autoPlay playsInline/><video ref={rv} autoPlay playsInline muted className={showV?'absolute inset-0 w-full h-full object-cover':'hidden'}/>
    <div className="relative flex-1 grid place-items-center text-center p-6"><div><div className="w-24 h-24 mx-auto rounded-2xl grid place-items-center text-3xl font-semibold bg-violet-600">{ini(st.name)}</div><h3 className="font-display text-2xl mt-4">{st.name}</h3><p className="text-white/70 mt-1">{label}</p>{st.video&&<p className="text-xs text-white/50 mt-1">{tr('Video call')}</p>}</div></div>
    {st.video&&<video ref={lv} autoPlay playsInline muted className="absolute right-4 top-4 w-28 sm:w-40 rounded-xl border border-white/20 bg-slate-900 -scale-x-100"/>}
    <div className="relative p-6 flex justify-center items-center gap-5" style={{paddingBottom:'calc(1.5rem + env(safe-area-inset-bottom,0px))'}}>
      {st.status==='ringing'?<><button onClick={hang} className="w-16 h-16 rounded-full grid place-items-center bg-red-600 hover:bg-red-700 text-white transition active:scale-95" title={tr('Decline')}><I n="phone" c="w-7 h-7 rotate-[135deg]" sw={1.75}/></button><button onClick={accept} className="w-16 h-16 rounded-full grid place-items-center bg-emerald-500 hover:bg-emerald-600 text-white animate-pulse transition active:scale-95" title={tr('Accept')}><I n="phone" c="w-7 h-7" sw={1.75}/></button></>
      :<>{st.status!=='calling'&&<><button onClick={()=>{local.current&&local.current.getAudioTracks().forEach(t=>t.enabled=!mic);setMic(!mic)}} className={`w-14 h-14 rounded-full grid place-items-center transition active:scale-95 ${mic?'bg-white/15 hover:bg-white/25':'bg-white text-slate-900'}`} title={mic?tr('Mute'):tr('Unmute')}><I n="mic" c="w-6 h-6" sw={1.75}/></button>{st.video&&<button onClick={()=>{local.current&&local.current.getVideoTracks().forEach(t=>t.enabled=!cam);setCam(!cam)}} className={`w-14 h-14 rounded-full grid place-items-center transition active:scale-95 ${cam?'bg-white/15 hover:bg-white/25':'bg-white text-slate-900'}`} title={cam?tr('Camera off'):tr('Camera on')}><I n="video" c="w-6 h-6" sw={1.75}/></button>}</>}
        <button onClick={hang} className="w-16 h-16 rounded-full grid place-items-center bg-red-600 hover:bg-red-700 text-white transition active:scale-95" title={st.status==='calling'?tr('Cancel'):tr('End call')}><I n="phone" c="w-7 h-7 rotate-[135deg]" sw={1.75}/></button></>}
      {blocked&&<button onClick={()=>{const pl=ra.current&&ra.current.play();if(pl&&pl.then)pl.then(()=>setBlocked(false)).catch(()=>{})}} className={`${btn} bg-white text-slate-900 absolute -top-4`}>{tr('Tap to enable sound')}</button>}
    </div></div>;
}

function Practice({tests}){
  const [kind,setKind]=useState('SAT'),[run,setRun]=useState(null),[ans,setAns]=useState({}),[done,setDone]=useState(false),[left,setLeft]=useState(0);
  const list=[...SAMPLE_TESTS,...tests].filter(t=>t.kind===kind);
  const start=t=>{setRun(t);setAns({});setDone(false);setLeft((t.mins||0)*60);window.scrollTo(0,0)};
  useEffect(()=>{if(!run||done||!run.mins)return;const id=setInterval(()=>setLeft(x=>{if(x<=1){setDone(true);return 0}return x-1}),1000);return()=>clearInterval(id)},[run,done]);
  const fmt=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
  if(run){const n=run.questions.length,score=run.questions.filter((q,i)=>ans[i]===q.ans).length;
    return <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-5"><button className={ghost+' !py-2'} onClick={()=>setRun(null)}>← {tr('Back to tests')}</button>{run.mins>0&&!done&&<span className="font-semibold tabular-nums">{tr('Time left')}: {fmt(left)}</span>}</div>
      <h2 className="text-2xl mb-4">{run.title}</h2>
      {done&&<div className={`${card} p-5 mb-6`}><p className="text-sm text-slate-500">{tr('Your score')}</p><p className="font-display text-4xl">{score}/{n} <span className="text-lg text-slate-500">({Math.round(score/n*100)}%)</span></p></div>}
      {run.passage&&<div className={`${card} p-5 mb-6 whitespace-pre-line text-sm leading-relaxed`}>{run.passage}</div>}
      <div className="space-y-5">{run.questions.map((q,i)=><div key={i} className={`${card} p-5`}>
        <p className="font-medium mb-3">{i+1}. {q.q}</p>
        <div className="space-y-2">{q.opts.map((o,j)=>{const picked=ans[i]===j,right=q.ans===j;
          const cls=done?(right?'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10':picked?'border-red-400 bg-red-50 dark:bg-red-500/10':'border-slate-200 dark:border-white/10'):(picked?'border-violet-600 bg-violet-50 dark:bg-violet-500/10':'border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5');
          return <label key={j} className={`flex gap-3 items-start rounded-xl border p-3 text-sm cursor-pointer ${cls}`}><input type="radio" className="mt-1 accent-violet-600" name={'q'+i} checked={picked} disabled={done} onChange={()=>setAns({...ans,[i]:j})}/><span><b className="mr-1">{'ABCD'[j]}.</b>{o}</span></label>})}</div>
        {done&&ans[i]!==q.ans&&<p className="text-xs text-slate-500 mt-3">{tr('Correct answer')}: {'ABCD'[q.ans]}. {q.opts[q.ans]}</p>}
      </div>)}</div>
      {!done?<button className={prim+' mt-6'} onClick={()=>setDone(true)}>{tr('Finish and see score')}</button>:<button className={ghost+' mt-6'} onClick={()=>start(run)}>{tr('Try again')}</button>}
    </div>}
  return <div>
    <Head t="Practice tests" s="Short sets you can take right here. Answers are checked instantly."/>
    <div className="mb-6 up"><Tabs v={kind} set={setKind} opts={[['SAT','SAT'],['IELTS','IELTS']]}/></div>
    {!list.length&&<p className="text-slate-500 py-10 text-center">{tr('No tests here yet.')}</p>}
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">{list.map((t,i)=><div key={t.id} className={`${card} p-5 flex flex-col up`} style={{animationDelay:`${i*40}ms`}}>
      <Chip>{t.kind}</Chip><h3 className="font-semibold mt-3 leading-snug">{t.title}</h3><p className="text-xs text-slate-500 mt-1">{t.questions.length} {tr('questions')}{t.mins?` · ${t.mins} ${tr('min')}`:''}</p>
      <button className={prim+' mt-auto !py-2 w-full mt-4'} onClick={()=>start(t)}>{tr('Start test')}</button></div>)}</div>
  </div>;
}

function parseTest(raw){
  const lines=raw.replace(/\r/g,'').split('\n').map(l=>l.trim()).filter(Boolean);
  const qs=[],pass=[],key={};let cur=null,keyMode=false;
  for(const l of lines){
    if(/^(answer key|answers)\s*:?\s*$/i.test(l)){keyMode=true;continue}
    if(keyMode){for(const m of l.matchAll(/(\d{1,3})\s*[.):\-]?\s*\(?([A-D])\b/g))key[+m[1]]='ABCD'.indexOf(m[2]);continue}
    let m;
    if((m=l.match(/^(\d{1,3})[.)]\s+(.*)/))){cur={n:+m[1],q:m[2],opts:[],ans:-1};qs.push(cur);continue}
    if(cur&&(m=l.match(/^answer\s*[:\-]\s*\(?([A-D])/i))){cur.ans='ABCD'.indexOf(m[1].toUpperCase());continue}
    if(cur&&(m=l.match(/^\(?([A-D])[.)]\s*(.*)/))){cur.opts.push(m[2]);continue}
    if(cur){if(cur.opts.length)cur.opts[cur.opts.length-1]+=' '+l;else cur.q+=' '+l}else pass.push(l);
  }
  qs.forEach(q=>{if(key[q.n]!=null)q.ans=key[q.n]});
  return {passage:pass.join('\n'),questions:qs.filter(q=>q.opts.length>=2).map(({q,opts,ans})=>({q,opts,ans}))};
}
async function pdfText(file){
  const pdfjs=await import('pdfjs-dist');
  const w=await import('pdfjs-dist/build/pdf.worker.min.mjs?url');
  pdfjs.GlobalWorkerOptions.workerSrc=w.default;
  const doc=await pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise;
  let out='';
  for(let p=1;p<=doc.numPages;p++){const pg=await doc.getPage(p),c=await pg.getTextContent();let y=null,line='';
    for(const it of c.items){const yy=Math.round(it.transform[5]);if(y!==null&&Math.abs(yy-y)>3){out+=line.trim()+'\n';line=''}y=yy;line+=it.str+' '}
    out+=line.trim()+'\n'}
  return out;
}

function TestBuilder({db,onDone}){
  const [f,setF]=useState({kind:'IELTS',title:'',mins:20,passage:''}),[raw,setRaw]=useState(''),[qs,setQs]=useState([]),[busy,setBusy]=useState(false),[note,setNote]=useState('');
  const run=txt=>{const r=parseTest(txt);setQs(r.questions);setF(v=>({...v,passage:r.passage}));setNote(r.questions.length?`Found ${r.questions.length} questions. Check each one, set the correct answer, then publish.`:'No questions found. Questions must be numbered (1. 2. 3.) with options A. B. C. D.')};
  const onPdf=async e=>{const file=e.target.files[0];if(!file)return;setBusy(true);setNote('Reading PDF…');try{const t=await pdfText(file);setRaw(t);if(!f.title)setF(v=>({...v,title:file.name.replace(/\.pdf$/i,'')}));run(t);if(!t.trim())setNote('No text found. Scanned PDFs (images) cannot be read automatically.')}catch(x){setNote('Could not read this PDF: '+(x.message||x))}setBusy(false);e.target.value=''};
  const setQ=(i,p)=>setQs(qs.map((q,k)=>k===i?{...q,...p}:q));
  const publish=async()=>{setBusy(true);try{await db.collection('tests').add({kind:f.kind,title:f.title,mins:+f.mins||0,passage:f.passage,questions:qs.filter(q=>q.q.trim()&&q.opts.length>=2&&q.ans>=0),ts:Date.now()});onDone()}catch(x){setNote('Could not publish: '+(x.message||x))}setBusy(false)};
  const valid=f.title.trim()&&qs.some(q=>q.ans>=0);
  return <div className="space-y-4">
    <div className="grid sm:grid-cols-3 gap-3"><select className={inp} value={f.kind} onChange={e=>setF({...f,kind:e.target.value})}><option>IELTS</option><option>SAT</option></select><input className={inp} placeholder="Test title" value={f.title} onChange={e=>setF({...f,title:e.target.value})}/><input type="number" className={inp} placeholder="Minutes (0 = no timer)" value={f.mins} onChange={e=>setF({...f,mins:e.target.value})}/></div>
    <div className="rounded-xl border-2 border-dashed border-slate-300 dark:border-white/15 p-5 text-sm"><label className="cursor-pointer underline">Upload a PDF<input type="file" accept="application/pdf" className="hidden" onChange={onPdf}/></label> or paste the text below. Format: numbered questions (1. 2. …), options A. B. C. D., and either “Answer: B” after a question or an “Answer Key” list at the end.<p className="text-xs text-slate-500 mt-2">Only upload material you created or have the right to share.</p></div>
    <textarea rows="8" className={inp+' font-mono text-xs'} placeholder="Paste test text here" value={raw} onChange={e=>setRaw(e.target.value)}/>
    <div className="flex gap-2 items-center"><button className={ghost} onClick={()=>run(raw)} disabled={!raw.trim()}>Parse text</button>{note&&<span className="text-xs text-slate-500">{note}</span>}</div>
    {f.passage&&<textarea rows="5" className={inp+' text-sm'} value={f.passage} onChange={e=>setF({...f,passage:e.target.value})} placeholder="Passage (optional)"/>}
    {qs.map((q,i)=><div key={i} className={`${card} p-4 space-y-2`}><div className="flex gap-2"><textarea rows="2" className={inp+' text-sm'} value={q.q} onChange={e=>setQ(i,{q:e.target.value})}/><button className="text-slate-400 hover:text-red-500" onClick={()=>setQs(qs.filter((_,k)=>k!==i))}><I n="trash" c="w-4 h-4"/></button></div>
      {q.opts.map((o,j)=><div key={j} className="flex items-center gap-2"><b className="w-5 text-sm">{'ABCD'[j]}</b><input className={inp+' !py-1.5 text-sm'} value={o} onChange={e=>setQ(i,{opts:q.opts.map((x,k)=>k===j?e.target.value:x)})}/></div>)}
      <label className="text-xs text-slate-500">Correct answer <select className={inp+' !w-auto inline-block ml-2 !py-1'} value={q.ans} onChange={e=>setQ(i,{ans:+e.target.value})}><option value="-1">— choose —</option>{q.opts.map((_,j)=><option key={j} value={j}>{'ABCD'[j]}</option>)}</select></label></div>)}
    <button className={prim} disabled={!valid||busy} onClick={publish}>{busy?'Working…':'Publish test'}</button>
  </div>;
}

const ARow=({children,onDel})=><div className="flex items-center gap-3 py-2.5 border-b border-slate-200 dark:border-white/10 text-sm"><div className="min-w-0 flex-1">{children}</div>{onDel}</div>;
const AdminShell=({children,ok,onExit,out})=><div className="min-h-screen max-w-4xl mx-auto px-4 py-8"><div className="flex items-center justify-between mb-6"><h1 className="text-2xl">Studymatch admin</h1><div className="flex gap-2"><button className={ghost+' !py-2'} onClick={()=>{location.hash='';onExit()}}>← Back to site</button>{ok&&<button className={ghost+' !py-2'} onClick={out}>Sign out</button>}</div></div>{children}</div>;
function Admin({db,people,mats,ess,tests,uinfo,onExit}){
  const [ok,setOk]=useState(null),[em,setEm]=useState(''),[pw,setPw]=useState(''),[err,setErr]=useState(''),[sec,setSec]=useState('members'),[bans,setBans]=useState([]),[uni,setUni]=useState(INST[0].slug),[form,setForm]=useState({}),[saved,setSaved]=useState(''),[building,setBuilding]=useState(false),[bulk,setBulk]=useState(''),[bulkMsg,setBulkMsg]=useState('');
  const api=useRef(null);
  useEffect(()=>{(async()=>{try{api.current=await claude.use('admin');setOk(api.current?await api.current.isAdmin():false)}catch(e){setOk(false)}})()},[]);
  useEffect(()=>{if(ok&&sec==='members')api.current.bans().then(setBans).catch(()=>{})},[ok,sec]);
  useEffect(()=>{setForm(uinfo[uni]||{});setSaved('')},[uni,uinfo]);
  const login=async()=>{setErr('');try{await api.current.signIn(em,pw);location.reload()}catch(e){setErr(e.message||'Sign-in failed')}};
  const out=async()=>{try{await api.current.signOut()}catch(e){}location.hash='';location.reload()};
  const del=async(col,id)=>{if(!confirm('Delete this?'))return;try{await db.collection(col).doc(id).delete()}catch(e){alert('Failed: '+(e.message||e))}};
  const ban=async p=>{if(!confirm(`Ban ${p.name} and remove everything they posted?`))return;try{await api.current.ban(p.id);api.current.bans().then(setBans)}catch(e){alert('Failed: '+(e.message||e))}};
  const unban=async id=>{try{await api.current.unban(id);api.current.bans().then(setBans)}catch(e){alert('Failed: '+(e.message||e))}};
  const bulkImport=async()=>{let n=0;const bad=[];for(const line of bulk.split('\n')){const p=line.split('|').map(x=>x.trim());if(p.length<2||!p[0])continue;const k=p[0].toLowerCase();const u=INST.find(i=>i.n.toLowerCase()===k)||INST.find(i=>i.n.toLowerCase().includes(k));if(!u){bad.push(p[0]);continue}const [,ielts,toefl,sat,gpa,deadline,scholarship,how,url]=p;try{await db.collection('uni_info').doc(u.slug).set({ielts:ielts||'',toefl:toefl||'',sat:sat||'',gpa:gpa||'',deadline:deadline||'',scholarship:scholarship||'',how:how||'',url:url||''});n++}catch(e){bad.push(p[0])}}setBulkMsg(`Imported ${n}.`+(bad.length?' Not found or failed: '+bad.join('; '):''))};
  const saveUni=async()=>{try{await db.collection('uni_info').doc(uni).set(form);setSaved('Saved')}catch(e){setSaved('Failed: '+(e.message||e))}};
  if(ok===null)return <AdminShell ok={ok} onExit={onExit} out={out}><p className="text-slate-500">Loading…</p></AdminShell>;
  if(!ok)return <AdminShell ok={ok} onExit={onExit} out={out}><div className={`${card} p-6 max-w-sm`}><h2 className="text-xl mb-4">Admin sign-in</h2>
    {!api.current?<p className="text-sm text-slate-500">Admin works only with the online version (Supabase).</p>:<div className="space-y-3"><input className={inp} type="email" placeholder="Email" value={em} onChange={e=>setEm(e.target.value)}/><input className={inp} type="password" placeholder="Password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==='Enter'&&login()}/>{err&&<p className="text-xs text-red-500">{err}</p>}<button className={prim+' w-full'} onClick={login}>Sign in</button><p className="text-xs text-slate-500">Only accounts listed as admins can use this page.</p></div>}</div></AdminShell>;
  const U=INST.find(i=>i.slug===uni)||INST[0];
  const fld=(k,l,ph)=><label className="block text-sm font-medium">{l}<input className={inp+' mt-1.5'} placeholder={ph} value={form[k]||''} onChange={e=>setForm({...form,[k]:e.target.value})}/></label>;
  return <AdminShell ok={ok} onExit={onExit} out={out}>
    <div className="mb-6"><Tabs v={sec} set={setSec} opts={[['members','Members'],['materials','Files'],['essays','Essays'],['tests','Tests'],['unis','Universities']]}/></div>
    {sec==='members'&&<div><p className="text-sm text-slate-500 mb-3">{people.length} members. “Delete” removes the profile only. “Ban” removes everything the person posted and blocks new posts.</p>
      {people.map(p=><ARow key={p.id} onDel={<div className="flex gap-2"><button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>del('members',p.id)}>Delete</button><button className="rounded-xl px-3 py-1.5 text-xs font-semibold bg-red-600 text-white" onClick={()=>ban(p)}>Ban</button></div>}><b>{p.name}</b> <span className="text-slate-500">· {p.major} · {p.inst} · {p.age}</span><div className="text-[10px] text-slate-400">{p.id}</div></ARow>)}
      {bans.length>0&&<><h3 className="font-semibold mt-6 mb-2">Banned</h3>{bans.map(b=><ARow key={b.user_id} onDel={<button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>unban(b.user_id)}>Unban</button>}><span className="text-xs">{b.user_id}</span></ARow>)}</>}</div>}
    {sec==='materials'&&<div>{!mats.length&&<p className="text-slate-500">No files.</p>}{mats.map(m=><ARow key={m.id} onDel={<button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>del('materials',m.id)}>Delete</button>}><b>{m.t}</b> <span className="text-slate-500">· {m.k} · {m.s} · by {m.a}</span></ARow>)}</div>}
    {sec==='essays'&&<div>{!ess.length&&<p className="text-slate-500">No essays.</p>}{ess.map(m=><ARow key={m.id} onDel={<button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>del('essays',m.id)}>Delete</button>}><b>{m.t}</b> <span className="text-slate-500">· {m.sec} · by {m.a}</span></ARow>)}</div>}
    {sec==='tests'&&<div>{building?<><button className={ghost+' !py-2 mb-4'} onClick={()=>setBuilding(false)}>← Back</button><TestBuilder db={db} onDone={()=>setBuilding(false)}/></>:<><button className={prim+' mb-4'} onClick={()=>setBuilding(true)}><I n="plus" c="w-4 h-4"/>New test (PDF or text)</button>
      {!tests.length&&<p className="text-slate-500">No custom tests yet.</p>}{tests.map(t=><ARow key={t.id} onDel={<button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>del('tests',t.id)}>Delete</button>}><b>{t.title}</b> <span className="text-slate-500">· {t.kind} · {t.questions.length} questions</span></ARow>)}</>}</div>}
    {sec==='unis'&&<div className="space-y-4"><select className={inp} value={uni} onChange={e=>setUni(e.target.value)}>{INST.map(i=><option key={i.slug} value={i.slug}>#{i.r} {i.n}</option>)}</select>
      <p className="text-sm text-slate-500">Details shown to students for <b>{U.n}</b>. Leave a field empty to show a dash.</p>
      <div className="grid sm:grid-cols-2 gap-3">{fld('ielts','IELTS','e.g. 7.0 overall, no band below 6.5')}{fld('toefl','TOEFL','e.g. 100')}{fld('sat','SAT / ACT','e.g. SAT required, middle 50%: 1500–1570')}{fld('gpa','GPA','e.g. 3.9+ / top of class')}{fld('deadline','Application deadline','e.g. 1 Jan (Regular)')}{fld('url','Official admissions link','https://…')}</div>
      <label className="block text-sm font-medium">Scholarships<textarea rows="3" className={inp+' mt-1.5'} value={form.scholarship||''} onChange={e=>setForm({...form,scholarship:e.target.value})}/></label>
      <label className="block text-sm font-medium">How to apply<textarea rows="4" className={inp+' mt-1.5'} value={form.how||''} onChange={e=>setForm({...form,how:e.target.value})}/></label>
      <div className="flex items-center gap-3"><button className={prim} onClick={saveUni}>Save</button>{saved&&<span className="text-sm text-slate-500">{saved}</span>}</div>
      <div className="pt-6 border-t border-slate-200 dark:border-white/10"><h3 className="font-semibold mb-1">Bulk import</h3><p className="text-xs text-slate-500 mb-2">One university per line, fields separated by | in this order: name | IELTS | TOEFL | SAT/ACT | GPA | deadline | scholarship | how to apply | link. The name must match the list (part of the name is enough).</p><textarea rows="6" className={inp+' font-mono text-xs'} value={bulk} onChange={e=>setBulk(e.target.value)} placeholder="Harvard University | no minimum | 100 | SAT or ACT | top of class | 1 Jan | need-based aid | apply via Common App | https://..."/><div className="flex items-center gap-3 mt-2"><button className={ghost} onClick={bulkImport} disabled={!bulk.trim()}>Import</button>{bulkMsg&&<span className="text-xs text-slate-500">{bulkMsg}</span>}</div></div></div>}
  </AdminShell>;
}

function AuthCard({api}){
  const [mode,setMode]=useState('signup'),[em,setEm]=useState(''),[pw,setPw]=useState(''),[msg,setMsg]=useState(''),[err,setErr]=useState(''),[busy,setBusy]=useState(false);
  const run=async f=>{setErr('');setMsg('');setBusy(true);try{await f()}catch(e){setErr((e&&e.message)||String(e))}setBusy(false)};
  const submit=()=>{if(!em.trim()||!pw)return setErr(tr('Please enter email and password.'));if(pw.length<6)return setErr(tr('Use at least 6 characters.'));
    run(async()=>{if(mode==='signup'){const r=await api.signUp(em.trim(),pw);if(r.needsConfirm)setMsg(tr('Check your email to confirm your account, then sign in.'));else location.reload()}else{await api.signIn(em.trim(),pw);location.reload()}})};
  const magic=()=>{if(!em.trim())return setErr(tr('Please enter your email.'));run(async()=>{await api.magic(em.trim());setMsg(tr('Check your email for the link.'))})};
  return <div className={`${card} p-7 max-w-md mx-auto up`}>
    <h2 className="text-2xl">{mode==='signup'?tr('Create your account'):tr('Welcome back')}</h2>
    <p className="text-sm text-slate-500 mt-1">{mode==='signup'?tr('Create an account to make your profile, chat and book sessions.'):tr('Sign in to open your profile.')}</p>
    <button disabled={busy} onClick={()=>run(()=>api.google())} className={`${btn} w-full mt-6 border border-slate-300 dark:border-white/20 bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 !py-3`}>
      <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>
      {tr('Continue with Google')}</button>
    <div className="flex items-center gap-3 my-5 text-xs text-slate-400"><span className="flex-1 h-px bg-slate-200 dark:bg-white/10"/>{tr('or')}<span className="flex-1 h-px bg-slate-200 dark:bg-white/10"/></div>
    <div className="space-y-3"><input className={inp} type="email" placeholder={tr('Email')} value={em} onChange={e=>setEm(e.target.value)}/><input className={inp} type="password" placeholder={tr('Password')} value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()}/></div>
    {err&&<p className="text-xs text-red-500 mt-3">{err}</p>}{msg&&<p className="text-xs text-emerald-600 dark:text-emerald-400 mt-3">{msg}</p>}
    <button disabled={busy} onClick={submit} className={prim+' w-full mt-4 !py-3'}>{mode==='signup'?tr('Create account'):tr('Sign in')}</button>
    <button disabled={busy} onClick={magic} className="w-full mt-3 text-sm text-violet-600 dark:text-violet-300 hover:underline">{tr('Email me a sign-in link')}</button>
    <p className="text-sm text-slate-500 text-center mt-6">{mode==='signup'?<>{tr('Have an account?')} <button className="font-semibold text-violet-600 dark:text-violet-300 hover:underline" onClick={()=>{setMode('signin');setErr('');setMsg('')}}>{tr('Sign in')}</button></>:<>{tr('New here?')} <button className="font-semibold text-violet-600 dark:text-violet-300 hover:underline" onClick={()=>{setMode('signup');setErr('');setMsg('')}}>{tr('Create account')}</button></>}</p>
  </div>;
}

const Mark=()=><span className="font-display text-xl tracking-tight">Study<span className="text-violet-600">match</span></span>;
const LangSwitch=({lang,set})=><div className="flex text-xs font-semibold border border-slate-200 dark:border-white/15 rounded-lg overflow-hidden">{['en','ru','uz'].map(l=><button key={l} onClick={()=>set(l)} className={`px-2.5 py-1.5 uppercase transition ${lang===l?'bg-slate-900 text-white dark:bg-white dark:text-slate-900':'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10'}`}>{l}</button>)}</div>;

function Landing({onEnter,onAdmin,dark,setDark,lang,setLang}){
  const F=[['People','Filter by major, age, school and skills. Send a request, then chat or call inside the site.'],['Universities','The QS World University Rankings 2027 top 100, with country, city and a link to each QS profile.'],['Schools with scholarships','Schools that have offered scholarships to Uzbek students, and how to apply.'],['Exams','Find your study match for exam preparation or building a startup. Guides, practice tests, scholarships and files students share.'],['Calendar','Deadlines and study sessions with friends in one place.'],['Essays','Read essays with reviews, or post your own.']];
  const Q=[['Who is it for?','Students in schools and universities who want a study partner, a co-founder, or just clearer information about studying abroad.'],['How do I join?','Open the invite link, make a profile, and you show up for other members.'],['Is the university data official?','Ranks and names come from the QS World University Rankings 2027. Each university links to its own QS page for details.']];
  const go=t=>()=>{window.scrollTo(0,0);onEnter(t)};
  return <div className="min-h-screen">
    <header className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between"><Mark/><div className="flex items-center gap-2"><LangSwitch lang={lang} set={setLang}/><button onClick={()=>setDark(!dark)} className="p-2 rounded-lg border border-slate-200 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10" aria-label={tr('Toggle theme')}><I n={dark?'sun':'moon'} c="w-4 h-4"/></button></div></header>
    <section className="max-w-5xl mx-auto px-5 pt-14 sm:pt-24 pb-16 border-b border-slate-200 dark:border-white/10">
      <h1 className="text-4xl sm:text-6xl leading-[1.05] max-w-3xl">{tr('Find someone to study with. Or to build something with.')}</h1>
      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">{tr('Find your study match for exam preparation or building a startup. Studymatch is where students in Uzbekistan and beyond find study partners and co-founders, prepare for exams, and compare universities and scholarships without ten tabs open.')}</p>
      <div className="mt-8 flex flex-wrap gap-3"><button onClick={go('profile')} className={prim+' !px-6 !py-3'}>{tr('Create a profile')}</button><button onClick={go('discover')} className={ghost+' !px-6 !py-3'}>{tr('Look around')}</button></div>
    </section>
    <section className="max-w-5xl mx-auto px-5 py-16 border-b border-slate-200 dark:border-white/10"><h2 className="text-3xl mb-10">{tr('What is inside')}</h2>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">{F.map(([t,d],i)=><div key={t} className="flex gap-4"><span className="font-display text-violet-600 text-xl w-6">{i+1}</span><div><h3 className="font-semibold">{tr(t)}</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{tr(d)}</p></div></div>)}</div></section>
    <section className="max-w-5xl mx-auto px-5 py-16 border-b border-slate-200 dark:border-white/10 grid md:grid-cols-[1fr_2fr] gap-8"><h2 className="text-3xl">{tr('Why it exists')}</h2><p className="text-slate-600 dark:text-slate-300 text-lg">{tr('Information about studying abroad is scattered across channels, PDFs and chat threads. Studymatch puts the useful parts in one place, in Uzbek, Russian and English.')}</p></section>
    <section className="max-w-5xl mx-auto px-5 py-16"><h2 className="text-3xl mb-8">{tr('Questions')}</h2><div className="divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">{Q.map(([q,a])=><details key={q} className="py-4 group"><summary className="cursor-pointer list-none flex justify-between font-medium">{tr(q)}<span className="text-violet-600 group-open:rotate-45 transition-transform"><I n="plus" c="w-4 h-4"/></span></summary><p className="text-sm text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">{tr(a)}</p></details>)}</div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4"><p className="text-xs text-slate-500">Studymatch · {tr('University ranks')}: QS World University Rankings 2027</p><button onClick={go('profile')} className={prim}>{tr('Create a profile')}</button></div><div className="text-center mt-10"><button onClick={onAdmin} className="text-[10px] text-slate-400/50 hover:text-slate-500">admin</button></div></section>
  </div>;
}

function NotifPanel({items,onClose,go,answerReq,answerSess,askDesktop}){
  const ic={request:'users',accepted:'check',msg:'msg',session:'calendar',sessionReply:'calendar',upload:'file',deadline:'bell'};
  return <div className="absolute right-0 top-12 w-[22rem] max-w-[92vw] max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl pop z-50" onClick={e=>e.stopPropagation()}>
    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10"><b>{tr('Notifications')}</b><button onClick={onClose} className="text-slate-400"><I n="x" c="w-4 h-4"/></button></div>
    {!items.length&&<p className="p-6 text-sm text-slate-500 text-center">{tr('You are all caught up.')}</p>}
    {items.map(n=><div key={n.k} className="flex gap-3 p-4 border-b border-slate-100 dark:border-white/5 last:border-0 text-sm"><span className={`mt-0.5 ${n.unread?'text-violet-600':'text-slate-400'}`}><I n={ic[n.type]} c="w-4 h-4"/></span>
      <div className="min-w-0 flex-1"><p className={n.unread?'font-medium':''}>{n.text}</p>
        {n.type==='request'?<div className="flex gap-2 mt-2"><button className={prim+' !py-1.5 !px-3 text-xs'} onClick={()=>answerReq(n.req,'accepted')}>{tr('Accept')}</button><button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>answerReq(n.req,'declined')}>{tr('Decline')}</button></div>
        :n.type==='session'?<div className="flex gap-2 mt-2"><button className={prim+' !py-1.5 !px-3 text-xs'} onClick={()=>answerSess(n.sess,'accepted')}>{tr('Accept')}</button><button className={ghost+' !py-1.5 !px-3 text-xs'} onClick={()=>answerSess(n.sess,'declined')}>{tr('Decline')}</button></div>
        :<button className="text-xs text-violet-600 mt-1 underline" onClick={()=>go(n)}>{tr('Open')}</button>}</div></div>)}
    {typeof Notification!=='undefined'&&Notification.permission==='default'&&<button onClick={askDesktop} className="w-full p-3 text-xs text-violet-600 underline">{tr('Turn on desktop alerts')}</button>}
  </div>;
}

function App(){
  const LINK=location.href.split('#')[0]+'#join';
  const [lang,setLangS]=useState(LANG),[dark,setDark]=useState(()=>matchMedia('(prefers-color-scheme: dark)').matches),[tab,setTab]=useState(()=>location.hash==='#join'?'profile':'discover');
  const [me,setMe]=useState({name:'',age:'',major:'',inst:'',skills:'',goal:'',mode:'both',type:'University',target:''}),[joined,setJoined]=useState(false);
  const [db,setDb]=useState(null),[rt,setRt]=useState(null),[myId,setMyId]=useState('local'),[people,setPeople]=useState([]),[all,setAll]=useState([]),[priv,setPriv]=useState([]),[reqs,setReqs]=useState([]),[sess,setSess]=useState([]),[mats,setMats]=useState([]),[ess,setEss]=useState([]);
  const [authApi,setAuthApi]=useState(null),[auth,setAuth]=useState(undefined),[tests,setTests]=useState([]),[uinfoArr,setUinfoArr]=useState([]),[admin,setAdmin]=useState(()=>location.hash==='#admin'),[landing,setLanding]=useState(true),[active,setActive]=useState(null),[inv,setInv]=useState(false),[toast,setToast]=useState(''),[cmd,setCmd]=useState(null),[nOpen,setNOpen]=useState(false),[seen,setSeen]=useState(0),[mf,setMf]=useState('');
  PEOPLE=people;
  const setLang=l=>{setLang0(l);setLangS(l)};
  useEffect(()=>{document.documentElement.classList.toggle('dark',dark);document.documentElement.lang=lang},[dark,lang]);
  useEffect(()=>{let off=[];(async()=>{try{if(!window.claude)return;const u=await claude.use('user'),d=await claude.use('db');const id=u?await u.id():'local';setMyId(id);if(!d)return;setDb(d);try{setRt(await claude.use('rt'))}catch(e){}
    try{const a=await claude.use('auth');if(a){setAuthApi(a);setAuth(await a.user())}else setAuth(false)}catch(e){setAuth(false)}
    const sub=(p,f)=>off.push(d.collection(p).onSnapshot(s=>f(s.docs.map(x=>({id:x.id,...x.data()})))));
    sub('members',a=>{setPeople(a.filter(p=>p.id!==id));const mine=a.find(p=>p.id===id);if(mine){setMe(m=>({...m,...mine,skills:(mine.skills||[]).join(', ')}));setJoined(true)}});
    sub('msgs',setAll);sub('data/users/'+id,setPriv);sub('requests',setReqs);sub('sessions',setSess);sub('materials',setMats);sub('essays',setEss);sub('tests',setTests);sub('uni_info',setUinfoArr);}catch(e){}})();return()=>off.forEach(f=>typeof f==='function'&&f())},[]);
  useEffect(()=>{try{setSeen(+localStorage.getItem('sm-seen-'+myId)||0)}catch(e){}},[myId]);
  useEffect(()=>{if(auth&&!auth.anon&&auth.name)setMe(m=>m.name?m:{...m,name:auth.name})},[auth]);
  const flash=t=>{setToast(t);setTimeout(()=>setToast(''),3200)};
  const need=()=>{flash(tr('Open the shared link while signed in to join the community.'));return false};
  const clean=o=>Object.fromEntries(Object.entries(o).filter(([,v])=>v!==undefined));
  const saveMe=async f=>{setMe(f);if(!db)return need();
    try{await db.collection('members').doc(myId).set({name:f.name||'Student',age:+f.age||18,major:(f.major||'').trim()||'—',inst:f.type==='School'?'—':(f.inst||'—'),target:f.target||'',type:f.type||'University',skills:f.skills.split(',').map(s=>s.trim()).filter(Boolean),goal:f.goal||'',mode:f.mode||'both',photo:f.photo||'',hue:[...myId].reduce((a,c)=>a*31+c.charCodeAt(0),7)%360});setJoined(true);return true}catch(e){flash(tr('Could not save profile.'));return false}};
  const send=(to,t,extra={})=>{if(!db){need();return Promise.reject(new Error('not signed in'))}return db.collection('msgs').add(clean({from:myId,to,t,ts:Date.now(),...extra}))};
  const saved=priv.filter(x=>!x.deadline),deadlines=priv.filter(x=>x.deadline);
  const saveItem=(t,extra={})=>{if(!db){need();return Promise.reject(new Error('not signed in'))}return db.collection('data/users/'+myId).add(clean({t:t||'',ts:Date.now(),...extra}))};
  const delSaved=id=>db&&db.collection('data/users/'+myId).doc(id).delete().catch(()=>flash(tr('Could not delete.')));
  const addDeadline=(title,date)=>db?db.collection('data/users/'+myId).add({deadline:true,title,date,done:false,ts:Date.now()}).catch(()=>flash(tr('Could not save.'))):need();
  const toggleDeadline=d=>db.collection('data/users/'+myId).doc(d.id).set({deadline:true,title:d.title,date:d.date,done:!d.done,ts:d.ts}).catch(()=>{});
  const delDeadline=d=>db.collection('data/users/'+myId).doc(d.id).delete().catch(()=>{});
  // connections
  const friends=new Set(reqs.filter(r=>r.status==='accepted').map(r=>r.from===myId?r.to:r.from));
  const sent=new Set(reqs.filter(r=>r.status==='pending'&&r.from===myId).map(r=>r.to));
  const received=new Map(reqs.filter(r=>r.status==='pending'&&r.to===myId).map(r=>[r.from,r]));
  const connect=id=>{if(!db)return need();if(sent.has(id)||friends.has(id))return;db.collection('requests').add({from:myId,to:id,status:'pending',ts:Date.now()}).then(()=>flash(tr('Request sent'))).catch(()=>flash(tr('Could not send request.')))};
  const answerReq=(r,st)=>db.collection('requests').doc(r.id).update({from:r.from,to:r.to,status:st,ts:r.ts,ats:Date.now()}).catch(()=>flash(tr('Could not update.')));
  const book=o=>db.collection('sessions').add({from:myId,to:o.to,title:o.title,date:o.date,time:o.time,status:'pending',ts:Date.now()}).then(()=>flash(tr('Invitation sent'))).catch(()=>flash(tr('Could not send.')));
  const answerSess=(s,st)=>db.collection('sessions').doc(s.id).update({from:s.from,to:s.to,title:s.title,date:s.date,time:s.time,status:st,ts:s.ts,ats:Date.now()}).catch(()=>flash(tr('Could not update.')));
  const cancelSess=s=>db.collection('sessions').doc(s.id).delete().catch(()=>flash(tr('Could not delete.')));
  const openChat=id=>{setActive(id);setTab('messages')};
  const startCall=(peer,video)=>setCmd({peer,video,n:Date.now()});
  // notifications
  const nm=id=>(people.find(p=>p.id===id)||{}).name||tr('Someone');
  const N=[];const soon=iso(new Date(Date.now()+3*864e5));
  reqs.forEach(r=>{if(r.to===myId&&r.status==='pending')N.push({k:'q'+r.id,type:'request',ts:r.ts,req:r,text:`${nm(r.from)} ${tr('wants to connect')}`,unread:true});if(r.from===myId&&r.status==='accepted')N.push({k:'a'+r.id,type:'accepted',ts:r.ats||r.ts,from:r.to,text:`${nm(r.to)} ${tr('accepted your request')}`,unread:(r.ats||0)>seen})});
  const by={};all.filter(m=>m.to===myId&&m.ts>seen&&!(tab==='messages'&&active===m.from)).forEach(m=>{(by[m.from]=by[m.from]||[]).push(m)});
  Object.entries(by).forEach(([f,a])=>N.push({k:'m'+f+a.length,type:'msg',from:f,ts:Math.max(...a.map(x=>x.ts)),text:`${nm(f)}: ${a.length} ${tr('new messages')}`,unread:true}));
  sess.forEach(s=>{if(s.to===myId&&s.status==='pending')N.push({k:'s'+s.id,type:'session',ts:s.ts,sess:s,text:`${nm(s.from)} ${tr('invites you to a session')}: ${s.title}, ${s.date} ${s.time}`,unread:true});if(s.from===myId&&s.status!=='pending')N.push({k:'sr'+s.id+s.status,type:'sessionReply',ts:s.ats||s.ts,text:`${nm(s.to)} ${s.status==='accepted'?tr('accepted'):tr('declined')} ${tr('your session')}: ${s.title}`,unread:(s.ats||0)>seen})});
  [...mats.map(x=>['file',x]),...ess.map(x=>['essay',x])].forEach(([k,x])=>{if(x.by!==myId&&x.ts>seen)N.push({k:'u'+k+x.id,type:'upload',ts:x.ts,text:`${x.a} ${k==='file'?tr('shared a file'):tr('shared an essay')}: ${x.t}`,unread:true})});
  deadlines.forEach(d=>{if(!d.done&&d.date<=soon)N.push({k:'d'+d.id,type:'deadline',ts:new Date(d.date+'T12:00').getTime(),text:`${tr('Deadline')}: ${d.title}, ${d.date}`,unread:true})});
  N.sort((a,b)=>b.ts-a.ts);
  const unread=N.filter(n=>n.unread).length;
  const known=useRef(null),ready=useRef(false),Nref=useRef(N);Nref.current=N;
  useEffect(()=>{if(!db)return;const t=setTimeout(()=>{ready.current=true;known.current=new Set(Nref.current.map(n=>n.k))},3000);return()=>clearTimeout(t)},[db]);
  const sig=N.map(n=>n.k).join('|');
  useEffect(()=>{if(!ready.current||!known.current)return;N.forEach(n=>{if(known.current.has(n.k))return;known.current.add(n.k);if(!n.unread)return;flash(n.text);try{if(document.hidden&&Notification.permission==='granted')new Notification('Studymatch',{body:n.text})}catch(e){}})},[sig]);
  const markSeen=()=>{const t=Date.now();setSeen(t);try{localStorage.setItem('sm-seen-'+myId,String(t))}catch(e){}};
  const togglePanel=()=>{if(nOpen)markSeen();setNOpen(!nOpen)};
  const goN=n=>{setNOpen(false);markSeen();if(n.type==='msg'||n.type==='accepted')openChat(n.from);else if(n.type==='upload')setTab('materials');else setTab('calendar')};
  const askDesktop=()=>{try{Notification.requestPermission().then(()=>setNOpen(o=>o))}catch(e){}};
  const copy=()=>{try{navigator.clipboard.writeText(LINK).then(()=>flash(tr('Link copied')),()=>flash(tr('Select the link and copy it')))}catch(e){flash(tr('Select the link and copy it'))}};
  const uinfo=Object.fromEntries(uinfoArr.map(x=>[x.id,x]));
  const goAdmin=()=>{location.hash='admin';setAdmin(true)};
  const nav=[['discover','Discover','users'],['majors','Majors','cap'],['institutions','Institutions','building'],['materials','Materials','book'],['calendar','Calendar','calendar'],['messages','Messages','msg'],['profile','Profile','user']];
  if(admin)return <Admin db={db} people={people} mats={mats} ess={ess} tests={tests} uinfo={uinfo} onExit={()=>setAdmin(false)}/>;
  if(landing)return <Landing onAdmin={goAdmin} dark={dark} setDark={setDark} lang={lang} setLang={setLang} onEnter={t=>{setTab(t);setLanding(false)}}/>;
  return <div className="min-h-screen" onClick={()=>nOpen&&togglePanel()}>
    <header style={{top:'env(safe-area-inset-top,0px)'}} className="sticky z-40 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-white/10"><div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
      <div onClick={()=>setLanding(true)} className="cursor-pointer" title={tr('About Studymatch')}><Mark/></div>
      <nav className="hidden lg:flex gap-0.5">{nav.map(([k,l,ic])=><button key={k} onClick={()=>setTab(k)} className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition ${tab===k?'bg-slate-200/70 dark:bg-white/10 text-slate-900 dark:text-white':'text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5'}`}><I n={ic} c="w-4 h-4"/>{tr(l)}</button>)}</nav>
      <div className="flex items-center gap-2"><LangSwitch lang={lang} set={setLang}/>
        <div className="relative" onClick={e=>e.stopPropagation()}><button onClick={togglePanel} className="relative p-2.5 rounded-lg border border-slate-200 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10" aria-label={tr('Notifications')}><I n="bell" c="w-4 h-4"/>{unread>0&&<span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-violet-600 text-white text-[10px] font-semibold grid place-items-center">{unread}</span>}</button>
          {nOpen&&<NotifPanel items={N} onClose={togglePanel} go={goN} answerReq={answerReq} answerSess={answerSess} askDesktop={askDesktop}/>}</div>
        <button onClick={()=>setInv(true)} className={ghost+' !py-2 hidden sm:inline-flex'}><I n="plus" c="w-4 h-4"/>{tr('Invite')}</button>
        <button onClick={()=>setDark(!dark)} className="p-2.5 rounded-lg border border-slate-200 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10" aria-label={tr('Toggle theme')}><I n={dark?'sun':'moon'} c="w-4 h-4"/></button></div></div></header>
    <main className="max-w-6xl mx-auto px-4 py-8 pb-28 lg:pb-12" key={tab}>
      {!joined&&tab!=='profile'&&<div className="mb-6 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 bg-violet-100 dark:bg-violet-500/15 text-violet-900 dark:text-violet-200 text-sm up"><span>{tr('Create your profile to appear in Discover and start chatting.')}</span><button className={prim+' !py-2'} onClick={()=>setTab('profile')}>{tr('Create profile')}</button></div>}
      {tab==='discover'&&<Discover myId={myId} friends={friends} sent={sent} received={received} connect={connect} accept={answerReq} openChat={openChat} invite={()=>setInv(true)} initMajor={mf}/>}
      {tab==='majors'&&<Majors goMajor={m=>{setMf(m);setTab('discover')}}/>}
      {tab==='institutions'&&<Institutions uinfo={uinfo}/>}
      {tab==='materials'&&<Materials db={db} myId={myId} me={me} flash={flash} send={send} tests={tests}/>}
      {tab==='calendar'&&<Calendar myId={myId} friends={friends} deadlines={deadlines} sessions={sess} addDeadline={addDeadline} toggleDeadline={toggleDeadline} delDeadline={delDeadline} book={book} answer={answerSess} cancel={cancelSess} call={startCall}/>}
      {tab==='messages'&&<Messages conn={friends} active={active} setActive={setActive} msgs={all} send={send} myId={myId} saved={saved} saveItem={saveItem} delSaved={delSaved} flash={flash} startCall={startCall}/>}
      {tab==='profile'&&(authApi&&auth===undefined?<p className="text-slate-500 py-10 text-center">…</p>:authApi&&(!auth||auth.anon)?<AuthCard api={authApi}/>:<><Head t={joined?'Your profile':'Join Studymatch'} s="Keep it fresh so the right people find you."/>{authApi&&auth&&<div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500"><span>{tr('Signed in as')} {auth.email||auth.name}</span><button className="underline" onClick={async()=>{try{await authApi.signOut()}catch(e){}location.hash='';location.reload()}}>{tr('Sign out')}</button></div>}<Profile me={me} setMe={saveMe}/></>)}
    </main>
    <footer className="max-w-6xl mx-auto px-4 pb-24 lg:pb-8 text-center"><button onClick={goAdmin} className="text-[10px] text-slate-400/50 hover:text-slate-500">admin</button></footer>
    {inv&&<Modal onClose={()=>setInv(false)}><h3 className="font-display text-xl">{tr('Invite students')}</h3><p className="text-sm text-slate-500 mt-1 mb-4">{tr('Share this link. Whoever opens it can create a profile and join Studymatch.')}</p><input readOnly className={inp} value={LINK} onFocus={e=>e.target.select()}/><button className={prim+' w-full mt-3'} onClick={copy}>{tr('Copy link')}</button></Modal>}
    {toast&&<div className="pop fixed left-1/2 -translate-x-1/2 bottom-24 lg:bottom-8 z-[60] px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm max-w-[90vw]">{toast}</div>}
    <CallLayer rt={rt} myId={myId} meName={me.name||'Student'} cmd={cmd} flash={flash}/>
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur border-t border-slate-200 dark:border-white/10 grid grid-cols-7" style={{paddingBottom:'env(safe-area-inset-bottom,0px)'}}>{nav.map(([k,l,ic])=><button key={k} onClick={()=>setTab(k)} className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium min-w-0 ${tab===k?'text-violet-600 dark:text-violet-300':'text-slate-500'}`}><I n={ic} c="w-5 h-5"/><span className="truncate max-w-full px-0.5">{tr(l)}</span></button>)}</nav>
  </div>;
}

class EB extends React.Component{constructor(p){super(p);this.state={e:null}}static getDerivedStateFromError(e){return{e}}render(){return this.state.e?<div className="min-h-screen grid place-items-center p-6 text-center"><div><h2 className="text-2xl font-extrabold">Something went wrong</h2><p className="text-slate-500 mt-2">Please reload the page.</p><button className={prim+' mt-4'} onClick={()=>location.reload()}>Reload</button></div></div>:this.props.children}}
ReactDOM.createRoot(document.getElementById('root')).render(<EB><App/></EB>);
