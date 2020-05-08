//UI component

import React from 'react';
import PropTypes from 'prop-types'
import {Table,Popconfirm,Button} from 'antd'

const ProductList = ({onDelete,onAdd,products})=>{
       console.log('渲染组件的数据',products)
       const columns = [
            {
                title:'Name',
                dataIndex:'name',
                key:'name'
            },
            {
                title:'Actions',
                render:(text,record)=>{

                       return (
                            <div>
                                    <Popconfirm title='Delete?' onConfirm={()=> onDelete(record.id)} >
                                       <Button>Delete</Button>
                                   </Popconfirm>
                                   <Popconfirm title='Add?' onConfirm={()=> onAdd()} >
                                       <Button>Add</Button>
                                   </Popconfirm>
                            </div>
                            
                       )
                },
                key:'Actions'
            }
       ];
       return (
              <Table 
                dataSource={products}
                columns = {columns}
                
               />
       )
}

ProductList.propTypes  = {
       onDelete:PropTypes.func.isRequired,
       onAdd:PropTypes.func.isRequired
}

export default ProductList

