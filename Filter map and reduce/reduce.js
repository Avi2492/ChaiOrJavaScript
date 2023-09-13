const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, curval) {
  //   console.log(`acc: ${acc} and curval: ${curval}`);
  return acc + curval;
}, 0);
// console.log(myTotal);

// let write in arrow function
const total = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

// Example
const shoppingCart = [
  {
    itemName: "Js course",
    price: 2000,
  },
  {
    itemName: "Java course",
    price: 2999,
  },
  {
    itemName: "React course",
    price: 999,
  },
  {
    itemName: "Node course",
    price: 2199,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
