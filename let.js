//let keyword was introduced in ES6 (2015).
//Variables declared with let have block scope.
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope

//Point No 01
//(let and const Block Scope)
//let Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
  }
// X can not be used here


//(var Global Scope)
{
    var x = 2;
  }
// x can be used here

//Point No 02
//Can not be redeclared
let xx =3;
console.log(xx); //It cause syntax error. because we can't redeclare 
//(SyntaxError: Identifier 'x' has already been declared )

// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.


//Re declaring variables
//01
var x = 2;   // Allowed
//let x = 3;   // Not allowed

//02
/*
{
  let re = 2;   // Allowed
  let re = 3;   // Not allowed
  }
*/

//03
{
  let x = 2;   // Allowed
  //var x = 3;   // Not allowed
  }

//04
//Redeclaring a variable with let, in another block, IS allowed:


{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}

//05


























