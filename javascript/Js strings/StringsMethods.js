let text = "HELLO WORLD";
// let letter = text.charAt(0);
// let letter = text.charAt(1);

//last characters are there
let letter = text.charAt(text.length-1);
let letter2 = text.charAt(15); //nothing print (empty string returned) if index bounce 
console.log(letter);
console.log(letter2);

// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string
let code = text.charCodeAt(0);
console.log(code); //72
//converts that ascii value into the character
let char=String.fromCharCode(text.charCodeAt(0));
console.log(char);

//concat method concat strings of it 
let result = text.endsWith("world");
console.log(result);

//if we want to convert that code value into character then used the from characters
let text2 = String.fromCharCode(65);
console.log(text2);

// The includes() method returns true if a string contains a specified string.
let text3 = "Hello world, welcome to the universe.";
let result2 = text3.includes("world");
console.log(result2);

// The indexOf() method returns the position of the first occurrence of a value in a string.
// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.


// The match() method matches a string against a regular expression **

// The match() method returns an array with the matches.

let text4 = "5";
// let padded = text4.padEnd(4,"0");
let padded = text4.padEnd(4,"x");
console.log(padded)

//here padEnd method is the string method so whenever use number it first converts into string 
let numb = 5;
let text5 = numb.toString();
let padded2 = text5.padEnd(4,"0");
let padded3 = text5.padStart(4,"0");
console.log(padded2);
console.log(padded3);

// let padded3=numb.padEnd(4,"x");
// console.log(padded3);  //it gives error
let text6 = "How are you doing today?";
const myArray = text6.split(" ");
console.log(myArray);

// The substr() method extracts a part of a string.

// The substr() method begins at a specified position, and returns a specified number of characters.
let text7 = "Hello world!";
let result4 = text7.substr(1, 4);
console.log(result4);

