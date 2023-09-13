// iterators
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best no.");
//   }
//   console.log(element);
// }

// All tables
// for (let i = 0; i <= 20; i++) {
//   console.log(`Outer loop: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner loop ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// In arrays
// let myArray = ["flash", "batman", "superman"];
// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }

// Some keywords => break & continue.
for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of is ${i}`);
}

for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of is ${i}`);
}
