//负责处理数据和逻辑


export  default {
       namespace:'products',
       state:null,
       reducers:{
             delete(state,{payload:id}){
                   
              //       const {products} = state
                    console.log('数据存储中心',state)
                  state.products =  state.products.filter(item=>item.id !== id)
                  console.log('数据存储中心11',state)
                  return  {...state}
              
             },
             add(state,{payload:{products}}){
                    console.log(1111,products,state)
                 const list = [...state.products,...products] 
                 return {
                      ...state,
                      ...{products:list}
                 }

             }
       }
}