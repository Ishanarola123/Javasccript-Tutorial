function myDisplayer(some) {
    console.log(some);
  }
  

function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();

//second function first call after than second function is called 
  mySecond();
  myFirst();

  //sequence control

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  console.log("here the sum of two numbers is there");
  myDisplayer(result);

  //we can also call the mydisplayer funciton into the mycalculator functions
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  myCalculator(10,12);