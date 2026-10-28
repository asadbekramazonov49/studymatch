// @ts-nocheck
import { createClient } from '@supabase/supabase-js';

const URL_ = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function installSupabase() {
  const sb = createClient(URL_, KEY);
  // Each visitor gets an anonymous account that is remembered in the browser.
  const ready = (async () => {
    const { data: { session } } = await sb.auth.getSession();
    if (session) return session.user.id;
    const { data, error } = await sb.auth.signInAnonymously();
    if (error) throw error;
    return data.user.id;
  })();
  const check = (r) => { if (r.error) throw r.error; return r; };

  function col(path) {
    return {
      onSnapshot(cb) {
        const rows = new Map();
        let ch;
        const emit = () => cb({ docs: [...rows.entries()].map(([id, v]) => ({ id, data: () => v })) });
        (async () => {
          await ready;
          const { data } = await sb.from('docs').select('id,data').eq('collection', path);
          (data || []).forEach((r) => rows.set(r.id, r.data));
          emit();
          ch = sb.channel('c:' + path + ':' + Math.random().toString(36).slice(2))
            .on('postgres_changes', { event: '*', schema: 'public', table: 'docs', filter: 'collection=eq.' + path }, (p) => {
              if (p.eventType === 'DELETE') {
                if (p.old.collection && p.old.collection !== path) return;
                rows.delete(p.old.id);
              } else rows.set(p.new.id, p.new.data);
              emit();
            })
            .subscribe();
        })();
        return () => { if (ch) sb.removeChannel(ch); };
      },
      async add(v) {
        await ready;
        const id = crypto.randomUUID();
        check(await sb.from('docs').insert({ collection: path, id, data: v }));
        return { id };
      },
      doc(id) {
        return {
          async set(v) { await ready; check(await sb.from('docs').upsert({ collection: path, id, data: v }, { onConflict: 'collection,id' })); },
          async delete() { await ready; check(await sb.from('docs').delete().eq('collection', path).eq('id', id)); },
        };
      },
    };
  }

  window.claude = {
    use: async (n) => {
      if (n === 'user') return { id: () => ready };
      if (n === 'db') return { collection: col };
      if (n === 'assets') return {
        upload: async (blob) => {
          const uid = await ready;
          const name = `${uid}/${Date.now()}-${(blob.name || 'file').replace(/[^\w.\-]+/g, '_')}`;
          check(await sb.storage.from('uploads').upload(name, blob, { contentType: blob.type || 'application/octet-stream' }));
          return { url: sb.storage.from('uploads').getPublicUrl(name).data.publicUrl };
        },
      };
      if (n === 'downloads') return {
        save: async (o) => {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(o.data instanceof Blob ? o.data : new Blob([o.data]));
          a.download = o.filename;
          document.body.appendChild(a); a.click(); a.remove();
        },
      };
      return null;
    },
  };
}

// ---- Fallback demo mode (no Supabase keys): data stays in this browser ----
function installLocal(){if((window as any).claude)return;
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
}

if (URL_ && KEY) installSupabase(); else installLocal();
