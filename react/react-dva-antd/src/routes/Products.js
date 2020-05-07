//真正的view层

import React from 'react';
import {connect} from 'dva'
import ProductList from '../components/ProductList'
const Products = ({dispatch,Products}) =>{
     function handleDelete(id){
             dispatch({
               type:'products/delete',
               payload:id
             })
     }
     return (
            <div>
                <h2>List of Products</h2>
                <ProductList onDelete = {handleDelete} products = {Products}/>
            </div>
     )
}
// connect 方法传入的第个一参数是 mapStateToProps 函数，mapStateToProps 函数会返回一个对象，用于建立 State 到 Props 的映射关系。
export default connect(({products})=>({
     products
}))(Products)