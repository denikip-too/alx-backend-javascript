const http = require("http");

const host = 'localhost';
const port = 1245;
const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
  res.writeHead(200);
  res.end('Hello Holberton School!');
});
module.exports = app;
