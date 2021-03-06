//后端访问数据的方法

import db from './../config/db.js';
const managementModel = './../schema/management.js';
const DemoDb = db.Demo; //与数据库建立连接
const Management = DemoDb.import(managementModel)
 //利用sequelize 的import 方法引入表格结构:这个是koa 连接数据库的通道，调用该对象上的方法进行增删改查
 //这个类似于react项目中的service 目录，专门调用后端接口，这里调用的是数据库的接口
const Sequelize = require('sequelize');
const Op = Sequelize.Op
const getOperator = async function(params) {
    const result = await Management.findAndCountAll({ //findAndCountAll数据库中查找多个元素，返回数据与记录总数
        offset: (params.page - 1) * params.pageSize, //offset表示页码
        limit: params.pageSize //limit 表示每页的数据条数
    })
    return result
}

// 新增数据
const createOperator = async function(data) {

        const userInfo = await Management.create({
            username: data.username,
            sex: data.sex,
            state: data.state,
            interest: data.interest,
            birthday: data.birthday,
            id: data.id
        })
        console.log('创建数据', userInfo)
        return userInfo
    }
    //更新数据
const updateOperator = async function(data) {
    const resultInfo = await Management.update({
        username: data.username,
        sex: data.sex,
        state: data.state,
        interest: data.interest,
        birthday: data.birthday,
        id: data.id
    }, {
        where: {
            id: data.id
        }
    })
    return resultInfo
}
const deleteOperator = async function(params) {
    console.log('删除的参数', params)
    const result = await Management.destroy({
        where: {
            id: params.id
        }
    })
    return result
}
const searchOperator = async function(params) {
    params.state === '全部' ? params.state = ['IT技术', '财务顾问'] : params.state = [params.state]
    params.sex === '全部' ? params.sex = ['男', '女'] : params.sex = [params.sex]
    console.log('筛选条件2222', params)

    const result = await Management.findAll({
        where: {
            state: { [Op.in]: params.state
            },
            sex: { [Op.in]: params.sex
            },
            birthday: {
                [Op.between]: [params.birthday[0], params.birthday[1]]
            }
        }
    })
    return result

}
export default {
    getOperator,
    createOperator,
    updateOperator,
    deleteOperator,
    searchOperator
}