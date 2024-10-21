//Age difference from the youngest and oldest

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

  const output=input.map((x)=> x.age [Math.max(...output),Math.min(...output),Math.max(...output)-Math.min(...output)]);
  
  console.log(output);