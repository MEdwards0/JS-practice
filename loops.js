// We all know what loops are right?
// A way to execute code many times over based on conditions set at the top of the code.
// Loops can have an iterative component to them too like setting i++

let array = [1,2,3,4,5]; // arrays are very commonly used in loops as they are indexed.

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Be careful about scope in the i < array.length;  if you put i <= array.length it would run an extra time out of bounds.

// Arrays have a length property. Some languages are zero indexed, while others are not.
// If a language is zero indexed, it starts counting the array from 0 and upwards.

// Javascript is zero indexed and so the first entry of any array is always 0.

// accessing an array:

console.log('first array element is ' + array[0]); // 1

// mutating the array / changing numbers:

array[0] = 9;

console.log('first array element is now: ' + array[0]); // 9

// 2. for of

for (const member of array) {
    console.log(member);
}

for (const member of array) {
    console.log(member);
    break; // makes it jump out of the loop.
}

console.log('using for loop with continue:');

for (let i = 0; i < array.length; i++) {
    if (array[i]) {
        continue; // skips this iteration of the loop.
    }
    console.log(array[i]);
    
}

// WHILE LOOPS.
// is like a for loop but the 3 control statements get moved to 3 different places.
// suited for cases when the loop control is not a counter. eg
// while the user does not type quit
// while file has lines left to read

// Inititalise counter OUTSIDE the while loop.

let counter = 0;

while (counter < array.length) {
    console.log(array[counter]);
    counter++;
}

// 4. do while loop

let counter2 = 0;

do {
    console.log(array[counter2]);
    counter2++;
} while (counter2 < array.length);


