//递归
class Solution {
    public boolean isSymmetric(TreeNode root) {
        return check(root.left, root.right);
    }
    public boolean check(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) {
            return true;
        } 
        //一开始只写了node1.val == node2.val,即如果两个节点相等，那么可继续向下比对。
        //前面一段条件是防止两边不对称，一边出现了null
        if (node1 != null && node2 != null && node1.val == node2.val) {
            return check(node1.left, node2.right) && check(node1.right, node2.left);
        } else {
            return false;
        }
    }
}
