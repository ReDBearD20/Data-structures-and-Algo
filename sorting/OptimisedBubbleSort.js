//we sort the largest element to its current position
//we check if there is no swaps done means arr is already sorted and no further traversal is required
//gives almost linear like time complexity when the arr is almost sorted

function bubbleSort(arr) {
  let noSwap = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

const arr = [20, 3, 7, 9, 2, 12, 1];

console.log(bubbleSort(arr));
