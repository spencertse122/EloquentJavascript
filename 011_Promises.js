// // promises

// // a promise ios an asynchrnous action that 
// // may complete at some point and 
// // produce a value.
// // it can also notify anyone who is interested when
// // the value is available

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

// ------------
// real useage example

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "neemies")
    .then(value => console.log("Got", value));




// Failure handling

new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught failure " + reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2", value))

// -> Caught failure Error: Fail
// -> Handler 2 nothing

