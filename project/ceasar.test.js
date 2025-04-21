const Cipher = require("./ceasar").Cipher;

describe("Set of ceasar cipher test cases", () => {
  test("It returns properly wrapped sting", () => {
    expect(Cipher("xyz", 3)).toBe("abc");
  });

  test("It should preserve case sensitivity", () => {
    expect(Cipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("It should keep non letters as they are", () => {
    expect(Cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
