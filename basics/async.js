exports.getAllCookies = async (n) => {
  if (typeof n !== "number") throw new Error("Invalid input");
  return await (n * 1000000);
};
