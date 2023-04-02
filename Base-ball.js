//682

var calPoints = operations => {
    const newArray = [];
    let sum = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            newArray.push(newArray[newArray.length - 1] + newArray[newArray.length - 2]);
        }
    }
    return newArray;
};


const result = calPoints(["5", "2", "C", "D", "+"]);

