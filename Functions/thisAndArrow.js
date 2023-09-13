const userRegister = {
  userName: "Avinash",
  subscriptionPrice: 1000,

  welcomeMessage: function () {
    // console.log(`${this.userName}, welcome to the website`);
    // console.log(this);
  },
};

// userRegister.welcomeMessage();
// userRegister.userName = "Sam";
// userRegister.welcomeMessage();
// console.log(this);

// Browser ke andr jo global object hai wo hai window object

// Arrow Function
// function chai() {
//   let userName = "Avinash";
//   console.log(this.userName);
// }

// chai();

const chai = () => {
  let username = "Avimnash";
  console.log(this.username);
};

// chai();

// Pure arrow functions () => {}
// Basic arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 5));

// Implicit return
// const mulTwo = (num1, num2) => num1 * num2;
const mulTwo = (num1, num2) => num1 * num2;

// Return an object
const subTwo = (num1, num2) => ({ userName: "Avinash" });

// Example
const myArr = [2, 5, 7, 8, 9];
// myArr.forEach(function name(params) {
// First Syntax
// })
