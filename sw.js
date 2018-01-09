const cacheList = [
    '/',
    '/index.html',
    '/js/jquery-3.2.1.min.js',
    '/js/vue.min.js'
]
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll(cacheList
            )
        })
    );
});
self.addEventListener('fetch', (event) => {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response
                }
                throw Error('The cached response that was expected is missing.')
            }).catch(() => {
                return fetch(event.request)
            })
        );
});
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});