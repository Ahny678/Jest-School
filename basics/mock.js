exports.forEach = (items, callback) => {
  for (const item of items) {
    callback(item);
  }
};
