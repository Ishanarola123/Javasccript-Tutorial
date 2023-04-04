let arr=[1,2,3];
console.log("before the loop");
console.log(arr);
arr.forEach(arrfunction);


function arrfunction(value,index,array){
    console.log(value + '==' + index);
    arr[index]=value+2;
}
console.log("after the loop")
console.log(arr);
//here arr is changed because of let 

//here constant keyword is used so it never be changed it just iterate
const newarr=[1,2,3];
console.log("before the loop");
console.log(newarr);
newarr.forEach(arrfunction);


function arrfunction(value,index,array){
    console.log(value + '==' + index);
    arr[index]=value+2;
}
console.log("after the loop")
console.log(newarr);
//here arr is changed 


