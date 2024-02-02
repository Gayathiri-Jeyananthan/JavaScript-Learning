//Javascript Syntaxes

//In a programming language, variables are used to store data values.

//JavaScript uses the keywords var, let and const to declare variables.

// An equal sign is used to assign values to variables.



//01
//How to Create Variables
var x;
var y;

//02 
// How to use Variables
x=4;
y=6;
console.log(x+y);

x=4;
y=2;
console.log(x+y);
//We can redeclare, assign the variables , if we use the var key word instead of let,const keyword.

//03
// Strings are text , so have to write with in the single quotes or double quotes
var a="John";
var b="Doe";
console.log(a+b);

//04
//let keyword
// let x;
//  x = 9;
//  console.log(x);   //It cause the syntax error because we already use the x variable.

let z;
 z = 9;
 console.log(z);

 z=5;
 console.log(z);


// Point No 01
/*Always use const if the value should not be changed

  Always use const if the type should not be changed (Arrays and Objects)

  Only use let if you can't use const

  Only use var if you MUST support old browsers.*/


// Point No 02
//One Statement, Many Variables
 let person = "John Doe", carName = "Volvo", price = 200;


//Point No 03
//A variable declared without a value will have the value undefined.
let country;

//Point No 04
//Re-Declaring JavaScript Variables
var CarName = "Volvo";
var CarName;
//The variable carName will still have the value "Volvo" after the execution of these statements:

/*let toyName = "Volvo";
let toyName;
You cannot re-declare a variable declared with let or const.*/

//Point No 05
let one = 5 + 2 + 3;
let two = "5" + 2 + 3;//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let three = 2 + 3 + "5";

console.log(one);//10
console.log(two);//523
console.log(three);//55

//Point No 06
//Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names

let $ = "Hello World";
console.log($);//Hello World
let $$$ = 2;
let $myMoney = 5;
let total =  $$$ + $myMoney;
console.log(total); //7

//Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
let _lastName = "Johnson";
console.log(_lastName);// Johnson
let _x = 2;
let _100 = 5;
let _total = _x + _100;
console.log(_total);//7
