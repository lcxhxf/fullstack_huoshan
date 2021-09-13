// function f1() {
//     var a = 2
//     function f2() {
//         console.log(a);//2
//     }
//     return f2;
// }
// var x = f1();
// x();


var f3;
function f1() {
    var a = 2
    f3 = function () {
        console.log(a);
    }
}
f1();
f3();

// // 定时器
// setTimeout(function timeHandler(){
//     console.log('111');
//   }, 100)

//   // 事件监听
//   $('#app').click(function(){
//     console.log('DOM Listener');
//   })


for(var i = 1; i <= 5; i ++){
    setTimeout(function timer(){
      console.log(i)
    }, 0)
  }



 


