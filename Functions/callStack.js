/**
 * How will code executes in js ?
 * Execution context, calls, memory creation phase => {},
 * Execution phase
 */

// Topic JavaScript execution context => Like when you given code to run then global scope is formed and refred to the this refrence There are two types of execution context -> Global Execution, Function Execution

// Example
let val1 = 10;
let val2 = 9;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let reusult1 = addNum(val1, val2);
let reusult2 = addNum(10, 2);

/**
 * Steps =>
 * Step-1:- Global execution and refred to this
 * Step-2:-memory phase: - all variables collected and then store them togther
 * val1 -> undefined, val2 -> undefined
 * addNum -> goes defination of function
 * result1 -> undefined
 * result2 -> undefined
 *
 * Execution phase:-
 * val1 = 10, val2 = 5
 * addNum(after execution it will delete) -> new executional context other [new variable env + execution thread] -> memory phase:- val1 -> undefined, val2 -> undefined, total -> undefined
 * execution phase:- num1 -> 10, num2 -> 5
 * total -> 15
 * then total returned to global execution context.
 */

/**
 * Call stacks:- one() two() three() one will execute then go out of stack we used LIFO
 */

// Example - call stacks
function one() {
  console.log("One");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

one();
two();
three();
