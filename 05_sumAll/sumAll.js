const sumAll = function(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR";
    }
    
    if ((start < 0 || end < 0)) {
        return "ERROR";
    }

    let sum = 0;
    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;



//algorithm
//Create a variable for sum
//loop through interval start to end. Add the number at each iteration to sum.
//return sum