// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];
  
    // build result array
    for ( let i = 0; i < n; i++ ) {
      let newRow = [];
      for ( let j = 0; j < n; j++ ) {
        newRow.push('');
      }
      result.push(newRow);
    }
  
    let rowStart = 0, rowEnd = n-1;
    let colStart = 0, colEnd = n-1;
    let step = 1;
  
    while ( rowStart <= rowEnd && colStart <= colEnd ) {
      for ( let i = colStart; i <= colEnd; i++ ) {
        result[rowStart][i] = step;
        step++;
      }
      rowStart++;
  
      for ( let i = rowStart; i <= rowEnd; i++ ) {
        result[i][colEnd] = step;
        step++;
      }
      colEnd--;
  
      for ( let i = colEnd; i >= colStart; i-- ) {
        result[rowEnd][i] = step;
        step++;
      }
      rowEnd--;
  
      for ( let i = rowEnd; i >= rowStart; i-- ) {
        result[i][colStart] = step;
        step++;
      }
      colStart++;
  
    }
  
    return result;
  }

module.exports = matrix;
