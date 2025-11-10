// Import all modules
const { printName } = require("./nameModule.js")
const { add } = require('./mathModule.js');
const math = require('./mathModule');
const { createFileAndWrite, readFile, logMessage, } = require("./fileModule.js");
const countWords = require('./wordCount.js');
const { today, currentTime } = require('./dateUtills.js');
const randomNumber = require('./radnumNumber.js');
const checkFileExists = require('./fileCheck');

// Use all modules together
printName("Rajendra behera");

console.log('Add (5+3):', add(5, 3));
console.log('Subtract (10-4):', math.subtract(10, 4));
console.log('Multiply (6*2):', math.multiply(6, 2));
console.log('Divide (8/2):', math.divide(8, 2));

createFileAndWrite('sample.txt', 'Learning Node.js step by step!');
readFile('sample.txt');

logMessage('App started successfully.');

const text = 'This is a simple word count example in Node.js';
console.log(`Word Count: ${countWords(text)}`);

console.log(`Today: ${today}, Time: ${currentTime}`);

console.log(`Random Number (1-10): ${randomNumber(1, 10)}`);

checkFileExists('sample.txt');
