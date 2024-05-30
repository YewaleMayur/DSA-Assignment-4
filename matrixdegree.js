function rotateMatrix90Clockwise(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rotatedMatrix = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotatedMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const rotatedMatrix = rotateMatrix90Clockwise(matrix);
console.log(rotatedMatrix);
