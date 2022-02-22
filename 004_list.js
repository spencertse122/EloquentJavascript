// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring to the first
// element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth


function ArrayToList(AnArray) {
    for (count = AnArray.length - 1; count >= 0; count -=1 ) {
        if (count == AnArray.length - 1) {
            let tempList = {
                value : AnArray[count],
                rest : null
            }
            var restList = tempList
        } else {
            let tempList = {
                value : AnArray[count],
                rest : restList
            }
            var restList = tempList
        }
        // console.log(count)
        // console.log(restList)
    }
    return restList
}

console.log(ArrayToList([1,2,3,4,5,6,7,8,9]))


console.log("-".repeat(10)) 
console.log("ANSWER: ")

// answer to arraytolist
function arrayToList2(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list}
    }
    return list
}

console.log(arrayToList2([1,2,3,4,5,6,7,8,9])) 

// ListToArray
function listToArray(AList) {
    let outputArray = []
    for (let node = AList ; node ; node = node.rest) {
        outputArray.push(node.value)
    }
    return outputArray
}

console.log(listToArray(arrayToList2([1,2,3,4,5,6,7,8,9])))

// prepend function
function prepend(value, list) {
    return {value, rest: list}
}

// function nth ----> this is usinsg recursion
function nth(List, n) {
    if (!List) return undefined;
    else if (n == 0) return List.value
    else return nth(List.rest, n-1)
}

console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList2([10, 20, 30]), 1))


