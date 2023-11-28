//count the number of alphabets in a given string 
function wordCount(str){
let result ={};
for(let i=0;i<str.length;i++){
if(result[str[i]]>0)
result[str[i]]++;
else 
result[str[i]]=1;
}
return result
}
const str='helLo   red';
//console.log(wordCount(str));

//use a for of loop

function wordCount1(str){
    let result={}
    for(let key of str){
        if(result[key]>0){
            result[key]++;
            
        }
       
        else{
            result[key]=1;
        }
       
    }
    
    return result;
}

//console.log(wordCount1(str))

// function test(str){
//     for(let key of str){
//         console.log(key);
//     }
// }

// console.log(test(str))


//using the ternary operator 
function wordCount2(str){
    let result={}
    for(let key of str){
        result[key]>0?result[key]++:result[key]=1;
        
    }
    
    return result;
}
 //console.log(wordCount2(str))


 //using regular expression to weed out everything except the alphanumeric values 
 function wordCount3(str){
    let result={}
    for(let key of str){
        key=key.toLowerCase();
        if(/[a-z0-9]/.test(key)){
            result[key]=++result[key]||1;
        }
        
    }
    
    return result;
}
 console.log(wordCount3(str))