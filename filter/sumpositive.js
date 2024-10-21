//Sum of every positive element
const arr=[2,-3,-2,34,5];

const output=arr
  .filter((x)=> x>0)
  .reduce((x,y)=>x+y,0);

  console.log(output);

