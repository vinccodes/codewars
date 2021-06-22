function pigIt(str){
  
    // split the word
    const stringArr = str.split(" ");
    
    // iterate through every word
    for (let i = 0; i < stringArr.length; i++) {
      // check if index contains punctuation, if it does ignore it
      if (stringArr[i] == "." || stringArr[i] == "?" || stringArr[i]== "!"){
        continue;
      }
      // move first letter of each word to end of it
      stringArr[i] = stringArr[i].slice(1) + stringArr[i][0] + "ay";
    }
    // join the string arr with spaces into resulting string
    return stringArr.join(" ");
    
  }