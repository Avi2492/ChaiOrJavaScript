// Most important loop you will use all the times.

const coding = ["Js", "Java", "SpringBoot", "SQL"];

coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((item) => {
  //   console.log(item);
});

// Third method
function printMe(item) {
  //   console.log(item);
}
coding.forEach(printMe);

// fourth Method
coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

// Common array scenrio
const mySkills = [
  {
    programmingLanguage1: "JavaScript",
    programmingLanguage2: "Java",
  },
  {
    frontend: "React.js",
    uxui: "tailwindcss",
  },
];

mySkills.forEach((item) => {
  console.log(item.frontend);
});
// Note because it is call back function so no name is provided
