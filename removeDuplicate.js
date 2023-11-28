//function expression in java script are not hoisted 
var containsDuplicate1=function(nums){
for(let i=0;i<nums.length;i++){
    let j=i+1;
    while(j<nums.length){
        if(nums[i]!==nums[j]){
            j++;
           }
           else return true;
    }
  
}
return false;
}
// 1liner solution
var containsDuplicate2=function(nums){
    return new Set(nums).size<nums.length;
    }
//using hash map or object s best way to do it
var containsDuplicate3=function(nums){
        let numObj={};
        for(let i=0;i<nums.length;i++){
            let num=nums[i];
            if(numObj[num]){
                return true ;
            }else {
                numObj[num]=true;
            }
        }
        return false;
        }


nums = [1,2,3,0,6,7,89,34,99,1];

console.log(containsDuplicate1(nums));
console.log(containsDuplicate2(nums));
console.log(containsDuplicate3(nums));