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


// CommonJS

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag=="YYYY") return date.getFullYear();
        if (tag=="M") return date.getMonth();
        if (tag =="MMMM") return months[date.getMonth()]
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()]
    })
}

// another usage format

// this is for preventing to load the module everytime we use it
require.cache = Object.create(null);

function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code) 
        wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
}

const {parse} = require("ini")

console.log(parse("x = 10\ny = 20"))

// ECMAScript modules
// this is new javascript specific approach

import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* ... */ }

export default ["Winter", "Spring", "Summer", "Autumn"]