var preorderTraversal = function(root) {
    // 初始化数据
    const res =[];
    const stack = [];
    while (root || stack.length){
      while(root){
        res.push(root.val);
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      root = root.right;
    }
    return res;
};