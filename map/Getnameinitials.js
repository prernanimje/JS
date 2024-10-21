//Get name initials
const arr = "George Raymond Richard Martin";
const output=arr
   .split(" ")
   .map(function (x){
    return x[0];
   })
   .join("");

console.log(output);