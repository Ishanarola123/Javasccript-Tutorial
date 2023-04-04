const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);


//without eval it returns the function defination
console.log(obj.age);

obj.age = eval("(" + obj.age + ")");

console.log(obj.age());


