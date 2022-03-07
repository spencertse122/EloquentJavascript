// // Iterable groups
// Make the Group class from the previous exercise iterable. Refer to the section
// about the iterator interface earlier in the chapter if you aren’t clear on the
// exact form of the interface anymore.
// If you used an array to represent the group’s members, don’t just return the
// iterator created by calling the Symbol.iterator method on the array. That
// would work, but it defeats the purpose of this exercise.
// It is okay if your iterator behaves strangely when the group is modified during
// iteration.

// Group class from last exercise
class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }

    // this is going to connect to the iterator 
    [Symbol.iterator]() {
        return new GroupIterator(this) // putting self into it
    }
    // in python
    // def __init__(self, GroupIterator):
    //     self.GroupIterator = GroupIterator
  }


// The Iterator class
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;    
    }
    
    next() {
        if (this.position >= this.group.members.length) {
            return {done: true} // if the position has accumulated beyong the length, return nothing
        } else {
            let result = {value: this.group.members[this.position], // using the position to index out the data
                            done: false}
            this.position++
            return result
        }

    }
    
}





// Expected behavior
// making the set iterable 
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value)
}