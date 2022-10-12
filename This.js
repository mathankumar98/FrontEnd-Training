//We can Create the this statement in we can call in 3 Types 
//1.global 
//2.Object based
//3.bind apply and call

//main Method hall
function Hall()
{
    this.tv="tv-hall";
    this.sofa="Sofa-hall";
    this.fridge="Fridge-hall";
    this.cot="cot-hall";

    //Sub method1 Room1
    function Room1()
    {
        if(!this.tv|| !this.sofa|| !this.fridge|| !this.cot)
        {
        this.tv="tv-room1";
        this.sofa="Sofa-room1";
        this.fridge="Fridge-room1";
        this.cot="cot-room1";
        }
        console.log("Room1 =>","Room1 tv=",this.tv,"Room1 sofa=",this.sofa,"Room1 Fridge=",this.fridge,"Room1 Cot=",this.cot);
    }

    //sub method2 Room2
    function Room2()
    {
        if(!this.tv|| !this.sofa|| !this.fridge|| !this.cot)
        {
        this.tv="tv-room2";
        this.sofa="sofa-room2";
        this.fridge="Fridge-room2";
        this.cot="cot-room2";
        }
        console.log("Room2 =>","Room2 tv=",this.tv,"Room2 sofa=",this.sofa,"Room2 Fridge=",this.fridge,"Room2 Cot=",this.cot);
    }

    // Main print statement
    console.log("Hall =>","Hall tv=",this.tv,"Hall sofa=",this.sofa,"Hall Fridge=",this.fridge,"Hall Cot=",this.cot);
    
    //calling With the help of Object refernce variable
    var object1=new Room1();

    //calling with the help of bind,apply,call statements
    Room2.apply(object1);
}
//directly called global variable
Hall();