<script>
import { Form, Select } from 'ant-design-vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const FormItem = Form.Item
const Option = Select.Option
const SearchForm = {
  name: 'SearchForm',
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-select': Select,
    'a-option': Option
  },
  data() {
    return {}
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleReset() {
      this.form.resetFields()
    }
  },

  render() {
    const { getFieldDecorator } = this.form
    return (
      <a-card>
        <a-form
          id="components-form-demo-normal-register"
          style="float:left;"
          layout="inline"
          onSubmit={this.handleSubmit}
        >
          <a-form-item label="生日:">
            {getFieldDecorator('birthday', {})(<a-range-picker />)}
          </a-form-item>
          <a-form-item label="状态:">
            {getFieldDecorator('state', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="咸鱼一条">咸鱼一条</a-option>
                <a-option value="风华浪子">风华浪子</a-option>
                <a-option value="北大才子一枚">北大才子一枚</a-option>
                <a-option value="百度FE">百度FE</a-option>
                <a-option value="创业者">创业者</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item label="性别:">
            {getFieldDecorator('sex', {
              initialValue: '全部'
            })(
              <a-select style="width:100px;">
                <a-option value="全部">全部</a-option>
                <a-option value="男">男</a-option>
                <a-option value="女">女</a-option>
              </a-select>
            )}
          </a-form-item>
          <a-form-item>
            <a-button type="primary" htmlType="submit" style="margin:0 20px">
              查询
            </a-button>
            <a-button onClick={this.handleReset}>重置</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    )
  }
}

export default Form.create()(SearchForm)
</script>
<style></style>