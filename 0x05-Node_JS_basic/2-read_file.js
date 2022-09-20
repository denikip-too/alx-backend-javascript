const fs = require("fs");
function countStudents(path) {
  fs.readFileSync("./database.csv", (err, data) => {
    if (!err) {
      console.log("Number of students: " + data.length)
    } else {
      console.error("Cannot load the database");
    }
  });
}
