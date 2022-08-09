// Implementing a getter and setter for each attribute

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof this._length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._students.ForEach((j) => {
      if (typeof j !== 'string') {
        throw new TypeError('Student Name must be a string');
      }
    });
  }

  // set name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // get name
  get name() {
    return this._name;
  }

  // set length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // get length
  get length() {
    return this._length;
  }

  // set students
  set students(value) {
    value.ForEach((j) => {
      if (typeof j !== 'string') {
        throw new TypeError('Student Name must be a string');
      }
    });
    this._students = value;
  }

  // students
  get students() {
    return this._students;
  }
}
