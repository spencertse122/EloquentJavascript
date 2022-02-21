// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.
// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster

function reverseArray ([...elements]) {
    reverseList = []
    for (let element of elements) {
        reverseList.unshift(element)
    }
    return reverseList 
}


console.log(reverseArray([1,5,7,99,2]))
console.log('-'.repeat(10))

function reverseArrayInPlace (listOfElements){
    for (i=0; i < Math.floor(listOfElements.length / 2); i++) {
        let old = listOfElements[i]
        listOfElements[i] = listOfElements[listOfElements.length - 1 -i]
        listOfElements[listOfElements.length - 1 -i] = old
    }
    console.log(listOfElements)
}

reverseArrayInPlace(["A", "B", "C", "D"])