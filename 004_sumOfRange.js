// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.

function customSum(start, end) {
    outputSum = 0
    for (num = start; num <= end; num++) {
        outputSum += num
    }
    return outputSum
}

console.log(customSum(1,10))

function customRange(start, end) {
    outputList = []
    for (num = start; num <= end; num++) {
        outputList.push(num)
    }
    return outputList
}

function sum([...numbers]) {
    outputSum = 0
    for (let num of numbers) {
        outputSum += num
    }
    return outputSum
}

console.log(sum(customRange(1, 10)))

// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

// function custom_range2(start, end)

function custom_range2(start, end, step = start < end ? 1 : -1) {
    outputList = []
    if (start < end) {
        for (num = start; num <=end; num += step) {
        outputList.push(num)
        }
    } else {
        for (num = start; num >= end; num += step) {
            outputList.push(num)
        }
    }
    return outputList
}

console.log(custom_range2(10, 1, -2))