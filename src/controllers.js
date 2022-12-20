const { Student } = require("./models");

const getAllStudentsOld = (request, response) => {
  var students = ["Vatsal", "Prateek", "Rahul", "Jatin"];
  var studentId = request.query.id;
  return response.json(
    studentId !== undefined ? students[studentId] : students
  );
};

const getAllStudents = async (request, response) => {
  var { _id, name, minAge, maxAge } = request.query;

  console.log(request.query);

  // console.log(request.query);
  if (_id) {
    var allStudents = await Student.findOne(_id);
    console.log(allStudents.getDomainName());
    // var allStudents = await Student.find({ _id: id });
  } else if (name) {
    var allStudents = await Student.findOne({ name: name });
  } else if (minAge && maxAge) {
    var allStudents = await Student.find({
      age: { $gte: minAge, $lte: maxAge },
    }).select("email name");
  } else if (minAge) {
    var allStudents = await Student.find({
      age: { $gte: minAge },
    });
  } else if (maxAge) {
    var allStudents = await Student.find({
      age: { $lte: maxAge },
    });
  } else {
    var allStudents = await Student.find();
  }

  // var allStudents = await Student.find({
  //   $or: [{ name: "Script JAVA", age: { $lt: 20 } }, { name: "java script" }],
  // });

  // var allStudents = await Student.find({ age: { $gt: 22 } });

  return response.json({ allStudents, count: allStudents.length });
};

const createStudent = async (request, response) => {
  var oneStudent = new Student(request.body); // Create New Student in database.
  oneStudent = await oneStudent.save();
  return response.json({ status: "Student Created", student: oneStudent });
};

const updateStudent = async (request, response) => {
  var _id = request.query.id;
  var data = request.body;
  var oneStudent = await Student.findById(_id);
  oneStudent.name = data.name;

  oneStudent = await oneStudent.save();
  return response.json({ status: "Student Updated", oneStudent });
};

const deleteStudent = async (request, response) => {
  var _id = request.query.id;
  await Student.findByIdAndDelete(_id);
  return response.json({ status: "Student Deleted" });
};
const login = async (request, response) => {
  console.log(request.body);
  var isExist = await Student.find(request.body);
  if (isExist.length > 0) {
    return response.json({ status: "Done", isExist });
  }
  return response.json({ status: "Fail" });
};

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  login,
};
