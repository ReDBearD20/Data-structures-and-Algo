function factorial(n) {
    if(n===1){
        return n
    }
    return n*factorial(n-1)
}

const n = 5;
console.log(factorial(n));
