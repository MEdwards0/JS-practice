/*
coercion is the changing of values
from one data type to another.
*/

let yearNumber = 1995;
console.log(yearNumber + 1); // 1996
console.log(yearNumber - 1); // 1994

let yearString = "1995";
console.log(yearString + 1); // 19951 // This is concatenation: turns second operand into string.
console.log(yearString - 1); // 1994 // Minus: turns first operand into a number. JS is trying to help.

//  Equalities
console.log(yearNumber == yearString); // true.
console.log(yearNumber === yearString); // false.

// Some people say, the first line above is loose or abstract equality.
// Equality of value, but not type.

//  The second is strict equality.
//  The equality of value and type.

// Actually most ALL equality comparisons are strict. 
// Double == allows coercion of one or more operands before a strict comparison is made.

// Other values:

console.log(yearString - '1'); // 1994
console.log(yearString - 'one'); // NaN
// Nan is a result of expression where a number was expected, but not given.

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(+0 === -0); //true

// Nan never equals itself with double or triple equals. == or ===
// You could have arrived at NaN in different ways.

// Equality using Object.is()

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0,-0)); //false
// Object.is() is a good way to find edge cases

console.log(1/0); // Infinity. 

// Explicit coercions

// Strings to numbers
console.log(100 + '1'); // '1001'
// way 1
console.log(100 + parseInt('1')); // 101 method of string class
//way 2
console.log(100 + Number('1')); // 101 function constructor of number class
// way 3
console.log(100 + + '1'); // 101 unary plus operator

//  Wrapper classes
// There exist a number of object wrapper classes
// They promote primitive values into objects
// they have methods associated with objects of that type.

console.log(Boolean('')); // false: empty string
console.log(Boolean(' ')); // true: non-empty string
console.log(Boolean(0)); // false: zero
console.log(Boolean(23)); // true: any non-zero number
console.log(Boolean({a:1})); // true
console.log(Boolean({})); // even empty objects are true.

// We can also obtain the truthiness of a value by the !! operator.
console.log(!true); // false
console.log(!false); // true
console.log(!!true); //true -- double negation
console.log(!!false); //false --double negation

// first ! changes the type to Boolean and gives you the truth value.
// the second ! inverts the true value to false.
console.log(!!''); // false
console.log(!!'x'); // true

// compound operators
var x = 1;
// we can increment or decrement this value in one of 4 ways.

x = x + 1;
console.log(x);

x += 1;
console.log(x);

x++ // postfix increment. Only counts up in ones
console.log(x);

++x // prefix increment
console.log(x);

// prefix and postfix differ in behaviour.
// When used in an expression.

// prefix changes value for use in expression, then stores changed value.
// postfix uses value as is, then stores changed value

let counterPREFIX = 0;
let counterPOSTFIX = 0;

++counterPREFIX;
counterPOSTFIX++;

console.log(counterPREFIX, counterPOSTFIX); // both 1 OUTSIDE an expression.

// In an expression
let resultPREFIX = ++counterPREFIX + 100;
let resultPOSTFIX = counterPOSTFIX++ + 100;

console.log(resultPREFIX); // 102
console.log(resultPOSTFIX); // 101
console.log(counterPREFIX, counterPOSTFIX); 

// increment/decrement operators
