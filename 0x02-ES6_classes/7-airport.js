export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
}
const obj = new Airport();
Airport.prototype.toString = function objToString() {
  return `[object ${this._code}]`;
}
