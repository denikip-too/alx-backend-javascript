export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag](this._code) {
    return 'Airport';
  }
//  toString() {
//    return `${this._code}`;
	//    }
}
const obj = new Airport();
obj.toString = `[object ${this._code}]`;
