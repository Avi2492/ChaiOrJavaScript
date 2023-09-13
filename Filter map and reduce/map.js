const myNums = [3, 6, 9, 12, 15, 18, 21];

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

// console.log(newNums);

// chaining method
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNums);
