function inArray(array1,array2){
    //
    
    //1. iterate through array1
    for (let i = 0; i < array1.length; i++) {
        //   iterate through array2
        for (let j = 0; j < array2.length; j++) {
            //check if string in array1 is substring of a2
            //if it is push/append string to result array
            isSubString(array1[i], array2[j]);
        }
    }
    
    
    
    
    // TODO: sort the result array into lexicographical order
    // return sorted array 
}

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



  