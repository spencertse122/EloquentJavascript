// initiating a class
class MultiplicationUnitFailure extends Error{}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicationUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    try {
        console.log(primitiveMultiply(a, b))
    } catch (e) {
        if (e instanceof MultiplicationUnitFailure) {
            console.log("we are in the 80%");
        } else {
            throw e;
        }
    }
}

for (let i=0; i < 10; i++) {
    console.log(reliableMultiply(8, 8));
}
