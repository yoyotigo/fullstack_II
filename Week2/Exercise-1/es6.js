function gretter(myArray, counter)
{
    var greetText = 'Hello ';

    for (var index = 0; index < myArray.length; index++)
    {
        console.log(greetText + myArray[index]);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


//Rewritten using es6 syntax

gretter = myArray => {
   
    const greetText = 'Hello ';

    for(let index in myArray)
    {
        console.log(greetText + myArray[index]);
    }
}
gretter(['Randy Orton', 'Ric Flair Drip', 'Incredible Hulk']);