
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

function withBoxUnlocked(body) {
    // Code here
    let locked = box.locked;
    if (!locked) {
        return body();
    }

    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!")
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);
