const makeUpperCase = (arr) =>
 new Promise((resolve, reject) => {
    resolve(arr.map(function(x)
    {
        if (typeof x === 'string' || x instanceof String)
        {
            return x.toUpperCase()
        }
        else
        {
            reject('Not all items are strings!')
        }
    }))
})

const sortWords = (arr2) =>
 new Promise((resolve, reject)=>
 {
    resolve(arr2.sort())
    reject('Not all items in the array are strings!')
 })


const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
.then(sortWords)
.then((result)=>console.log(result))
.catch(error=>console.log(error))

makeUpperCase(mixedArray)
.then(sortWords)
.then((result)=>console.log(result))
.catch(error=>console.log(error))