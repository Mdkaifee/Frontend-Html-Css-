//alert('New message')
//this is a comment
/*
For multiple comment line
/*var a=0;
console.log('reached this point ' + a);
a++;
console.log('reached this point again ' + a);
a++;
console.log('a is now ' + a);
*/
/*var a="hello world";
var b=10;
var c=true;
var d="d";
var e;
document.write(e);//its not defined
document.write(b);
*/ 
/*
***************Function*************
var a=0;//global dec
myFunction('hello',10,20);
console.log(addMe(7,8));
console.log(addMe(7,18));
console.log(addMe(17,8));

function myFunction(a,b,c) {
    var b='hello';
   
console.log('within fn '+ a + ' ' +  b + ' ' + c);
}
function addMe(a,b){
 var c=a*b;
 return c;
}
*/
/*
************Conditional statement****
var a ='hello';//a can be true or false then other 2 condition will be true
if(a==true){
    document.write('a is TRUE after checking')
}else if(a==false){//only else can also be used instead of elseif
    document.write('a is FALSE after checking')
}
else{
    document.write('a is something other than true or false')
}
*/
/* This can be done using switch
var a='5';
if (a==2 || a>4){
    document.write('condition met')
}else{
    document.write('condition not met')
}
*/
/* 
***********Switch statement**************
var a=5;
switch(a) {
    case 5:
        document.write('case 1 met') ;
        break;
    case 1:
        document.write('case 2 met') ;
        break;
        default: 
        document.write('no case  met') ; 
}
*/

/*
********Ternary operator**********
var a=5;
var b=(a=5?'yes':'no');
console.log(b);
 
var d=Math.random()*1000;//Math.random() gives random number between 0 to 1
console.log(d);

var d=Math.floor(Math.random()*1000);//Math.floor(Math.random() is u number bet 0 to 1000
console.log(d);
*/
/*
*************loops****************
var a=10;
while(a<=20){
    document.write('My new value for b='+ b + 'BR');
    a++;
}
for(b=10;b<=20;b++){
    document.write('My new value for b='+ b + 'BR');
}
*/
//Arrays and objects
 
var myArray = ['one'];
console.log(myArray)
console.log(myArray[0]);
myArray.push('two')
console.log(myArray)
console.log(myArray[1]);

myObject={name:'Kaifee', age:20};
console.log(myObject)
console.log(myObject.name)
console.log(myObject['age']);


myNewArray =new Array('one');
console.log(myNewArray)
console.log(myNewArray[0]);

//Adding new class
var element
document.getElementById("header").addEventListener("click",abc);
function abc(){
    document.getElementById("header").classList.add("xyz");
}
