//this is my first javascript

/*
1.variable
2.constants
3.primitive types
4.Dynamic typing (we have two types static and dynamic but javascript is dynamic )

*/

let name = 'asitha';

console.log(name);

//name cannot to be a reserved keyword
//Variable should be meaningful
//cannot start with a number
//cannot contain a space or a hyphen -
//case sensitive
//camel notation

let firstName, secondName;

let thirdName='asitha', fourthName = 'diviya';
//but the best practise is to use a single line for a single variable defining

let fifthName = 'sample1';

let rate = 10;
rate=20;

const value=2; //constatant value cant be changes and assigned in the code else the defining

// in order to assign the variable = use 'let' let is the best practise than var
// in order to assign the constant use 'const'


console.log(rate);
console.log(value);

/* primitive types
 there are two types which are 
 1.primitive (value) types
 2. Reference types

 primitive types are the follows
 1.string
 2.String
 3.Boolean
 4.Undefined
 5.Null
*/

let name1 = 'asitha'; // String Literal
let age = 23; //number literal
let isApprved = true; //boolean literal
let anotherName = undefined;
let lastName = null;

console.log(typeof name1);

name1 = 10;

console.log(typeof name1, '//variable type changed thats why dynamic');


