const users=[
    {firstName:"akshay",LastName:"saini",age:23},
    {firstName:"rina",LastName:"padole",age:66},
    {firstName:"abhishek",LastName:"bahekar",age:29},
    {firstName:"chetan",LastName:"wasnik",age:56},

];

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
      acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{})

console.log(output);