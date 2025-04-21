const sum = require("./sum");

test("Adds two numbers", () => expect(sum(1, 2)).toBe(3));

//to check value of an object
test("Checks dictionary items", () => {
  const data = { one: 1 };
  data["three"] = 3;
  expect(data).toEqual({ one: 1, three: 3 });
});

//to check opposite of a matcher
test("Checks addition of numbers is not positive", () => {
  for (i = 1; i < 10; i += 1) {
    expect(i + (i + 1)).not.toBe(0);
  }
});

//checking strings with regular expressions
test("There is no I in us", () => {
  expect("us").not.toMatch(/I/);
});

test("There is m in team", () => {
  expect("team").toMatch(/m/);
});
