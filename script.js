// Naming Conventions & Where to Use Them
// camelCase - Used for variables and functions
let thisIsAVariable = 10;
// kebab-case - Used for file names
// let this-is-a-error = 10;
// snake_case - Used for variables in Python
let this_is_a_snake = 10;
// SCREAMING_SNAKE_CASE - Used for Global Vars in JS
const THIS_IS_LOUD = "Don't change me";

// Control Structures
// Lamp if/else

// if (condition) {
//     // True - run this code
// } else {
//     // False - run this code
// }

let lamp = {
  bulb: true,
  pluggedIn: true,
};

if (!lamp.pluggedIn) {
  // lamp.pluggedIn === false
  console.log("Plug in lamp");
  lamp.pluggedIn = true;
} else if (!lamp.bulb) {
  // lamp.bulb === false
  console.log("Replace bulb");
  lamp.bulb = true;
} else {
  console.log("Repair lamp");
}

let x = 1;
if (x > 10) {
  console.log(`${x} is greater than 10`);
} else if (x === 10) {
  console.log(`${x} is 10`);
} else {
  console.log(`${x} is less than 10`);
}

let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend");
} else {
  console.log("Get back to work");
}

let budget = 9;

if (budget > 50) {
  console.log("Take a taxi");
} else if (budget > 30 && budget <= 50) {
  console.log("Take the bus");
} else if (budget > 10 && budget <= 30) {
  console.log("Take the train");
} else {
  console.log("Walk");
}

let month = "December";

switch (month) {
  case "January":
    console.log("Start of the year");
    break;
  case "March":
    console.log("Starting to get warmer");
    break;
  case "June":
    console.log("Start of Summer");
    break;
  default:
    console.log("None of the listed months");
}

// Loops

// The While Loop
let num = 0;

while (num <= 10) {
  console.log(num);
  num++;
}

// Do While Loop
let count = 0;

do {
  console.log("Count:", count);
  count++;
} while (count < 20);

// For Loop

for (let iterator = 0; iterator < 5; iterator++) {
  console.log("This loop has run: ", iterator, " times");
}

// for (iterator definition; while clause; exit clause) {

// }

let arr = ["AndyB", "Steve", "Gary", "Sue", "Alice"];

for (let i = 0; i < arr.length; i++) {
  console.log("Every name: ", arr[i]);
  console.log("First letter of every name: ", arr[i][0]);
  if (arr[i][0] === "S") {
    console.log("Picked Name: ", arr[i]);
  }
}

let str = "AndyB";
console.log(Array.isArray(str));
console.log(typeof str);
console.log(str[2]);
console.log(str.length);
