console.log('Welcome here to  discuss abt creation of element')
let element = document.createElement('li');

//Add a class name to the li element
element.className ='childul'
//for id [element.id='createli';
element.setAttribute('title','mytitle');
element.innerHTML='<b>Hello this is created by Kaifee</b>'//if u will use innerText bold tag will not be implemented 
let ul=document.querySelector('ul.this');
ul.appendChild(element);
//console.log(ul);
//console.log(element);

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('This is me MD KAIFEE');
elem2.appendChild(tnode)
element.replaceWith(elem2)
let myul =document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))//fui should be child of myul otherwise it will throw error & this will be replaced by Hello this is created by Kaifee 
myul.removeChild(document.getElementById('lui'));
let pr=elem2.getAttribute('class');//elem2.hasAttribute will tell u in true or false means attribute is present or not 
elem2.removeAttribute('id')//id will  be removed here
console.log(elem2,pr);
