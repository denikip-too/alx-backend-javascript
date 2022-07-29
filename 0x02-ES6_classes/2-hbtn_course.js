// Implementing a getter and setter for each attribute

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  set setname(name) {
    if (typeof name !== 'string') {
      throw new Error("Name must be a string");
    }
    this._name = name;
  }
  get getname() {
    return this.name;
  }
  set setlength(length) {
    if (typeof length !== int) {
      throw new Error("Length must be a number");
    }
    this._length = length;
  }
  get getlength() {
    return this._length;
  }
  set setstudents(students) {
    for (i = 0; i < students.length; i++) {
      if (typeof students !== 'string') {
        throw new Error("Student Name must be a string");
      }
    }
    this._students = students;
  }
  get getname() {
    return this._students;
  }
}
