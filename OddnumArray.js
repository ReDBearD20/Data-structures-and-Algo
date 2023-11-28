//recursion with the use of helper function
//HELPER METHOD RECURSION

function getOdd(arr) {
  let result = [];
  //we cannot define the result variable in the scope of inner function as it will reset everytime the function is called
  (function helperOdd(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helperOdd(helperInput.slice(1));
  })(arr);
  //self invoking function we can also call it by helperOdd(arr)
  return result;
}

//without the helper function

function getOdd1(arr) {
  let result = [];
  if (arr.length === 0) {
    return result;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(getOdd1(arr.slice(1)));
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getOdd1(arr));
