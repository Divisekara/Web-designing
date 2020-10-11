//This is my first javascript code
console.log("Hello world")


//Variables name cannto be reserved keywords
//Variable name should be meaningful 
//Variable name cannt start with a number
//cannot contain space or a hyphen
//variable name is case-sensitive
//variable name defining is more meaningful if they use camel-notation


let name = 'asitha'; 
let firstName = 'asitha';
let lastname = 'divisekara';

//contants
const interestRate = 0.3;
//we cannot reassign a contant this is wrong interestRate = 1;
console.log(name);


//primitives, value types - strings, boolean, null, undefined, number
let myName  = 'asitha'; // string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let myFirstName = undefined; //
Color = null;

//Referrence type  - objects, arrays, functions
let person = {  // This curcly braces stands for object literal
    name: 'Mosh',
    age: 30
}

console.log(person);

//Accessing the keys and values
//dot notation

person.name = 'John';

console.log(person.name);

//bracket notation
person['name'] = 'Mary';

console.log(person);

let selection = 'name';
person[selection] = 'asitha';

console.log(person);

let selectedColors = ['red', 'blue'];
console.log(selectedColors[2]);
selectedColors[3] = 'green';
console.log(selectedColors.length);

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('asitha', 'divisekara');
greet('thushani', 'chandrasekara');

function square(number){
    return number*number;
}

let squaredNumber  = square(10);
console.log(squaredNumber);

for (let index = 0; index < 10; index++) {
    console.log('number =',index);
    if(index == 0){
        console.log('loop started');
    }

    else if(index<6){
        console.log(index**2);
    }

    else{
        console.log('This is else');
    }
    
}

