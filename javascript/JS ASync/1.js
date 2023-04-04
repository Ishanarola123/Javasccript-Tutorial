function print(){
    console.log("hello!");
}
console.log("start");
print();
console.log("end");


// function greet(){
//     return "Good Morning";
// }

// let greet_user=greet();
// console.log(greet_user);


async function greet(){
   
    return "Good Morning";
}
console.log("Before calling function greet");
let greet_user=greet();
console.log("After calling function greet");
console.log(greet_user);
console.log("last line of this js files ");

// async function example
async function func() {
    console.log('Async/Await tutorial.');
    return Promise.resolve(1);
}
func(); 
//after complete the func() then return the promise and display the result 
func().then(function(res) {
    console.log(res)
});

