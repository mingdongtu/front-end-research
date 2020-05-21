//service worker 的入口
// register service worker
//在你的 service worker register之后，浏览器会尝试为你的页面或站点安装并激活它。 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {   //scope选填的，可以被用来指定你想让 service worker 控制的内容的子目录

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
//上面注册了一个 service worker，它工作在 worker context，所以没有访问 DOM 的权限

// function for loading each image via XHR

function imgLoad(imgJSON) {
  // return a promise for an image loading
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();  //XMLHttpRequest此接口继承了 XMLHttpRequestEventTarget 和 EventTarget 的属性。
    request.open('GET', imgJSON.url);
    request.responseType = 'blob';  //response 是一个包含二进制数据的 Blob 对象 
//XMLHttpRequestEventTarget 是一个描述事件处理程序的接口  
    request.onload = function() {   //XMLHttpRequestEventTarget.onload  是 XMLHttpRequest 请求成功完成时调用的函数
      if (request.status == 200) {
        var arrayResponse = [];
        arrayResponse[0] = request.response;
        arrayResponse[1] = imgJSON;
        resolve(arrayResponse);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    // Send the request
    request.send();
  });
}

var imgSection = document.querySelector('section');

window.onload = function() {

  // load each set of image, alt text, name and caption
  for(var i = 0; i<=Gallery.images.length-1; i++) {
    imgLoad(Gallery.images[i]).then(function(arrayResponse) {

      var myImage = document.createElement('img');
      var myFigure = document.createElement('figure');
      var myCaption = document.createElement('caption');
      var imageURL = window.URL.createObjectURL(arrayResponse[0]);

      myImage.src = imageURL;
      myImage.setAttribute('alt', arrayResponse[1].alt);
      myCaption.innerHTML = '<strong>' + arrayResponse[1].name + '</strong>: Taken by ' + arrayResponse[1].credit;

      imgSection.appendChild(myFigure);
      myFigure.appendChild(myImage);
      myFigure.appendChild(myCaption);

    }, function(Error) {
      console.log(Error);
    });
  }
};
