1. 第一行，在全局作用域执行上下文声明了一个变量 并复制为3
执行栈
2. addTwo 在全局作用域下的变量
   括号内的内容分配给addTwo
   addTwo指向一个代码存储空间
3. 在全局作用域 b undifined
4. 调用addTwo函数 在全局作用域中查找addTwo变量a 在全局 3传给addTwo准备执行
5. 执行上下文切换，创建一个新的本地执行上下文 入栈
6. x ret undifined
   x = 3 
7. 在当前addTwo执行上下文找到ret
执行栈弹出addTwo 上下文，销毁其中作用域中变量，垃圾回收
8. 打印b





1. 执行上下文 执行栈 作用域
1-8行 在全局作用域里 新的变量 并赋值了函数定义
9 increment
  createCounter方法执行
  创建新的本地执行上下文  并入执行栈
2. counter  0
3. 3-6  myFunction
4. 7行返回myfunctuon变量的内容
  counter myfunction 垃圾回收  
  执行栈的弹出，回到全局



Lexical scope 作用域链去查找
一个函数可以访问在它的调用上下文中定义的变量

- 闭包 也叫背包
let func = (function() {
   return function() {

   }
})
  无论何时声明新函数并将其赋值给变量
  函数变量里不止存储函数定义，还有函数闭包
  背包一样，函数创建的时候作用域中所有的变量
 
