// take a user input from console and store it into a variable 

const readline=require('readline');
let lines=[];
let ans;
function getDiceAnswer(){
    return new Promise(resolve=>{
        const rl=readline.createInterface({input:process.stdin,output:process.stdout});
        rl.question('which dices to keep [1,2,3,4,5] ?:',(answer)=>{
            resolve(answer);
            console.log('will keep the dices:',answer);
            rl.close();
        })
    })
}

(async function getAnswers(){
    const diceAnswer=await getDiceAnswer();
    lines.push(diceAnswer);
    ans=diceAnswer
    console.log(lines);
    console.log('i am the answer',ans);
})();

//or to avoid all of the hassle we can use readline-sync lib below example

// const input = require('readline-sync');
// const name=input.question('whats ur name nigger?')
// console.log('i am the nigga they talkin about ',name);

