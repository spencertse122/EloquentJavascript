// Parsing an INI File


function parseINI(string) {
    //start with an object to hold the top-level fields
    // initiate an empty array to store the parsed result
    let result = {}
    // set each section as an empty result array
    let section = result;
    // first split up the big string into sections
    // using the \n
    string.split(/\r?\n/).forEach(line => {
        let match; // this match is an empty object, undefined
        // if match = line.match works then...
        if (match = line.match(/^(\w+)=(.*)$/)) { // dollar sign forces to end
            // after we matched
            // match[1] will be the first parenthesis
            // match[2] will be the second parenthesis
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {}; // this will enable the next line to append inside the hierachy 
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.")
        }
    })
    return result
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki
fruit=Apple
[SecretPokemon]
type=Fire
owner=Spencer`));