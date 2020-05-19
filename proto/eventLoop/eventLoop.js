(function() {

    console.log('1');

    setTimeout(function cb() {
        console.log('2');
    }, 0);

    console.log('3');

    setTimeout(function cb1() {
        console.log('4');
    }, 0);

    console.log('5');

})();
//同步：1->3->5
//宏任务:4->2