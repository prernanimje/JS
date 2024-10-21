//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
let a=[1,2,3,4,5,6];
function fun(a,n){
    console.log(a.slice(-n));
}

fun(a,3);