const os = require("os");

// console.log("Platform: ", os.platform());
// console.log("Architecture: ", os.arch());
// console.log("Total memory: ", os.totalmem());
// console.log("Free memory: ", os.freemem());
// const bytes = os.totalmem();
// const KB = bytes / 1024;
// const MB = bytes / (1024 * 1024);
// const GB = bytes / (1024 * 1024 * 1024);
// const TB = bytes / (1024 * 1024 * 1024 * 1024);
// console.log("Bytes: ", bytes);
// console.log("KB: ", KB);
// console.log("MB: ", MB);
// console.log("GB: ", GB);
// console.log("TB: ", TB);

console.log(os.hostname());
console.log(os.userInfo());
console.log("CPU Info: ", os.cpus());
console.log("Home directory: ", os.homedir());
console.log("Network Interfaces: ", os.networkInterfaces);
