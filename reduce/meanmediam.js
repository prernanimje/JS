//Calculate median and mean
const input = [12, 46,32, 64];

const output=input
  .reduce((x,y)=>{
    input.sort();
    return Math.median(input) + Math.mean(input);
  })

  console.log(output);
