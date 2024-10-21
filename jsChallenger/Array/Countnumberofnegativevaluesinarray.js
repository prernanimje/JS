//Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
let a=[1,2,3,4,5,6];
function fun(a){
    return a.filter(curr=>curr>0).length;
}

console.log(fun(a));