var s="unicorns and rainbows And Cupcakes";
var r=/[a-z]+/g;
var r1=/[a-z]+/gi; //case sensitive flag


console.log(s.match(r));
console.log(s.match(r1));

console.log(s.matchAll(r1));

console.log(Array.from(s.matchAll(r)));
console.log(Array.from(s.matchAll(r1)));




