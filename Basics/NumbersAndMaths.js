// const score = 500;
// console.log(score);
// Output => 500

// define explicitly number need
// const balance = new Number(100);
// console.log(balance);
// Output => [Number: 100]

// console.log(balance.toString().length);

// Let suppose some decimal no is used but we want to use fixed number then we will use .toFixed method
// console.log(balance.toFixed(2));

// const otherNumber = 123.88899;
// console.log(otherNumber.toPrecision(4));

// console.log(typeof balance);

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// Output => 1, 000, 000

// For indian value
// console.log(hundreds.toLocaleString("en-IN"));

// Max & Min Value
// console.log(Number.MAX_VALUE);

console.log("============= Maths ===============");
// By default its coming with javascript
// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));

// console.log(Math.random()); give 0 to 1 only
// console.log("Random: ", Math.random() * 10);

// for avoiding 0 value we will add 1 always
// console.log("Random: ", Math.random() * 10 + 1);

// trick
const min = 10;
const max = 20;

// console.log(Math.random() * (max - min + 1));

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
