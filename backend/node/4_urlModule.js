const url = require("url");

// const myURL = url.parse("https://example.com:8000/student?id=101&name=David");
const myURL = new URL("https://example.com:8000/student?id=101&name=David");

console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams.get("id"));
console.log(myURL.searchParams.get("name"));
console.log(myURL.searchParams.append("", ""));
// console.log(myURL.query);
