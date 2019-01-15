var array = [1,2,3,4];

const sum = (accumulate, val) => accumulate + val;
const mult = (accumulate, val) => accumulate * val;

console.log(array.reduce(sum));
console.log(array.reduce(mult));

//10 and 24 output 