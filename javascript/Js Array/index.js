const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
console.log(idx);
//which posiiton has the element of a 
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
  console.log(idx);
}
console.log(indices);
// [0, 2, 4]


const veggies = ["potato", "tomato", "chillies", "green-pepper"];

function updateVegetablesCollection(veggies, veggie) {
    if (veggies.includes(veggie) === false) {
      veggies.push(veggie);
      console.log(`New veggies collection is: ${veggies}`);
    } else {
      console.log(`${veggie} already exists in the veggies collection.`);
    }
  }



//   function updateVegetablesCollection(veggies, veggie) {
//     if (veggies.indexOf(veggie) === -1) {
//       veggies.push(veggie);
//       console.log(`New veggies collection is: ${veggies}`);
//     } else {
//       console.log(`${veggie} already exists in the veggies collection.`);
//     }
//   }


  //add new veggie if it is already in there then print the veggies array
  updateVegetablesCollection(veggies, "spinach");
  updateVegetablesCollection(veggies, "spinach");

  //here we can also use includes or indexof alternate
  updateVegetablesCollection(veggies, "cabbage");
  updateVegetablesCollection(veggies, "spinach");
