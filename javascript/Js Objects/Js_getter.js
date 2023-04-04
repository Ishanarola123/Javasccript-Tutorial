const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };

  console.log(person.lang);
  //get method for used to that access properties of js object 
  