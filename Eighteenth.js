console.log('More abt events');
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);
btn.addEventListener('mouseup', func4);
function func1(e) {
    console.log("Thanks", e)
    e.preventDefault();
}//On clicking on button there will be shown the difference
function func2(e) {
    console.log("Thanks its a dbl click", e)
    e.preventDefault();//it will save u from default submission
}
function func3(e) {
    console.log("Its a mouse down", e)
    e.preventDefault();
}
function func4(e) {
    console.log("Its a mouse up", e)
    e.preventDefault();
}
//Event listener on targeted element
document.querySelector('.no').addEventListener('mouseenter',function(){
    console.log('You entered no')
})
document.querySelector('.no').addEventListener('mouseleave',function(){
    console.log('You exit no')
})
document.querySelector('.no').addEventListener('mousemove',function(){
    console.log('You triggered mouse move event')
})
//Printing events of mouse move
document.querySelector('.no').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    //For changing background color
    //document.body.style.backgroundColor =`red`;
    document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
    console.log('You triggered mouse move event')
})
