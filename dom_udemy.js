console.log('Udemy first DOM practice Edyoda')
console.log(document.getElementById("myfirst"))
console.log(document.getElementsByClassName("child"))
console.log(document.getElementsByTagName("input"))
console.log(document.querySelector('#heading'));
console.log(document.querySelector('.child'));
console.log(document.querySelectorAll('#myfirst'));
console.log(document.querySelectorAll('.child'));
element=myfirst;
element.innerText=('Kaifee');
element.innerHTML=('<b>Kaifee<b>');
element.style.color='green'
//Adding new class
var kaif=document.getElementById("myfirst")
kaif.classList.add('big');
//Removing new class
kaif.classList.remove('good');
//Toggling classes in js
kaif.classList.toggle('good');

/***********************Create HTML element*/
var newListElement=document.createElement('li')
console.log(newListElement)
/******************/
var newListElement=document.createElement('li')

newListElement.appendChild(document.createTextNode('List item 3'));
console.log(newListElement)
/****************************/
var newListElement=document.createElement('li')

newListElement.appendChild(document.createTextNode('List item 3'));

newListElement.id="item3"
console.log(newListElement)