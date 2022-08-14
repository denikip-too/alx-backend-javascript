// function getListStudentIds that returns an array of ids from list of object

import getListStudents from "./0-get_list_students.js";


default export function getListStudentIds (obj) {
  const arrs = Object.keys(obj).map(function(key) {
    return [Number(key), obj[key]];
  });
}
