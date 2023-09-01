// const name = "Avinash";
// const repoCount = 50;
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Avina-sh");
// console.log(gameName[0]);

// To access prototype
// console.log(gameName.__proto__);

// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("n"));

// Sometimes u want to divide strings

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 3);
console.log(anotherString);

// trim method used to login
const trimMethod = "    avinash     ";
console.log(trimMethod);
console.log(trimMethod.trim());

const url = "https://avinash.com/avinash%20pandey";
console.log(url.replace("%20", "-"));

console.log(url.includes("avinash"));

// String to array conversion
console.log(gameName.split("-"));
