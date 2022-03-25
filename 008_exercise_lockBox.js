
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


let test_box = box

console.log(test_box._content)