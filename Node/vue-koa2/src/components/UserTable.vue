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
      columns: dataSource.columns,
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
    request() {},
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