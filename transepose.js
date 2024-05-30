function transposeMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const transposedMatrix = Array.from({ length: m }, () => Array(n).fill(0));
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log(transposedMatrix);
  