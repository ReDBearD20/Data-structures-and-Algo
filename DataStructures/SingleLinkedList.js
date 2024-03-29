class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }

        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let current=this.head;
        let newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        const currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return currentHead;
    }
    unshift(val){
        const newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            newNode.next=this.head;
            this.head=newNode;
            
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0||index>=this.length) return null;
        let counter=0;
        let current =this.head;
        while(counter!==index){
            current=current.next;
            counter++;
        }return current;
    }
    set(index,val){
        const getValue=this.get(index);
        if(getValue){
            getValue.val=val;
            return true;
        }return false;
    }
    insert(index,val){
        if(index<0||index>this.length) return false;
        if(index===this.length) return this.push(val);
        if(index===0) return this.unshift(val);
        
        const newNode= new Node(val);
        const prev=this.get(index-1);
        const temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return this;
    }
    remove(index){
        if(index<0||index>this.length) return false;
        if(index===this.length-1) return this.pop();
        if(index===0) return this.shift();
        const prev=this.get(index-1);
        const removed=prev.next;
        prev.next=removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node=this.head;
        this.head=this.tail;
        this.tail=node;
        let next;
        let prev=null;
        for(let i=0;i<this.length;i++){
            next=node.next;
            node.next=prev;
            prev=node;
            node=next;
        }
        return this;
    }
    print(){
        let arr=[];
        let current=this.head;
        while(current){
            arr.push(current.val);
            current=current.next;
        }
        console.log(arr);
    }
    traverse(){
        let current=this.head;
        while(current){
            console.log(current.val);
            current=current.next;
        }       
    }
}

let list=new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
console.log(list)
// list.traverse()
//console.log('me pop',list.pop())
// list.traverse();
// console.log('me shift',list.shift());
// list.traverse();
// console.log('me get',list.get(1))
// console.log(list.length)
list.insert(3,4);
list.insert(0,'baka');
console.log(list);

