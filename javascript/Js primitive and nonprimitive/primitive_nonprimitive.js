//primitive datatypes 
//here variable a 

a = 5;
a1 = a;
console.log(a1);
console.log(a == a1);
console.log(a === a1);

var object1 = { a: 5, a1: 6 };

var object2 = object1;

console.log(object2);
console.log(object1 == object2);
console.log(object1 === object2);

// The above statement assigns the address of object2 to object1, and not the value {a:5, a1:6}. 
// Thus with this assignment ‘object1’ and ‘object2’ refer to the same address in memory.


var object1 = { a: 5, a1: 6 };

var object2 = { a: 5, a1: 6 };
//its refer diffrent address

console.log(object1 == object2);
console.log(object1 === object2);

//This statement object1===object2  would return a false because both the objects refer to two separate addresses in memory. 
//When we compare two objects, we compare their addresses, not their values.
y = 5;
z = y / 0;
console.log(z);
console.log(typeof (z));

let h = "hi" * 5;
console.log(h)


b = 10;
b1 = 10;
console.log(b == b1);
console.log(b === b1);

let d = dec2bin(12);
function dec2bin(dec) {
  console.log((dec >>> 0).toString());
  console.log((dec >>> 0).toString(2));
  console.log((dec >>> 0).toString(8));
  console.log((dec >>> 0).toString(16));
  console.log((dec >>> 0).toString(32));
  console.log(dec.toString(2));
  return (dec >>> 0).toString(2);
}

function bin2dec(bin) {

  return parseInt(bin, 2).toString(10);
}

//   bin2dec(d);
console.log(bin2dec(d));


//console.log(d);

function Supplier(){
  this.supply=function (){
    return this;
  };

}
var supplier=new Supplier();
var supply=supplier.supply();
var comparison=(supplier==supply);
console.log(comparison);


var x = 6;
var y = 3;
try{

  x = x + y;
  console.log(x);
}
catch(err){
  console.log(err);
}


