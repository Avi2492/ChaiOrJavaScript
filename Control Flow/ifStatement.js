/**If condition is true then the below code block scope is executed. */

// if (condition) {
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//   console.log("User is LoggedIn");
// }

// = -> single operator is used for assignment, == -> we will check in this case. for strict checking use -> ===

// const temprature = 41;
// if (temprature < 50) {
//   console.log("Less than 50");
// }
// console.log("Greater than 50");

// with the use of === operator
// const tempratureTwo = 41;
// if (temprature === 50) {
//   console.log("Less than 50");
// }
// console.log("Greater than 50");

// use of if else statements
// const temprature = 51;
// if (temprature === 41) {
//   console.log("Less than 50");
// } else {
//   console.log("Greater than 50");
// }
// console.log("End of loops");

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// This got an error becuse outiside scopr is not define

// shorthand notation
// const balance = 1000;

// if (balance > 500) {
//   console.log("test");
// }

// nesting
// const balance = 1000;

// if (balance > 500) {
//   console.log("Less than");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else {
//   console.log("Less than 1200");
// }

// Real life example
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy a course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in ");
}
