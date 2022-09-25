const express = require('express');

const app = express();
const port = 1245;
const host = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
module.exports = app;
