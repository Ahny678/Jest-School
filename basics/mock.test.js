const forEach = require("./mock");

const mockCallback = jest.fn((x) => x * x);

test("forEach number of calls", () => {
  forEach.forEach([0, 1, 8], mockCallback);

  // The mock function was called thrice
  expect(mockCallback.mock.calls).toHaveLength(3);

  // The return value of the third call to the function was 42
  expect(mockCallback.mock.results[2].value).toBe(64);
});

test("forEach results", () => {
  forEach.forEach([0, 1, 8], mockCallback);

  // The return value of the third call to the function was 42
  expect(mockCallback.mock.results[2].value).toBe(64);
});
