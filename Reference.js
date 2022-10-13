//By Using object reference we can able to reassign the value and over ride the values
//Sample Program values interchanging by using reference variable
let a=5;
console.log(a);

//Function Method
function method1(b)
{
    b=10;
    console.log(b)
};
method1(a);
console.log(a);


//by using non primitive datatypes we can interchange the values by using reference
//types of non primitice datatypes
//1.functions
//2.Arrays
//3.objects

let x={name:'Mathan'};
console.log(x);

//function Method
function method2(y)
{
    //for reassign the value using reference name
    y.name="kumar";
    console.log(y)
};
method2(x);
console.log(x);
