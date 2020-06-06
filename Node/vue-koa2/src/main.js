// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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
    Radio
} from 'ant-design-vue'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Input.name, Input)
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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})