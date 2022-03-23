class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    /* if we already have a node 
      with value 2 and we get a 
      condition to add one more node 
      with value 2 we'll increment 
      the count property on this object */
    this.count = 1;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  // todo- inset a new node :D
  insert (value) {
    const newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let temp = this.root;
    while(true) {
      if(temp.value === newNode.value) {
        temp.count += 1;
        return this.root;
      } else if(newNode.value < temp.value) {
        if(temp.left === null) {
          temp.left = newNode;
          return this.root;
        }
        temp = temp.left;
      } else if(newNode.value > temp.value) {
        if(temp.right === null) {
          temp.right = newNode;
          return this.root
        };
        temp = temp.right;
      }
    }
  }
}

export default BST;