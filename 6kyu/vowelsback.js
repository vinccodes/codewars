function vowelBack(s){
  // move consonants forward 9 places thru alphabet, if pass 'z' start at 'a' again
  
  // move vowels back  5 places, if pass 'a' start at 'z'
  
  /* Exceptions:
        If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

        If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

        Provided string will always be lower case, won't be empty and will have no special characters.
   */
  // iterate through input s
  for (let i = 0; i < s.length; i++) {
      if (s[i].includes('aeiou')) {
        // get code point
        let currElement = s[i].charCodeAt(0);

      }
      else {

      }
  }

  
}

// vowels aeiou