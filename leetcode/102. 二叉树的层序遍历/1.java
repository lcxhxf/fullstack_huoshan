//定义二叉树
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
}

class Solution {
    public List<Integer> levelOrder(TreeNode root) {
        List<Integer> res = new ArrayList<>();//结果
        LinkedList<TreeNode> queue = new LinkedList<>();//创建一个队列
        if (root != null) {
            queue.addLast(root);//队列中添加根节点
        }
        while(!queue.isEmpty()) {//当队列非空时
            TreeNode node = queue.removeFirst();//弹出队列中的头部节点
            res.add(node.val);//从队列中弹出后，记录下来
            if (node.left != null) {
                queue.addLast(node.left);//把左孩子添加到队列
            }
            if (node.right != null) {
                queue.addLast(node.right);//把右孩子添加到队列
            }
        }
        return res;
    }
}
