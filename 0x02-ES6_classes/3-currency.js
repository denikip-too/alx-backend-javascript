export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }
  set setname(name) {
    if (typeof name !== 'string') {
      return new Error("Name must be a string");
    }
    this._name = name;
  }
  get getname() {
    return this._name;
  }
  set setname(code) {
    if (typeof code !== 'string') {
      return new Error('Code must be a strind');
    }
    this._code = code;
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
