// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.


function findMin(num1, num2) {
    return Math.min(num1, num2)
}

console.log(findMin(4,26))
console.log(`Comparing 52 and 13 gets us ${findMin(52,13)}`)