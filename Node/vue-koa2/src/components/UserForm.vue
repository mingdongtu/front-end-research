<script>
import { Form, Select, Radio, message,Input } from 'ant-design-vue'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const CollectionCreateForm = Form.create()({
  components: {
    'a-form': Form,
    'a-form-item': FormItem,
    'a-select': Select,
    'a-option': Option,
    'a-radio': Radio,
    'a-radio-group': RadioGroup,
    'a-input-text-area':Input.TextArea
  },

  props: ['visible', 'selectData', 'title', 'userInfo'],
  render() {
    const { visible, form, title } = this
    const { getFieldDecorator } = form
    const userInfo = this.userInfo || {
      state: '咸鱼一条',
      sex: '男',
      birthday: '2000-01-01',
      interest: '篮球'
    }
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 20 }
      }
    }
    const rowObject = {
      minRows: 4,
      maxRows: 6
    }
    return (
      <a-modal
        visible={visible}
        title={title}
        okText="Create"
        onCancel={() => {
          this.$emit('cancel')
        }}
        onOk={() => {
          this.$emit('create')
        }}
      >
        <a-form layout="vertical">
          <a-form-item {...{ props: formItemLayout }} label="用户名:">
            {title === '用户详情'
              ? userInfo.username
              : getFieldDecorator('username', {
                  initialValue: userInfo.username,
                  rules: [
                    {
                      type: 'string',
                      message: '该用户名有效'
                    },
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(<a-input placeholder="请输入用户名" />)}
          </a-form-item>
          <a-form-item {...{ props: formItemLayout }} label="性别：">
            {title === '用户详情' ? (
              <p> {userInfo.sex}</p>
            ) : (
              getFieldDecorator('sex', {
                initialValue: userInfo.sex
              })(
                <a-radio-group>
                  <a-radio value="男">男</a-radio>
                  <a-radio value="女">女</a-radio>
                </a-radio-group>
              )
            )}
          </a-form-item>
          <a-form-item {...{ props: formItemLayout }} label="状态">
            {title === '用户详情'
              ? userInfo.state
              : getFieldDecorator('state', {
                  initialValue: userInfo.state
                })(
                  <a-select>
                    <a-option value="咸鱼一条">咸鱼一条</a-option>
                    <a-option value="风华浪子">风华浪子</a-option>
                    <a-option value="北大才子一枚">北大才子一枚</a-option>
                    <a-option value="百度FE">百度FE</a-option>
                    <a-option value="创业者">创业者</a-option>
                  </a-select>
                )}
          </a-form-item>
          <a-form-item {...{ props: formItemLayout }} label="生日：">
            {title === '用户详情'
              ? moment(userInfo.birthday).format('YYYY-MM-DD')
              : getFieldDecorator('birthday', {
                  initialValue: moment(userInfo.birthday)
                })(<a-date-picker showTime format="YYYY-MM-DD" />)}
          </a-form-item>
          <a-form-item {...{ props: formItemLayout }} label="爱好">
            {title === '用户详情'
              ? userInfo.interest
              : getFieldDecorator('interest', {
                  initialValue: userInfo.interest
                })(<a-input-text-area autosize={rowObject} />)}
          </a-form-item>
        </a-form>
      </a-modal>
    )
  }
})

export default {
  name: 'userForm',
  props: ['visible', 'userInfo', 'title'],
  beforeCreate() {
    },
  methods: {
    handleCancel() {
      const form = this.formRef.form
      
      this.$emit('hideForm', 'noUpdate')
      form.resetFields()
    },
    handleCreate() {
      const form = this.formRef.form
      let _this = this;
      form.validateFields(async (err,values)=>{
           if(err) return;
           let params = {
                username:values.username,
                sex:values.sex,
                state:values.state,
                birthday:values.birthday,
                interest:values.interest,
                id:_this.title ==='创建员工'?100:_this.userInfo.id
           }
           let url = _this.title==="创建员工"?'/api/createOperator':'/api/updateOperator';
           this.$http.post(url,params).then(res=>{
                if(res.data.id){
                    message.success('创建成功');
                    form.resetFields();
                    _this.$emit('hideForm','update')
                }
                if(res.data.result.length){
                    message.success('更新成功');
                    _this.$emit('hideForm','update',params)
                }
           })
      })
      // form.resetFields()
      // this.$emit('hideForm', 'update')
    },
    saveFormRef(formRef) {
      this.formRef = formRef
    }
  },

  render() {
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.visible}
          userInfo={this.userInfo}
          title={this.title}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
</script>