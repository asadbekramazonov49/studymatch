// @ts-nocheck
// Demo backend: stores data in the browser (localStorage).
// Replace window.claude (db, assets, downloads, user) with Supabase/Firebase to share data between users.
(function(){if(window.claude)return;
var K='sm:',subs={};
function load(p){try{return JSON.parse(localStorage.getItem(K+p)||'{}')}catch(e){return{}}}
function save(p,d){try{localStorage.setItem(K+p,JSON.stringify(d))}catch(e){alert('Browser storage is full. Try smaller images.');return}(subs[p]||[]).forEach(function(f){f()})}
function col(p){return{
 onSnapshot:function(cb){var f=function(){var d=load(p);cb({docs:Object.keys(d).map(function(id){return{id:id,data:function(){return d[id]}}})})};(subs[p]=subs[p]||[]).push(f);f();return function(){subs[p]=subs[p].filter(function(x){return x!==f})}},
 add:async function(v){var d=load(p),id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);d[id]=v;save(p,d);return{id:id}},
 doc:function(id){return{set:async function(v){var d=load(p);d[id]=v;save(p,d)},delete:async function(){var d=load(p);delete d[id];save(p,d)}}}}}
window.addEventListener('storage',function(e){if(e.key&&e.key.indexOf(K)===0){var p=e.key.slice(K.length);(subs[p]||[]).forEach(function(f){f()})}});
var uid=localStorage.getItem('sm-uid');if(!uid){uid='u'+Math.random().toString(36).slice(2,10);localStorage.setItem('sm-uid',uid)}
window.claude={use:async function(n){
 if(n==='user')return{id:async function(){return uid}};
 if(n==='db')return{collection:col};
 if(n==='assets')return{upload:function(b){return new Promise(function(res,rej){var r=new FileReader();r.onload=function(){res({url:r.result})};r.onerror=rej;r.readAsDataURL(b)})}};
 if(n==='downloads')return{save:async function(o){var a=document.createElement('a');a.href=URL.createObjectURL(o.data instanceof Blob?o.data:new Blob([o.data]));a.download=o.filename;document.body.appendChild(a);a.click();a.remove()}};
 return null}};
})();
