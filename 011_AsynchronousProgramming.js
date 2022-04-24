// Asynchronouse Programming

// let the processor switch between tasks

// Synchronous progamming model only allow things to happen one
// at a time

// --------------
// Callbacks

// make functions that perform a slow action take an
// extra argument ---> callback function
// when the action is started and when  it finishes
// the callback function is called with the result

// e.g. the setTimeout function

// ------------
// below are psuedo code, and will not run
// first importing the bigOak nest (the storage bulb)
import {bigOak} from "./crow-tech";

// read what's in the storage
bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

// above is not ideal, the indentation level increases
// with each asynchronous action

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            () => console.log("Note delivered."))

// to make nests capable of receiving that request
// need to define a type "note"

import {defineRequestType} from "./crow-tech";

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    // execute the done function
    done();
})

