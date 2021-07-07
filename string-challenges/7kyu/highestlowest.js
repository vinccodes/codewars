function highAndLow(numbers) {
    // convert string into array
    const data = numbers.split(" ")
      
    // iterate through the numbers
    let high = data[0]
    let low = data[0]
    // iterate through the array of numbers
    for (let i = 1; i < data.length; i++) {
        // compare the values for high: if greater than, become the new high
        if (parseInt(data[i]) > parseInt(high)) {
            high = data[i];
        }
        // compare the values for low: if less than, become the new low
        if (parseInt(data[i]) < parseInt(low)) {
            low = data[i];
        }
    }
    return high + " " + low
  }
  

// Examples
highAndLow("1 2 3 4 5") //"5 1"
highAndLow("3 5 1 9 8") //"9 1"

