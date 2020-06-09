//前后端数据交互的缓冲层
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
    //创建数据
const createOperator = async function(ctx, next) {
        const data = ctx.request.body;
        data.birthday = moment(data.birthday).format('YYYY-MM-DD')
        const result = await management.createOperator(data)
        if (result !== null) {
            ctx.response.body = {
                success: true,
                result
            }
        } else {
            ctx.response.body = {
                success: false,
                result: '创建数据出错'
            }
        }
    }
    //更新数据
const updateOperator = async function(ctx, next) {
    const data = ctx.request.body;
    data.birthday = moment(data.birthday).format('YYYY-MM-DD')
    const result = await management.updateOperator(data)
    if (result !== null) {
        ctx.response.body = {
            success: true,
            result
        }
    } else {
        ctx.response.body = {
            success: false,
            result: '更新失败'
        }
    }
}
const deleteOperator = async function(ctx, next) {
    const data = ctx.request.body;
    const result = await management.deleteOperator(data);
    if (result > 0) {
        ctx.response.body = {
            success: true,
            result: '删除成功'
        }
    } else {
        ctx.response.body = {
            success: false,
            result: '删除失败'
        }
    }
}
const searchOperator = async function(ctx,next){
       const data = ctx.request.body;
    //    对日期进行处理
    data.birthday[0] = moment(data.birthday[0]).format('YYYY-MM-DD');
    data.birthday[1] = moment(data.birthday[1]).format('YYYY-MM-DD');
    const result = await management.searchOperator(data)
    if(result !== null){
            ctx.response.body = {
                  success:true,
                  result
            }
    }else{
           ctx.response.body = {
                  success:false,
                  result:'获取数据出错'
           }
    }
    return result
}
export default {
    getOperator,
    createOperator,
    updateOperator,
    deleteOperator,
    searchOperator
}