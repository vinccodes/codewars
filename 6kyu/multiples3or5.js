function solution(number){
  
    // Instantiate array to track the multiples 
    let multiples = [];
    for (let i = 1; i < number; i++) {
      if((i % 3 === 0) && (i % 5 === 0)) {
        multiples.push(i);
        continue;
      }
      // Check multiple of 3 
      else if (i % 3 === 0) {
          multiples.push(i);
          continue;
      }
      // check multiple of 5
      else if (i % 5 === 0) {
          multiples.push(i);
          continue;
      }
    }
    // use reduce + helper function to sum the multiples array
    return multiples.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
  }