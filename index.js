// Node JS application

// const http = require("http");
// const PORT = 3001;

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JS",
//     important: true,
//   },
//   {
//     id: 3,
//     content: "Get and post are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

// app.listen(PORT);
// console.log(`Server is now running on port ${PORT}`);

// Express App:

const express = require("express");
const app = express();
const PORT = 3001;

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JS",
    important: true,
  },
  {
    id: 3,
    content: "Get and post are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello Express!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
