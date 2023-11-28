function naiveStringSearch(str,word){
    let count=0;
for(let i=0;i<str.length;i++){
    for(let j=0;j<word.length;j++){
        if(str[i+j]!==word[j]){
            break;
        }
        if(j===word.length-1){
            count++;
        }
    }
}
return count;
}



console.log(naiveStringSearch("woosdawowasdwowawowda",'wow'))