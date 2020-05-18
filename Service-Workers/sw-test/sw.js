/**
 * 方法解释：
 * ExtendableEvent.waitUntil() 方法扩展了事件的生命周期。在服务工作线程中，延长事件的寿命从而阻止浏览器在事件中的异步操作完成之前终止服务工作线程
 * 在一个与 install 事件相关联的 EventHandler 被调用时，它延迟将被安装的worker视为 installing ，直到传递的 Promise 被成功地resolve。
 * 这主要用于确保：服务工作线程在所有依赖的核心cache被缓存之前都不会被安装。
 */
/**
 * 注意： localStorage 跟  service worker 的 cache 工作原理很类似，但是它是同步的，所以不允许在  service workers 内使用
 * 注意: IndexedDB 可以在  service worker 内做数据存储。
 */

self.addEventListener('install', function(event) {    //addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行
  event.waitUntil(
    // caches.open创建一个叫做v1的新缓存，并且返回一个Promise
    caches.open('v1').then(function(cache) {  
      return cache.addAll([  // addAll()，这个方法的参数是一个由一组相对于 origin 的 URL 组成的数组，这些 URL 就是你想缓存的资源的列表。
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
//当安装（install）成功完成之后， service worker 就会激活

/**
 *  respondWith这是一个实验中的功能
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {  //respondWith() 方法来劫持我们的 HTTP 响应
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
