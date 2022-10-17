//Event Loop
// In this Event Loop It will execute once all the execution completed in the function
// Event Loop Was Web Api It will Execute after the function console executed


//first inside all the non web api console will be executed then after all the non web api event loop will be executed
function Method1()//function method
{
    console.log(1);
    setTimeout(() =>
    {
        console.log(2);
    }, 2000);
console.log(3);
for(var i=0;i<=100;i++)
{
    console.log(i);
}
}
Method1();

