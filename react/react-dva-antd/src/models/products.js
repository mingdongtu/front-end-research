//负责处理数据和逻辑


export  default {
       namespace:'products',
       state:[],
       reducers:{
             delete(state,{payload:id}){
                    return state.filter(item=>item.id !== id)
             }
       }
}