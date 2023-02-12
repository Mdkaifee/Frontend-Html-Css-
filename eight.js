console.log('This is tutorial 8')
var age=19;
if(age==19){
    console.log('Age is 19')
}
else{
    console.log('Age is not 19')
}
var age=65;  //if 65 will write in single quote then it will be a string but here only value is comparing not type for that u have to add one more equal to which checks type & value both
if(age==19){
    console.log('Age is 19')
}
else if(age==65){
    console.log('Age is 65')
}
else{
    console.log('Age is not 19 ')
}

var age=65;  
if(age!=19){
    console.log('Age is 19')
}
if(age==65){
    console.log('Age is 65')
}
else{
    console.log('Age is not 19 ')
}

var age=19;  
if(age!=19){
    console.log('Age is 19')
}
if(age==65){
    console.log('Age is 65')
}
else{
    console.log('Age is not 19 ')
}

var age='65';  //if it will not be in quote then there sholud be print Age is not 19
if(age!=19){
    console.log('Age is not 19')
}
if(age!==65){ //Treated as string
    console.log('Age is 65')
}
else{
    console.log('Age is not 19 ')
}
//Check whether a variable is exist or not
if (typeof vari !=='undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
var age=18;
var doesDrive=false;
if(doesDrive){
    console.log("You can drive")
}
else{
    console.log("You can't drive") 
}

var age=15;
var doesDrive=true;
if(doesDrive && age>18){
    console.log("You can drive")
}
else{
    console.log("You can't drive") 
}

var age=15;
var doesDrive=true;
if(doesDrive || age>18){
    console.log("You can drive")
}
else{
    console.log("You can't drive") 
}
//Ternary Operator
var age=45;
console.log(age==45?'Age is 45':'Age is not 45')


//Switch Case statement
var age=28;
switch(age){
    case 18:
    console.log("You are 18");
    break;
    case 19:
    console.log("You are 19");
    break;
    case 28:
    console.log("You are 28");
    break;
    default:
        console.log("You are not in a age group");
        break;
}