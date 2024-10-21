const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];

  const studentAverage=students.map((student)=>{
    const sum=student.scores.reduce((acc,curr)=>acc+curr);
    return { name : student.name, average : sum / student.scores.length};
  
  });

  const highermarks=studentAverage.filter(student=>{
    console.log(student.average>90);
  })