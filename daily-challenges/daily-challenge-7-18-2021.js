/* Consider the word "abode". We can see that the letter a is in position 1 and b in position 2.
   In the alphabet, a and b are also in position 1 and 2. Notice also that d and e in abode occupy
   the positions they would occupy in the alphabet, which are positions 4 and 5.

   // Given an Array of words, return an array of the number of letters that occupy their positions
      in the alphabet for each word. For example,

     map --> split --> filter

    // Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

*/
function numberInPosition(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // for every word: check if it matches the position in alphabet
    const result = arr.map(word =>{
        return word.split('').filter((letter, index)=> letter.toLowerCase() === alphabet[index]).length
        
    });
    return result;
}
        
       
console.log(numberInPosition(["abode", "xyzqefgjirklm", "zxcvbnm"]), [4, 7, 1])
console.log(numberInPosition(["bnmdef", "poiuytrewqlkjhgfdsamnbvcxz", "gbhmerujk"]),[3,1,2])
