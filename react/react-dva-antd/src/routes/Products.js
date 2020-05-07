import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(){
       const data = [
          {name:'增加一行',id:3,key:Math.random()}
     ]
        dispatch({
              type:'products/add',
              payload:{products:data}
        })
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} onAdd = {handleAdd} products={products} />
    </div>
  );
};

// export default Products;
export default connect((state) => {
     console.log(state)
       return {products:state.products}
})(Products);