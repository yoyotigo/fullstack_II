
const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase(); //Capitalize first letter and lowercase 
                                                                                           //all other letters

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));