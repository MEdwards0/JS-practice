/*
A conditional is a program flow structure
That takes a single boolean value OR
the boolean result of a boolean expression (....)eg 3 < 4 5 == 5
which if TRUE executes the code block immediately after {....}
if FALSE
skips that block onto the next line
*/

// 1. no branches
if (false) {
    console.log('code in block executed');
}

// 2. one branch, if-else
if (true) {
    console.log('code in if block executed');
} else {
    console.log('code in else block executed');
}

// 3. three or more branches

if (false) {
    console.log("code in first if executed");
} else if (true){
    console.log("code in 2nd if executed");
} else {
    console.log("else is executed");
}

// 4. switch statement
// Switch statements test one or more variable for a match / equality

let switchVariable = 2;

switch (switchVariable) {
    case 1:
        console.log("i am 1");
        break;
    case 2:
        console.log("i am 2");
        break;
    case 3:
        console.log("I am 3");
        break;
    default:
        console.log("choose an option 1 - 3");
        break;
}

let switchVariable2 = 3;

switch (switchVariable2) {
    case 1:
        console.log("i am 1");
        break;
    case 2:
        console.log("i am 2");
        break;
    case 3:
        console.log("I am 3");
        break;
    default:
        console.log("choose an option 1 - 3");
        break;
}

// Ternary Operator.

var result = (true) ? 'case if true' : 'case if false'; // stores result in the variable to be used later

console.log(result);

// use case:
// if for instance we wish to assign snippets of HTML conditionally:

const loggedInComponent = '<p>Admin component</p>';
const loggedOUtComponent = '<p>Guest component</p>';
let isLoggedIn = true;

