let cities = [];
let food = [];
function initializeCityDatabase() {
  cities = ["Vienna", "San Juan", "New York", "Tokyo"];
}

function clearCityDatabase() {
  cities = [];
}

function isCity(name) {
  return cities.includes(name);
}

function initializeFoodDatabase() {
  food = ["Rice", "Beans", "Shawarma", "Yogurth"];
}

function clearFoodDatabase() {
  food = [];
}

function isFood(name) {
  return food.includes(name);
}

module.exports = {
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
  initializeFoodDatabase,
  clearFoodDatabase,
  isFood,
};
