// myModule.js

let persistentVariable = 'Initial Value';

function getPersistentVariable() {
  return persistentVariable;
}

function setPersistentVariable(newValue) {
  persistentVariable = newValue;
}

module.exports = {
  getPersistentVariable,
  setPersistentVariable,
};
