// Regular expression

// example of regex in js
// the two below are the exact same
let re1 = new RegExp("abc"); // using the RegExp constructor
let re2 = /abc/; // a forward slash ends a pattern

// testing for matches
console.log(`Using /abc/: ${/abc/.test("abcde")}`);
console.log(`Using /abc/ to fail: ${/abc/.test("abxde")}`);
console.log(`Using re2: ${re2.test("abcds")}`);
console.log(`Using re1: ${re1.test("vnieors")}`);
// we use an expression, then do .test(someString)

// we can also use indexOf


// bracket will identify any matching characters

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

console.log('-'.repeat(20));
let sampleString = "apple sample."
console.log(sampleString)
console.log('-'.repeat(20))


// test out the backslash wildcard characters
// let's say we want a date formatted as 
// 01-30-2003 15:20

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(`01-30-2003 15:30 -> ${dateTime.test("01-30-2003 15:20")}`)
console.log(`This is an apple -> ${dateTime.test("this is an apple")}`)

console.log('-'.repeat(20))

// we can use the square bracket to indicate alternatives
let digitOrPeriod = /[\d.]/
console.log(`Random Characters return: ${digitOrPeriod.test("bniortsnbiorts")}`)
console.log(`Random numbers return: ${digitOrPeriod.test("54783926784932")}`)
console.log(`Sentence with a dot returns: ${digitOrPeriod.test("This is a sentence.")}`)

console.log('-'.repeat(20))

// use the ^ to indicate NOT, the invert
// does it contain any non binary
let notBinary = /[^01]/;

console.log(notBinary.test("06578497685941"))
console.log(notBinary.test("1100100010100110"))
console.log('-'.repeat(20))


// a plus sign indicate the element maybe repeated more than once

let dPlus = /'\d+'/

console.log(dPlus.test("'123'"))
console.log(dPlus.test("123")) // this returns false because of the missing ''
console.log(dPlus.test("''"))

console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"))
// * is a true wildcard, + mathes at least one character

console.log('-'.repeat(20))

// question mark means the character before maybe not there
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"))
console.log(neighbor.test("neighbor"))

console.log('-'.repeat(20))


// curly bracket means the range of occurance
// {2} after a character means exactly occured twice
// {2, 4} means either 2, or 3, or 4 times
// {5, } means more than 5 times
let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test("1-30-2003 8:45"))

console.log('-'.repeat(20))

// use i to indicate this is case INSENSITIVE
let cartoonCrying = /boo+(hoo+)/i;  
console.log(cartoonCrying.test("Boohoooohoohooo"))

console.log('-'.repeat(20))

// exec method vs test method
let match = /\d+/.exec("one two 100")
console.log(`Extracting "one two 100": ${match}`)
console.log(`100 happens on index ${match.index}`)

console.log('-'.repeat(20))

// String built in regex
let RandomString = "one two 100"
console.log(RandomString.match(/\d+/));

