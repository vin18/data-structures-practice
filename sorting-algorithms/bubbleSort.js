// Bubble sort algoriths
// Time complexity - O(N^2)
// Space complexity - O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swapped) return;
  }
}

const arr = [2, 3, 6, 4, 5, 1];
console.log(arr);
