// Array specific loops
const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  //   console.log(val);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Each char is: ${greet}`);
}

// Maps => unique values
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("ILY", "Italy");
// console.log(map);
// Using for of loop on maps if you take key then it gives you a complete array to overcome this and you want to show element by element then use[key]
for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// using for-of loops in objects to make it iterable we will not use for-of loop use for in loop
const myObj = {
  game1: "NFS",
  game2: "Ben10",
};

for (const [key, value] of myObj) {
  console.log(key, ":-", value);
}
