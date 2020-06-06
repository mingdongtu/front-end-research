//初始化sequelize 和 数据库的连接

const Sequelize = require('sequelize');
//使用url的连接形式进行连接
const Demo = new Sequelize('mysql://root:Aa1518474913@localhost/Demo', {
    define: {
        timestamps: false //取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
    }
});

module.exports = {
    Demo
}