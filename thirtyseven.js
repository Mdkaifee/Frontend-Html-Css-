console.log("Discussion about Callback")
//Pretend that this response is coming from the server
const students=[

    {name:"Kaifee",subject:"Java"},
    {name:"Rahul",subject:"ML"}  
]
function enrollStudent(student,Callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        Callback();
    },1000);
}
function getStudents(){
    setTimeout(function(){
     let str="";
     students.forEach(function(student){
         str+=`<li>${student.name}</li>`
    });
    document.getElementById('students').innerHTML=str;
    console.log("Student have been fetched");
    },5000);
}
let newStudent={name:"sunny",subject:"Python"}
enrollStudent(newStudent,getStudents);
//getStudents();


//Callback fn can be syn and asynchronous
//for Eeach is syn