//Variables defined with const cannot be Redeclared
//Variables defined with const cannot be Reassigned
//Variables defined with const have Block Scope

//Point No 01
//Cannot be Reassigned
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error

//Point No 02
//Must be Assigned

const variable = 3; //This is correct

// const y;  //Must be Assigned
// y=5;    //This will give an error


//Point No 03
/*
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/


//Point No 04

//Constant Arrays
//You can change the elements of a constant array:

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
