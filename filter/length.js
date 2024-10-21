//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const arr=["dog", "wolf", "by", "family", "eaten", "camping"];
const output= arr.filter((x)=>{
    return x.length>=5;
})
console.log(output);