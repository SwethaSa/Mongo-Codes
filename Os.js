


const os = require ("os");

// 1 KB = 1024 bytes;
// 1 MB = 1024 KB;
// 1 GB =1024 MB;

console.log("Total Memeory", os.totalmem()/1024/1024/1024);
console.log("Free Memeory", os.freemem()/1024/1024/1024);
console.log("Version", os.version());
console.log("Processor", os.cpus());

