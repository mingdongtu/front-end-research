<template>
  <div>
    <a-card>
      <a-table
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="rowSelection"
        :pagination="false"
      />
      <template>
        <a-pagination
          showQuickJumper
          :defaultCurrent="params.page"
          :total="total"
          @change="onChangePage"
          style="float:right;margin:10px -9px 0 0;"
        />
      </template>
    </a-card>
  </div>
</template>
<script>
import dataSource from './data'
export default {
  name: 'Table',
  props: ['requestList', 'updataData', 'searchParams'],
  data() {
    return {
      dataSource: [],
      selectedRows: [],
      selectedRowKeys: [],
      pagination: {},
      columns:[
            {
              title:'id',
              dataIndex:'id',
              key:'id'
            },
            {
              title:'姓名',
              dataIndex:'username',
              key:'username'
            },
            {
              title:'性别',
              dataIndex:'sex',
              key:'sex'
            },
            {
              title:'状态',
              dataIndex:'state',
              key:'state'
            },
            {
              title:'兴趣',
              dataIndex:'interest',
              key:'interest'
            },
            {
              title:'生日',
              dataIndex:'birthday',
              key:'birthday'
            },
            
      ],
      total: null,
      params: {
        page: 1,
        pageSize: 10
      },
      requestListFlag: this.requestList
    }
  },
  watch: {
    requestList() {
      this.request()
    },
    updataData() {
      this.$emit('receiveTable', this.updataData)
    },
    searchParams() {
      let _this = this
      this.$http.post('/api/searchOperator', this.searchParams).then(res => {
        res.data.result.map((item, index) => {
          item.key = index
        })
        _this.dataSource = res.data.result
      })
    }
  },
  computed: {
    rowSelection() {
      let _this = this
      return {
        type: 'radio',
        onChange: (selectedRowKeys, selectedRows) => {
          _this.selectedRowKeys = selectedRowKeys
          _this.selectedRows = selectedRows
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
          )
        },
        onSelect: (record, selected, selectedRows, nativeEvent) => {
          this.$emit('receiveTable', record)
        }
      }
    }
  },
  methods: {
    // 动态获取数据
    request () {
      let _this = this
      let url = '/api/getOperator'
      let params = this.params
      this.$http.post(url,params)
        .then(res => {
          res.data.result.rows.map((item, index) => {
            item.key = index
          })    //给每条数据添加唯一的key值
          _this.total = res.data.result.count
          _this.dataSource = res.data.result.rows
        })
    },
    onChangePage(pageNumber) {
      this.params.page = pageNumber
      this.request()
    }
  },
  mounted() {
    this.request()
  }
}
</script>

<style scoped></style>