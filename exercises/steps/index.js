// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, col='') {
    if ( n === row ) return; 
    if ( n === col.length ) {
        console.log(col);
        return steps(n, row+1);
    }
    if ( col.length > row ) col += ' ';
    else col += '#';
    return steps(n, row, col);
}

module.exports = steps;


// function steps(n) {
//     let newLine = Array(n).fill('#').join('');
//     let spaces = Array(n).fill(' ').join('');
//     let times = 1;
    
//     while ( times <= n ) {
//       let stringToPrint = newLine.slice(0, times).concat(spaces.slice(0, n - times));
//       console.log(stringToPrint)
//       times++;
//     }
// }