
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (array) => new Promise((resolve, reject)=>{
    var a = array.filter(String => typeof String==='string');
    resolve(a.map(function(x){
        return x.toLowerCase();
    }))
    reject("Error!")
})

lowerCaseWords(mixedArray)
.then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject))



