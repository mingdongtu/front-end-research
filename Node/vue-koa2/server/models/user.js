//将数据库和表结构连接起来
//先写一个查用户id的东西

import db from '../config/db.js' //引入user 的表结构

const userModel = '../schema/user.js';

const DemoDb = db.Demo //引入数据
const User = DemoDb.import(userModel) //用sequelize的import 方法引入表结构，实例化basicTable

const getUserById = async function(id) {
        const userInfo = await User.findOne({
            where: {
                id: id
            }
        })

        return userInfo
    }
    // 新增一个方法通过用户名查找
const getUserByName = async function(name) {
    const userInfo = await User.findOne({
        where: {
            username: name
        }
    })
    return userInfo
}

export default {
    getUserById,
    getUserByName
}