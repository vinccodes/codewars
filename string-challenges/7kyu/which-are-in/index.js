/**
 * Given two arrays of strings a1 and a2
 * return a sorted array r in lexicographical order
 * of the strings of a1 which are substrings of strings of a2.
 */

function inArray(array1,array2){
    
    const result =[]
    // iterate through array1
    for (let i = 0; i < array1.length; i++) {
        // iterate through array2
        for (let j = 0; j < array2.length; j++) {
            // check if string in array1 is substring of a2
            
            if (isSubString(array1[i], array2[j])){
                //if result already has the string, skip
                if (result.includes(array1[i])) {
                  break;
                }
                // add string to result
                result.push(array1[i])
            }
        }
    }
    // sort the result array into lexicographical order
    return result.sort();
}

/** helper function to test if the substring of A is part of B
 *  return boolean value 
 */
function isSubString(stringA, stringB) {
    for (let i = 0; i < stringB.length; i++) {
        for (let j = 0; j < stringB.length + 1; j++) {
            console.log(stringB.substring(i,j));
            if (stringB.substring(i,j) == stringA){

                return true;
            
            }
        }
    }
    return false;
}

function main() {

    console.log(isSubString("arp", "lively"));

}

main();



  