// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
//axios 既可以用于浏览器，也可以用于nodejs的http客户端
Vue.prototype.$http = Axios
    // 把UI组件一次性导入
import {
    Button,
    Row,
    Col,
    Form,
    Input,
    Card,
    Select,
    DatePicker,
    Table,
    message,
    Pagination,
    Modal,
    Radio,
} from 'ant-design-vue'
Vue.prototype.$message = message
Vue.prototype.$form = Form;
Vue.prototype.Modal = Modal
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
// Vue.component('TextArea', Input.TextArea )
Vue.component(Input.name,Input)
Vue.component(Card.name, Card)
Vue.component(Select.name, Select)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Form.name, Form)
Vue.component(Table.name, Table)
Vue.component(Pagination.name, Pagination)
Vue.component(Modal.name, Modal)
Vue.component(Radio.name, Radio)
const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const RadioGroup = Radio.Group
Vue.component(FormItem.name, FormItem)
Vue.component(Option.name, Option)
Vue.component(RangePicker.name, RangePicker)
Vue.component(RadioGroup.name, RadioGroup)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
        const token = sessionStorage.getItem('demo-token')
        if (to.meta.requiresAuth) {
            if (token !== 'null' && token != null) {
                //判断是否存在 token
                // 全局设定header的token验证，注意Bearear后面有空格
                /* http://www.axios-js.com/zh-cn/docs/#%E5%85%A8%E5%B1%80%E7%9A%84-axios-%E9%BB%98%E8%AE%A4%E5%80%BC */
                Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
                next()
            } else {
                message.warning('请先登录')
                next('/login')
            }
        } else {
            next()
        }
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})