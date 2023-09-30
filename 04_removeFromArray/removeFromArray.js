const removeFromArray = function(arr, ...manyMoreArgs) {
    const newArr = [];

    
    for (let i = 0; i < arr.length; i++) {
        let elm = arr[i];
        if (!manyMoreArgs.includes(elm)) {
            newArr.push(elm);
        }
    }
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
