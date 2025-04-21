//A capitalize function that takes a string and returns it with the first character capitalized.

exports.Capitalize = (s) => {
  return s.slice(0, 1).toUpperCase();
};

//A reverseString function that takes a string and returns it reversed.
exports.reverseString = (s) => {
  let revert = "";
  for (i = 0; i < s.length; i += 1) {
    revert += s[s.length - 1 - i];
  }
  return revert;
};

//A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply.
//  Each of these functions should take two numbers and return the correct calculation.
exports.Calc = {
  Add: (n1, n2) => {
    return n1 + n2;
  },
  Subtract: (n1, n2) => {
    return n1 - n2;
  },
  Divide: (n1, n2) => {
    return n1 / n2;
  },
  Multiply: (n1, n2) => {
    return n1 * n2;
  },
};

//An analyzeArray function that takes an array of numbers and
// returns an object with the following properties: average, min, max, and length.
exports.Analyze = (n) => {
  const sum = n.reduce((acc, current) => acc + current, 0);

  return (retObj = {
    average: sum / n.length,
    min: Math.min(...n),
    max: Math.max(...n),
    length: n.length,
  });
};

//console.log(this.Analyze([2, 2, 3]));
