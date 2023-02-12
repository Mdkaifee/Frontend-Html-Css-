console.log('Discussion on local & session storage')
let impArray=['Adrak','pyaz','bhindi'];
//Add a key value inside local storage
localStorage.setItem('Name','Kaifee');
localStorage.setItem('Name2','Kaif');
localStorage.setItem('sabzi',impArray);//It will act as a string but in order to rectify it u should use jason.stringify
localStorage.setItem('sabzi',JSON.stringify(impArray));//iT will act as string as well & jason.stringify take argument as an object and return as a string
//Retreive an item from the local storage
let name=localStorage.getItem('Name2');
//let name=localStorage.getItem('Name3');If u want to print non existing get item then null will be printed on console
console.log(name);
//localStorage.clear();
//If u want to empty ur local storage
localStorage.removeItem('Name')//If u want to clear particular key
name=localStorage.getItem('sabzi');
console.log(name)//Here acting like a string that will look like an array
//For looking like an array u should use jason.parse
name=JSON.parse(localStorage.getItem('sabzi'));//jason.parse take argument as a string and return as an object
console.log(name)
//You can use SESSION in place of LOCAL but the difference is if u close the browser & open it again there will be nothing in session storage and local stroge will have as before and never will be deleted even after commenting/ deleting the code
