/* مكتب الرسالة — Service Worker: يتيح العمل دون إنترنت. لا يعترض طلبات OpenAlex/Crossref/Ollama إطلاقاً. */
const V = "dba-desk-v3.4.0";
const CORE = ["./", "index.html", "assets/css/style.css", "assets/js/app.js", "assets/img/logo.svg",
  "manifest.webmanifest", "assets/img/icon-192.png", "assets/img/icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("dba-desk-") && k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin !== self.location.origin) return;            /* طلبات الواجهات الخارجية تمرّ كما هي */
  e.respondWith(
    fetch(r).then(res => {                                   /* الشبكة أولاً ليصل التحديث فور توفره */
      if (res && res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
      return res;
    }).catch(() => caches.match(r).then(m => m || (r.mode === "navigate" ? caches.match("index.html") : Response.error())))
  );
});
