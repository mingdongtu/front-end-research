//UI component

import React from 'react';
import PropTypes from 'prop-types'
import {Table,Popconfirm,Button} from 'antd'

const ProductList = ({onDelete,products})=>{
       const cloums = [
            {
                title:'Name',
                dataIndex:'name'
            },
            {
                title:'Actions',
                render:(text,record)=>{
                       return (
                             <Popconfirm title='Delete?' onConfirm={()=> onDelete(record.id)}>
                                  <Button>Delete</Button>
                             </Popconfirm>
                       )
                }
            }
       ];
       console.log('初始化数据',products)
       return (
              <Table 
                dataSource={products}
                cloums = {cloums}
               />
       )
}

ProductList.propTypes  = {
       onDelete:PropTypes.func.isRequired,
       products:PropTypes.array.isRequired
}

export default ProductList