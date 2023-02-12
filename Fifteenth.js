console.log('Welcome to tutorial 15th')
let cont = document.querySelector('.no')
 cont = document.querySelector('.container')
//console.log(cont.childNodes)   //length is 12 & only element is included
//console.log(cont.children) //length is 6 bcz only element will be take in children & will not accept newline,text,comment & used most of the time
let nodeName =cont.childNodes[0].nodeName;
let nodeType =cont.childNodes[0].nodeType;
//console.log(nodeName)//1st element of the node list will be shown if u only write let nodeName =cont.childNodes then total list will be shown  
//console.log(nodeType)
/*Node types
1.element
2.Attributes
3.Text Node
8.comment
9.document
10.docType */
let container=document.querySelector('div.container');
//console.log(container.children)
//console.log(container.children[1].children)//will gives u child of container
//console.log(container.children[1].children[0].children) //this will give u children of children
console.log(container.firstChild)

console.log(container.firstElementChild)
console.log(container.lastChild)
console.log(container.lastElementChild)
console.log(container.childNodes)//container.children will give u 6 nodelist that is only an element
console.log(container.childElementCount)
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)

