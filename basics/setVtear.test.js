const {
  initializeCityDatabase,
  clearCityDatabase,
  isCity,
  initializeFoodDatabase,
  clearFoodDatabase,
  isFood,
} = require("./setVtear");

beforeEach(() => {
  console.log("Before each outside describe");
  return initializeCityDatabase();
});

afterEach(() => {
  console.log("After each outside describe");
  return clearCityDatabase();
});

test("Vienna to be true", () => {
  expect(isCity("Vienna")).toBeTruthy();
});
test("Nigeria to not be true", () => {
  expect(isCity("Nigeria")).not.toBeTruthy();
});

describe("Food  food database", () => {
  beforeAll(() => {
    console.log("Before all within describe");
    return initializeFoodDatabase();
  });

  afterAll(() => {
    console.log("After all within describe");
    return clearFoodDatabase();
  });
  test("Yogurth to be true", () => {
    expect(isFood("Yogurth")).toBeTruthy();
  });
  test("Cream to not be true", () => {
    expect(isFood("Cream")).not.toBeTruthy();
  });
});
