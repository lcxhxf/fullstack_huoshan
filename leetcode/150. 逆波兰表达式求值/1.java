import java.util.Stack;

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < tokens.length; i++) {
            if (tokens[i].equals("+")) {
                stack.push(stack.pop() + stack.pop());
            } else if (tokens[i].equals("-")) {
                stack.push(-(stack.pop() - stack.pop()));
            } else if (tokens[i].equals("*")) {
                stack.push(stack.pop() * stack.pop());
            } else if (tokens[i].equals("/")) {
                int num2 = stack.pop(), num1 = stack.pop();//注意顺序
                stack.push(num1 / num2);
            } else {
                stack.push(Integer.parseInt(tokens[i]));
            }
        }
       int res = 0;
       while (!stack.isEmpty()) {
           res += stack.pop();
       }
       return res;
    }
}