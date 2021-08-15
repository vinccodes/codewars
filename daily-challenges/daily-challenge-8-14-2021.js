/*  

Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 

*/


const maxCharacter = (myString)=>{
    const counter = {};
    let max = 0;
    let foundMax = '';

    for (let i = 0; i < myString.length; i++) {
      // if the value exists, just add 1
        if (counter[myString[i]]) {
            counter[myString[i]] += 1;

            // check max value
            if (counter[myString[i]] > max) {
              max = counter[myString[i]];
              foundMax = myString[i];
            }

            continue;
        } 
        // if the value doesn't exist, create it and set its count to 1
        if (!counter[myString[i]]) {
          counter[myString[i]] = 1;
          
        }   
    }
    // console.log(counter);
    // console.log(foundMax);

    return foundMax;
};

maxCharacter("impossible")