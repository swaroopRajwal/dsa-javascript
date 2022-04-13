export class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class List {

  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  //todo append the argument at the tail of the list :)
  push(value) {
    const newNode = new Node(value);

    if(!this.head.value) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1
      return;
    } 

    let tempNode = this.head;
    while(tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = newNode;
    this.length++;
    this.tail = tempNode.next;        
  }

  //todo print list :)
  print() {
    if (!this.head) {
      console.log('the list is empty ¯\\_(ツ)_/¯')
      return;
    }
    let tempNode = this.head;

    while(tempNode !== null) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }

  //todo remove the last element from the list :) 
  pop() {
    // ** three test cases 
    // ** 1. if the list is empty 
    // ** 2. if the list only has one element
    // ** 3. if the list has more than one element
    if(!this.head.value) {
      console.log('list is already empty bruh what you wanna pop :\')');
      this.length--;
      return false;
    } else if (this.head.value && !this.head.next) {
      const bechara = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return bechara;
    } else {
      let tempNode = this.head;
      while(tempNode.next.next !== null) {
        tempNode = tempNode.next;
      } 
      let bechara = this.tail;
      this.tail = tempNode;
      tempNode.next = null;
      this.length--;
      return bechara;
    }
  }

  //todo gives us the status of our thing :) 
  checkStatus() {
    console.log('head: ',this.head);
    console.log('tail: ',this.tail);
    console.log('length: ',this.length);
    this.print();
  }

}

export default List;
