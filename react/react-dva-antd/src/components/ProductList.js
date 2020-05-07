//UI component

import React from 'react';
import PropTypes from 'prop-types'
import {Table,Popconfirm,Button, Divider} from 'antd'

const ProductList = ({onDelete,onAdd,products})=>{
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
       console.log('初始化数据',products)
       return (
              <Table 
                dataSource={products}
                columns = {columns}
                
               />
       )
}

ProductList.propTypes  = {
       onDelete:PropTypes.func.isRequired,
       onDelete:PropTypes.func.isRequired,
       products:PropTypes.array.isRequired
}

export default ProductList

