const getAllCookies = require("./async");

test("GET 2 mill", async () => {
  expect(getAllCookies.getAllCookies(2)).resolves.toBe(2000000);
});
test("fail 2 mill", async () => {
  expect(getAllCookies.getAllCookies("two")).rejects.toThrow("Invalid input");
});
