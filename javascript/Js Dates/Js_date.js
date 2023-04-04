let date=new Date();
console.log(date);
//new date is given the current date and time
console.log("today's date is: " + date);

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toUTCString());
//ISO date is he best date format
console.log(date.toISOString());

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getSeconds());

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("date debug");
const d = new Date("2021-03-25");
//here month fetch according to starting position 0 of january 

console.log(d.getMonth());
let month = months[d.getMonth()];

//utcdate is here
console.log(d.getUTCDate());

//set date this way set year, hour, milliseconds
const d2 = new Date();
d2.setDate(15);
console.log(d2);

//date to string method and not the time display
let text = d.toDateString();
console.log(text);

//it gives date with time proper ISO
let text2 = d.toISOString();
console.log(text2);

//also convert date into JSon it returns as string 
let text3 = d.toJSON();
console.log(text3);



