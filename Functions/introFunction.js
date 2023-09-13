// function SayMyName() {
//   console.log("Avinash");
// }

// SayMyName();

// Add two numbers
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(2, 4);

// Second method
/** 
 * function mulTwoNumbers(number1, number2) {
  let result = number1 * number2;
  //   After return no one should be print
  return result;
}
// When call then it is called arguments
const result = mulTwoNumbers(2, null);
// console.log(result);
*/

// Third Method
/**function loginUser(username) {
  if (username === undefined) {
    console.log("Please enter a UserName");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUser()); */

/**
 function loginUser(username) {
  if (!username) {
    console.log("Please enter a UserName");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUser());

 */

// Give default values
/**function loginUser(username = "Sam") {
  if (!username) {
    console.log("Please enter a UserName");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUser());
*/

// Shopping cart where you dont know how many request are there
/**
 function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(2));

// Above code is working fine but let suppose multiple values are there then you got output only first one so we use rest operator i.e ...similar is as spread operator
console.log("Problem in this part is: ", calculateCartPrice(200, 400, 900, 35));

 */

/**
 * give val1, val2, with rest oprtaor
 * val1 ref to first value, val2 ref to second value
 * function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500));
 */

/**Pass the object to the function
 * const user = {
  userName: "Avinash",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.userName} and Id is ${anyobject.Id}`);
}

// handleObject(user);

// you can pass direct object also
handleObject({
  userName: "Siddhi",
  Id: 299,
});
 */

/**
 * Let pass the arrays
 * const myNewArr = [200, 300, 400, 500];
function returnSecondVal(getArray) {
  return getArray[1];
}
console.log(returnSecondVal(myNewArr));

 */
