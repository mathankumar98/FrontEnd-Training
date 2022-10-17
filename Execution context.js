//In the Execution context we can able to access one into to another Method
//Flow Of the Execution Of The Program is called Execution Context 
function method1()
{
    return "Mathan Kumar";
}
function method2()
{
    return method1()
}
function method3()
{
    return method2()
}
function main()
{
    return method3()
}

main()