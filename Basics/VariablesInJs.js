// JS Video
// Variables => const will not change
const accountId = 122553;
let accountEmail = "avinashpandey@gmail.com";
var accountPassword = "12345";
accountCity = "Ludhiana";
let accountState;

// accountId = 2; not allowed

accountEmail = "ac@gmail.com";
accountCity = "Banglore";
accountPassword = "212121";
// console.log(accountEmail);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// in let there is no scope problem

/**
 * Prefer not to use var because of issue in block scope and functional scope.
 */
