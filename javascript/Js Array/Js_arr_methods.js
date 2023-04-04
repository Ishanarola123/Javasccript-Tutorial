const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

//indexof
let index=fruits.indexOf("apple");
console.log(index);

// console.log(fruits);
fruits.copyWithin(2, 0);
//here first argument element is copied at second element
console.log(fruits);


//The entries() method returns an Array Iterator object with key/value pairs:
//it not modified the original array
const f = fruits.entries();
text="";
for (const i of f) {
    text+=i + "   ";
    
}
console.log(text);

//every method check the each element that it pass in the condition if it is then it give the true.
const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 18;
}
console.log(ages.every(checkAge));


//that's like some method also
function checkAge(age) {
  return age > 18;
}
console.log(ages.some(checkAge));

//fill method fill the same value as all elements
//it overwrite each and every elements

//filter method can not change the original array 
//it basically return the new array with all elements which is pass into new array
const result = ages.filter(checkAge);
console.log(result);

//find methods only return that first elements which is fulfilled the first condittion
console.log(ages.find(checkAge));

//The findIndex() method returns the index (position) of the first element that passes a test.
//it basically work for each and every element
console.log(ages.findIndex(checkAge));

//Create a new array with the sub-array elements concatenated:
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//for each loop 
const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr1 = myArr.flat(2);
console.log(newArr1);

let out=" ";
const fruits2 = ["apple", "orange", "cherry"];
fruits2.forEach(myFunction);

function myFunction(value,index){
       out += value + " ";
}
console.log(out);

//from method it converts array from any text
let newarray=Array.from("ABCDEFG")
console.log(newArr);

//includes methods returns true or false according their present in there or not
let colors=['red' ,'pink' ,'blue'];
//I want to check that yellow is present or not
console.log(colors.includes("yellow"))
console.log(colors.includes("pink"))
console.log(colors.includes("pink" , 2))
console.log(colors.includes("pink" , 1))//it includes start position

//also we can check that indexof method
console.log(colors.indexOf('pink') > -1);
console.log(colors.indexOf('pink') > 2);

//isArray method check that is array or not
let text2 = "W3Schools";
let result2 = Array.isArray(text2);
console.log(result2);

let colorarr_result=Array.isArray(colors);
console.log(colorarr_result);

//join method join each array elements with this join element
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let text4 = fruits3.join(" and ");
let text5 = fruits3.join(" , ");
//it doesn't change the array
console.log(fruits3);
//just join 
console.log(text4);
console.log(text5);

//keys methods returns the index of each and every elements
const fruits5 = ["Banana", "Orange", "apple", "Mango","apple"];
const keys = fruits5.keys();

let text6 = "";
for (let x of keys) {
  //here print the index of the particular element also 
  text6 += x + " " ;
}
console.log(text6);

//last indexof method gives the last occurance of the element
let lastindex=fruits5.lastIndexOf("apple");
console.log(lastindex);

//this way this method also use in email validation like this way !
let user_email="190420116040.it19@scet.ac.in";
// user_email="@gmail.com";
let atpos = user_email.indexOf("@");
let dotpos = user_email.lastIndexOf(".");
console.log(dotpos);
console.log(atpos);

if(atpos < 1 || dotpos-atpos < 2){
   console.log("please enter the valid email");
}

//map method
const numbers = [4, 9, 16, 25];
const resArr = numbers.map(Math.sqrt)
console.log(resArr);
//map gives the new array with apply a function on each and every element and then store into new array 

//this all methods demo is in Js_array.html 
//pop method remove elements from last
//slice
const newfruits = ["Banana", "Orange", "Apple", "Mango"];

newfruits.splice(2, 0, "Lemon", "Kiwi");
console.log(newfruits);
//start position, delete element count, add new elements

newfruits.splice(2, 2);
console.log(newfruits);
//splice overwrites the method 