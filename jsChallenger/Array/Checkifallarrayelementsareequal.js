//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
let arr=[true, true, true, true];
function myFunction(arr){
   let aa=(arr.reduce((acc,curr)=>(curr===acc? true: false)))
   console.log(aa);
}
myFunction(arr);
