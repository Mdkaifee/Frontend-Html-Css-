var btnDecreaseFont =document.getElementById('btn-decrease')
var btnIncreaseFont =document.getElementById('btn-increase')
console.log(window.getComputedStyle(btnDecreaseFont).marginRight)
console.log(window.getComputedStyle(btnDecreaseFont).textDecoration)
console.log(btnIncreaseFont.style.marginRight)


var username=document.getElementById('username');
username.addEventListener('input',function(){
    console.log('value changed');
});//here change can be placed in place of input
/********************************************/
document.body.addEventListener('keydown',function(){
    console.log('A key was pressed')
});
/********************************************/
document.body.addEventListener('keydown',function(e)
{
    var keyCode =e.keyCode;
    console.log(keyCode +'Key was clicked')
})
/********************************************/
document.body.addEventListener('keydown',function(e){
var keyCode =keyCode;
    if (keyCode ===13){
console.log(keyCode + 'key was clicked');
    }
});
/**************Mouse event:mousedown**********/
var btn=document.getElementById('top-btn');
btn.addEventListener('mousedown',function(){
    console.log('Mouse Down triggered')
})

/******Mouse event:mousedown*************** */
btn.addEventListener('mouseup',function(){
    console.log('Mouse up triggered')
})
/******Mouse event:mouseclick*************** */
btn.addEventListener('click',function(){
    console.log('click event triggered')
})
/******Mouse event:mouse bdl click******** */
btn.addEventListener('dblclick',function(){
    console.log('dbl click event triggered')
});
/******Mouse event:mouse over*************** */
var over=document.getElementById('over');
over.addEventListener('mouseover',function(){
    console.log('Mouse over event triggered')
});
/******Mouse event:mouse enter************** */
var enter = document.getElementById('enter');
var enterCount=0;
enter.addEventListener('mouseenter',function(){
var countElement=document.querySelector('#enter > p')
var enterCount =enterCount+1
    countElement.innerHTML =enterCount;
});