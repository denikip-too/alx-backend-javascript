import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be an integer');
    }
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullPrice()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
