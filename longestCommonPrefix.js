//14
// let prefix = "flower" // 5
// const a = "flow"; // 3
// const b = a.indexOf(prefix); //-1
// let c = prefix.substring(0, prefix.length - 1); // (0, 4) = flowe
// console.log(c);


const longestPrefix = strs => {
    if (strs.length === 0) {
        return "";
    };
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix;
}

const strs = ["flower", "flow", "flight"];
const result = longestPrefix(strs);
// console.log(result);





const a = "flow";
const b = "flower";

const c = a.indexOf("fl");
console.log(c);