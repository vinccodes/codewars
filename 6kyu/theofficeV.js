function meeting(x, need){
    let chairsTaken = 0;
    const result = []
    // check if you need no chairs
    if (need === 0) {
        return "Game On";
    }
    // iterate through each array of meeting rooms up to Need times
    for (let i = 0; i < x; i++) {
        // get the number of of occupants
        console.log(x);

        // get number of chairs, subtract to get the num of chairs to take
        const freeChairs = x[i][1] - x[i][0];
        chairsTaken += freeChairs;
        result.push(chairsTaken);
        // check if need is met
        if (chairsTaken == need) {
            return result;
        }
        // continue to next room
    }


}