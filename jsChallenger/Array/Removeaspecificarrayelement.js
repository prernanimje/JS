//Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
var a=[1,2,3,4,5,6];
var value=2;
// function fac(){
//     return value!==a;
// }
// function fill(){
//    var a=[1,2,3,4,5,6].filter(fac);
//     console.log(a);
// }

// fill();

const val=a.filter((curr)=>{
    return curr!==value;
    
})
console.log(val);