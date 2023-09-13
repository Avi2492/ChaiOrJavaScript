// declare like constructor
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Avinash";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// Objects in objects
const regUser = {
  email: "user@gmail.com",
  fullname: {
    userName: {
      firstName: "Avinash",
      lastName: "Pandey",
    },
  },
};

// console.log(regUser.fullname.userName.firstName);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const objMerge = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// some times you give {}
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// but in this above case problem is object in object output same as array

// You use most of time
const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// when values comes from databse
const users = [
  {
    id: 12009084,
    email: "avinash.12009084@lpu.in",
  },
];

// users[1].email;
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// if value not exist
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
