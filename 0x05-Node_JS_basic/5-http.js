const http = require("http");

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/csv");
  switch(req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break
    case '/students':
      res.writeHead(200);
      res.end('This is the list of our students');
      res.setHeader("Content-Disposition", process.argv[2]);
      res.writeHead(200);
      res.end('Hello Holberton School!');
    default:
      res.writeHead(404);
});
module.exports = app;
