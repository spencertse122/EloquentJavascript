// fizzbuzz
for (let counter = 1; counter <= 100; counter += 1) {
    if ((counter%5 == 0) && (counter%3 == 0)) {
        console.log("FizzBuzz")
    } else if ((counter%5 == 0) && (!counter%3 == 0)) {
        console.log("Buzz")
    } else if (counter%3 == 0) {
        console.log("Fizz") 
    } else {
        console.log(counter)
    }
}

console.log("-".repeat(10))
