function validAnagram([str1,str2]){
const obj1={};
const obj2={};
for(const val of str1){
    obj1[val]=(obj1[val]||0)+1;
}
for(const val of str2){
    obj2[val]=(obj2[val]||0)+1;
}
console.log(obj1);
console.log(obj2);
for(const key in obj1){
    if(obj1[key]!==obj2[key])
    return false
}
return true;
}



//another solution using traditional for loop

function validAnagram1([first,second]){
    if(first.length!==second.length)
    return false;
let obj={};
for(let i=0;i<first.length;i++){
    obj[first[i]]?obj[first[i]]+=1:obj[first[i]]=1;
}
for(let i=0;i<second.length;i++){
    if(!obj[second[i]]){
        return false;
    }else obj[second[i]]-=1;
}
return true;
}

const str =['test','tste'];
console.log(validAnagram(str));
console.log(validAnagram1(str));