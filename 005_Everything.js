// Everything
// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is
// like the && operator.


// Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method.


function everyLoop(AnArray, testFunction) {
    for (let element of AnArray) {
        if (!testFunction(element)) return false;
    }
    return true
}


function everySome(AnArray, testFunction) {
    return !AnArray.some(element => !testFunction(element))
}

console.log(everyLoop([1, 3, 5], n => n < 10))
console.log(everyLoop([2, 4, 16], n => n < 10))
console.log(everyLoop([], n => n < 10))
console.log('-'.repeat(10))
console.log(everySome([1, 3, 5], n => n < 10))
console.log(everySome([2, 4, 16], n => n < 10))
console.log(everySome([], n => n < 10))
