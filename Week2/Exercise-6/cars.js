class Car 
{
    constructor(model, year)
    {
        this.model = model;
        this.year = year;
    }

    details()
    {
        console.log('Model: '+this.model+" "+this.year);
    }
}

class sedan extends Car
{
    constructor(model, year, price)
    {
        super(model, year); //calls super class constructor to pass in model and year param
        this.price = price;
    }

    info()
    {
        console.log(this.model+' has a balance of $'+this.price+'.00')
    }
}

let car2 = new Car('Pontiac Firebird', 1976);
car2.details();
let sedan2 = new sedan('Volvo SD', 2018, 30000);
sedan2.info()

//Output:
//model: pontiac firebird engine 1976
// volvo sd has balanace of $300000.00