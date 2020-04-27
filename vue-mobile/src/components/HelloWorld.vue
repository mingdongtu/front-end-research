<template>
  <div class="hello">
    <img :class="$style.img" v-for="(item,index) in images" :src="item.url" :key="index" alt />
    <p :class="$style.red">121222</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      images: [
        { url: require('./../assets/1.jpeg') },
        { url: require('./../assets/2.jpeg') },
        { url: require('./../assets/3.jpeg') },
        { url: require('./../assets/4.jpeg') }
      ]
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped module>
h1,
h2 {
  font-weight: normal;
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
.img {
  width: 152px;
  height: 50px;
}
.red {
  color: red;
}
</style>
