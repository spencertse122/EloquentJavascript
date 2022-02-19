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

