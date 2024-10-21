//Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
let a=[1,2,3,4,5,6];
function fun(a,n){
    console.log(a.slice(-n));
}

fun(a,3);