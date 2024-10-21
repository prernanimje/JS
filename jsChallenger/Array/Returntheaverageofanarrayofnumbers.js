//Write a function that takes an array of numbers as argument. It should return the average of the numbers.
let a=[1,2,3,4,,56,6];
function val(){
    const ab=a.reduce((acc,curr)=> acc+curr)/a.length;
    console.log(ab);
}
val();