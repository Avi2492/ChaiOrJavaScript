// Immediately invoked function expression IIFE
// function chai() {
//   console.log("Db connected");
// }
// chai();

// But when global scoped get polluted then we immediate invoked functions
// (function chai() {
// Named iife
//   console.log("Db connected");
// })();

// shall we write with the help of arrow functions
((name) => {
  // Simple iife
  console.log(`Db connected ${name}`);
})("Avinash");
