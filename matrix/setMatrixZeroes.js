/**
 * Problem - Set Matrix Zeroes
 * Leetcode - https://leetcode.com/problems/set-matrix-zeroes
 *
 * Note:
 * 1. For brute force, make sure to only mark rows & cols for original 0s
 * 2. Use -1 as mark zero indicator
 * 3. For optimal solution, make sure to use a col0 variable for zero indicator for cols
 *
 * Good problem, handle edge cases properly. REVISE from time to time!
 */

const MARK_ZERO_INDICATOR = -1;

// Brute force solution
// Time complexity - O(N * M) * O(N + M) + O(N * M) = O(N^3)
// Space complexity - O(1)
function setZeroes1(matrix) {
  const cols = matrix.length;

  for (let i = 0; i < cols; i++) {
    const rows = matrix[i].length;

    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] === 0) {
        markRowAsZero(i, matrix, rows);
        markColAsZero(j, matrix, cols);
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    const rows = matrix[i].length;

    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] === MARK_ZERO_INDICATOR) {
        matrix[i][j] = 0;
      }
    }
  }
}

function markRowAsZero(i, matrix, rows) {
  for (let j = 0; j < rows; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = MARK_ZERO_INDICATOR;
    }
  }
}

function markColAsZero(j, matrix, cols) {
  for (let i = 0; i < cols; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = MARK_ZERO_INDICATOR;
    }
  }
}

// Better solution
// Time Complexity - O(2 * (M * N)) = O(M * N)
// Space Complexity - O(M + N)
function setZeroes2(matrix) {
  const rowIndicator = [];
  const colIndicator = [];

  const cols = matrix.length;

  for (let i = 0; i < cols; i++) {
    const rows = matrix[i].length;

    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] === 0) {
        colIndicator[i] = MARK_ZERO_INDICATOR;
        rowIndicator[j] = MARK_ZERO_INDICATOR;
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    const rows = matrix[i].length;

    for (let j = 0; j < rows; j++) {
      if (
        rowIndicator[j] === MARK_ZERO_INDICATOR ||
        colIndicator[i] === MARK_ZERO_INDICATOR
      ) {
        matrix[i][j] = 0;
      }
    }
  }
}

// Optimal solution - In O(1) space
// Time complexity - O(M * N)
// Space complexity - O(1)
function setZeroes(matrix) {
  const cols = matrix.length;
  // [0][0] is indicator for rows, hence seperate variable for cols
  let col0 = 1;

  for (let i = 0; i < cols; i++) {
    const rows = matrix[0].length;

    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] === 0) {
        // For rows
        matrix[i][0] = 0;

        // For cols
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  // Mark first i..n-1 to j..n-1 positions
  for (let i = 1; i < cols; i++) {
    const rows = matrix[0].length;

    for (let j = 1; j < rows; j++) {
      if (matrix[i][j] !== 0) {
        if (matrix[0][j] === 0 || matrix[i][0] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // Mark rows with zeroes
  if (matrix[0][0] === 0) {
    const rows = matrix[0].length;
    for (let j = 0; j < rows; j++) matrix[0][j] = 0;
  }

  // Mark cols with zeroes
  if (col0 === 0) {
    for (let j = 0; j < cols; j++) matrix[j][0] = 0;
  }
}

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
console.log(matrix);
