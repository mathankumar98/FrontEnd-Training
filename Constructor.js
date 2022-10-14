//Constructor Function
//We Give Function Name And Object Creation Name Must Be Same

//Creating Factory Function
//In Factory Function we use camal case
function createperson(name)
{
    return {
    name,
    greeting()
    {
        console.log(`My Name is ${this.name}`);
    }
};
}

//Creating One Constructor Function
//In constructor function we use pascal case
function Person(name)
{
    this.name=name;
    this.greeting=function()
    {
        console.log(`Hi My Name Is ${this.name}`);
    }
}
let person=new Person("Mathan");
person.greeting();