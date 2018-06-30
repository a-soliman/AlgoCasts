// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    let maxChar;
    let frequency = 0;
  
    str.split('').forEach(char => {
      if ( !chars[char] ) chars[char] = 0;
      chars[char]++;
    });
  
    for ( const key in chars ) {
      if ( chars[key] > frequency ) {
        frequency = chars[key];
        maxChar = key;
      }
    }
    return maxChar;
  }

module.exports = maxChar;
