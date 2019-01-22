
const delayedPromise = (num) =>
    new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve(num*num);
        }, 500);
    })

async function asyncPromise(num){
    let promise = new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve(num*num);
        }, 500);
    })
        let r = await promise;
        return r
    }
    

    
delayedPromise(5).then(result => console.log(result))
asyncPromise(6).then(result=>console.log(result))

//try 2 asynchrnous callbacks (lab test?!?!?!?!?******)