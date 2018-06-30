// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let negative = n < 0 ? true : false;
    let strN = n.toString();
    let reversedStr = '';
    let end = negative ? 1 : 0;
    for ( let i = strN.length-1; i >= end; i-- ) {
        reversedStr += strN[i];
    }
    return negative ? parseInt(-reversedStr) : parseInt(reversedStr);
}

module.exports = reverseInt;
