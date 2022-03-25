import BST from "./lib/binary-tree";

const myBST = new BST();

const rawTree = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];

rawTree.forEach(item => {
  myBST.insert(item);
})

console.log(myBST.getLargest());
