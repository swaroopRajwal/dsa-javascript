// * Program to convert a binary tree to a threaded binary tree

export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.isThreaded = false;
  }
}

class BT {
  constructor() {
    this.root = null;
  }

  //todo - to create a threaded binary tree given the root of the tree
  createThreaded(root) {
    if (!root) return;
    if (!root.left && !root.right) return;
    if (root.left) {
      let l = createThreaded(root.left);
      l.right = root;
      l.isThreaded = true;
    }
    if (!root.right) return root;
    return createThreaded(root.right);
  }

  //todo - to get the leftmost node of the node passed as parameter
  leftMost(root) {
    if(!root) return;
    let temp = root;
    while(true) {
      if(!temp.left) return temp;
      temp = temp.left
    }
  }

  //todo - print the threaded binary tree in inorder :D
  inorder(root) {
    if(!root) return;
    let current = this.leftMost(root);
    while(!current) {
      console.log(current.value);

      if(current.isThreaded) current = current.right;
      else current = this.leftMost(current.right);
    }
  }

}

export default BT;
