const utils = require("./type");

test("It will return capitalized first character", () => {
  expect(utils.Capitalize("tiffany")).toBe("T");
});

test("It will reverse the string input", () => {
  expect(utils.reverseString("Ohayo")).toEqual("oyahO");
});

describe("Calculator object", () => {
  test("It will add two numbers", () => {
    expect(utils.Calc.Add(3, 2)).toBe(5);
  });
  test("It will subtract two numbers", () => {
    expect(utils.Calc.Subtract(3, 2)).toBe(1);
  });
  test("It will Divide two numbers", () => {
    expect(utils.Calc.Divide(3, 2)).toBe(1.5);
  });
  test("It will multiplies two numbers", () => {
    expect(utils.Calc.Multiply(3, 2)).toBe(6);
  });
});

describe("It will return a statistics object", () => {
  test("It will return the average", () => {
    expect(utils.Analyze([1, 2, 3]).average).toBe(2);
  });
  test("It will return the min", () => {
    expect(utils.Analyze([1, 2, 3]).min).toBe(1);
  });
  test("It will return the max", () => {
    expect(utils.Analyze([1, 2, 3]).max).toBe(3);
  });
  test("It will return the length", () => {
    expect(utils.Analyze([1, 2, 3]).length).toBe(3);
  });
});
