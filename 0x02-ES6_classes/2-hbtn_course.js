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
    if (!(Number.isInteger(value))) {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get getlength() {
    return this._length;
  }

  set setstudents(value) {
    let i = 0;
    while (i < value.length) {
      if (typeof value !== 'string') {
        throw new TypeError('Student Name must be a string');
      }
      i++;
    }
    this._students = value;
  }

  get getstudents() {
    return this._students;
  }
}
