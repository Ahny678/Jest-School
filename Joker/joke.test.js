const axios = require("axios");
const { getJoke, addToDb } = require("./joke");

jest.mock("axios");

describe("Joke operations", () => {
  const mockJoke = {
    id: 3,
    joke: "Testing testing 128",
    author: "Mimi",
  };
  it("returns a joke object", async () => {
    axios.get.mockResolvedValueOnce({ data: mockJoke });
    const joke = await getJoke();
    expect(joke).toEqual(mockJoke);
  });

  it("appends a joke object to db", () => {
    return expect(addToDb(mockJoke)).resolves.toBe("Added to db");
  });
});
