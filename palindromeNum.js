//9
const isPalindrome = x => {
    let reversedX = x.toString().split('').reverse().join('');
    return (x.toString() === reversedX);
}


const result = isPalindrome(124);