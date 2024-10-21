//Write a function that takes an array of strings as argument. Return the longest string.
let a=['I', 'need', 'candy'];
function val(){
    const abb=a.reduce((acc,curr)=> acc.length>curr.length? acc : curr,0)
    console.log(abb);
}
val();
