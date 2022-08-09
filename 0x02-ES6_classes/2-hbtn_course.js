export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

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
