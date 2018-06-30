// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newstr = '';
    for ( let i = 0; i < str.length; i++ ) {
      if (i == 0 || str[i-1] == ' ' ) newstr += str[i].toUpperCase();
      else newstr += str[i];
    }
    return newstr;
  }

module.exports = capitalize;
