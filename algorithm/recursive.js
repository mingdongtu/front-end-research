//深入研究二叉树

//创建一个(a+b*c)-d/e 的二叉树表达

function Node(val){
       
}
var tree = {
       value:'-',
       left:{
            value:'+',
            left:{
                  value:'a',
                  left:{value:'x'},
                  right:{value:'y'}
            },
            right:{
                value:'*',
                left:{
                    value:'b'
                   },
                right:{
                    value:'c'
                }
            }
       },
       right:{
             value:'/',
             left:{value:'d'},
             right:{value:'e'}
       }
}

//二叉树的前序遍历
//关于递归函数执行顺序的问题:两个递归函数是同级的，会优先执行第一个，第二个会被放到函数调用栈中
//
const preList = [] //存储 遍历出来的value
const preOrder = function(node){ //遍历的方法
          if(node){
               preList.push(node.value) ;
               //优先处理节点左侧的子节点
               preOrder(node.left);
             //左边没有 处理右边
               preOrder(node.right)  
               
          }
}
preOrder(tree)


//中序遍历
const  middleList = []
const middleOrder = function(node){
       if(node){
               //首先找到最左边的节点去执行
               middleOrder(node.left);
               middleList.push(node.value);
               middleOrder(node.right)
       }
}
console.log(middleList)

//后序遍历：左边-右边-中间-根节点

const backList = [];
const backOrder = function(node){
       if(node){
              backOrder(node.left);
              backOrder(node.right);
              backList.push(node.value)
       }
}