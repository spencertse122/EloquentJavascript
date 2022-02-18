// This is official setup guide from Miscrosoft

var msg = "Hello World"; 
console.log(msg)


// Chapter 0 introduction here
let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);

// in python:

// total = 0
// count = 1
// while count <= 10:
//     total += count 
//     count += 1
// print(total)



function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }

}

console.log(factorial(8));