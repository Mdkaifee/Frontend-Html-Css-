console.log("Discuss about Asynchronous Programming")
setTimeout(()=>
{
    for(let index=0;index<45;index++){
        const element=index;
        console.log("This is index number:"+index);
    
    }
},100);    //ye kaam hum kr lenge aage ka kaam aap kr lo  means ye wait nhi kr rha asynchronous bna dia or phle done printing wla line chal jaega

console.log('done printing')