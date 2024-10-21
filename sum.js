let arr=[2,3,5,7];

const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);