/**
 bind
 */
console.log('执行eg1')
 function c(){
       //  console.log(this.arg,this)
        return this.arg 
 }
 function d(){
       //  'use strict'
        this.arg = 100
 }

 const e = c.bind(d)  
 console.log(e())  //undefined

 const f = {
       arg:999,
       setArg:function(){
                 this.arg = 100
       }
 }
 const g = c.bind(f) 

 console.log(g())// 999

 f.setArg()
 console.log(g()) //100