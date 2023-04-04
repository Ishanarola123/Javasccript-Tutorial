const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

//here spread operator can be displyed by three dot operator'

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
//inshort it makes mulltiple array into one array's element

