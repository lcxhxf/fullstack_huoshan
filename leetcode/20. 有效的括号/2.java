class Solution {
    public boolean isValid(String s) {
        Map<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put(']', '[');
        map.put('}', '{');
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
                stack.push(s.charAt(i));
            } else if (stack.isEmpty() || stack.pop() != map.get(s.charAt(i))) {
                return false;//stack.isEmpty()针对先出现右括号的情况，后面的条件针对括号类型不匹配的情况
            }
        }
        return stack.isEmpty();//针对剩余左括号无法抵消的情况
    }
}
