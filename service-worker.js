const BASE = "/japanese-learning-app/";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("jp-app").then(cache =>
      cache.addAll([
        BASE,
        BASE + "index.html",
        BASE + "css/style.css",
        BASE + "js/data.js",
        BASE + "js/ui.js",
        BASE + "js/quiz.js"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
