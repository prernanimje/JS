const arr=[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

const output=arr.filter((x)=>{
    if(x.member==true){
        return x.name + x.member;
    }
})
console.log(output);