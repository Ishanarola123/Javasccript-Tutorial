let a="isha";
console.log(a);

var cars=["car1","car2","car3"];
//for each loop
cars.forEach(myfunction);

function myfunction(item){
console.log(item);

}

//function 
let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

console.log(x);


let arr =[1,2,3];

// console.log(arr[2]);
// console.log(arr[2]++);
arr.push(arr[2]++);
console.log(arr);

let i=3;
console.log(i++);//it calculates as 4 but print 3 
console.log(i++);//it 5 but print 4
console.log(i++);//it hold 6 but always print the 5

console.log(++i);//now it 6+1=7
console.log(++i);//now it 7+1=8
console.log(i++);//now it hold 9 but print 8 


var text="metaprogramming";

console.log(text.substring(4,11));//program
console.log(text.slice(4,7));
console.log(text.substr(4,11));
