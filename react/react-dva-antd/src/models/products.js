//负责处理数据和逻辑


export  default {
       namespace:'products',
       state:{},
       effects:{
          
       },
       reducers:{
             delete(state,{payload:id}){
                    console.log('数据存储中心',state)
                  state.producList =  state.producList.filter(item=>item.id !== id)
                  console.log('数据存储中心11',state)
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