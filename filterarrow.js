const users=[
    {firstName:"akshay",LastName:"saini",age:23},
    {firstName:"rina",LastName:"padole",age:66},
    {firstName:"abhishek",LastName:"bahekar",age:29},
    {firstName:"chetan",LastName:"wasnik",age:56},
];
const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output); 


