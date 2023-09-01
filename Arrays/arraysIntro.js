// const myArr = [0, 1, 2, 3, 4];
// console.log(myArr[0]);

// shallow copies means same refrence
// Deep copies opposite of shallow copies

// const myHeros = ["Shaktiman", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

// Array Methods
// console.log(myArr2.length);
// console.log(myArr2.push(6));
// console.log(myArr2.pop());

// myArr2.unshift(0);

// 9 will add in the starting
// myArr2.unshift(9);

// shift means delete unshift
// myArr2.shift();

// console.log(myArr2.includes(9));

// The value which is not in the array then it gives -1
// console.log(myArr2.indexOf(19));

// .join method simply do the joining with first array into the strings
// const newArr = myArr2.join();

// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr2);

// slice & splice method
console.log("A: ", myArr2);

const myn1 = myArr2.slice(1, 3);
console.log("Slicing: ", myn1);

console.log("B: ", myArr2);

// Splice method prints last range also & The range is out of the array
console.log("\n <=== Splice Method ===> \n");
const myn2 = myArr2.splice(1, 3);
console.log("Splicing: ", myn2);

// Arrays part 2
