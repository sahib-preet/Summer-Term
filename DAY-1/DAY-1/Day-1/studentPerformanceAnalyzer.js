const students = [
  { id: 1, name: 'Aman', marks: 85, attendance: 92 },
  { id: 2, name: 'Riya', marks: 38, attendance: 76 },
  { id: 3, name: 'Karan', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Raj', marks: 45, attendance: 60 },
  { id: 6, name: 'Neha', marks: 29, attendance: 95 }
];

const passedStudents = students.filter(student => student.marks >= 40);

const studentReport = students.map(student => {
  let grade;

  if (student.marks >= 80) grade = 'A';
  else if (student.marks >= 60) grade = 'B';
  else if (student.marks >= 40) grade = 'C';
  else grade = 'F';

  return {
    name: student.name,
    marks: student.marks,
    attendance: student.attendance,
    grade: grade
  };
});

const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) /
  students.length;

const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);

console.log("Passed Students:");
console.log(passedStudents);

console.log("\nStudent Report:");
console.log(studentReport);

console.log("\nAverage Marks:");
console.log(averageMarks);

console.log("\nTopper:");
console.log(topper);
