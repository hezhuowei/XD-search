this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                    '/',
                    '/index.html',
                    '/js/jquery-3.2.1.min.js',
                    '/js/vue.min.js'
                ]
            )
        })
    )
});
this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log(event.request.url + 'load from cache');
                return response;
            }
            else {
                fetch(event.request).then((response) => {
                    return response;
                }).catch((err)=>{
                    console.log('err:'+err.toString());
                })
            }
        })
    );
});