//负责处理数据和逻辑


export  default {
       namespace:'products',
       state:{
       },
       reducers:{
             delete(state,{payload:id}){
                     console.log('来看下',state)
                    return state.filter(item=>item.id !== id)
              
             },
             add(state,{payload:products}){
              //       return state.push(...arr)
                 return {
                      ...state,
                     //  ...products
                 }
             }
       }
}