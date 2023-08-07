// Time complexity  - O(N^2)
// Space complexity - O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (i !== min) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }

  return arr;
}

const arr = [2, 3, 4, 1, 5, 1];
selectionSort(arr);
console.log(arr);

module.exports = selectionSort;
