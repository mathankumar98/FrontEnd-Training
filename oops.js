//OOPS-Object Oriented Programing
//it will put all the variables objects and functions inside one containor and and we create the method and we can able to call the objects
let person=
{
    name: "Mathan",
    age: 24,
    intrest:['To Develope New Applications'],
    isAlive:true,
    address:
    {
        city:"Tuticorin",
        state:"Tamilnadu",
    },
    greeting:function()
    {
        let msg=`My Name Is ${this.name}And My Intrest Is ${this.intrest}`;
        console.log(msg)
    }
}
person.greeting()
console.log(person.address.city);