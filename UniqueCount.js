//input array find the unique number of values in it ;

//using set naive approach
function unique1(arr){
const set=new Set(arr);
return set.size;
}





//-----------------------------------//
function unique(arr){
    const obj={};
    for(const key of arr){
        obj[key]=(obj[key]||0)+1;
    }
    //console.log(Object.keys(obj).length);
    }
    
    const arr=[1,1,2,2,2,3,1,2,3,4,4,4,4,-1];
    unique(arr);
    //console.log(unique(arr));
    
    //another approach
    
    function unique1(arr1){
    let j=1;
    let i=1;
    while(j<arr1.length){
        if(arr1[j]===arr1[j-1]){
            j++;
        }else{
            arr1[i]=arr1[j]
            i++;
            j++;
        }
    }
    return i;
    }
    const arr1=[1,1,2,2,2,3,3,4,4,4,4,5];
    //console.log(unique1(arr1));
    
    
    function unique2(arr2){
    let i=0;
    for(let j=1;j<arr2.length;j++){
        if(arr2[i]!==arr2[j]){
            i++;
            arr2[i]=arr2[j]
        }
    }
    return i+1;
    }
    const arr2=[1,1,2,2,2,3,3,4,4,4,4];
    console.log(unique2(arr2));