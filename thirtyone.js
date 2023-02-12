console.log("Discussion about Inheritance")

class Employee{
constructor(givenname,givenexperience,givendivision){
    this.name=givenname;
    this.experience=givenexperience;
    this.division=givendivision
    }
    slogan(){
        return `I am ${this.name} and this company is this best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }
    static add(a,b){
        return a+b;
    }
}
/*
class Programmer{
    constructor(givenname,givenexperience,givendivision){
        this.name=givenname;
        this.experience=givenexperience +'company';
        this.division=givendivision;    //If i want to change or add something in programmer in existing class then we have to change above too that's why solution is Inheritance
        this.language=this.language
        }
        slogan(){
            return `I am ${this.name} and this company is this best`;
        }
    
        joiningYear(){
            return 2020 - this.experience;
        }
        static add(a,b){
            return a+b;
        }
    }
*/
class programmer extends Employee{
    constructor(givenname,givenexperience,givendivision,language,github){
        super(givenname,givenexperience,givendivision);
        this.language=language;
        this.github=this.github;
    }
     favoritelanguage(){
        if(this.language=="python"){
            return "Python";
        }
        else{
            return "JavaScript";
        }
    }
    static multiply(a,b){
        return a*b;
    }
}
kaifee=new Employee("Kaifee",56,"Division");
kaifee2=new Employee("Kaifee2",65,"DDivision");
console.log(kaifee);
console.log(kaifee2);
console.log(kaifee.joiningYear());
console.log(kaifee2.joiningYear());

console.log(Employee.add(34,5))  //Use class without creating an object by using static method

//Inheritance:Making a template by the help of another template
console.log(programmer.multiply(20,5))
saifee=new programmer("Saifee",58,"Lays","Java","ro")
console.log(saifee);
console.log(saifee.favoritelanguage);
console.log(programmer.multiply(5,3));