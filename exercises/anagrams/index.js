// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let charMap = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let specialChars = [0,0];
    for ( let i = 0; i < stringA.length; i++ ) {
      let currentChar = stringA[i].toLowerCase();
      if ( alphabet.indexOf(currentChar) !== -1 ) {
        if ( !charMap[currentChar] ) charMap[currentChar] = 0;
        charMap[currentChar] ++;
      }
      else {
        specialChars[0]++;
      }
    }
  
    for ( let i = 0; i < stringB.length; i++ ) {
      let currentChar = stringB[i].toLowerCase();
      if ( alphabet.indexOf(currentChar) === -1 ) specialChars[1]++;
      else {
        if ( !charMap[currentChar] ) {
          console.log(currentChar);
          return false;
        }
        charMap[currentChar]--;
        if ( charMap[currentChar] === 0 ) delete charMap[currentChar];
      }
    }
    if ( Object.keys(charMap).length > 0 ) return false;
    //console.log(st)
    return (stringA.length - specialChars[0]) === (stringB.length - specialChars[1])
  }
  

module.exports = anagrams;
