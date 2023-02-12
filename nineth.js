<<<<<<< HEAD
console.log('Today\'s topic is looping statement')
var a=15;
a+=1;
a++;
console.log(a);
//for loop
for(var i=0;i<15;i++)
{
    console.log(i)  
}
//while loop
var j=0;
while(j<10){
    console.log(j);
    j++;
}
//do while
var k=0;
do{
    console.log(k);  //console.log(k+1)
    k++;
} while(k<8);
//Break
var k=0;
do{
    console.log(k);  
    if(k===8){
        break;
    }
    k++;
} while(k<8);
console.log('done'); 
//Continue
var k=0;
do{
   
    if(k===3){
        k++;
        continue;
       
    }
    console.log(k); 
    k++;
} while(k<10);
console.log('done');



//Loop in Array
var arr=[2,5,6,4,8,9,10] ;//Shortcut of below array print

arr.forEach(function(element){
console.log(element); 
});
var arr=[2,5,6,4,8,9,10] ;
arr.forEach(function(element,index,array){
console.log(element,index,array); 
});
//same as above 
var arr=[2,5,6,4,8,9,10] ;
for(var i=0;i<arr.length;i++){
    var element=arr[i];
    console.log(element)
}
//OBJECT with for loop
var obj={
    name:"Kaifee",
    age:20,
    type:"Developer",
    os:"Windows"
}
for(var key in obj)
{
    console.log(obj[key])
}

var obj={
    name:"Kaifee",
    age:20,
    type:"Developer",
    os:"Windows"
}
for(var key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
}
=======
console.log('Today\'s topic is looping statement')
var a=15;
a+=1;
a++;
console.log(a);
//for loop
for(var i=0;i<15;i++)
{
    console.log(i)  
}
//while loop
var j=0;
while(j<10){
    console.log(j);
    j++;
}
//do while
var k=0;
do{
    console.log(k);  //console.log(k+1)
    k++;
} while(k<8);
//Break
var k=0;
do{
    console.log(k);  
    if(k===8){
        break;
    }
    k++;
} while(k<8);
console.log('done'); 
//Continue
var k=0;
do{
   
    if(k===3){
        k++;
        continue;
       
    }
    console.log(k); 
    k++;
} while(k<10);
console.log('done');



//Loop in Array
var arr=[2,5,6,4,8,9,10] ;//Shortcut of below array print

arr.forEach(function(element){
console.log(element); 
});
var arr=[2,5,6,4,8,9,10] ;
arr.forEach(function(element,index,array){
console.log(element,index,array); 
});
//same as above 
var arr=[2,5,6,4,8,9,10] ;
for(var i=0;i<arr.length;i++){
    var element=arr[i];
    console.log(element)
}
//OBJECT with for loop
var obj={
    name:"Kaifee",
    age:20,
    type:"Developer",
    os:"Windows"
}
for(var key in obj)
{
    console.log(obj[key])
}

var obj={
    name:"Kaifee",
    age:20,
    type:"Developer",
    os:"Windows"
}
for(var key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
}
>>>>>>> e8d2cedc83b37c3f6605eecbd3d255db2672d8b4
