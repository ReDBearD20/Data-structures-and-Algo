


function happyNumber(n){
    let map=new Map();
    let i=1;
 while(n!==1&&!map.has(n)){
    map.set(n,i++)
    n=getNext(n)
 }
    return n===1;
}

function getNext(n){
    let temp=0;
    let num=0;
    while(n!==0){
        temp=n%10;
        console.log('i m temp',temp)
        num=num+temp*temp;
        n=Math.floor(n/10);
        console.log(n)
    }
    return num;
}
console.log('m i a happy number:',happyNumber(19))