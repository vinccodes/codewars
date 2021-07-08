function vowelBack(s){
  // move consonants forward 9 places thru alphabet, if pass 'z' start at 'a' again
  
  // move vowels back  5 places, if pass 'a' start at 'z'
  const Z_VALUE = 'z'.charCodeAt(0);
  const A_VALUE = 'a'.charCodeAt(0);
  
  /* Exceptions:
        If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

        If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

        Provided string will always be lower case, won't be empty and will have no special characters.
   */
  // iterate through input s
  for (let i = 0; i < s.length; i++) {
    let currElement = s[i].charCodeAt(0);
      if (s[i].includes('aeiou')) {
        // get code point
        
        for (let i = 0; i < 5; i++){
            if (currElement - 1 < A_VALUE) {
                // set the currElement to Z
                currElement = Z_VALUE;
                currElement -= 1;
            }
            currElement-= 1;
        }
      }
      // Exceptions : 'c' or 'o'
      if (s[i].includes('co')) {
            currElement -= 1;
      }
      else if (s[i].includes('d')) {
          currElement -= 3;
      }
      else if (s[i].includes('e')) {
        currElement -= 4;
    }

      // Consanants
      else {
        for (let k = 0; k < 9; k++) {
            if (currElement + 1 > Z_VALUE) {
                currElement = A_VALUE;
                currElement += 1;
            }
            currElement += 1;
        }
      }
  }

  
}

// Helper function to check whether or not to keep moved value
// or revert back if value == C,O,D, or E
function ifCODE(original, moved) {
    const CODE = 'code';
    if (original.includes(CODE)) {
        return original;
    }
    return moved;
    
}

// vowels aeiou