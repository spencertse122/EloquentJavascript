
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        // only run below if it's NOT locked
        return this._content;
    }
};


// let test_box = box
// console.log(test_box._content)
// console.log('-'.repeat(10))


// real exercise code here 

// this is essentially an encryption solution
function withBoxUnlocked(body) {
    // Code here
    // first getting the locking status
    let locked = box.locked;

    // if it's not locked
    if (!locked) {
        return body(); // run the function inside
    }

    // otherwise, unlock it
    box.unlock();

    // then try to run the inside function
    try {
        return body();
    } finally {
        box.lock(); //after running it,lock it again
    }
}

// Triggering the function down here

let testfunc = function() {
    // throw new Error("Pirates on the horizon! Abort!")
    console.log("Box opened: we have got some gold!!!!!")
}

// make sure we lock the door
box.lock()


// utilizing the box
try {
    withBoxUnlocked(testfunc);
} catch (e) {
    console.log("Error raised: " + e);
}

// Check to see if the box is locked
console.log(`Box lock status: ${box.locked}`);
