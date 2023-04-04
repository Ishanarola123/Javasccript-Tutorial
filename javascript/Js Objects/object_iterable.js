// Create a String
const namestr = "W3Schools";

// List all characters of the strings 

let text = ""
for (const x of namestr) {
    text += x + ",";
}

console.log(text);

let arr = ""
//iterate over the string
for (const x of [1, 2, 3, 4, 5]) {
    // code block to be executed
    arr += x;
}

console.log(arr);


// Home Made Iterable
// here next and done are improtant
// It can be used for the value 
function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    };
}

const n = myNumbers();
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);

