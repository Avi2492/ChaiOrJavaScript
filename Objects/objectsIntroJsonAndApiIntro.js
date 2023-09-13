// Object desturcture
const course = {
  courseName: "js is Hindi",
  coursePrice: "999",
  courseIntrstructor: "Hitesh",
};

// course.courseIntrstructor;

const { courseIntrstructor: teacher } = course;

console.log(teacher);

// const navbar = ({ company }) => {};
// {} destructuring
// navbar((company = "Avinash"));

// Api's
// {
//   // Json
//   "name": "Avinash";
//   "courseName": "Java";
//   "price": "Free";
// }
