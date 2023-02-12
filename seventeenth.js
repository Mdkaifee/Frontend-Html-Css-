<<<<<<< HEAD
console.log('Discussion abt events')
document.getElementById('heading').addEventListener('click', function () {               //Event can be click,mouseover,
    console.log('You have clicked the heading');//It will show whwther u have clicked heading or not
    //location.href ='codewithharry.com' //It will take to the website on clicking on heading 
});
//For printing that event if u will take an argument e in function and for printing write console.log(e);
document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('You have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    //variable = e.target.classList;
    //variable = e.target.id;
    //variable=Array.from(e.target.classList);//print class in a form of array
    //variable=e.target.id;
    variable = e.offsetX//how far u r from that heading element in x
    //variable=e.offsetY //how far u r from that heading element in y
    //variable=e.clientsetX//it will gives u how farthest u r from browser window in X
    //variable=e.clientsetY//it will gives u how farthest u r from browser window in Y
    console.log(variable);
});







=======
console.log('Discussion abt events')
document.getElementById('heading').addEventListener('click', function () {               //Event can be click,mouseover,
    console.log('You have clicked the heading');//It will show whwther u have clicked heading or not
    //location.href ='codewithharry.com' //It will take to the website on clicking on heading 
});
//For printing that event if u will take an argument e in function and for printing write console.log(e);
document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('You have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    //variable = e.target.classList;
    //variable = e.target.id;
    //variable=Array.from(e.target.classList);//print class in a form of array
    //variable=e.target.id;
    variable = e.offsetX//how far u r from that heading element in x
    //variable=e.offsetY //how far u r from that heading element in y
    //variable=e.clientsetX//it will gives u how farthest u r from browser window in X
    //variable=e.clientsetY//it will gives u how farthest u r from browser window in Y
    console.log(variable);
});







>>>>>>> e8d2cedc83b37c3f6605eecbd3d255db2672d8b4
