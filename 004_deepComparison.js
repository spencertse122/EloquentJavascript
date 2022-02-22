// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.


function deepEqual (a, b) {
    // if a and b are absolutely the same, return true
    if (a === b) return true;

    // if a is null or b is null or a is not object or b is not object, returns false
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    // grabbing the keys from the two variables
    let keysA = Object.keys(a), keysB = Object.keys(b);

    // if they don't contain the same amount of keys, automatically fail
    if (keysA.length != keysB.length) return false;

    // if keysB doesn't include all the keys from keysA, automatically fail
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
    }
    return true;
}