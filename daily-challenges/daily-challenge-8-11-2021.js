
/*
7kyu The average length taken from
https://www.codewars.com/kata/5a430359e1ce0e35540000b1/

// Brute force method, used Array function: map() no built in string functions. 
*/

function averageLength(arr) { 
  const result = [];
  let sum = 0;
  // loop through input to get the average length of elements + get the character of each string
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i].length;
    result.push(arr[i][0]);
  }
  // calculate average
  const average = Math.round(sum / arr.length);

  const newArr = result.map(val => {
    if (average == 1) {
      return val;
    }
    // because each string already has 1 char, start at j=1
    for (j = 1; j < average; j++) {
      val = val + val[0]
      console.log(val);
    }
    return val;
  });
  
  return newArr;
}