const arr=[1,2,3,4,5];
function double(x)
{
  return x*2;  
}
const output=arr.map(double);
console.log(output);

const arr1=[1,2,3,4,5];
const output1=arr1.map((x)=>{
    return x*2;
});
console.log(output);
