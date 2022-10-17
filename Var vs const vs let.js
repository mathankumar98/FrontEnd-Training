//Differences Between Var&Const&Let

//Var Variable 
//With The Help Of Var VAriable We Can Able To Redeclare The Variable
//Var Variable Can Be Accesable In Any Of the Javascript Program
var a=10;
var a=15;
console.log(a)
function method1()//function method
{
    var a=20;
    console.log(a);
}
method1();
console.log(a)

//const VAriable
////In Const VAriable We Canot Able to redeclare the The Const Variable
const b=10;
const b=15;
console.log(b)//Error Occurs bcuz we cannot able to redeclare the const variable

//Let Variable
//In Let VAriable We Cannot Able To Redeclare The Let Variable
let c=10;
let c=15;
console.log(c)//Error Occurs Bcuz we cannot able to redeclare the let variable

