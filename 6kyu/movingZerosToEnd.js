var moveZeros = function (arr) {
    // iterate thru arr
    
    // check if 0: if it is, store the 0
    // shift all elements > index of the 0 -1 index
    // add the 0 to last index
    
    // How to handle consecutive 0s at the end of an array?
    
    // Can I filter all non-zeros and then filter again for all zeros
    // then combine the 2 arrays
    
    
    // TODO: How to handle cases of {}, and []
    const noZeros = arr.filter(val=> val !== 0)
    const zeros = arr.filter(val => val == 0)
    //console.log(noZeros)
    //console.log(zeros)
    
    return noZeros.concat(zeros)
    
  }