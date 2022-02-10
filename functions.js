// Functions are neat blocks of code that can execute one or more lines of code at once, by their name, usually.
// have: input
// output
// OR both
// OR neither
// very similar to other languages
// JS differences:
// JS can pass functions as data
// JS can return another function as data

console.log("hello");
console.log("world");
console.log("How are you today?");

// ESSENTIAL functions:

// 1. function declarations
// function delcarations are loaded into memory at the start
// no matter where they occur in the codebase

function greet1() {
    console.log('Hello');
    console.log('World');
    console.log('Ho are you today?');
}

greet1();

// Looks like there is output right?
// Wrong. console.log is NOT considered output in a function.
// cannot persist the result of that function.

var output1 = greet1();

console.log('greet1() output:' + greet1);
// console.log(greet1()); // This doesn't actually return any data to the console.log, the function is just being called within it.

// 2. function declaration input, no output:

function greet2(name) {
    console.log('Hello');
    console.log(name);
    console.log('How are you today?');
}

greet2('Jason');

var jason = greet2('jason');
console.log(jason); // this will be undefined!

// 3. function declaration, input and output
// this requires a return statement.
// return statements must be on the last line in a function

function greet3(name) {
    return `Hello ${name}, how are you today?`; // this returns data to us, but we can't see it without a console.log
}
// now it can persist
greet3("William");

var william = greet3("William");

console.log(william);
console.log(greet3('Emily')); // output as input

// 4. function declaration, no input, output

function greet4() {
    return `Hello World, how are you today?`;
}

console.log(greet4());

// ADVANCED functions:

// What if we put the wrong type of input in?

console.log(greet3(123));
console.log(greet3({}));

// Input validation fixes this.
// In JS, we have to write this ourselves
// in TypeScript, or Java for instance, we have to specify type.


// 5. Function declaration with input, output, and type checking:

function greet5 (name) {
    if (typeof name === 'string') {
        return `Hello ${name}, how are you today?`;
    }
    return null;
}

console.log(greet5('Francesca'));
console.log(greet5({}));

// 6. functio declaration with input, output, type checking, and default parameter(s)

function greet6 (name = 'no name supplied') {
    if (typeof name !== 'string') {
        // return `Hello ${name}, how are you today?`;
        return null;
    }
    return `Hello ${name}, how are you today?`;
}

console.log(greet6('Robert'));
console.log(greet6());

// 7.Anonymous function expressions

const noName = function(){
    return 'a girl has no name';
}

// What is the point of this?
// There are a very few cases where we cannot or should not use function declarations
// function expressions are loaded into memory where they occur
// special use cases include prototype manipulation in OO JS - later

// 8. arrow functions => 
// a form of anonymous function expression
// with a shorhand SyntaxError similar to Java Lambdas ->
// but in Java, they have an ultra-specific execution context
// in JS they are used everywhere

// stage 1
// start with an anonymous function expression

const noName1 = function(){
    return 'thing';
}

// stage 2
// remove function keyword, replace with arrow

const noName2 = () => {
    return 'thing';
}

// stage 3
// remove return keyword AND braces IF the function has only one statement

const noName3 = () => 'thing';

// stage 4
// if only 1 parameter, remove the parenthesis, if you have more than one or none, then keep them in.

const noName4 = name => 'A girl has the Name'  + name;
