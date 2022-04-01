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
console.log(backtracking.test("1gairoeg"))