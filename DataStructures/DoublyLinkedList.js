class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    let count, current;
    if (index < this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index,val){
    if(index<0||index>this.length) return false;
    if(index===0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    const newNode=new Node(val);
    // const temp=this.get(index);
    // if(temp!==null){
    //   temp.prev.next=newNode;
    //   newNode.prev=temp.prev;
    //   temp.prev=newNode;
    //   newNode.next=temp;
    // }

    const beforeNode=this.get(index-1);
    const afterNode=beforeNode.next;
    beforeNode.next=newNode;
    newNode.prev=beforeNode;
    afterNode.prev=newNode;
    newNode.next=afterNode;
    this.length++;
    return true;
  }
  remove(index){
    if(index<0||index>this.length) return false;
    if(index===0) return this.shift();
    if(index === this.length-1) return this.pop();
    const removedNode=this.get(index);
    removedNode.prev.next=removedNode.next;
    removedNode.next.prev=removedNode.prev;
    removedNode.next=null;
    removedNode.prev=null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push(12);
list.push(24);
list.push(36);
list.push(48);
list.push(60);
//list.pop();
list.insert(1,"goblock")
console.log(list);

