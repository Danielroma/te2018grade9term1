// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let changeMachine = {
	inputCents: "y",
    quarters: "quarters",
    dimes: "dimes",
    nickels: "nickels",
    pennies: "pennies",
    greeting: "Hey, this is Bob. Bob the change machine, please input the amount of cents as a positive integer.",
    farewell: "Thank you very much for taking money out of me! Come again."
};

// write code below that simulates the change machine in action!
let y = READLINE.question ("Hey, this is Bob. Bob the change machine, please input the amount of cents as a positive integer: ");

let quarters = Math.floor(y/25);
let remainder = Math.floor(y%25);
let dimes = Math.floor(remainder/10);
remainder = Math.floor(remainder%10);
let nickels = Math.floor(remainder/5);
remainder = Math.floor(remainder%5);
let pennies = remainder;
console.log(`${y} cents would make`);
console.log(`quarters = ${quarters}`);
console.log(`dimes = ${dimes}`);
console.log(`nickels = ${nickels}`);
console.log(`pennies = ${pennies}`);

