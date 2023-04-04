const person = {
      fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":

  console.log(person.fullName.call(person1));

//With the call() method, you can write a method that can be used on different objects.
// With the apply() method, you can write a method that can be used on different objects.

console.log(person.fullName.apply(person1));
console.log(person.fullName.apply(person2));

  console.log(person.fullName.bind(person1));
  person.fullName.call(person1);

  console.log(Math.max.apply(Math, [1,2,3]));
  console.log(Math.min.apply(Math, [1,2,3]));


  const person4 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person4.fullName.bind(member);
  console.log(fullName());



  function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }

  console.log(add());
  add();
  console.log(add());

 let addn=( function(){  
    let counter = 0;
   return function() {counter += 1; return counter}
   
 }
  
 )

  console.log(addn());
  console.log(addn());
