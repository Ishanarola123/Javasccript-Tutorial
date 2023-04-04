const arr = [1,2,3,4,5];
console.log(arr);

const filterarr= arr.filter((value,index)=>{
   return value >1
})
console.log(`filterarray ${filterarr}`);

//here reduce method retuned as result with single element(left to right)
const reducearr=arr.reduce(sum);
function sum(result,value,index){
 return result+value;
}
console.log(reducearr);

//if used reduce right then 

const reducearr_right=arr.reduceRight(mul);
function mul(result,value,index){
 return result*value;
}
console.log(reducearr_right);