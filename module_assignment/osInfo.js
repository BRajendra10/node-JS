// Import the 'os' module
const os = require('os');

// Print operating system information
console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory (in MB):', os.totalmem() / 1024 / 1024);
console.log('Free Memory (in MB):', os.freemem() / 1024 / 1024);
