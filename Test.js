//test the different miscellaneous pieces of code here 

const arr1=[2,3,2];
const arr2=[9,4,4];
//console.log(frequencycounter(arr1,arr2));
function frequencycounter(arr1,arr2){
if(arr1.length!==arr2.length)
return false;
const obj1={};
const obj2={};
for(let val of arr1){
    obj1[val]=(obj1[val]||0)+1;
}
for(let val of arr2){
    obj2[val]=(obj2[val]||0)+1;
}
for(let key in obj1){
    if(!(key**2 in obj2))
    return false;
}
for(let val in obj1){
    if(!(obj1[val]===obj2[val**2]))
    return false ;
}
return true;

}



//valid anagram 

function validAnagram([first,second]){
if(first.length!==second.length)
return false;
let obj={};
for(let i=0;i<first.length;i++){
    obj[first[i]]?obj[first[i]]+=1:obj[first[i]]=1;
}
for(let i=0;i<second.length;i++){
    if(!obj[second[i]])
    return false
else obj[second[i]]-=1

}
return true;
}


const str=['00123','21013']
//console.log(validAnagram(str))

//sumzero 

function sumzero(arr){
let i=0;
let j=arr.length-1;
while(i<j){
    if(arr[i]+arr[j]===0)
        return [i,j];
    else if(arr[i]+arr[j]>0)
        j--;
    else if(arr[i]+arr[j]<0)
        i++;
    
    
}
}

const arr=[-2,-1,0,3,4];
//console.log(sumzero(arr));\


//count unique values 
function uniqueVal(ar){
let l=0
let h=1;
let count=1;
while(h<ar.length){
if(ar[h]===ar[h-1]){
    h++;
}else{
l=h;
count++;
h++;
}
}
return count;
}

const ar=[1,1,1,1,2,2,2,3];
console.log(uniqueVal(ar));

