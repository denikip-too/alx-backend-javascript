const http = require("http");

const host = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/csv");
  res.writeHead(200);
  res.end('Hello Holberton School!');
});
module.exports = app;
