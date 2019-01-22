const compareNumToTen = (num) =>
 new Promise((resolve, reject) => {
    if (num>10)
     {
        resolve(num+' is greater than 10, success!');
     }
    reject(new Error(num+ ' is less than 10, error!'));
});

compareNumToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))