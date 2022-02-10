// Hoisting is something that occurs only in ES5 non-strict mode.
// but it is a typical interview question still in JavaScript!

// Hoisting is the apparent wrong order of things.

// 1. call a function that has apprently not been defined yet

console.log(goodMorning()); // 3

// define a function whos variables are not yet declated

function goodMorning() {
    a = 'Good '; //2
    b = "Morning"; //2

    return a + b; // 2
    // might we be able to ommit the return statement?
}

var a, b; // 1

// Hoisting works for variable declarations only, NOT initialisations eg: var a = 3;
// Hoisting does not work with the let and const keywords

// To understand we must look at the behaviour of the JS interpreter
// Browser or Node makes AT LEAST 3 passes up and down the whole code.

// first pass: dedclarations (variables and functions)

// second pass: expressions get evaluated.

// third pass: runtime code is executed - calling functions are at runtime.

// Look above at the comments after code eg // 1 // 2 // 3 to compare the pass.

// if let is used, a reference error is called.

