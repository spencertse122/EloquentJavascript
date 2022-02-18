// Chapter 1 Values, types, and operators


// Printing numbers
console.log(12%4)
console.log(10%4)
console.log(10%3)

// Printing NaN, not a number
console.log(0/0)

// Concatenating strings
console.log("con" + "Cat" + "e" + "nate")

// f string in javascript
console.log(`half of 100 is ${100 / 2}`)

// print type
console.log(typeof 4.5)
console.log(typeof "hahahahaha")


console.log(- (10-2))

// print boolean
console.log(3>2)
console.log("ghriuoesbh" > "gbr") // when we compare strings as boolean, it just compare length

console.log("Itchy" != "Scratchy")
console.log("Apple" == "Orange")


// AND is &&
console.log(true && !false)
console.log(true && false)
console.log(true || false)

console.log("a" == "a" ? 1:2)
console.log("a" != "a" ? 1:2)


// Automatic type conversion
console.log(8 * null)

console.log("5" - 1)

console.log("5" + 1)
console.log("five" * 2)

// null and undefined
console.log(null == undefined);
console.log(null == 0); // 0 is not null
console.log(0 == undefined); // and 0 is not undefined

// When you want to test whether a value has a real value instead of nul
// or undefined, you can compare it to null with == or != operator.


// the or operator is weird, it picks the left if it's not null
console.log(null || "user")
console.log("Agnes" || "user")

// This mechanism is used as a fall back on default value
// e.g. you have a value that may be empty, you can stuff the replacement in

// rules
// the rules for converting strings and numbers to Boolean values
// state that 0, NaN, and the empty string "" as false
// so
console.log("0 || -1 is -> " + 0 || -1)
console.log('"" || "!?" will get you ' + ("" || "!?"))
