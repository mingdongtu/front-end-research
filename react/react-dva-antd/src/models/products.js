//负责处理数据和逻辑
//service 是 如何和model 建立联系的？
//

export  default {
       namespace:'products',
       state:{},
       effects:{  //  处理异步动作
             *changeName({payload},{call,put}){  //改变指定行的名字
                    
                     
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

             }
       }
}