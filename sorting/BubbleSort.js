function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//ES2015 swapping
const swapper = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

function bubbleSort(arr) {
  for (let j = arr.length; j > 0; j--) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  return arr;
}

const arr = [20, 3, 7, 9, 2, 12, 1];

console.log(bubbleSort(arr));
