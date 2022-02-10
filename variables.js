// DECLARING

var width; // reserves in memory a marker, referenced by the word width.
// this marker will link to some data at a later date

console.log(width); // undefined - nothing assigned

// ASSIGNMENT

width = 42.5;
console.log(width); // 42.5
console.log(typeof width); // Number

// You can redeclare and re-assign variables declared with var.
var width;
console.log(width); // undefine? Nope -- still 42.5

// using let, let cannot be redeclared, but may be re-assigned.
let height;
console.log(height); // undefined

//assignment
height = 20.2;
console.log(height); // 20.2

// re-assignment
height = 20.5;
console.log(height);

// var has global scope and takes up namespace. Not a good idea.
// let has local scope. This frees up memory.

//once assingend, variables in JS may changed their datatype
// this is called type coercion.
//type coercion occurs implicitly or explicitly.
//width and height are integers at the moment.

width = true; // type bool
height = 'this high'; // type string
console.log(typeof width);
console.log(typeof height);

// If we don't want to reassign values.
// Using const, it cannot just be declared, it must be assigned immediately. (initialised)
//  const depth; <- this would make a SyntaxError.
const depth = 600;
console.log(depth);
console.log(typeof depth);

// using const, we cannot re-assign overall data shape.
// depth = 500; // TypeError: Assignment to constant variable.

// const can be used with complex data eg objects, arrays etc
const dimensions = {
    width: 42.5,
    height: 20.2,
    depth: 600
}

console.log(dimensions);
console.table(dimensions);

dimensions.depth = 500; // it works!
console.table(dimensions);

// overall shape of data unchanged, but the properties may be modified: they are mutable.
// dimensions = false; // TypeError. The shape of the data cannot be changed.

var x = 1;
x = 2;
y = x;
y = 3;
console.log(x); // STILL 2

var xOBJ = {a:1};
var yOBJ = xOBJ;
yOBJ.a = 2;
console.log(xOBJ.a); // objects can share references.
// ask: how many objects in the above lines?
// A: one.

var zOBJ = {a:1};
zOBJ.a = 3;
console.log(zOBJ.a);
console.log(xOBJ.a); // still 2: there are TWO objects here (two sets of objects)

