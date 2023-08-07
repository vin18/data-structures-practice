function merge(arr, startIndex, midIndex, endIndex) {
  let i = startIndex;
  let j = midIndex + 1;
  let k = 0;
  const temp = new Array(endIndex - startIndex + 1);

  while (i <= midIndex && j <= endIndex) {
    if (arr[i] < arr[j]) {
      temp[i++] = arr[k++];
    } else {
      temp[j++] = arr[k++];
    }
  }

  while (i <= midIndex) {
    temp[i++] = arr[k++];
  }

  while (j <= endIndex) {
    temp[j++] = arr[k++];
  }

  for (let i = 0; i < temp.length; i++) {
    arr[startIndex + i] = temp[i];
  }
}

function mergeSortHelper(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;

  const midIndex = Math.floor(arr.length / 2);
  mergeSortHelper(arr, startIndex, midIndex - 1);
  mergeSortHelper(arr, midIndex, endIndex);
  mergeSort(arr, startIndex, midIndex, endIndex);
}

function mergeSort(arr) {
  mergeSortHelper(arr, 0, arr.length - 1);
}

const arr = [2, 3, 4, 1, 5];
mergeSort(arr);
console.log(arr);
