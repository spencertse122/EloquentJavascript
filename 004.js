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

console.log("-".repeat(10))

// mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value)

console.log("-".repeat(10))

const score = {visitors: 0, home: 0};
score.visitors = 1;
// score = {visitors: 1, home: 1}
console.log(score)

console.log("-".repeat(10))
// The lycanthrope's log

let journal2 = []
function addEntry(events, squirrel) {
    journal2.push({events, squirrel})
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false)
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false)
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)

console.log(journal2)
console.log('-'.repeat(10))

// Starting the phi coefficient table
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / 
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) * 
                  (table[0] + table[2]))
}

console.log(phi([76, 9, 4, 1]));


function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i=0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", journal))

console.log(journal)

console.log('-'.repeat(10))

// Array Loops
// regular loop
for (let i = 0; i < journal.length; i++) {
    let entry = journal[1];
    // do something with entry
}
// special loop
for (let entry of journal) {
    console.log(`${entry.events.length} events.`);
}


