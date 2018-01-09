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
    if (event.request.url===self.location.origin+'/update.html')
    {
        console.log("update cache");
        caches.open('v1').then((cache) => {
            console.log("updated")
            return cache.addAll([
                    '/',
                    '/index.html',
                    '/js/jquery-3.2.1.min.js',
                    '/js/vue.min.js'
                ]
            )
        })

    }
    else {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('load from cache ' + event.request.url);
                return response;
            }
            else {
              return  fetch(event.request).then((response) => {
                    return response;
                }).catch((err)=>{
                    console.log('err:'+err.toString());
                })
            }
        })
    );}
});
