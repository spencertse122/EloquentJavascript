// Modules

// Old code, do not follow
const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
    return {
        name(number) {return names[number]; },
        number(name) {return names.indexOf(name); }
    }
}();

console.log(weekDay.name(weekDay.number("Sunday")));

console.log(weekDay.number("Sunday"))
console.log(weekDay.name(3))

console.log('-'.repeat(10))

// Evaluating data as code

// eval will read string into code
// ewwwww
// also bad example
const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}

console.log(evalAndReturnX("var x = 2"));

console.log(x);

console.log('-'.repeat(10))

// Use function constructor

let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4))


