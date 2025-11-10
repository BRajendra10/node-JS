// Import the 'fs' and 'path' modules
const fs = require('fs');
const path = require('path');

// Create a new file and write some text inside it
fs.writeFileSync('example.txt', 'Hello, this is a new file!');
console.log('File created and text written successfully.');

// Read the content of a file and display it in the console
const data = fs.readFileSync('example.txt', 'utf8');
console.log('File content:', data);

// Append new content to an existing file
fs.appendFileSync('example.txt', '\nThis is additional text.');
console.log('New content appended successfully.');

// Delete a specific file
// Uncomment below line to delete the file after checking
// fs.unlinkSync('example.txt');
// console.log(' File deleted successfully.');

// Get the absolute path of the current file using the path module
console.log('Absolute path:', __filename);

// Display only the file name and its extension using the path module
console.log('File name:', path.basename(__filename));
console.log('File extension:', path.extname(__filename));
