// Method milesToKms(miles) doesnt actually need a Car Object to run.

// 1. object literal - person

const person = {name: '', age: 0};

const alan = {name: 'Alan Lavender', age: 54};
const bruce = {name: 'Bruce Springsteen', age: 71};
const nils = {surname: 'Lofgren', firstname: 'nils'};

console.table(alan);
console.table(bruce);
console.table(nils);

const bandOfLiterals = [];
bandOfLiterals.push(alan);
bandOfLiterals.push(nils);
bandOfLiterals.push(bruce);

for (let member of bandOfLiterals) {
    console.log(`${ member.name }, age ${ member.age }`);
    
}

// output:
// Alan Lavender, age 54
// undefined, age undefined
// Bruce Springsteen, age 71

// We need a method od instantiating with the same properties, not necessarily the same values.

// ES5 Function constructor
// used in conjunction with the new keyword

// function Musician(name, age, ...instruments) { // the ...instruments mean that you can have, one, none or many arguments there and can be stored as an array in the constructor.
//     this.name = name;
//     this.age = age;
//     this.instruments = [...instruments];
// }

function Musician(name, age, ...instruments) { // rest parameters as in the rest of them.
    this.name = name;
    this.age = age;
    this.instruments = [...instruments]; // spread syntax.

}

const alanF = new Musician('Alan', 54, 'Trombone', 'Keyboard', 'Vox');
const bruceF = new Musician('Bruce', 71, 'Guitar', 'Harmonica', 'Vox');
const nilsF = new Musician('Nils', 65, 'Lead Guitar', 'Backing Vox');

const bandOfFunctionConstructors = [];

bandOfFunctionConstructors.push(alanF);
bandOfFunctionConstructors.push(bruceF);
bandOfFunctionConstructors.push(nilsF);

for (let member of bandOfFunctionConstructors) {
    console.log(`${ member.name }, age ${ member.age }`);
    
}

// What about functions?

// JS does this its own quirky way

Musician.prototype.plays = function plays() {
    let played = "";

    for (let i = 0; i < this.instruments.length; i++) {
        played += this.instruments[i] + ", "  ;     
    }
    return `${ this.name } plays ${played}`;
}

// Functions added to the prototype property
// affect ALL objects created with the fucntion constructor
// past, present and future.

console.log(alanF.plays());
console.log(nilsF.plays());

// This function constructor / prototype manipulation model is THE WAY JS does it
// Later, ES6 classes were introduced to make OO developers from other disciplines feel less panicky around JS.

class MusicianClass {
    constructor (name, age, ...instruments) { // rest parameters as in the rest of them.
        this.name = name;
        this.age = age;
        this.instruments = [...instruments]; // spread syntax.

    }

    plays = function plays() {
        let played = "";
    
        for (let i = 0; i < this.instruments.length; i++) {
            played += this.instruments[i] + ", "  ;     
        }
        return `${ this.name } plays ${played}`;
    }

}

const alanC = new MusicianClass('Alan', 54, 'Trombone', 'Keyboard', 'Vox');
const bruceC = new MusicianClass('Bruce', 71, 'Guitar', 'Harmonica', 'Vox');
const nilsC = new MusicianClass('Nils', 65, 'Lead Guitar', 'Backing Vox');

console.log('Same again using the ES6 class:');

console.log(alanC.plays());
console.log(bruceC.plays());
console.log(nilsC.plays());
