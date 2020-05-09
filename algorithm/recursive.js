//深入研究二叉树
//一句话: 每个节点最多有左右两个子节点，且小的节点放在左边，大的节点放在右边=>所以一个节点起码有value属性，和至少left 和 right 其中一个属性；
//优点: 拥有比列表更快的查询速度




//创建一个(a+b*c)-d/e 的二叉树表达

function Node(val){
       
}
var tree = {
       value:100,
       left:{
            value:80,
            left:{
                  value:70,
                  left:{value:60},
                  right:{value:65}
            },
            right:{
                value:85,
                left:{
                    value:80
                   },
                right:{
                    value:87
                }
            }
       },
       right:{
             value:110,
             left:{value:105},
             right:{value:115}
       }
}
  //二叉树查询值,返回所在节点
function findNode(val){
        let curNode =  tree ;
        while(true){
              if(curNode.value===val){
                      //返回节点
                      return curNode
              }
              curNode = val<curNode.value?curNode.left:curNode.right;
              // console.log('我想要的节点',curNode)
              //如果curNode 最后指向不存在，那么就返回null
              if(curNode==null){
                      return null
              }
        }
}

const aNode = findNode(80)
// console.log(aNode)

//删除二叉树节点:返回删除后二叉树结构
function deleteNode(val,tree){
       //首先找到节点
       let curNode = tree;
     
       if(curNode.value === val){
          curNode.left
       }

}
// deleteNode(80,tree)

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
middleOrder(tree)

//后序遍历：左边-右边-中间-根节点

const backList = [];
const backOrder = function(node){
       if(node){
              backOrder(node.left);
              backOrder(node.right);
              backList.push(node.value)
       }
}
backOrder(tree)
