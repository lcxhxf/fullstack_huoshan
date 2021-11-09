class Solution {
    public String decodeString(String s) {
        Stack<Character> stack = new Stack<>();
        StringBuffer res = new StringBuffer();//用sb是因为他有reverse()这个方法，方便
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != ']') {//没遇到]，持续入栈
                stack.push(s.charAt(i));
            } else {//遇到 ],
                StringBuffer group = new StringBuffer();
                //把[前的字符弹出来，添加到一个sb里
                while (stack.peek() != '[') {
                    group.append(stack.pop());
                }
                //出栈顺序是反的，这里正过来
                group.reverse();
                //把刚才那个【弹了
                stack.pop();
                //此时stack顶元素为数字，可能是一位，也可能是多位，所以求次数不能只pop一次
                int times = 0;
                int m = 1;
                //计算重复几次
                while (!stack.isEmpty() && Character.isDigit(stack.peek())) {
                    int tmp = stack.pop() - '0';
                    times +=  tmp * m;
                    m *= 10;
                }
                //把【】内的字符整体追加times次到栈中
                for (int j = 0; j < times; j++) {
                    for (int k = 0; k < group.length(); k++) {
                        stack.push(group.charAt(k));
                    }
                }
            }
        }
        //到这里，stack中已经没【】和数字了
        while (!stack.isEmpty()) {
            res.append(stack.pop());
        }
        return res.reverse().toString();
    }
}