
var user1= //variable 1
{
    name:"Mathan",
    age:24,
    getname: function() //function 1
    {
        console.log("The User1 name is "+this.name);
    }
}

var user2= //variable 2
{
    name:"Kumar",
    age:26
}

//the usage of bind the old value will be removed and the new value will be added
var x=user1.getname.bind(user2 ); //creating the value and storing and binding the variable 1 and variable 2 values and the varibale 2 value will be displayes
x(); //calling the x valueS


