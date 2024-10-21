//Turn an array of numbers into a long string of all those numbers.
const arr=[1,2,3];
const output=arr.reduce((x,y)=>{
    return x.join(y);
})
console.log(output);