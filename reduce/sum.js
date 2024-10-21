//Turn an array of numbers into a total of all the numbers
const arr=[1,2,3];
const output=arr.reduce((x,y)=>{
    return x+y;
})
console.log(output);