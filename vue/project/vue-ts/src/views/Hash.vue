<template>
  <div class="hello">
    <p @click="onChange">hash</p>
    <span>{{a}}</span>
    <Home/>
  </div>
</template>

<script lang="ts">
import Home from './Home.vue'
import { Component, Vue } from 'vue-property-decorator'
// import './layout.css'
// const style = require('./layout.css')
@Component({
  components: {
    Home
  }
})
export default class HelloWorld extends Vue {
  // msg :String = 'HelloWorld' // 这种写法会报错，tslint觉得自己根据右边的"www.baidu.com"判断出requestUrl的类型是string，所以，认为再写string是多此一举
  msg ='HelloWorld'
  a = '来试一下'
  onChange (): void {
    this.a = '1000'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" module>
@import './layout.css';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
