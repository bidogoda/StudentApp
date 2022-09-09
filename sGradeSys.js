const fs = require("fs");

// Load Json as Objects
const loadStudent = () => {
  try {
    const studentObj = fs.readFileSync("students.json".toString());
    return JSON.parse(studentObj);
  } catch (e) {
    return [];
  }
};
// Save Objects as Json
const saveStudnet = (data) => {
  const saveData = JSON.stringify(data);
  fs.writeFileSync("students.json", saveData);
};

//Add

const addStudent = (student) => {
  const students = loadStudent();

  const dubStudent = students.find((el) => {
    return el.id === student.id;
  });
  if (!dubStudent) {
    if (student.grade.length == 3) {
      let total = 0;
      let err = 0;
      student.grade.forEach((element) => {
        if (!isNaN(element)) {
          total += element;
        } else {
          err += 1;
        }
      });
      if (err == 0) {
        students.push({
          id: student.id,
          name: student.name,
          grade: student.grade,
          Comment: student.Comment,
          total, // total:total
        });
        saveStudnet(students);
        console.log("Add Successfully");
      } else {
        console.log("Error enter numbers");
      }
    } else {
      console.log("Error Please add only 3 degrees");
    }
  } else {
    console.log("Duplicate Student");
  }
};

// //Remove

const removeStudent = (id) => {
  const students = loadStudent();
  const delStudent = students.find((el) => {
    return el.id === id;
  });
  if (delStudent) {
    const delet = students.indexOf(delStudent);
    students.splice(delet, 1);
    saveStudnet(students);
    console.log("Student Deleted");
  } else {
    console.log("Student Not Found to Delete");
  }
};

const readStudent = (id) => {
  const students = loadStudent();
  const studentRead = students.find((el) => {
    return el.id === id;
  });
  if (studentRead) {
    console.log(studentRead);
  } else {
    console.log("Student doesn't exist to read");
  }
};

const listStudents = () => {
  const students = loadStudent();
  if (students.length != 0) {
    students.forEach((element) => {
      // console.log(element)
      console.log(element.name + " " + element.grade + " " + element.total);
    });
  } else {
    console.log("List is Empty");
  }
};

const updateStudent = (id, name) => {
  const students = loadStudent();
  const upStudent = students.find((el) => {
    return el.id === id;
  });
  console.log(upStudent);
  if (upStudent) {
    const index = students.indexOf(upStudent);
    upStudent.name = name;
    students.splice(index, 1, upStudent);
    saveStudnet(students);
  } else {
    console.log("Student not found to update");
  }
};

module.exports = {
  addStudent,
  removeStudent,
  readStudent,
  listStudents,
  updateStudent,
};
