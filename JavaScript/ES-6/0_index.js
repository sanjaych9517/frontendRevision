// const books = [
//   { title: "Short", author: ["Author A"] },
//   { title: "This is a long Title", author: ["Author B"] },
//   { title: "Medium Title", author: ["Author A"] },
// ];

// let newArr = books.filter((book) => book.title.length > 10);
// console.log(newArr)

const books = [
  { title: "Book One", author: { name: "Author A" } },
  { title: "Book Two", author: { name: "Author B" } },
  { title: "Book Three", author: { name: "Author A" } },
  { title: "Book Four", author: { name: "Author D" } },
];

let res = books
  .filter((book) => book.author.name === "Author A")
  .map((bookTitle) => bookTitle.title);
console.log(res);
