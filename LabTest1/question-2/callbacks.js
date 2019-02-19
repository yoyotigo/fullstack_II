
const resolvedPromise = () => new Promise((resolve, reject)=>
{
    setTimeout(()=>
    {
        resolve({'message': 'delayed success!'})
    }, 500)
});

const rejectedPromise = () => new Promise((resolve, reject)=>
{
    setTimeout(()=>
    {
        try
        {
            resolve({'error': 'delayed exception!'});
        }catch (e)
        {
            reject(e);
        }
    }, 500)
})

resolvedPromise()
.then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject))

rejectedPromise()
.then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject))