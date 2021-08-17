var a = 1; //在空间中申请一个位置，位于栈
function fun1() {
    var b = 2;
}
function fun2() {
    var c = 3;
}
function main() {
    var d = 4;
    fun1();
    fun2();
}

main();