
const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

const y=person;
y.firstName="isha";
y.age=22;

//here object can be immutable and they can be changed 

//object properties and here it's way to display 
console.log(person.firstName + " is " + person.age + " years old.");
console.log(person["firstname"] + " is " + person["age"] + " years old.");


//insert one more properties of there 
person.haircolor="black";

//delete object 
delete person.age;

//also make the nested object also
 const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.cars.car1);
  console.log(myObj.cars.car2);
//we can also make the nested objects and arrays

  const myObj1 = {
    firstname: "John",
    lastName: "duo",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ],
    fullName: function () {
        return this.firstname + " " + this.lastName;
    }
   
  }


console.log("full name is here");
console.log(myObj1.firstname);
console.log(myObj1.fullName());

//forin loop in objects
let text="";
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        text += person[key]
      
        
    }

}
console.log(text);


//for in loop for nested array and objects 
let x="";
console.log( "car model is here : ");
for (let i in myObj1.cars) {
    x += i  + myObj1.cars[i].name + "";
    for (let j in myObj1.cars[i].models) {
      x += myObj1.cars[i].models[j] + " ";
    }
  }
console.log(x);

const person3 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const myArray = Object.values(person3);
  console.log(myArray);
//json stringfy method is used for display the object 
  let myString = JSON.stringify(person3);
  console.log(myString);

  