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

// nested scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAount = amount * factor;
        if (ingredientAount > 1) {
            
        }
    }
}