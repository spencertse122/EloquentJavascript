// Program structure

// simpmle statements
1;
!false;

// to set a value
let caught = 5 * 5;
console.log(caught);

// another example
let ten = 10;
console.log(ten * ten);

// Overwritting values
let mood = "light";
console.log(`mood is: ${mood}`);
mood = "dark";
console.log(`after change mood: ${mood}`);

// Changing value 
let luigisDebt = 140;
console.log(`original is: ${luigisDebt}`)
luigisDebt = luigisDebt - 35;
console.log(`after changes: ${luigisDebt}`);

// These are called binding
let one = 1, two = 2;
console.log(`This should be three: ${one + two}`);

// We can also use var and const
var name = "Ayda";
const greeting = "Hello ";

console.log(greeting + name);

// Functions
console.log("Example using Math.max");
console.log(Math.max(2,5));
console.log("Example using Math.min")
console.log(Math.min(2,4) + 100);

// Control flow
// let theNumer = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + 
//             theNumber * theNumber);

// The above code is not going to run because prompt is from JS not NodeJS

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " +
//                 theNumber * theNumber);
// }

let theNumber = Number(5);
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
                theNumber * theNumber);
}

let theNumber2 =  NaN;
if (!Number.isNaN(theNumber2)) {
    console.log("Your number is the square root of " +
                theNumber2 * theNumber2);
}

// One liner version
if (1 + 1 == 2) console.log("It's a true statement in oneliner")

// If else statement
let theNumber3 = Number(8);
if (!Number.isNaN(theNumber3)) {
    console.log("Your number is the square root of " +
                theNumber3 * theNumber);
} else {
    console.log("Hey. Why didn't you giev me a number?");
}

let theNumber4 = "Apple";
if (!Number.isNaN(theNumber4)) {
    console.log("Your number is the square root of " +
                theNumber4 * theNumber4);
} else {
    console.log("Hey. Why didn't you giev me a number?");
}

// try no semicolonn
// 1 + 1

// -1 + 1 === 0 ? alert(0) : alert(2)

let num = Number(10);
if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

// while loop
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

console.log('-'.repeat(10));
// using while loop to calculate 2^10
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter += 1;
}
console.log(result);


console.log("-".repeat(20))
// Do loop
// difference between do and while:
// do-loop always executes its body at least once,
// and it starts testing whether it should stop only after that first executaion