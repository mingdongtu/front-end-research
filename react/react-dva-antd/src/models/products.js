//负责处理数据和逻辑
//service 是 如何和model 建立联系的？
import {getTableList} from './../services/products'

export  default {
       namespace:'products',
       state:{
             producList:[]
       },
       effects:{  //  处理异步动作
             *changeName({payload},{call,put}){  //改变指定行的名字
                       
                     
             },
             *getTable({payload},{call,put}){  //调用service 里面的请求方法
                  const result = yield call(getTableList,payload) 
                  console.log('model里面的数据',result,payload)
                  return result
             }
       },
       reducers:{
             delete(state,{payload:id}){
                  state.producList =  state.producList.filter(item=>item.id !== id)
                  return  {...state}
              
             },
             add(state,{payload:{products}}){
                 const list = [...state.producList,...products] 
                 return {
                      ...state,
                      ...{producList:list}
                 }

             },
             update(state,{payload}){ //更新state
                   return {
                     ...state,
                     ...payload
                   }
             }
       }
}