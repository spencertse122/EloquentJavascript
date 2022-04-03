// Regexp golf
// Code golf is a term used for the game of trying to express a particular program
// in as few characters as possible. Similarly, regexp golf is the practice of writing
// as tiny a regular expression as possible to match a given pattern, and only that
// pattern.
// For each of the following items, write a regular expression to test whether any
// of the given substrings occur in a string. The regular expression should match
// only strings containing one of the substrings described. Do not worry about
// word boundaries unless explicitly mentioned. When your expression works, see
// whether you can make it any smaller.


// car and cat
let CarAndCat = /\bca[rt]\b/i
console.log(CarAndCat.test("car"))
console.log(CarAndCat.test("cat"))
console.log(CarAndCat.test("cAT"))
console.log(CarAndCat.test("CAG"))

console.log('-'.repeat(10))

// pop and prop
let PopAndProp = /\bpr?op\b/i
console.log(PopAndProp.test("this is a pop"))
console.log(PopAndProp.test("a prop is probably"))
console.log(PopAndProp.test("prrop"))

console.log('-'.repeat(10))

// ferret, ferry, and ferrari
let thatFerr = /ferr[et|y|ari]/i
console.log(thatFerr.test("ferret"))
console.log(thatFerr.test("ferry"))
console.log(thatFerr.test("Ferrari"))

console.log('-'.repeat(10))

// any word ending in ious
let ious = /\.*[ious]/i
console.log(ious.test("previous"))
console.log(ious.test("precghireos"))
console.log(ious.test("precious"))

console.log('-'.repeat(10))

// a whitespace character followed by a period, comma, colon, or semicolon
let whitesCharacter = /\s[\.\,\;\:]/
console.log(whitesCharacter.test(" ."))
console.log(whitesCharacter.test(" ?"))
console.log(whitesCharacter.test(" ,"))
console.log(whitesCharacter.test(" ;"))
console.log(whitesCharacter.test(" :"))

console.log('-'.repeat(10))

// a word longer than six letters

let longWord = /\w{7,}$/
console.log(longWord.test("apple"))
console.log(longWord.test("experiment"))
console.log(longWord.test("I eat an egg."))
console.log(longWord.test("I like a pineapple."))

console.log('-'.repeat(10))

// a word without the letter e (or E)
let noE = /\b[^\We]+\b/i
console.log(noE.test("egg"))
console.log(noE.test("jax"))


console.log('-'.repeat(20))
console.log("USING FUNCTION:")



function verify(regexp, yes, no) {
    // Ifnore unfinished exercises
    if (regexp.source == "...") return;
    yes.forEach(function(s) {
        if(!regexp.test(s))
            console.log("Failure to match '" + s + "'")
    })
    no.forEach(function(s) {
        if (regexp.test(s))
            console.log("Unexpected match for '" + s + "'")
    })
}



// Fill in the regular expressions

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^\We]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);