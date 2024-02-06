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
let x =3;
console.log(x); //It cause syntax error. because we can't redeclare 
//(SyntaxError: Identifier 'x' has already been declared )



























