const arr=([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);

const output=arr.map((x)=>{
    if(x.age<25){
        return x.name+ "can go to matrix";
    } else{
        return x.name+" is under age";
    };
})
console.log(output);