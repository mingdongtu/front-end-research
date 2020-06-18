<template>
  <div><h1>{{msg}}</h1></div>
</template>


<script>
   export default {
         data(){
              return {
                    msg:'hello'
              }
         },
         beforeCreate(){  //整个页面创建之前的调用 
            console.log('beforeCreate',this.msg)
           
         },
         created(){ //实例创建后执行，这个阶段才能拿到data 里面的数据和methods方法
             console.log('created',this.show(),this.msg)
         },
         beforeMount(){//：页面跳转 路由的使用
            console.log('beforeMount',this.$el,this.show(),this.msg) //获取不到
         },
         mounted(){ //vue 实例被挂载后调用，但是并不保证所有子组件一起被挂载或者视图被渲染完毕
            console.log('mounted',this.$el,this.show(),this.msg)
            this.msg = 10000
         },
         beforeUpdate(){
            console.log('beforeUpdate')
         },
         updated(){
            console.log('updated')
         },
         methods:{
            show:()=>{
               return '我是自定义方法'
               
            }
         }
   }
  
</script>