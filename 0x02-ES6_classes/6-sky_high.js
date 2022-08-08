import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.sqft = sqft;
    this.floors = floors;
  }
  
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    throw new Error('Evacuate slowly the NUMBER_OF_FLOORS floors');
  }
}
