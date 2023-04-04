const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };

  person.lang= "english";
  console.log(person.lang);
  console.log(person.language);


  const employee ={
     firstName: "isha",
     salary : 25000,
     get sal(){
       return this.salary;
     }
  }

  console.log(employee.sal);


  
const employee2 ={
    firstName: "neha",
    salary :"" ,
    set sal(salary){
      this.salary=salary;
    }
 }
employee2.sal=25000;

console.log(employee2.sal);
console.log(employee2.salary);
console.log(typeof(employee2.salary));


//when use function or getter
const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log( person2.fullName());

//here the full name is a function 

//getter of full name function

const person3 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
//here full name is properties 
  console.log(person3.fullName);
  

