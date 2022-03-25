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

    if(!this.root) {
      this.root = newNode;
      return this.root;
    }

    let temp = this.root;
    while(true) {
      if(newNode.value === temp.value) {
        temp.count += 1;
        return this.root;
      } else if (newNode.value > temp.value) {
        if(!temp.right) {
          temp.right = newNode;
          return this.root;
        } else {
          temp = temp.right;
        } 
      } else if (newNode.value < temp.value) {
        if(!temp.left) {
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
    while(true) {
      if(value < temp.value) {
        if(!temp.left) {
          return false;
        } else {
          temp = temp.left;
        }
      } else if (value > temp.value) {
        if(!temp.right) {
          return false;
        } else {
          temp = temp.right;
        }
      } else if (value === temp.value) return true;
    }
  }

  // todo- to get the node with the smallest value from the BST
  getSmallest() {
    let temp = this.root;

    while(true) {
      if(!temp.left) {
        return temp.value;
      } else {
        temp = temp.left;
      }
    }
  }

  // todo- to get the node with the largest value from the BST
  getLargest() {
    let temp = this.root;

    while(true) {
      if(!temp.right) {
        return temp.value;
      } else {
        temp = temp.right;
      }
    }
  }

}

export default BST;