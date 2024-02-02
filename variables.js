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

/*Always use const if the value should not be changed

  Always use const if the type should not be changed (Arrays and Objects)

  Only use let if you can't use const

  Only use var if you MUST support old browsers.*/