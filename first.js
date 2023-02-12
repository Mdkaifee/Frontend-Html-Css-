// Tut ! to 5 Code with Harry
console.time('Your code took');
console.log('Hello World');
console.log(4+34);
console.log(true);
console.log([2,4,6,8,9]);//array
console.log({Kaifee:'this',marks:34}); //js object
console.table({Kaifee:'this',marks:34});
console.warn('This is me kaifee');
console.timeEnd('Your code took');
// console.assert(566<189,'Age>189 is not possible');
// console.error('This is an error');
// VAR
var name='kaifee';
console.log(name)
var channel;
var marks=34;
var string='356g';//it will be taken as string not number bcz of single quote
channel='md kaifee';
console.log(channel); 
console.log(name,channel,marks,string);
var city='Spj'
console.log(city)
// CONST
const ownername='Kunal Thakur';
console.log(ownername);
// ownername='Harry';   This is not allowed when u r using const,it does not override the variable
// const fruit;  const operator sholud always be assigned
const fruit='apple';
// LET
{
    let city='DSS';
    city='Kolkata';
    console.log(city);
}
console.log(city); //var is outside the block so its printing Spj
const arr1 =[3,2,5,4,9];
// arr1=[48,77,88]; you cant do this ,u cant declare again
arr1.push(85);
console.log(arr1);
/* Most common programming case types: 
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/
//Primitive DataTypes
//1. String
let naam="Kaifee";
console.log("my string is "+naam);
console.log("Data type is "+(typeof naam));
/*let mark='34'; ->trated as string
console.log("Data type is "+(typeof mark));*/
//2. Numbers
let mark=34.4;
console.log("Data type is "+(typeof mark));
//3.Boolean
let isDriver=true;
console.log("Data type is "+(typeof isDriver));
//4.Null
let nullVar=null;
console.log("Data type is "+(typeof nullVar));//object type
// Undefined
let undef;
console.log("Data type is "+(typeof undef));//undefined type
// 5.Symbol
//Reference Datatypes
//1.arrays
myarr=[1,2,3,4,false,"Kaifee"];
console.log("Data type is "+(typeof myarr));//object data type
//2.Object literals
let stuMarks = {
    Md:98,
    Kaifee:100,
    'Kunal thakur':89
    
    //Kunal thakur:89 ->this will throw an error
}
console.log(stuMarks)
console.log( typeof stuMarks)
//3.Function
function findName() {
    
}
console.log( typeof findName)//object data type
let date=new Date();
console.log( typeof date)//object data type
// Type conversion & Type coercion
let myvar;
myvar=88;
console.log(myvar);
// Convert it in string
console.log(myvar,typeof myvar);
let myvari;
myvari=String(34);
console.log(myvari,typeof myvari);//string type
let booleanVar=String(true);//new type will be string
console.log(booleanVar,typeof(booleanVar));
let dates=new Date();
console.log(dates, typeof dates);//object
let datess=String(new Date());
console.log(datess, typeof datess);//string
let arra=[1,2,3,4];
console.log(arra,(typeof arra))//object
let ar=String([1,2,3,4]);
console.log(ar,(typeof ar))//string
let array=String([1,2,3,4]);
console.log(array.length,(typeof array))//string length+string type will be printed
let arrays = [1,2,3,4,5];
console.log(arrays.length,(typeof arrays));//string length +object type will be printed

let i=8;
console.log(i.toString()) //i here becomes string using toString
let j=true;
console.log(j.toString());
let k=new Date();
console.log(k,toString());
let stri=Number ("34.34");//String to number conversion
console.log(stri,typeof stri)
let strin=Number ("34d34");//String to number conversion but when converting d was found,that is not a number
console.log(strin,typeof strin)
let st=Number (true);// 1 is used for true
console.log(st,typeof st)


let number= parseInt('34');  //if u dont use parse here then output will be printed there 34 string means string converts into numeric value
console.log(number,(typeof number));
let num= parseFloat('34555');  //if u dont use parseInt here then output will be printed there 34 string and  will consider as a number ,Parse float will convert string into float
console.log(num,(typeof num));
let numb= parseFloat('34.555');  //if u dont use parseFloat here then output will be printed there 34.555 string and and  will consider as a number,Parse float will convert string into float
console.log(numb,(typeof numb));
let numbe= parseFloat('34.555'); 
console.log(numbe.toFixed(8),
//How many decimal point u want after a number
(typeof numbe));

// Type Coercion

let mystr="698";
let myno=22;
console.log(mystr+myno);//Number converted into string and concatenate in coercion
let mySt=Number("698");// here its a number and number is added not cancatenate
let mynom=22;
console.log(mySt+mynom);


 





