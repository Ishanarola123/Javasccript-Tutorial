//diffrence between arguments and parameters
//when function define that time whatever pass into function that called as parameters 
//when we call function that time it called as arguments 

// function sum(a, b) {
//     console.log(a + b);

// }
// sum(1, 2, 3, 4, 5, 6);

//it gives 3 as output

function sum(...inputs) {
   console.log(inputs);
   //basically array pass into function
   console.log(...inputs);
   let total=0;
   for (const i of inputs) {
     total+= i;
   }
   console.log(total);

}
sum(1, 2, 3, 4, 5, 6,7,8,9,10);


//rest argments pass into function and there are  inbuilt objects.
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
//here if we can use the rest parameters also then we basically do this way also 
console.log(x);

//this way also we can make the sum of all elements
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let y=sumAll(1, 123, 500, 115, 44, 88);
console.log(y);

function iterate(...data){
  data.forEach(element => {
    console.log('item' + element)
  });
}
iterate(1,2,3,4);
