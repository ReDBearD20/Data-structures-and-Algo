//naive approach

function maxSum(arr,num){
    if(arr.length<num){
        return 'the array is less than the number given'
    }
    let max=-Infinity
    //here i<arr.length-num+1 is so that we dont go to last element and search the next number at the end of array we 
    //shall stop just before we have our set of numbers which is in num
    for(let i=0;i<arr.length-num+1;i++){
        let temp=0;
        for(let j=0;j<num;j++){
            temp+=arr[i+j];           
        }
        if(temp>max)
        max=temp;
    }
    return max;

}


//sliding window approach

function slidingWindow(arr,num){
    let max=0;
    let temp=0;
    
for(let i=0;i<num;i++){
    max+=arr[i];
}
temp=max;
for(let j=num;j<arr.length;j++){
    temp=temp-arr[j-num]+arr[j];
    max=Math.max(temp,max)
}
return max
}



const arr=[1,2,3,4,5,6,7,1,22];
const num=3;
//console.log(maxSum(arr,num));
console.log(slidingWindow(arr,num));