const myObj = {
  js: "javascript",
  json: "javascript object notation",
  cpp: "c plus plus",
  swift: "swift by apple",
};

for (const key in myObj) {
  //console.log(key); show only keys
  // we need to get object also
  //   console.log(myObj[key]);
  //   console.log(`${key} => for file name is ${myObj[key]}`);
}

// shall we work in arrays also with the help of for-in loop
const myArr = [2, 3, 4, 5, 6];
for (const key in myArr) {
  //   console.log(myArr[key]);
}

// shall we work on maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("ILY", "Italy");

for (const key in map) {
  // console.log(key);
}

// Note map is not iterable so we cannot write maps like this in this loops
