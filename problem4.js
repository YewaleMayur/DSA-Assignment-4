// Common Elements in All Rows of a Matrix
function findCommonElements(matrix) {
    if (!matrix.length) {
      return [];
    }
  
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
  
    // Dictionary to store the frequency of elements
    const elementCount = {};
  
    // Initialize the dictionary with the first row elements
    for (let j = 0; j < colCount; j++) {
      elementCount[matrix[0][j]] = 1;
    }
  
    // Traverse the rest of the matrix
    for (let i = 1; i < rowCount; i++) {
      const currentRowCount = {};
  
      for (let j = 0; j < colCount; j++) {
        const elem = matrix[i][j];
        // If the element is in the dictionary and appeared in the previous row, increment its count
        if (elementCount[elem] === i) {
          currentRowCount[elem] = (currentRowCount[elem] || 0) + 1;
          if (currentRowCount[elem] === 1) {
            elementCount[elem]++; // Increment the global count only once per row
          }
        }
      }
    }
  
    // Collect elements that appear in all rows
    const commonElements = [];
    for (const elem in elementCount) {
      if (elementCount[elem] === rowCount) {
        commonElements.push(parseInt(elem));
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
  ];
  
  const commonElements = findCommonElements(matrix);
  console.log(commonElements); // Output: [1, 8]
  