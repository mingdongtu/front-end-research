//

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v2').then(function(cache) {
        return cache.addAll([
          '/sw-test/',
          '/sw-test/index.html',
          '/sw-test/style.css',
          '/sw-test/app.js',
          '/sw-test/image-list.js'
          // include other new resources for the new version...
        ]);
      })
    );
  })


  //删除旧缓存

  self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v2'];
  
    event.waitUntil(
      caches.keys()   //Cache 接口的 keys() 方法返回一个 Promise ，这个 Promise 将解析为一个Cache 键的数组。
      .then(function(keyList) {   
        return Promise.all(keyList.map(function(key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });