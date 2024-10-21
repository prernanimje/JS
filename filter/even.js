//Given an array of numbers, return a new array that only includes the even numbers.
const arr=[2,4,5,16,28];
const output=arr.filter((x)=>{
    return x%2==0;
})
console.log(output);