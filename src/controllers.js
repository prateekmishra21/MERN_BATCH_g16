const { Student } = require("./models");

const getAllStudents = (request, response) => {
  var students = ["Vatsal", "Prateek", "Rahul", "Jatin"];
  var studentId = request.query.id;
  return response.json(
    studentId !== undefined ? students[studentId] : students
  );
};

const createStudent = async (request, response) => {
  console.log(request.body);
  await Student.create(request.body); // Create New Student in database.
  return response.json({ status: "Student Created" });
};

module.exports = { getAllStudents, createStudent };
