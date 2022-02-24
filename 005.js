// Higher-order functions

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1
}
console.log(total);

function range(start, stop) {
    let outputArray = []
    for (let count = start; count <= stop; count ++) {
        outputArray.push(count)
    }
    return outputArray
}

function sum(anArray) {
    let outputSum = 0
    for (let item of anArray) {
        outputSum += item 
    }
    return outputSum
}
// console.log(range(1, 10))
console.log(sum(range(1, 10)));

// second one is better because it's simpler
// that's the higher-order function concept


console.log('-'.repeat(10))

// Abstraction

// Put 1 cup of dried peas per person into a container. Add water
// until the peas are well covered. Leave the peas in water for at least
// 12 hours. Take the peas out of the water and put them in a cooking
// pan. Add 4 cups of water per person. Cover the pan and keep the
// peas simmering for two hours. Take half an onion per person. Cut
// it into pieces with a knife. Add it to the peas. Take a stalk of
// celery per person. Cut it into pieces with a knife. Add it to the
// peas. Take a carrot per person. Cut it into pieces. With a knife!
// Add it to the peas. Cook for 10 more minutes.
// And this is the second recipe:
// Per person: 1 cup dried split peas, half a chopped onion, a stalk of
// celery, and a carrot.
// Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per
// person). Chop and add vegetables. Cook for 10 more minutes.


// Abstracting repetition
console.log("method 1: just a forloop")
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("method 2: doing something N times as a function")

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
repeatLog(10)

console.log('-'.repeat(10))

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

repeat(3, console.log);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i+1}`);
})

console.log(labels)


// higher-order functions
console.log('-'.repeat(10))

function greaterThan(n) {
    return m => m > n;
}

// example of using lambda (=>) as function
let greaterThan10 = greaterThan(10);
console.log(greaterThan(10));

console.log(greaterThan10(13))

console.log('-'.repeat(10))

function noisy(f) {
    // returns a function that takes in any numbers of arguments
    return (...args) => {
        console.log("calling with", args); // first printing each argument on screen with "calling with"
        let result = f(...args); // and then using the f function to run through all the input arguments
        console.log("called with", args, ", returned", result); 
        return result;
    };
}



noisy(Math.min)(3, 2, 1);

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});


function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// transforming with map

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

// below function is going to extract the names from the array
// console.log(map(rtlScripts, s => s.name));


// Summarizing with reduce/fold

// start with a reduce function that takes in an array, the way it combines, and starting value
function reduce(array, combine, start) {
    let current = start; // initiate local variable current as the start
    // starting the iteration
    for (let element of array) { // for i in array:
        current = combine(current, element); // current = combine current value and i with the combining function
    }
    return current;
}

console.log(reduce([1,2,3,4], (a, b) => a + b, 0));

// the above example is just the standard reduce

console.log('-'.repeat(10))

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }));




// Composability
// let biggest = null; // initiate biggest as a null value object
// for (let script of SCRIPTS) { // for i in scripts:
//     if (biggest == null || // if biggest is null or 
//         characterCount(biggest) < characterCount(script)) { // doing a character count comparison
//             biggest = script; // replace the biggest with the current looping item
//         }
// }



// REFER TO SCRIPTS.JS ^^^^^^^^



console.log('-'.repeat(10))

let horseShoe = "🐴👟";
console.log(horseShoe.length);

console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0))
console.log(horseShoe.codePointAt(0))

// JavaScript's charCodeAt method gives you a code unit, not a full character
// codSo we could use that to get characters from a string. But the argument passed to codePointAt
// is still an index into the sequence of code units. 
// So to run over all characters in a string, we'd still need to deal with the question
// of whether a character takes up one or two code units.


let roseDragon = "🌹🐉";
for (let char of roseDragon) {
    console.log(char);
}


console.log('-'.repeat(10))

// Recognizing text
function countBy(items, groupName) {
    let counts = []; // initiating an empty array
    for (let item of items) { // for each item in the items array
        let name = groupName(item); // utilize the groupName function on the item
        let known = counts.findIndex(c => c.name == name); 
        if (known == -1) {
            counts.push({name, count: 1}); // if we do NOT find the category name, make it 1
        } else {
            counts[known].count++; // if the category name exists, add to count
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2? "greater than 2":"Less than 2"));

console.log('-'.repeat(10))


