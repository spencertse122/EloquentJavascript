// further arrayology
// push and pop is made for changing at the end


// unshift and shift are for adding in the front

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

remember("eat an apple")
remember("clean up kitchen sink")
remember("sign up for the gym")

console.log(getTask())
console.log(todoList)

// shift is pop the front
// unshift is push in the front


