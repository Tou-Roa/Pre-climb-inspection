// Caches the app so it opens with no signal. Bump VERSION after changing any file.
const VERSION = 'preclimb-v1';
const FILES = ['./', './index.html', './manifest.json', './lib/jspdf.umd.min.js', './lib/jspdf.plugin.autotable.min.js', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html'))));
});
