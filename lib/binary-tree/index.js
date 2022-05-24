class Node {
  constructor(value) {
    this.value = value;
    this.count = 1;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // todo- to insert a new node in the BST
  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        temp.count += 1;
        return this.root;
      } else if (newNode.value > temp.value) {
        if (!temp.right) {
          temp.right = newNode;
          return this.root;
        } else {
          temp = temp.right;
        }
      } else if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this.root;
        } else {
          temp = temp.left;
        }
      }
    }
  }

  // todo- to check if the BST contains the given value
  contains(value) {
    let temp = this.root;
    while (true) {
      if (value < temp.value) {
        if (!temp.left) {
          return false;
        } else {
          temp = temp.left;
        }
      } else if (value > temp.value) {
        if (!temp.right) {
          return false;
        } else {
          temp = temp.right;
        }
      } else if (value === temp.value) return true;
    }
  }

  // todo- to get the node with the smallest value from the BST
  getSmallest(node) {
    let temp = node;

    while (true) {
      if (!temp.left) {
        return temp;
      } else {
        temp = temp.left;
      }
    }
  }

  // todo- to get the node with the largest value from the BST
  getLargest(node) {
    let temp = node;

    while (true) {
      if (!temp.right) {
        return temp;
      } else {
        temp = temp.right;
      }
    }
  }

  // todo- to find the number of nodes in longest path
  maxDepth(node) {
    if (node == null) return 0;
      
    let lDepth = this.maxDepth(node.left);
    let rDepth = this.maxDepth(node.right);

    if (lDepth > rDepth) return lDepth + 1;
    return (rDepth + 1);
  }

  // todo- to swap left and right side of the BST (mirror image)
  mirror(node) {
    if(!node) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      this.mirror(node.left);
      this.mirror(node.right);
    }
  }

  // todo- to delete a particular node and replace with it's inorder successor
  delete(value) {
    let temp = this.root;
    let previous = this.root;

    while(true) {
      if(value === this.root.value) {

      } else if(value > this.root.value) {
        previous = temp;
        temp = temp.right;
      } else {
        previous = temp;
        temp = temp.left;
      }
    }
  }
}

export default BST;