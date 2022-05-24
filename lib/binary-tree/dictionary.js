// * user should be able to insert and delete words and meanings from the dictionary
// * user should be able to update the meaning of a particular word from the dictionary

class DictNode {
  constructor(key, meaning) {
    this.key = key;
    this.meaning = meaning;
    this.left = null;
    this.right = null;
  }
}

class Dictionary {
  constructor() {
    this.root = null;
  }


  // todo - a method to add a word to the dictionary
  insert(key, meaning) {
    let newNode = new DictNode(key, meaning);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let temp = this.root;
    while (true) {
      if (newNode.key === temp.key) {
        temp.count += 1;
        return this.root;
      } else if (newNode.key > temp.key) {
        if (!temp.right) {
          temp.right = newNode;
          return this.root;
        } else {
          temp = temp.right;
        }
      } else if (newNode.key < temp.key) {
        if (!temp.left) {
          temp.left = newNode;
          return this.root;
        } else {
          temp = temp.left;
        }
      }
    }
  }

  // todo - to check if the key is present in the dictionary
  contains(key) {
    let temp = this.root;
    let parent = this.root;
    while (true) {
      if (key < temp.key) {
        if (!temp.left) {
          return false;
        } else {
          parent = temp;
          temp = temp.left;
        }
      } else if (key > temp.key) {
        if (!temp.right) {
          return false;
        } else {
          parent = temp
          temp = temp.right;
        }
      } else if (key === temp.key) return { parent, searched: temp };
    }
  }

  // todo - update a particular word in the dictionary
  update(key, meaning) {
    const newNode = this.contains(key);

    if (!newNode) {
      console.log("The given word isn't present in the dictionary");
      return null;
    }

    newNode.meaning = meaning;
    return newNode;
  }

  // todo - get the inorder successor of the given argument node
  minValue(root) {
    let minv = root.key;
    while (root.left !== null) {
      minv = root.left.key;
      root = root.left;
    }
    return minv;
  }

  // todo - a method to call the main delete method
  deleteKey(key) {
    this.root = this.deleteNode(this.root, key);
  }

  // todo - a method to delete the node
  deleteNode(root, key) {
    if (root === null) return root;

    if (key < root.key) root.left = this.deleteNode(root.left, key);
    else if (key > root.key) root.right = this.deleteNode(root.right, key);

    else {
      if (root.left === null) return root.right;
      else if (root.right === null) return root.left;

      root.key = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.key);
    }

    return root;
  }

}

export default Dictionary;

