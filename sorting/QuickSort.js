function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function pivot(arr,start=0,end=arr.length){
let pivot=arr[start];
let swapIndex=start;
for(let i=start+1;i<arr.length;i++){
    if(pivot>arr[i]){
        swapIndex++;
        swap(arr,swapIndex,i);
    }  
}
swap(arr,start,swapIndex);
return swapIndex;
}


function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        //from pivot function we recieve the index of the pivot element then we sort the left subarray and right acc to pivot element 
        let pivotIndex=pivot(arr,left,right);
        //left subarray will be left side of sorted pivot index until single element is left 
        quickSort(arr,left,pivotIndex-1);
        //right subarray follows the same logic
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
const arr=[2,4,1,3,6,5];

console.log(quickSort(arr));