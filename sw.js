self.addEventListener("install", e =>{
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/", "/mainpage.html", "/sandrolinux.css", "/privacypolicy.html", "/allstories.html", "/PWA%20Icon%20180.jpg"])
    })
    );
});