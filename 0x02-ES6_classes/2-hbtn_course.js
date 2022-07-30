// Implementing a getter and setter for each attribute

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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
    value.ForEach((j) => {
      if (typeof j !== 'string') {
        throw new TypeError('Student Name must be a string');
      }
    });
    this._students = value;
  }

  get getstudents() {
    return this._students;
  }
}