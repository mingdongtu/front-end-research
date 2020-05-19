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
//install 事件会在安装完成之后触发
self.addEventListener('install', function(event) { //addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行
    event.waitUntil(
        // caches.open创建一个叫做v1的新缓存，并且返回一个Promise
        caches.open('v1').then(function(cache) {
            return cache.addAll([ // addAll()，这个方法的参数是一个由一组相对于 origin 的 URL 组成的数组，这些 URL 就是你想缓存的资源的列表。
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
    event.respondWith(caches.match(event.request).then(function(response) { //respondWith() 方法来劫持我们的 HTTP 响应
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) { //存在缓存
            return response;
        } else { //没有缓存，重新fetch 默认的网络请求
            return fetch(event.request).then(function(response) {
                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                let responseClone = response.clone(); //Response 接口的 clone() 方法创建了一个响应对象的克隆，这个对象在所有方面都是相同的，但是存储在一个不同的变量中
                //如果已经使用了响应 Body，clone() 会抛出TypeError。 实际上，clone()存在的主要原因是允许多次使用Body对象(当它们是一次性使用的时候)
                caches.open('v1').then(function(cache) { //把请求到的网络资源缓存起来，以备下次网络断开的时候使用
                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function() { //缓存和请求中都没有资源
                return caches.match('/sw-test/gallery/myLittleVader.jpg');
            });
        }
    }));
});