//add number upto given number 
const acc1=(n)=>{
    let total=0;
    for(let i=1;i<=n;i++){
        total+=i;
    }
    return total;
}

console.log(acc1(6));
// var t1=performance.now();
// acc1(1000000000);
// var t2=performance.now();
// console.log(`Time elapsed ${(t2-t1)/1000} seconds.`)

const acc2=(n)=>{
return n*(n+1)/2
}
console.log(acc2(6));