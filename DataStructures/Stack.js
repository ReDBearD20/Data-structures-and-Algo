class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
    
}
class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            let temp=this.first;
            this.first=newNode;
            this.first.next=temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp=this.first;
        //below is the edge case when there is only node left we make last null
        if(this.first===this.last){
            this.last=null;
        }
        //if one node left then first will also be null as first.next will be null
        this.first=this.first.next;
        this.size--;
        return temp.value;
    }
}