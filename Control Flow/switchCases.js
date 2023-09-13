// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Febraury");
//     break;
//   case 3:
//     console.log("Marh");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("Ovtober");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   default:
//     console.log("December");
//     break;
// }

// falsy values
// const userEmail = "h@gmail.com";
// if (userEmail) {
//   console.log("Got it");
// } else {
//   console.log("Not got it");
// }

// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values -> "0", 'false', " ", [], {}, function(){}
// const userEmail = "hitesh@gmail.com";
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// check for objects
// const myObj = {};
// if (Object.keys(myObj).length === 0) {
//   console.log("Obj is empty");
// }

//  Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;
// console.log(val1);

// Terniary operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more 80");
