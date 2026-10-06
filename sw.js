const CACHE='zhijian-web-6';const ASSETS=["./","./index.html","./icon.svg","./manifest.webmanifest","./assets/controls-C4lL8tVx.js","./assets/editor-BGTqFzmT.js","./assets/index-CpWWbxzL.css","./assets/index-EHBByyk1.js","./assets/react-WWv1rlRj.js","./assets/web-BUOv3bHj.js"];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('zhijian-web-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const request=event.request;const url=new URL(request.url);if(request.method!=='GET'||url.origin!==self.location.origin)return;
if(request.mode==='navigate'){event.respondWith(fetch(request).catch(()=>caches.match('./index.html',{ignoreVary:true})));return;}
if(ASSETS.some(asset=>new URL(asset,self.registration.scope).href===url.href))event.respondWith(caches.match(request,{ignoreVary:true}).then(cached=>cached||fetch(request)));});
