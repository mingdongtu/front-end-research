
<template>
  <div>
    <search-form></search-form>
    <a-card style="margin-top:-1px;margin-bottom: -1px;">
      <a-button
        type="primary"
        icon="plus"
        @click="handleOperator('create')"
        class="button"
        >创建员工</a-button
      >
      <a-button icon="edit" @click="handleOperator('edit')" class="button"
        >编辑员工</a-button
      >
      <a-button @click="handleOperator('detail')" class="button"
        >员工详情</a-button
      >
      <a-button
        type="danger"
        icon="delete"
        @click="handleOperator('delete')"
        class="button"
        >删除员工</a-button
      >
    </a-card>
    <user-table
      v-if="hackReset"
      v-on:receiveTable="receiveTable"
      :requestList="requestList"
      :updataData="updataData"
      :searchParams="searchParams"
    ></user-table>
    <user-form
      :visible="visible"
      :userInfo="userInfo"
      :requestList="requestList"
      :title="title"
      v-on:hideForm="hideForm"
    >
    </user-form>
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue'
import UserForm from './UserForm.vue'

import UserTable from './UserTable.vue'

export default {
  name: 'User',
  components: {
    UserTable,
    UserForm,
    SearchForm
  },
  data() {
    return {
      visible: false,
      userInfo: {},
      selectItem: {},
      title: '',
      requestList: false,
      hackReset: true,
      searchParams:{},
      updataData:{}
      
    }
  },
  methods: {
    // 操作员工
    handleOperator(type) {
      let self = this.$http
      let _this = this
      let deleteId
      if (type === 'create') {
        this.title = '创建员工'
        this.visible = true
        // 因为共用一个Form表单，当用户新建员工时，即使选中了table里面的某一行数据，打开的From表单应该只有默认值，所以这里要清空userInfo；通过selectItem来判断用户有没有选中table的数据
        this.userInfo = null
      } else if (type === 'edit' || type === 'detail') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        this.title = type === 'edit' ? '编辑用户' : '用户详情'
        this.visible = true
        deleteId = this.selectItem.id
      } else if (type === 'delete') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        Modal.confirm({
          content: '确定要删除此用户吗？',
          onOk: async () => {
            let options = {
              url: '/api/deletePersonnelTable',
              method: 'post'
            }
            let params = {
              id: deleteId
            }
            const result = await axios.getData(self, options, params)
            if (result === '删除成功') {
              // 通知UserTable更新数据
              _this.requestList = !_this.requestList
            }
          }
        })
      }
    },
    hideForm(data, params) {
      this.visible = false
      //更新完数据，通知UserTable更新数据
      if (data === 'update' && params !== undefined) {
        this.requestList = !this.requestList
        this.updataData = params
        return
      }
      if (data === 'update' && params == undefined) {
        // 创建完数据，通知UserTable更新数据
        this.requestList = !this.requestList
      }
    },
    receiveTable(data) {
      console.log(11)
      this.userInfo = data
      this.selectItem = data
    }
  }
}
</script>

<style scoped>
.button {
  float: left;
  margin-right: 10px;
}
</style>