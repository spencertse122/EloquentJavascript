// The Date Class

console.log(new Date());
console.log(new Date(2009, 11, 9, 12,59, 59, 999));
console.log('-'.repeat(10))
// month number starts at 0!!!!!!

console.log(new Date(2013, 11, 19).getTime())
// time objects are stored as number of milliseconds 
// since 1970 in UTC


console.log(new Date(1387407600000))
console.log('-'.repeat(10))
// use regex to create datetime object

function getDate(string) {
    // needed to use the _ as placeholder for the skip the full match element
    let[_, month, day, year] = 
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"))

console.log('-'.repeat(10))
// the exec returns whole bunch of things
// there's a full stirng that got input
// there's the three parts
// and then index
console.log("Using the exec with () only")
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec("1-30-2003"))


// there's a bug in getDate()
console.log('-'.repeat(10))
console.log("we can use ^ to label it as Starting of a string")
console.log("$ to label ending of the string")
console.log("\/b means word boundary, start and end of a word")

console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));


console.log('-'.repeat(10))

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(`testing '15 pigs': ${animalCount.test("15 pigs")}`)
console.log(`testing 'pigchickens': ${animalCount.test("15 pigchickens")}`);
console.log(`testing 'the 3 pigs': ${animalCount.test("the 3 pigs")}`)
console.log(`testing 'the 3 little pigs': ${animalCount.test("the 3 little pigs")}`)

console.log('-'.repeat(10))

// backtracking

let backtracking = /\b([01]+b|[\da-f]+h|\d+)\b/
console.log(backtracking.exec("01567926789"))

// the regex will match the first full combo
// if it fails, it goes back to the starting index 

// The replace method
console.log('-'.repeat(10))
console.log(`Replacing 'p' in 'papa': ${"papa".replace("p", "m")}`)

console.log('-'.repeat(10))

console.log(`Replacing 'ou' without g option: ${"Borobudur".replace(/[ou]/, "a")}`)
console.log(`Replace 'ou' with g option: ${"Borobudur".replace(/[ou]/g, "a")}`)

console.log('-'.repeat(10))


// real power of using regular expressions with replace comes from
// the fact that we can refer to matched groups in the replacement string
console.log('-'.repeat(10) + "Before Replacement")
console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip")

console.log('-'.repeat(10) + "After Replacement")
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1")
    )

// $1 means replacing the first () group, $2 means the second
console.log('-'.repeat(10))
console.log("replace cia and fbi to uppercase with regex")
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()))


// another example
console.log('-'.repeat(10))

// this is the string we want to play with
let stock = "1 lemon, 2 cabbages, and 101 eggs";

// this is the function we want to use to modify the string
function minusOne(match, amount, unit) {
    // first modify the number amount by -1
    // because that's what we do 
    amount = Number(amount) - 1;
    // if the amount is one, it's singular
    // we will take away the 's'
    if (amount == 1) { //only one left ,remove the 's'
        // slice the string by excluding the last digit
        unit = unit.slice(0, unit.length - 1);
    // if the amount is zero, change the amount string to ZERO!!!
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}

// the regex below finds a digit and a word separated with a space " "
// and then the replacement takes in a function
// return a new string with a new number and the same unit
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


console.log('-'.repeat(10))

// GREED

// this should be stripping out all the comment strings 
function stripComments(code) {
    // "\/\/.*|\/\*[^]*\*\/" <------ this is the actual one we want to look at 
    //    //.*    | /*  [anything]wildcard*  */
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "")
}

console.log(stripComments("1 + /* 2 */3")) // the /* 2 */ is a comment
// so this should return a 1 + 3
console.log(stripComments("x = 10;// ten!"))
console.log(stripComments("1 /* a */+/* b */ 1")) // /* a */ and /* b */ are comments


// NON GREEDY!!!!!

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"))


// dynamically creating regexp objects
let name = "harry";
let text = "Harry is a suspicious character."
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"))
console.log(regexp)