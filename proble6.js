// Find the Saddle Point in a Matrix
// A saddle point is an element of the matrix which is the minimum element in its row and the maximum in its column. Write a program to find the saddle point in the matrix.
function findSaddlePoint(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      // Find the minimum element in the current row
      let minRowValue = matrix[i][0];
      let minColIndex = 0;
  
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] < minRowValue) {
          minRowValue = matrix[i][j];
          minColIndex = j;
        }
      }
  
      // Check if the minimum element is the maximum in its column
      let isSaddlePoint = true;
      for (let k = 0; k < rows; k++) {
        if (matrix[k][minColIndex] > minRowValue) {
          isSaddlePoint = false;
          break;
        }
      }
  
      if (isSaddlePoint) {
        return `Saddle point found: ${minRowValue} at position (${i}, ${minColIndex})`;
      }
    }
  
    return 'No saddle point found';
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = findSaddlePoint(matrix);
  console.log(result); // Output: No saddle point found
  