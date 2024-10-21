var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const output=arrays.reduce((x,y)=>{
    return x.concat(y);
})
console.log(output);