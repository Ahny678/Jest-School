//a function tha takes the string and the shift key
exports.Cipher = (s, shiftKey) => {
  return s
    .split("")
    .map((char) => {
      return tranformChar(char, shiftKey);
    })
    .join("");
};

const tranformChar = (char, shiftKey) => {
  const code = char.charCodeAt(0);
  //A is 65, Z is 90
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(
      ((((code - 65 + shiftKey) % 26) + 26) % 26) + 65
    );
  }

  //a is 97, z is 122
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(
      ((((code - 97 + shiftKey) % 26) + 26) % 26) + 97
    );
  } else {
    return char;
  }
};
