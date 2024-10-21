//Write a JavaScript program to find the maximum number in an array. 
let a=[10,5,7,3,9];
 const output=a.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;
 });

 console.log(output);