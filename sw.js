/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);
console.log("***");

// Precarga la app
workbox.precaching.precacheAndRoute([
  "./styles.css",
  "./main.js",
  "./index.php",
  "./assets/favicon/android-chrome-512x512.png",
  "./assets/favicon/android-chrome-192x192.png",
  "./assets/favicon/mstile-150x150.png",
  "./assets/favicon/mstile-144x144.png",
  "./assets/favicon/mstile-310x150.png",
  "./assets/favicon/mstile-310x310.png",
  "./assets/favicon/mstile-70x70.png",
  "./assets/favicon/favicon-32x32.png",
  "./assets/favicon/favicon-16x16.png"
]);

// App Shell
workbox.routing.registerNavigationRoute("./index.php");

workbox.routing.registerRoute(
  new RegExp(/^https?.*/),
  new workbox.strategies.NetworkFirst(),
  "GET"
);
