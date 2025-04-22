const db = require("./database").jokeDB;
const axios = require("axios");

//get joke from a url
exports.getJoke = async () => {
  const res = await axios.get("a joke url");
  const joke = res.data;
  exports.addToDb(joke);
  return joke;
};

exports.addToDb = async (joke) => {
  await db.push(joke);
  return "Added to db";
};
