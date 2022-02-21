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
