// let a = 10;
// const b = 20;
// var c = 30;

// Lets understand scopes
var c = 300;
let a = 200;
if (true) {
  let a = 10;
  const b = 20;
  c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

/**
 * {} => scope
 */

// Nested Scopes
function one() {
  const userName = "Avinash";
  function two() {
    const userId = 12009084;
    // console.log(userName);
  }
  //   console.log(userId);

  two();
}

// one();

// same as if else
if (true) {
  const userName = "Avinash";
  if (userName === "Avinash") {
    const id = 12009084;
    console.log(userName + " " + id);
  }
  //   console.log(id);
}
// console.log(userName);

console.log("+++++++++++++++++ interesting big concept +++++++++++++++");

function addone(num) {
  return num + 1;
}
addone(5);

// Expression type variables
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
