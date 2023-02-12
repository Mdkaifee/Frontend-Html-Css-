<<<<<<< HEAD
console.log('I m in tut7 of cwh & discussing objects and array');
const fruits=['Orange','Apple','Pine'];
const mixed=['Md',89,[3,5]];
const arr= Array(23,123,21,'Orange') ;
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray(arr));//check whether it is array or not it will give true bcz it is array
console.log(Array.isArray('hjf'));//false
arr[0]='Kaifee';
console.log(arr); //now first index will be now Kaifee
// indexoF
let marks=[34,12,54,88,99];
console.log(marks);
let value=marks.indexOf(54);
console.log(value);
// Mutating/modifying array
marks.push(5588);// add array at last
console.log(marks);
marks.unshift(988);// add array at first
console.log(marks);
marks.pop(5588);// Del array from last
console.log(marks);
marks.shift(5588);// Del array from first
console.log(marks);
marks.splice(1,3) //from index to which u want to del an element
console.log(marks);
marks.reverse();
console.log(marks);//it will reverse the array
let marks2=[1,2,3,4]
marks=marks.concat(marks2);
console.log(marks);

// -->OBJECT   used when ur concern is key value
let myobj={
    name:'Kaifee',
    channel:'code with kaifee',
    isActive:true,
    marks:[1,5,8,9]
}
console.log(myobj)
console.log(myobj.name)
console.log(myobj.channel)
console.log(myobj.isActive)
console.log(myobj.marks)
console.log(myobj ['name'])
console.log(myobj ['channel'])
console.log(myobj ['isActive'])
console.log(myobj ['marks'])
=======
console.log('I m in tut7 of cwh & discussing objects and array');
const fruits=['Orange','Apple','Pine'];
const mixed=['Md',89,[3,5]];
const arr= Array(23,123,21,'Orange') ;
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray(arr));//check whether it is array or not it will give true bcz it is array
console.log(Array.isArray('hjf'));//false
arr[0]='Kaifee';
console.log(arr); //now first index will be now Kaifee
// indexoF
let marks=[34,12,54,88,99];
console.log(marks);
let value=marks.indexOf(54);
console.log(value);
// Mutating/modifying array
marks.push(5588);// add array at last
console.log(marks);
marks.unshift(988);// add array at first
console.log(marks);
marks.pop(5588);// Del array from last
console.log(marks);
marks.shift(5588);// Del array from first
console.log(marks);
marks.splice(1,3) //from index to which u want to del an element
console.log(marks);
marks.reverse();
console.log(marks);//it will reverse the array
let marks2=[1,2,3,4]
marks=marks.concat(marks2);
console.log(marks);

// -->OBJECT   used when ur concern is key value
let myobj={
    name:'Kaifee',
    channel:'code with kaifee',
    isActive:true,
    marks:[1,5,8,9]
}
console.log(myobj)
console.log(myobj.name)
console.log(myobj.channel)
console.log(myobj.isActive)
console.log(myobj.marks)
console.log(myobj ['name'])
console.log(myobj ['channel'])
console.log(myobj ['isActive'])
console.log(myobj ['marks'])
>>>>>>> e8d2cedc83b37c3f6605eecbd3d255db2672d8b4
