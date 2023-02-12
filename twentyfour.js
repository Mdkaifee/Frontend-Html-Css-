console.log("Date & Time Tutorial")
//let today=new Date();
//console.log(today)
//console.log(typeof today)
let otherDate=new Date('8-4-2003 04:54:08');
//otherDate=new Date('June 13 1976 ');
//otherDate=new Date('11/06/1997 ');//otherDate=new Date('13/06/1997 '); it is an invalid format because MM can't be greater than 12
//console.log(otherDate);

let a;
//a=otherDate.getDay();//Day of the month
//a=otherDate.getDate();    it wii give number according to days of weeks saturdar will give us 6
//a=otherDate.getMinutes(); //it will give 0
//a=otherDate.getHours();   //it will give 0
//a=otherDate.getSeconds();  //it will give 0
//a=otherDate.getTime(); //it is No. of seconds from since 1970
a=otherDate.getMonth();
//a=otherDate.getMilliseconds();
//a=otherDate.getUTCMilliseconds();
console.log(a)
a=otherDate.setDate(23)
a=otherDate.setMonth(6)//it will show u july because starts from 0,so jan will be 0
a=otherDate.setFullYear(2000)
a=otherDate.setHours(1)
a=otherDate.setMinutes(2)
a=otherDate.setSeconds(3)
console.log(otherDate)