- JS的面向对象是原型式的
    <!-- 没有血缘关系 -->
    罗超 -> prototype 雷军（偶像）
- JS在设计之初没有class 关键字
    使用函数来做类，
    - 函数名大写
    - 以new 的方式 运行一下
    - 返回一个新的对象，并把运行时的 this.name 加上去
    以上这些情况，这个函数不是普通函数，叫做构造函数


    - 任何一个对象都有__proto__私有属性 原型式继承




- 对象从何而来？
    1. {} 空对象
    2. new Object()
    3. new 构造函数 自定义的函数体 -> 顶层是Object()
        JS里函数是一个可以被执行的对象
        数组是一个可以被遍历的对象
        3.1 函数名大写， 作为constructor来用
        3.2 以new 的方式 运行 初始化的功能
            - 生成一个空对象
            - 将函数运行
            - 将它返回
    4. JS最早没有class，
        class Cat{
            constructor(name, color) {
                this.name = name
                this.color = color
            }
            sayMiao(){
                console.log('喵喵')
            }
        }

        function Cat(name, color) {
            this.name = name
            this.color = color
        }
        Cat.prototype ={
            sayMiao(){
                console.log('喵喵')
            }
        }
