self.addEventListener("install", e =>{
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["https://www.sandrolinux.com/", "https://www.sandrolinux.com/mainpage.html", "https://www.sandrolinux.com/sandrolinux.css", "https://www.sandrolinux.com/privacypolicy.html", "https://www.sandrolinux.com/news/allstories.html", "https://www.sandrolinux.com/PWA%20Icon%20180.jpg", "https://www.sandrolinux.com/myplaylist.html"]);
    })
    );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
    );
});
