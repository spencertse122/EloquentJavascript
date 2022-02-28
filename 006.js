// The secret life of objects

// A Simple Methods
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`)
};

rabbit.speak("I'm alive.")


console.log('-'.repeat(10))


// using object.method()

function speak(line) { // taking in external varriable 'line'
    console.log(`The ${this.type} rabbit says '${line}'`) // self.type, line <----run the function with
}
let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}


whiteRabbit.speak("Oh my ears and whiskers, " + 
                  "how late it's getting!");

hungryRabbit.speak("I could use a carrot right now.");

// think about it as an extra parameter

speak.call(hungryRabbit, "Burp!")
console.log('-'.repeat(10))


// other example

function normalize() { // this is a method of an object
    console.log(this.coords.map(n => n / this.length)) // coords is the array in the object, and there's a length
} // the map function will apply a function to an array, in this case a lambda function
normalize.call({coords: [0, 2, 3], length: 5})

console.log('-'.repeat(10))

// Prototypes
let empty = {}
console.log(empty.toString)
console.log(empty.toString())
console.log('-'.repeat(10))
console.log(Object.getPrototypeOf({}) == 
            Object.prototype);

console.log(Object.getPrototypeOf([]) ==
            Array.prototype)

console.log(Object.getPrototypeOf(Math.max) == 
            Function.prototype)

console.log(Object.getPrototypeOf([]) ==
            Array.prototype)

console.log('-'.repeat(10))

// Real Prototype example
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!")

console.log('-'.repeat(10))

// Classes
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type 
    return rabbit
}
// ----------------------------------------------

// Using new instead 
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
}


// using the object
let weirdRabbit = new Rabbit("weird ass")
weirdRabbit.speak("fuck")

console.log('-'.repeat(10))
// --------------------------------------------------------------

// Class Notation

class ClassRabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let killerRabbit2 = new ClassRabbit("killer")
let blackRabbit2 = new ClassRabbit("black")


killerRabbit2.speak("WHEEEE")