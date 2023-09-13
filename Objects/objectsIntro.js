// Objects are decalared by two types Singleton and Literals (Then singleton not made) But if we define in construtor then singleton will made

// Object Literals

const mySymbol = Symbol("key1");

const JsUser = {
  // key: value;
  name: "Avinash",
  //   "fullname": "Avinash Pandey", no chance is to use . operator
  //   Declare Symbol here
  [mySymbol]: "myKey1",
  age: 18,
  location: "Ludhiana",
  email: "avinashpandey@meta.co.in",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// First method but wrong way
// console.log(JsUser.email);

// Second way
// console.log(JsUser["email"]);
// Constructor method
// Object.create();

// console.log(JsUser[mySymbol]);

// Change the values
// JsUser.email = "avinashpandey@openai.com";

// if you dont want that anyone can change values on website then do freeze of object
// Object.freeze(JsUser);
// console.log(JsUser);

// add function to the object
// JsUser.greeting = function () {
//   console.log("Hello JSUser");
// };

// This below code will give only function refrence not returned the function
// console.log(JsUser.greeting);

// console.log(JsUser.greeting());

// create a function to give refrence to the object if you want to add same refrence then add this.<-refrence name->
JsUser.greetingRef = function () {
  console.log(`Hello jsUser, ${this.email}`);
};
console.log(JsUser.greetingRef());
