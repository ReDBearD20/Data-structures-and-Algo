//frequency counter
//check if the second array has all the value of the square of the first array 

//naive approach
//O(N^2)
function counter(arr1,arr2){
if(arr1.length!==arr2.length){
    return false; 
}
for(let i=0;i<arr1.length;i++){
   let correctIndex=arr2.indexOf(arr1[i]**2);
   if(correctIndex===-1)
   return false;
arr2.splice(correctIndex,1);//removes the item at the given index
}
return true;
}


//frequency counter with O(N)
function counter1(arr1,arr2){
    const frequencyCounter1={};
    const frequencyCounter2={};

    for(const val of arr1){
        //assigning values to the keys in frequencycounter obj and the ||0 is because the initial value for every key is null so null + anything is NaN
        //so we give other falsy value to it i.e 0 so that if key repeats we ll already have it as 1 so 1||0 is 1 
        frequencyCounter1[val]=(frequencyCounter1[val]||0)+1
    }
    for(const val of arr2){        
        frequencyCounter2[val]=(frequencyCounter2[val]||0)+1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
   for(const key in frequencyCounter1){
    //checking if all the square of keys of obj 1 exists in obj 2 (refer use of in operator in js)
    if(!(key**2 in frequencyCounter2))
    return false;
    //comparing values of both the objects 
    if(frequencyCounter2[key**2]!==frequencyCounter1[key])
    return false;
    console.log(key)
   }
   return true ;
}


const arr1=[1,2,2,3];
const arr2=[9,1,4,4];
//console.log(counter(arr1,arr2));
console.log(counter1(arr1,arr2));



