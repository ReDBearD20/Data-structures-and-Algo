//return the first pair of where the sum is 0 or undef if no such pair exists
//naive approach 
 
function sumzero1(arr){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===0)
        return [arr[i],arr[j]]
    }
}
}

//two pointer method

function sumzero(arr){
    let j=arr.length-1;
    let i=0;
while(i<j){
if(arr[i]+arr[j]===0){
    return [arr[i],arr[j]]
}else if(arr[i]+arr[j]<0){
    i++;
}else j--;
}
}

const arr=[-5,-4,-2,-1,0,1,2,4,9];
console.log(sumzero(arr));

