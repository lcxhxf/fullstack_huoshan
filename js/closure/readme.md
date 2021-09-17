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