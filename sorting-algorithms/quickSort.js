function partition(arr, startIndex, endIndex) {
  const pivotElement = arr[endIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] <= pivotElement) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[endIndex]] = [arr[endIndex], arr[pivotIndex]];
  return pivotIndex;
}

function quickSortHelper(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const pivotIndex = partition(arr, startIndex, endIndex);
  quickSortHelper(arr, startIndex, pivotIndex - 1);
  quickSortHelper(arr, pivotIndex + 1, endIndex);
}

function quickSort(arr) {
  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
}

const arr = [2, 3, 4, 1, 5];
quickSort(arr);

module.exports = quickSort;
