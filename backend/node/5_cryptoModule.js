// The Crypto module provides cryptographic functionality such as generating random values and creating hashes.

const crypto = require("crypto");

// const number = crypto.randomInt(1, 100);
// console.log(number);

// const result = crypto.randomBytes(8);
// console.log(result);
// console.log(result.toString("hex"));

// const data = "Hello Node Js";
// SHA-256 stands for Hash Algorithm 256-bit
// It is a cryptographic hashing algorithm that convert input data(text,password,content) into a fixed length hash value of 256 bits
// In a simple word, We provide some data as input, and SHA-256 generate a unique-looking hash value as output
// const hash = crypto.createHash("sha256").update(data).digest("hex");
// console.log(hash);

const id = crypto.randomUUID();
console.log(id);
