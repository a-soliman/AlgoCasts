// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, col='') {
    if ( n === row ) return;
    
    if ( col.length === n *2 -1 ) {
      console.log(col);
      return pyramid(n, row+1);
    }
  
    const mid = Math.floor((n * 2 -1) /2);
    const start = mid - row;
    const end = mid + row;
  
    if ( col.length >= start && col.length <= end ) col += '#';
    else col += ' ';
  
    return pyramid(n, row, col);
  
  }

module.exports = pyramid;



// function pyramid(n) {
//     for ( let row = 0; row < n; row++ ) {
//       let newLevel = '';
  
//       for ( let col = 0; col < n *2 -1; col++ ) {
//         let mid = Math.floor((n *2 -1) /2);
//         let start = mid - row;
//         let end = mid + row;
  
//         if ( col >= start && col <= end ) newLevel += '#';
//         else newLevel += ' ';
//       }
//       console.log(newLevel);
//     }
// }