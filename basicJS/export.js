// 1
// const add = (a, b) => a + b;

// module.exports = add;


// 2
// const greet = name => `Hello ${name}`;

// module.exports = greet;


// 3
// const name = 'Chaim';
// const age = 22;

// module.exports = {name, age};


// 4
// const add = (a, b) => a + b;
// const multiple = (a, b) => a * b;

// module.exports = {add, multiple};


// 5
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;

// module.exports = {add, sub, mul};


// 6
// const isEven = (number) => !(number % 2);
// module.exports = isEven;


// 8
// const numbers = [5, 6, 2];
// module.exports = numbers;


// 9
// const add = require('./import');
// const sub = (a, b) => a - b;
// module.exports = {add, sub};



// 10
// const loggerInfo = (msg) => {
//     return console.log(`INFO | ${msg}`);
// };
// const loggerError = (msg) => {
//     return console.log(`ERROR | ${msg}`);
// };
// module.exports = {loggerInfo, loggerError};




// 1
// export const sum = (a, b) => a + b;

// 2
// export const greet = (name) => `Hello ${name}`;

// 3
// export const PI = Math.PI;

// 4
// export default (number) => number * 2;

// 5
// export const add = (a, b) => a + b;
// export const sub = (a, b) => a - b;
// export const mul = (a, b) => a * b;

// 6
// const user = {name: 'Chaim', age: 22};
// export default user;

// 8
// export const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// export default sub;

// 9
// import { sub, add } from "./import.js";

// const menu  = (a, b, action) => {
//     return action === 'add' ? add(a, b) : sub(a, b);
// }

// export default menu;