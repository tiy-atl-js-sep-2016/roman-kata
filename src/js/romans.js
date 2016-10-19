function toRoman (number) {
  var result = "";

  while (number > 0) {
    if (number >= 5) {
      result += "V";
      number -= 5;
    } else if (number >= 1) {
      result += "I";
      number -= 1;
    }
  }

  return result;
};

console.assert(toRoman(1) === "I",
              "Correctly converts ones");
console.assert(toRoman(5) === "V",
              "Correctly converts fives");
console.assert(toRoman(10) === "X",
               "Correctly converts tens");
console.assert(toRoman(3) === "III",
              "Correctly handle repeated numbers");
console.assert(toRoman(7) === "VII",
               "Convert compound numbers");
console.assert(toRoman(36) === "XXXVI",
               "Convert two digit numbers");

export { toRoman };
