//Micro and macro Tasks
//It will More Similar To Event loop
//Micro tasks Are Execute first Then After The Macro Tasks Will Be Executed 
//Event Loop Are Called Macro Tasks

console.log("Task 1");//Micro Task

setTimeout(() => //Event Loop (or) Macro Task
{
    console.log("Micro Tasks 1");
},0);

setTimeout(() => //Event Loop (or) Macro Task
{
    console.log("Micro Task 2");
},500);

let p=new Promise((res) => //it will act like if and if else condition format
{
    res();// if res it will give then (or) if it will reject it will give catch
});

p.then(() =>
{
    console.log("Task 4")
});

console.log("Task 3");//micro Task






