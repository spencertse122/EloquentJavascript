// Data Structures: objects and arrays

// Array
let listOfNumbers = [2, 3, 5, 7, 11]
console.log(listOfNumbers[2])
console.log(listOfNumbers[0])
console.log(listOfNumbers[2-1])

// properties
console.log(`The length of listOfNumbers is ${listOfNumbers.length}.`)
console.log("-".repeat(10))

// Methods
let doh = "Doh"
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

// list add items
let sequence = [1, 2, 3];
console.log("sequence original", sequence)
sequence.push(4);
sequence.push(5);
console.log("sequence after push (append)", sequence);

console.log("popping last items in the series", sequence.pop())
console.log("sequence after the pop", sequence)


console.log("-".repeat(10))
// Objects
console.log("storing data in day1 >>>>>")
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel)
console.log(day1.wolf)
day1.wolf = false
console.log(day1.wolf)

// adding descriptions
console.log("Adding descriptions")


let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
}

// objects are like octopuses with any number of tentacles
// each of which has a name tattooed on it
console.log("-".repeat(10))

let anObject = {left: 1, right: 2}
console.log(anObject.left)
delete anObject.left
console.log(anObject.left)
console.log("left" in anObject)
console.log("right" in anObject)

console.log("-".repeat(10))

console.log(Object.keys({x:0, y:1, z:2}))

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA)


// Array is a kind of object specialized for storing sequences of things
let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true},
];

console.log(journal)