//链表
// 1、一种相邻节点存在连接关系的数据结构
//优点：在进行频繁的大量 删除和添加元素时 比较适合；
//缺点：在需要查找某个元素时，需要遍历，效率低，不如数组；处理大型数据集时会用到链表，但是前端react 和 vue 都不支持链表，用数组更合适；
//应用场景：
//1、实时更新股票代码，并将新项目添加到列表顶部，是很好的场景

function ListNode(val) {
      this.val = val;
      this.next = null;
  }
  function LLsit(val){ //链表类
     this.head = new ListNode(val)
     this.findNode = findNode;
     this.insertNode = insertNode;
        
  }
  function findNode(item){
       var curNode = this.head; //首节点
       while(curNode.val != item){
              curNode = curNode.next
       }
       return curNode;

  }
  function insertNode(newEle,item){ //在指定节点插入节点
       var currentNode = this.findNode(item);
       var newNode = new ListNode(newEle)
       newNode.next = currentNode.next;  //首先设置新节点 和 当前节点原来下一个节点的关系
       currentNode.next = newNode  //设置当前节点
       
  }
var addTwoNumbers = function(l1, l2) {
    let sum = 0,
        head = {}, // 构建一个空链表
        cur = head;
    while(l1 || l2 || sum) {
        sum += (l1 && l1.val) + (l2 && l2.val);
        // cur = new ListNode(sum % 10)
        cur.next = new ListNode(sum % 10); // head 内存地址增加了一个next 属性
        cur = cur.next //把cur 的内存地址指向了 head.next 
        l1 = l1 && l1.next;
        l2 = l2 && l2.next; 
        sum = Math.floor(sum / 10); //若 sum>10 后面进一位

    }
  
    return head.next;
};
//[2,4,3],[5,6,7]  建立两个链表
const link1 = new LLsit(2) //初始化创建链表
link1.insertNode(4,2)
link1.insertNode(3,4)
const link2 = new LLsit(5)
link2.insertNode(6,5)
link2.insertNode(7,6)


const a = addTwoNumbers(link1.head,link2.head)
console.log(a)