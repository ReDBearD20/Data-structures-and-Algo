//we insert the element to its sorted position in sorted portion of the array
//if there is only one element in array its always sorted

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const arr = [20, 3, 7, 9, 2, 12, 1];
console.log(insertionSort(arr));
