// Stack => (primitive type), Heap => (non primtive)
// let myYoutube = "AVinash";
// let anotherName = myYoutube;

// anotherName = "ChaiOurCode";
// console.log(anotherName);
// console.log(myYoutube);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "Hitesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);
