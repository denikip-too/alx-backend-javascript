//const calculateNumber = require('./0-calcul.js');
//const calculateNumberTest = new calculateNumber();

//test('testing addition', () => {
//  expect(calculateNumberTest.calculateNumber('1, 3')).toBe(4);
  //expect(calculateNumberTest.calculateNumber('1, 3.7')).toBe(5);
 // expect(calculateNumberTest.calculateNumber('1.2, 3.7')).toBe(5);
 // expect(calculateNumberTestcalculateNumber('1.5, 3.7')).toBe(6);
//});
const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

assert.equal(calculateNumber(1, 3), 4)
assert.equal(calculateNumber(1, 3.7), 5)
assert.equal(calculateNumber(1.2, 3.7), 5)
assert.equal(calculateNumber(1.5, 3.7), 6)