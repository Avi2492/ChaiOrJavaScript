// const coding = ["Js", "Java", "SpringBoot", "SQL"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);

// In the above example no return is there so you can write return item => for each never return anything

// Original Method
// const myNums = [2, 4, 6, 8, 10];
// let newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// second method because in this we move in another scope so if we want to open this scope we have to return this
// let newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// above method in foreach
// const newNums = [];
// myNums.forEach((item) => {
//   if (item > 4) {
//     newNums.push(item);
//   }
// });
// console.log(newNums);

// Some basic concepts of filters fetch from databases
const books = [
  {
    title: "Book One",
    genre: "fiction",
    publish: 2023,
    edition: 2005,
  },
  {
    title: "Book Two",
    genre: "non fiction",
    publish: 2003,
    edition: 2006,
  },
  {
    title: "Book Three",
    genre: "fiction",
    publish: 2000,
    edition: 2000,
  },
  {
    title: "Book four",
    genre: "non fiction",
    publish: 2022,
    edition: 2088,
  },
];

let userBooks = books.filter((bk) => bk.genre === "fiction");
userBooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.edition === 2000;
});
console.log(userBooks);
