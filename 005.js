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
