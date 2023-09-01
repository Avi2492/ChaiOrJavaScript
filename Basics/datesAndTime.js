//Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDateSecond = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDateSecond.toDateString());

// Third format
// let myThirdDate = new Date("01-14-2023");
// console.log(myThirdDate.toLocaleString());

// Timestamps in milliseconds
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myThirdDate.getTime());

// Convert it in seconds:-
// console.log(Math.floor(Date.now() / 1000));

// Some more methods in date
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default", {
  weekday: "long",
});
