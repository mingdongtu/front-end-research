import React,{Component} from 'react';
import { connect } from 'dva';
import { Bind } from 'lodash-decorators';// binds the Function to the current instance object.
import ProductList from '../components/ProductList';
//connect 方法传入的第一个参数是 mapStateToProps 函数，mapStateToProps 函数会返回一个对象，用于建立 State 到 Props 的映射关系。
// @:装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法
 // any time the store is updated, mapStateToProps(connect的参数) will be called
 import './../../mock/mock'
@connect(({products,dispatch})=>{
        return {products:products.producList,dispatch}
})
export default class Products extends Component {
     state={
        a:100 
     }
     componentDidMount(){
           //获取表单初始数据
      //测试mock数据
    const {dispatch} = this.props;
    // dispatch({
    //      type:'products/getTable',
    //      payload:{}
    // }).then(response=>{
    //   dispatch({
    //             type:'products/update',
    //             payload:response
    //         })
    // })
      fetch('/getTable/list',{method: 'POST'}).then(res=>{
         console.log('没有经过处理的数据',res.status,res)
         return res.json()
    }).then(response=>{
        dispatch({
            type:'products/update',
            payload:response
        })
        console.log('最终数据',response)
    })

     }
     @Bind()
      handleDelete(id) {
  
          const { dispatch } = this.props
          dispatch({
            type: 'products/delete',
            payload: id,
          });
        }
        @Bind()
         handleAdd(){
          const { dispatch, products } = this.props
             const key = products.length +1 
             const data = [
                {name:'增加一行',id:key,key:Math.random()}
           ]
              dispatch({
                    type:'products/add',
                    payload:{products:data}
              })
        }
    render(){
     const {  products } = this.props
     return (
     <div >
     <h2>List of Products{this.state.a}</h2> 
     <ProductList onDelete={this.handleDelete} onAdd = {this.handleAdd} products={products} />
     </div>
     )
     
    }
}
// const Products = (props) => {
//   const { dispatch, products } = props
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   function handleAdd(){
//        const key = products.length +1 
//        const data = [
//           {name:'增加一行',id:key,key:Math.random()}
//      ]
//         dispatch({
//               type:'products/add',
//               payload:{products:data}
//         })
//   }

//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} onAdd = {handleAdd} products={products} />
//     </div>
//   );
// };

// export default connect(({products}) => {
//     console.log('lai',products)
//        return {products:products.producList}
// })(Products);