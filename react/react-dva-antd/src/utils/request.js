import fetch from 'dva/fetch';

// function parseJSON(response) {
  
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// import './../../mock/mock'
export default function request(url, options) {
//   return fetch(url,options).then(res=>{
   
//        return res.json()
//   }).then(response=>{
//      console.log(response,23223)
//        return  response
//   })


 fetch('/getTable/list',{method: 'POST'}).then(res=>{
     console.log('没有经过处理的数据123123',res.status,res)
     return res.json()
}).then(response=>{
       return response
})



  // return fetch(url, options)
  //   .then(checkStatus)
  //   .then(parseJSON)
  //   .then(data => ({ data }))
  //   .catch(err => ({ err }));
}
