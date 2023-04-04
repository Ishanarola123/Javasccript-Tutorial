let text = "Visit W3Schools";
//case insensitive
let n = text.search(/w3schools/i); 
console.log(n); //6

//retun character from specific position
// let pos=text.charAt(6);
let pos=text.charCodeAt(6); //it returns ascii value of character
console.log(pos); //87

//returns the position
let pos2=text.indexOf("W3");
console.log(pos2); //6

//slice :-extract substring and end is excluded
let text2 = "Apple, Banana, Kiwi";
// let part = text2.slice(7, 13);
// let part = text2.slice(-12);
// let part = text2.slice(-12,-6);
let part = text2.substring(7,13); //Banana
console.log(part); 

// substring() is similar to slice().
 // The difference is that start and end values less than 0 are treated as 0 in substring().


let text3 = "Is this all there is?";
//here in the breacket there are characters find and give new array 
let result = text3.match(/[h]/g); // [ 'h', 'h' ]
console.log(result);



let text5 = "Helloo World! Hello W3Schools!"; 
let result5 = text.match(/o+/g);
console.log(result5); //[ 'oo' ] here +is quantifiers in regular expressions 

//here test method use that check that charaacter are there or not using the test method .
const pattern = /z/;
console.log( pattern.test("The best things in life are free!")); //false

const obj = /e/.exec("The best things in life are free!");
console.log(
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input);

console.log(100 + 50 * 3);
console.log((100 + 50 )* 3);
console.log(100 / 50* 3);

