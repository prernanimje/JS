//Make an array of the names in h1s, and the ages in h2s
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
    return "<h1>"+x.name+"</h1> <h2>"+x.age+"</h2>";
})

console.log(output);