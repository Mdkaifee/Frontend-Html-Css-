console.log('I m discussing today, about function and scoop')
// -->
var name='sky';
console.log(`Happy Birthday ${name} -Thinking of you on your birthday and wishing you everything happy` )
var name2='Kaifee';
console.log(`Happy Birthday ${name2} -Thinking of you on your birthday and wishing you everything happy` )
//-->To stop repeating 
function greet(name){
    console.log(`Happy Birthday ${name} -Thinking of you on your birthday and wishing you everything happy` )   
}
var name='sky';
var name2='Kaifee';
greet(name);
// -->
function greeting(name,Thanks){
    console.log(`Happy Birthday ${name2} -Thinking of you on your birthday and wishing you everything happy, ${Thanks}` )   ;//If u want to pass thanks a lot here so code is written like this
}
var name='sky';
var name2='Kaifee';
greeting(name,'Thanks a lot');//Function calling
// -->
function greeting(name,Thanks){
    console.log(`Happy Birthday ${name2} -Thinking of you on your birthday and wishing you everything happy, ${Thanks}` )   ;
    return 4;
}
var name='sky';
var name2='Kaifee';
greeting(name,'Thanks');
var val =greeting(name,'Thanks a lot');//If u r not going to pass here Thanks a lot ,it will print undefined in last instead of Thanks of lot,to get rid of this u can do as below
console.log(val);
// -->
function greeting(name,Thanks='Thanking uh'){//Parameter is being passed here
    console.log(`Happy Birthday ${name2} -Thinking of you on your birthday and wishing you everything happy, ${Thanks}` )   ;
    return 4;
}
var name='sky';
var name2='Kaifee';
greeting(name);
var val =greeting(name);
console.log(val);
/*
function greeting(name,Thanks='Thanking uh'){
    var msg=`Happy Birthday ${name2} -Thinking of you on your birthday and wishing you everything happy, ${Thanks}`    ;
    return msg;
}
var name='sky';
var name2='Kaifee';

var val =greeting(name,'Tqsm');
console.log(val);
*/
// A way u can do like this too
var mygreet =function(name,Thanks='Thanking uh'){
    let msg=`Happy Birthday ${name2} -Thinking of you on your birthday and wishing you everything happy, ${Thanks}`    ;
    return msg;
}
var name='sky';
var name2='Kaifee';
var val =mygreet(name,'Tqsm');
console.log(val);
// -->
const myobj ={ //function is used in an object
    name:'skillF',
    game:function(){
        return "GTA";
    }}
console.log(myobj.game());
// -->ARRAY
arr=['Apple','Banana','Lemon'];
arr.forEach(function(element,index,array){
console.log(index,element,array)
});


//Most Important
//SCOPE
 /*var b=234;
 console.log(b);
 function ui(name)
 {
     var i=9;// it is a locally declared variable
     return `This is me ${name}  & roll number is ui`;
     }
console.log(ui("Kaifee"));
*/
let i=234;
{
    console.log(i)
}
 console.log(i);
 function ui(name)
 {
     var i=9;//if u will not write here var then global i=9 will be passed
     console.log(i)
     return `This is me ${name}  & roll number is `;
     }
console.log(ui("Kaifee"),i)
//-->
let b=234;

 console.log(b);
 function ui(name)
 {
     let b=9;
     console.log(b)
     return `This is me ${name}  & roll number is `;
     }
console.log(ui("Kaifee"),b)
// -->
{
var x=284;//Here using let instead of var will give u an error,let is only block level declaration

 console.log(x);
}
 console.log(x);
 function ui(name)
 {
     let x=9;
     console.log(x)
     return `This is me ${name}  & roll number is `;
     }
console.log(ui("Kaifee"),x)
