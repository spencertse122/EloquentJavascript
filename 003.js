// Functions

// defining a simple function to so squares of a number
const square = function(x) {
    return x * x;
};

console.log(square(12));

const makeNoise = function() {
    console.log("Wheeeee!")
}

makeNoise()


// Var vs Let
// var is local; let is global

console.log('-'.repeat(10))
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z)
}
console.log(x + z)

console.log('-'.repeat(10))

const halve = function(n) {
    return n / 2;
};

// n within function will supercede
let n = 10;
console.log(halve(100));

// nested scope (function of a function)
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};


hummus(3)


// functions as values
// let launchMissiles = function() {
//     missileSystem.launch("now");
// };
// if (safeMode) {
//     launchMissiles = function() {/* do nothing */};
// }

function square2(x) {
    return x * x;
}

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

// Arrow functions
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// more on chapter 6 for why we use arrow function
const square1 = (x) => { return x * x; };
// below only works in JS, not node
// const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
};

// the call stack
function greet(who) {
    console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");

// This is not going to run because of the infinite recursion
// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first. ")

// optional arguments
function squareEasy(x) { return x * x; }
console.log(squareEasy(4, true, "hedgehog"));

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));
console.log(minus(5, 20))


// default value of a function
function power2(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power2(4));
console.log(power2(2, 6));

//console.log(something,something2, something3)
console.log("C", "O", 2);

// What appends to local bindings when the function call that created them is no longer active?

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1())
console.log(wrap2())

// Multiplier example
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log("use 5 inside twice()", twice(5))
console.log("use 10 inside twice()", twice(10))

// Recursion
function power33(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3))

// Example of recursion solution
// Consider this puzzle: by starting from the number 1 and repeatedly either
// adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
// would you write a function that, given a number, tries to find a sequence of
// such additions and multiplications that produces that number?
// For example, the number 13 could be reached by first multiplying by 3 and
// then adding 5 twice, whereas the number 15 cannot be reached at all.

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            // console.log(`current is ${current} and target is ${target}, history is ${history}`)
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                   find(current * 3, `(${history} * 3)`); 
        }
    }
    return find(1, "1");
}

console.log("-".repeat(10))
console.log("Looking for a 4", findSolution(4));
console.log("-".repeat(10))
console.log("Looking for a 24", findSolution(24))

// Growing functions
console.log("-".repeat(10))
console.log("Growing function >>>>>")

// This is unscalable version
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`)
}

printFarmInventory(7, 11)


console.log("-".repeat(10))
console.log("Using the scalable version >>>>")

// This is scalable version
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`)
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory2(7, 11, 3)

console.log("-".repeat(10))
console.log("cleaning up the zero pad function>>>")

// This is even more readable, using zeroPad as fuction name
// one function only does one thing
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

// and we simplified the big guy using the built-in console.log
function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory3(7, 16,3)


// A pure function is a specific kind of value-producing function that not only 
// has no siode effects but also doesn't rely on side effects from other code

// a call to such function can be substituted by its return value 
// without changing the meaning of the code


