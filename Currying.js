//Sample Currying Function

//Question add(1,2)=>3
function add(a,b)
{
    return a+b;//adding and returning the value
}
console.log(add(1,2))

//question add(a)(b)=>3
function add1(c)
{
    return function(d)
    {
        return c+d;
    }
};

let add2=add1(1);

console.log(add2(2))