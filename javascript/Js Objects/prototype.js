var Mobile= function (model_no){
   //it called as instance member
   this.model=model_no;
   this.price=3000;
}

var samsung=new Mobile('Galaxy');
var nokia=new Mobile('3310');
//if we want to add color property
// samsung.color='white';
//i can't get color property in nokia I need to also define this property with seperately
// nokia.color='blue';


//if we want to add new property that with all object then we need to use prototype
//prototype member
Mobile.prototype.color="white";


console.log(samsung);
console.log(samsung.color);
console.log(nokia);