class Solution {
    public int calculate(String s) {
        int length = s.length();
        int res = 0;//最终结果
        Stack<Integer> stack = new Stack<>();
        char pre = '+';//默认第一个数字前是+号，这样可以直接把它压栈
        int num = 0;//当前累积数字大小
        for (int i = 0; i < length; i++) {
            //如果是数字，就累加
            if (Character.isDigit(s.charAt(i))) {
                num = num * 10 + s.charAt(i) - '0';
            } 
            //当遇到了符号并且不是空格，或者到了最后一位了：清算符号前的数字，用符号前的数字的前一个符号(pre)来处理
            if ((!Character.isDigit(s.charAt(i)) && s.charAt(i) != ' ') || i == length - 1) {
                if (pre == '+') {//加号：将数字压入栈；
                    stack.push(num);
                }
                if (pre == '-') {//减号：将数字的相反数压入栈；
                    stack.push(-num);
                }
                if (pre == '*') {//乘号：计算数字与栈顶元素，并将栈顶元素替换为计算结果
                    stack.push(num * stack.pop());
                }
                if (pre == '/') {//除号：计算数字与栈顶元素，并将栈顶元素替换为计算结果
                    stack.push(stack.pop() / num);
                }
                num = 0;//累计归零
                pre = s.charAt(i);//把pre符号改成当前遇到的符号
            }
        }
        //计算最终结果，把栈内元素加起来就行
        while (!stack.isEmpty()) {
            res += stack.pop();
        }
        return res;
    }
}