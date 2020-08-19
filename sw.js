importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "1cd11bbc77f8e50b0d8e84c0185f4b3d"
  },
  {
    "url": "img/ava.png",
    "revision": "1138f4893494ed3699f23faf5a86cedf"
  },
  {
    "url": "pages/offline.html",
    "revision": "2d76fdf2d41851fcaf8ca4fe97938e6a"
  },
  {
    "url": "pages/404.html",
    "revision": "5d2ec0d44a8228d6d5e45403db2727c1"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}