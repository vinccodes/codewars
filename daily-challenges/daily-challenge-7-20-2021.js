
/* There is an array with some numbers.
   All numbers are equial except for one.
    Try to find it

*/

// What makes a unique number?
// Only 1 copy, 1 count exist

// Should I use any particular data struct?



function findUniqueNum(arr) {
    const numbers = {};

    // Iterate through each element
    for (let i = 0; i < arr.length; i++) {
        // if entry already exists, increment one, go to next element
        if (numbers[arr[i].toString()]) {
            numbers[arr[i].toString()] = numbers[arr[i].toString()] + 1;
            continue;
        }
        // if the number doesn't exist make an entry
        numbers[arr[i].toString()] = 1;
    }   
    // 2nd pass
    // go through object and find the one with value of 1 and return that key
    let foundNum = 0;
    for (const [key, value] of Object.entries(numbers)) {
      if (value == 1) {
        foundNum = Number(key)
      }
    }
    // Return the unique number
    return foundNum;
}

console.log(findUniqueNum([1,1,1,2,1,1,1]), 2)
console.log(findUniqueNum([9,9,9,9,0.1,9,9,9,9]), 0.1)