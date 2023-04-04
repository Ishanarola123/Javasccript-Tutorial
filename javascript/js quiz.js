function Animal(){
    this.sound='animal sound';
  }
  Animal.prototype.makeSound =function(){
    console.log(this.sound);
  }
  
  function Dog(){
    this.sound ='woof woof';
  }
  
  Dog.prototype=new Animal();
  
  var dog=new Dog();
  dog.makeSound();

  //here variable scope
  
  var numbers=[1,2,3,4,5];
  var total=0;
  i=0;
  function avg(numbers){
  var avgvalue=0;
  if(numbers.length >0){
    for(i=0;i<numbers.length;i++){
      total+=numbers[i];
    }
    console.log(total);
    avgvalue= total / (numbers.length);
   }
  return avgvalue;
  }
  
  var avgprint=avg(numbers);
  console.log("avarage value is " + avgprint);
  console.log("total value is " + total);
  
  console.log(i);
  


  