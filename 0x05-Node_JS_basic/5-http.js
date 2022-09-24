const http = require('http');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", process.argv[2]);
  switch(req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break
    case '/students':
      res.writeHead(200);
      
      res.write('This is the list of our students');
      res.end(countStudents)
    default:
      res.writeHead(404);
  }
});
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
module.exports = app;
