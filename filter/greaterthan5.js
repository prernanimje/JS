//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const arr=[3, 6, 8, 2];
const output=arr.filter((x)=>{
    return x>5;
})

console.log(output);