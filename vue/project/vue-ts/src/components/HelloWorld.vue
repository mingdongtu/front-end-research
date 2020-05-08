<template>
  <div class="hello">
    <span @click="onChange">点击</span>
    <span>{{a}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide, Emit } from 'vue-property-decorator'
// import './layout.css'
// const style = require('./layout.css')
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  @Provide() a = '来试一下'
  // @Emit()
  // onChange() {
  //   this.a = '我来了'
  // }

  // @Emit()
  // onChange = () => {
  //   this.a = '23333'
  // }
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
