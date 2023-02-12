console.log("Discussion about object literals")
//Object Literals for creating objects 
let car = {
    name: 'Mustang',
    topSpeed: 120,
    run: function () {
        console.log("Car is running")
    }
}
//console.log(car);
//console.log(car.run)
//Constructor is a template through which we can create objects
//newDate();   we have seen constructor like this


//I will create constructor for car
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running `);
    }
    this.analyze=function(){
        console.log(`This car is slower by ${200 - this.topSpeed} KMPH than Mercedes`)
    }
}
car1 = new GeneralCar('Lamborghini', 178);
car2 = new GeneralCar('Nissan', 78);
car3 = new GeneralCar('Mercedes', 200);
console.log(car1,car2,car3);

