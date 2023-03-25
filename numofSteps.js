//1342
const numOfStep = num => {
    let count = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            count++;
            num /= 2;
        } else {
            count++;
            num--;
        }
    }
    return count;
}

const result = numOfStep(14);
console.log(result);