const input=require('readline-sync');
function linearSearch(arr, num) {
  if (arr.length < 1) return;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}
const arr = [1, 2, 4, 5, 7, 8, 3];

const num=input.question('please enter the number u want to be searched: ')
console.log('\nhey i am the num they talkin about',num)
//console.log(typeof(num)) ==> string
console.log(linearSearch(arr, +num));
