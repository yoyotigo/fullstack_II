const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase(); //Capitalize first letter and lowercase all other letters

const capColors = (arr) => arr.map(capitalize);

const colors = ['red', 'green', 'blue'];

console.log(capColors(colors));