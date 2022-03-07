// Groups
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.


class Group {
    constructor() {
        this.group = []
    }

    // create the validation mechanism first 
    has(value) {
        return this.group.includes(value)
    }

    // using the has function to check before adding
    // so the array is going to be unique
    add(value) {
        if (!this.has(value)) {
            this.group.push(value)
        }
    }

    // this delete function use filter to be fail safe
    // it will avoid the scenario when the value doesn't exists 
    // it will also avoid the duplicated value scenarios
    delete(value) {
        this.group = this.group.filter(v => v !== value)
    }

    // using this to make it polymorphism
    static from(collection) {
        let group = new Group; // using recursion here to use the group
        for (let value of collection) {
            group.add(value)
        }
        return group
    }

}


// let testgroup = new Group()

// testgroup.add(3)
// testgroup.add(5)
// testgroup.add(10)
// testgroup.add(125)
// console.log(testgroup.group)
// testgroup.delete(10)
// console.log(testgroup.group)
// console.log('-'.repeat(10))



let testgroup2 = Group.from([10, 20, 23, 236])
console.log(testgroup2)
console.log(testgroup2.has(10))
console.log(testgroup2.has(30))
testgroup2.delete(10)
console.log(`after deleting 10, group now has ${testgroup2.group}`)