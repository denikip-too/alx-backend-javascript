// Implementing a getter and setter for each attribute

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  set setname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }
  get getname() {
    return this._name;
  }
  set setlength(value) {
    if (typeof value !== int) {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }
  get getlength() {
    return this._length;
  }
  set setstudents(value) {
    for (i = 0; i < value.length; i++) {
      if (typeof value !== 'string') {
        throw new TypeError('Student Name must be a string');
      }
    }
    this._students = value;
  }
  get getname() {
    return this._students;
  }
}
