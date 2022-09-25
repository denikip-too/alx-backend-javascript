const http = require('http');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;
const db = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200);
      res.write('This is the list of our students\n');
      try {
        const students = await countStudents(db);
        res.end(`${students.join('\n')}`);
      } catch (error) {
        res.end(error.message);
      }
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
module.exports = app;
