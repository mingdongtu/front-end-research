import management from './../models/management.js';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const getOperator = async function(ctx, next) { //中间件
    const data = ctx.request.body;
    const result = await management.getOperator(data);
    if (result !== null) {
        ctx.response.body = { //将数据库里面查询到的返回
            success: true,
            result
        }
    } else {
        ctx.response.body = {
            success: false,
            result: '获取数据出错'
        }
    }
}

export default {
    getOperator
}