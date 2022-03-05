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

let object = new class { getWord() {return "hello"}}
console.log(object.getWord())

console.log('-'.repeat(10))


// overriding derived properties
ClassRabbit.prototype.teeth = "small" // setting the ClassRabbit teeth variable as small
console.log("killerRabbit2 original", killerRabbit2.teeth)

killerRabbit2.teeth = "long, sharp, and bloody"
console.log("killerRabbit2 after changes", killerRabbit2.teeth)

console.log("blackRabbit2 checking", blackRabbit2.teeth)
console.log("class template value", ClassRabbit.prototype.teeth)


console.log('-'.repeat(10))
console.log(Array.prototype.toString ==
            Object.prototype.toString) // these two are different tostring methods

console.log([1, 2].toString())
console.log(Object.prototype.toString.call([1, 2]))// using the regular tostring will get us a different level


console.log('-'.repeat(10))


// ----------------------------------------

// Maps
// Maps is a data structure like dictionary in Python


let ages = {
    Boris: 39,
    Liang: 22, 
    Julia: 62
}


console.log(`Julia is ${ages["Julia"]}`)
console.log("Is Jack's age known?", "Jack" in ages)
console.log("Is toString's age known?", "toString" in ages)


console.log('-'.repeat(10))

// initiate empty dictionary
let ages2 = new Map()
ages2.set("Boris", 39)
ages2.set("Liang", 22)
ages2.set("Julia", 62)


console.log(`Julia is ${ages2.get("Julia")}`)
console.log("Is Jack's age known?", ages2.has("Jack"))
console.log(ages2.has("toString"))

// use set(), get(), has() instead of the indexing
console.log('-'.repeat(10))
console.log({x:1}.hasOwnProperty("x"))
console.log({x:1}.hasOwnProperty("toString"))


console.log('-'.repeat(10))


// Polymorphism
ClassRabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`
}

console.log(String(blackRabbit2))

console.log('-'.repeat(10))


// Symbols
// this is to prevent multiple variables with the same name
let sym = Symbol("name")
console.log(sym == Symbol("name"))

ClassRabbit.prototype[sym] = 55
console.log(blackRabbit2[sym])

const toStringSymbol = Symbol("toString")
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn.`
}


console.log([1, 2].toString())
console.log([1, 2][toStringSymbol]())

let stringObject = {
    [toStringSymbol]() { return "a jute rope"}
}
console.log(stringObject[toStringSymbol]())


// The iterator interface
// next, value, done

let okIterator = "OK"[Symbol.iterator]()
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())

console.log('-'.repeat(10))

// implement an iterable data structure
// Matrix class

class Matrix { // taking in two variables, and a default function
    constructor(width, height, element = (x, y) => x + y) { // default function return undefined value for empty matrix template
        this.width = width; // setting width from input
        this.height = height // setting height from input
        this.content = [] // initiating an empty array

        for (let y = 0; y < height; y++) { // number of rows
            for (let x = 0; x < this.width; x++) { // number of columns
                this.content[y * width + x] = element(x, y)
                console.log(`We are at y ${y} x ${x}`)
                console.log(this.content)
            }
            console.log('-'.repeat(3))
        }
    }

    get(x, y) {
        console.log(`${y} * ${this.width} + ${x}`)
        return this.content[y * this.width + x]
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value
    }
}


console.log('-'.repeat(10))

// Testing out the Matrix Object
let testMatrix = new Matrix(3, 3);
console.log(testMatrix.get(3,1))

console.log('-'.repeat(10))



class MatrixIterator {
    constructor(matrix) {
        this.x = 0 // current position x (default to be 0)
        this.y = 0 // current position y (default to be 0)
        this.matrix = matrix
    }

    next() {
        // Checking if the bottom of the matrix has been reached before doing anything
        if (this.y == this.matrix.height) return {done: true}
        
        // then update its position
        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)}
        
        // After retrieving the value, x move one index
        this.x++

        // If x is equal to the matrix's width (end of row)
        if (this.x == this.matrix.width) {
            this.x = 0; // reset x to 0
            this.y++ // and then y move one (to the next row)
        }
        return {value, done: false} // outputing the values
    }
}

console.log('-'.repeat(10))

// Using the Symbol in the iterator
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this)
}


let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, '----->', value)
}

console.log('-'.repeat(10))

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100)
    }
}

console.log(varyingSize.size)
console.log(varyingSize.size)
console.log('-'.repeat(10))

// Using set and get in class
class Temperature {
    constructor(celsius) {
        this.celsius = celsius
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8)
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // using the get fahrenheit

temp.fahrenheit = 86 // using the set fahrenheit(value)
console.log(temp.celsius)

console.log(temp.fahrenheit)
console.log(temp.celsius)

let temp2 = new Temperature(22)
console.log(temp2.celsius)

temp2.fromFahrenheit = 100
console.log(temp2.celsius)