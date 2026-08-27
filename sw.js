const CACHE='kakei-odyssey-v5.9-20260827';
const ASSETS=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{
    for(const k of await caches.keys()) if(k!==CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('message',e=>{
  if(e.data&&e.data.type==='SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    e.respondWith(
      fetch(e.request,{cache:'no-store'})
        .then(r=>{
          const c=r.clone();
          caches.open(CACHE).then(x=>x.put('./index.html',c));
          return r;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then(r=>{
        const c=r.clone();
        caches.open(CACHE).then(x=>x.put(e.request,c));
        return r;
      })
      .catch(()=>caches.match(e.request))
  );
});
