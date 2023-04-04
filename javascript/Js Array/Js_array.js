const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

for(const x of cars){
    console.log(x);//here the array value is print 

}

//here the first item of array is 
var first=cars[0];
console.log(first);

//if we want that all array elements with the store into particular variables then in es6
var [v1,v2,v3]=cars;
console.log(v1);
console.log(v2);
console.log(v3);

//array is onject type datatypes

const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);

//array peoperties and methods
let length=cars.length;
console.log(length);

let sortarr=cars.sort();
console.log(sortarr);

//without paranthasis you can get the function defination
let sortarr2=cars.sort;
console.log(sortarr2);

//accessing the last array element
let lastelement=cars[length-1];
console.log(lastelement);

//looping in array with for each loop we can print the all elements as per shown as above

//here for loop
//display into list 

let text="<ul>";
for(let i=0;i<length;i++){
    text+= `<li> ${cars[i]} </li>`;
}
text +="</ul>";

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
console.log(myChildren.toString());
//merge Three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2.toString());

//merging the arrays with values also
const ar1 = ["Emil", "Tobias", "Linus"];
const myChildren3 = ar1.concat("Peter"); 
console.log(myChildren3.toString());

// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//here the first parameter is position where to add and second parameter that how many element remove from it.
//here rest of the third parameter is which array element is can be removed or not 
//so In between If we want to add or remove element then use the splice method of array

// The slice() method slices out a piece of an array into a new array.
const citrus = fruits.slice(1);
console.log(citrus);
//it start fruit array with the first element

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.
// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits1.slice(1, 3);
console.log(citrus1);

//in array here key value pair is stored 
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
//find the students whose grades are greater than 90

const studentGrades = students.filter(value => value.grade >= 90);
console.log(studentGrades);








