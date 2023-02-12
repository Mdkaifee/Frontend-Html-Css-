console.log('Welcome to tut 14')
let element=document.getElementById('myfirst')
//element=element.className;
//element=element.childNodes;
//element=element.parentNode;

element.style.color='red';

element.innerText='Kaifee'//child1 will be replaced as Kaifee

element.innerHTML='<b>Kaifee<b>'//This will bold html element Kaifee

//console.log(element)

//console.log(element.innerHTML) by doing this u can track the element also

//console.log(element.innerText)// by doing this u can track the text

let sel = document.querySelector('#myfirst');
 sel = document.querySelector('.child');//we will get the first element of of that class name if we r using querySelector
 sel = document.querySelector('b');//Tracking of element,if u will write div then u will get only ur first div bcz u r using querySelector which is a single element selector
 sel.style.color='green';//only first div will be green
//console.log(sel);
//This is all abt single line selector

//Multi Element Selector
let elems =document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems =document.getElementsByTagName('div');//it will provide all the tags whose name is div
console.log(elems)
Array.from(elems).forEach(element => {
    console.log(element)
    element.style.color = 'blue'
});
/*for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    element.style.color = 'blue'
}
You can write like this instead of above statement
*/
//It will do the color of all the element to blue in entering html element


//console.log(elems[0].getElementsByClassName('child'))
//This will give all the element whose class name will be child

//All 4 div ;element can be shown
//getElementsByClassName('child')
//console.log(elems[3])//by using like this u can track by using number wise div element






