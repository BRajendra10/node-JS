// Entery point of app

console.log("Hello world");

// require moduel syntax
const { findAreaOfCircle, findAreaOfTriangle, findAreaOfSquare } = require("./functions.js");

// Function for finding the area of circle
// const result = findAreaOfCircle(5);

// function for finding are of triangle
// const result = findAreaOfTriangle(10, 8);

// function for finding are of rectangle
// const result = findAreaOfTriangle(5, 6, 7)

// function for finding are of square
const result = findAreaOfSquare(5)

console.log(result);