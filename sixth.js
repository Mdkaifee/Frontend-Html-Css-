console.log('We are at tut 6');
const name = 'Kaifee';
const greeting ='Good morning'; //Here after morning if u will use space does the same work as done by quote
console.log(greeting +' ' + name); //For space i used quote here
/*let html;
html="<h1> this is heading"</h1>
<p>tHis is para</p>;  Writing like this is invalid */
let html;
html="<h1> THIS is heading </h1> "+
"<p> tHis is para </p>";// valid :no error
html= html.concat('Hiii',  ' Hello');  // More string in an existing string
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());
console.log(html);//No change in original its safe as before
console.log(html[0]);//It is called indexing and gives first character of console.log(html)
console.log(html.indexOf('THIS'));//give index
console.log(html.indexOf('THIfdgS'));//string unavailable  will be shown as -1
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('>'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(1));
console.log(html.endsWith('Hell'));//whether string is ending with hell then true otherwise will be output
console.log(html.endsWith('Hello'));
console.log(html.includes('Hello'));//whether string hello is vailable in the html variable
console.log(html.includes('He'));
console.log(html.includes('sdfsfe'));
console.log(html.substring(0,8));// Provides 0 to 7 position string
console.log(html.substring(-8));
console.log(html.slice(-4))//it will gives u last 4 string
console.log(html.slice(0,15))
console.log(html.split(' '));// If u want to break string and store it in array
console.log(html.split('>'));//It will split from where this sign will be
//-->Replace function
console.log(html.replace('is','are')); //only first occurence will be replaced not all
//-->Template literals
let fruit1='Orange\'';//after orange, quote is used ,without backslash it will through error,but if backticks is using no need to use backslash
let fruit2='Apple';
let myHtml=`Hello ${name}
<h1> This is heading </h1>
<p> You like ${fruit1} and ${fruit2}
`;
document.body.innerHTML =myHtml;