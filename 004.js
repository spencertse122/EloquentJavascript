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



console.log("-".repeat(10))



// more array

console.log([1,2,3,2,1].indexOf(2)) // ----> index 1 is the first 2
console.log([1,2,3,2,1].lastIndexOf(2)) // ---> index 3 is the last 2

console.log([0,1,2,3,4].slice(2, 4)); //---> from index 2 to index 4 (4 is exclusive)
console.log([0,1,2,3,4].slice(2)) //----> from index 2 to the end


// concat and slice in action

function remove(array, index) {
    return array.slice(0, index)
      .concat(array.slice(index + 1))
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

console.log(remove(["a", "b", "c", "d", "e"], 3));

console.log('-'.repeat(10))
// Strings and their properties
let kim = "KIM"
kim.age == 88;
console.log(kim.age)

console.log("coconuts".slice(4, 7)) //----> nut (from index 4 to 6)
console.log("coconut".indexOf("u"))



console.log("one two three".indexOf("ee")) ///return 11 because "ee" starts at 11
console.log("    okay \n".trim()) // in python it's strip() instead of trim()

// converting number 6 into a string, then pad it into 3 digits, with 0s
console.log(String(6).padStart(3, "0"))

console.log('-'.repeat(10))

// spliy a string on every occurence of another string

let sentence = "Secretarybirds specialize in stomping."
let words = sentence.split(" ") // same as python
console.log(words)

console.log(words.join(". ")) // same as python join

console.log("LA".repeat(3))

// another example of getting length of a string and indexing
let string = "abc"
console.log(string.length) // length should be 3
console.log(string[1]) // index 1 is b

// rest parameters
// example making Math.max

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4, 1, 9, -2))
console.log('-'.repeat(10))

let numbers = [5,1,7]
console.log(max(...numbers))


console.log(max(9, ...numbers, 2))

console.log("-".repeat(10))


// another example with words
let words2 = ["never", "fully"]
console.log(["will", ...words2, "understand"])

// Math object
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x : radius * Math.cos(angle),
            y : radius * Math.sin(angle)};
    }
    console.log(randomPointOnCircle(2))


console.log(Math.random())
console.log(Math.random())
console.log("Math.floor(Math.random() * 10) ------>", Math.floor(Math.random() * 10))


// binding values in an array
let {name} = {name: "Faraji", age: 23}
console.log(name)
