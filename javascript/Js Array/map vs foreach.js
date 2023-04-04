let arr=[1,2,3];
console.log("before the loop");
console.log(arr);
let newarr=arr.map(arrfunction);


function arrfunction(value,index,array){
    console.log(value + '==' + index);
   return arr[index]=value+2;
}
console.log("after the loop");
console.log(newarr);

//the main diffrence is here that map gives a new array and we stored the value into new array.
//if we use foreach 
let arr2=[1,2,3];
console.log("before the loop");
console.log(arr);
let newarr2=arr.forEach(arrfunction);


function arrfunction(value,index,array){
    console.log(value + '==' + index);
   return arr[index]=value+2;
}
console.log("after the loop");
console.log(newarr2); //it gives undefined

//inshort  the main diffrence between map and foreach that map method reurns the new array for each not return array value