
// declaring variables 
// every value is either a primitive or object 
// primitive : number(decimal/floating)
// primitive : string( sequence of characters)
// primtive : boolean ( true, false)
// primitive : undefined : ( variable declained but holding nothing)
// primitive : null : also means empty_value 
// symbol : 
// bigint : large inegers than number data type can hold 

// declaring constant variable 
const buttonA = document.querySelector("#press-me-buttton");
const headingA = document.querySelector("#heading_A");

// declaring variables using let and updating it
let myName ; 
let myAge ; 
myName = "Thomaskutty Reji"
myAge = 27

// strings 
let dolphinGoodbye = "So long and thanks for all the fish";


//boolean 
let iAmAlive = true;
let test = 6 < 3;

// array
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

// accessing elements from array 
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40


//object 
let dog = { name: "Spot", breed: "Dalmatian" };
dog.name;


buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

// dynamic typing 
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber;

