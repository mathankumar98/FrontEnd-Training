//Hoisting

//variable hoisting 
//In variable hoisting we can able to declare and initial first then we can able to call the variable
//if we console before the variable declartion we got un defined output in console
var a=10;//variable declaration and initialization
console.log(a);//Printing the variable 


//Function declaration hoisting
//In Function declaration we can able to access the in any where in javascript code
demo();
function demo()
{
    console.log("Hi From Function Declaration");
}
demo();


//Function Expression hoisting
//In Function expression it will act like variable calling function
//if we call before the function expression initialization it will give uncaught typeerror
var demo1=function()
{
    console.log("Hi From Function Expression");
}
demo1();