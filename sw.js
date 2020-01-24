/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  //workbox solo existe en el scope del serviceWorker
  console.log("Workbox loaded!");

  workbox.core.setCacheNameDetails({
    prefix: "UltraCreditos",
    suffix: "v1.0.1",
    precache: "precache-cache",
    runtime: "runtime-cache"
  });

  workbox.routing.registerRoute(
    /\.(?:js|css)$/, // Todos los archivos con extensión js o css
    workbox.strategies.cacheFirst({
      cacheName: workbox.core.cacheNames.precache // nombre de la cache donde queremos guardar el recurso
    })
  );

  // Todo lo demás usa Network First
  workbox.routing.registerRoute(
    /^https?.*/,
    workbox.strategies.networkFirst(),
    "GET"
  );
} else {
  console.log(`Can't load Workbox`);
}
