//处理异步请求

import request from '../utils/request';
export function getTableList(){
    return request('/getTable/list',{method:'POST'})
}
