// Define object
const obj = {counter : 0};
//why here use of defineproperty --> The Object.defineProperty() static method defines a 
//new property directly on an object, or modifies an existing property on an object, and returns the object.
Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });
  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
  });
  
  // Play with counter:
  obj.reset;
  obj.add = 5;
  obj.subtract = 1;
  obj.increment;
  obj.decrement;
 console.log(obj.counter); 


 