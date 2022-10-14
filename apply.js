//Apply Function
//In this apply function we can achieve in the form of array
var a=
{
    name:"Mathan",
    age:25,
    getting:function(Firstname)
    {
        console.log("Hi Iam From a "+this.name+Firstname);

    }
}
var b=
{
    name:"kumar",
    age:25
}

//it is similar to the call we can achieve in with the help of array
a.getting.apply(b,[' Mathan Kumar']);

