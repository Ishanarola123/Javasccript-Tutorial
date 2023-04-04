

Array.prototype.myUcase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

//it doesn't modified array but prototype is used for add new properties and methods to arrays.
console.log(fruits);