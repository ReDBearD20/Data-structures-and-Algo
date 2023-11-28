const input = require("readline-sync");
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== num&&start<end) {
    if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
    
    
    
  }
  return arr[mid]===num?mid:-1;
 
}
const num = input.question("enter the num:");
const arr = [1, 2, 4, 6, 7, 8, 9, 12];
console.log(binarySearch(arr, +num));
