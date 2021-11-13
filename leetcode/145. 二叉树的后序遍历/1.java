import java.util.LinkedList;
import java.util.Stack;

import javax.swing.tree.TreeNode;

class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        LinkedList<Integer> res = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode node = root;
        while (!stack.isEmpty() || node != null) {
            if (node != null) {
                stack.push(node);
                res.addFirst(node.val);//向链表的首部添加数字，这样就实现了“反过来”
                node = node.right;//先访问右子节点
            } else {
                TreeNode tmp = stack.pop();
                node = tmp.left;// 在访问左子节点
            }
        }
    }
}