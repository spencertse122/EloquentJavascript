// INTERNATIONAL CHARACTERS

console.log(/🍎{3}/.test("🍎🍎🍎"));
// false
console.log(/<.>/.test("<🌹>"));
// false
console.log(/<.>/u.test("<🌹>"));
// true


console.log('-'.repeat(10))

console.log(/\p{Script=Greek}/u.test("α"))
console.log(/\p{Script=Greek}/u.test("a"))
console.log(/\p{Script=Arabic}/u.test("a"))
console.log(/\p{Alphabetic}/u.test("a"))
console.log(/\p{Alphabetic}/u.test("!"))