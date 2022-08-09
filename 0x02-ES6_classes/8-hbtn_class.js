export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
}
const obj = new HolbertonClass();
if (typeof obj === Number) {
  return `${this._size}`;
else if (typeof obj === String) {
  return `${this._location}`;
