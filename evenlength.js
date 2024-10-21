//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
var a=[2,3,5,6,7,9];
var b= new Array(0);
function even(a,b){
    for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
       b[i]=a[i];
    } 
}
console.log(b);
}
even(a,b);

