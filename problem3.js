// Row-Wise and Column-Wise Sorted Matrix
function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) {
      return false;
    }
  
    let rows = matrix.length;
    let cols = matrix[0].length;
  
    // Start from the top-right corner
    let row = 0;
    let col = cols - 1;
  
    while (row < rows && col >= 0) {
      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] > target) {
        col--; // Move left
      } else {
        row++; // Move down
      }
    }
  
    return false; // Target not found
  }
  
  // Example usage:
  const matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
  ];
  const target = 29;
  
  const result = searchMatrix(matrix, target);
  console.log(result); // Output: true
  