module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "index.html",
    "img/ava.png",
    "pages/offline.html",
    "pages/404.html"
  ],
  "swSrc": "src/service-worker.js",
  "swDest": "../sw.js",
  "globIgnores": [
    "workbox-config.js"
  ]
};