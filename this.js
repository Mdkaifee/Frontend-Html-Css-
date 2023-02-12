//var firstName='Roseline';
var person={
    firstName:'Jack',
    yearOfBirth:1990,
    job:'Pilot',
    getName:function(){
        console.log(this.firstName)//console.log(firstName)    this keyword will be used to fetch variable of local object
    },
    parents:{
        firstName:'Ryan',
        yearOfBirth:1980,
        job:'Pilot',
        getName:function(){
        console.log(this.firstName)   
    },
  }
}
person.getName();
person.parents.getName();