/**Primitive data types total 7 String, Number, Boolean, NUll, undefined, Symbol, BigInt and all are call by value*/

const score = 100;
const scoreValue = 100.3;
const isLogin = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 245667773849536484n;
// Homework => JavaScript is static typed or dynamic typed?

/**Refrence type or non primitive type => Arrays, Objects, Functions all data types are of object type*/
const heores = ["Shaktiman", "Naagraaj", "doga"];

let myObj = {
  // Objects
  name: "AVinash",
  age: 22,
};

const myFun = function () {
  console.log("Hello Function!");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3
