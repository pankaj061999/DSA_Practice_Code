// 12. Integer to Roman

var romanToInt = (s) => {
  const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const nextChar = s[i + 1];

    if (romanValues[currentChar] < romanValues[nextChar]) {
      result -= romanValues[currentChar];
    } else {
      result += romanValues[currentChar];
    }
  }

  return result;
};

romanToInt("XV");
console.log("Print this functionn value===>>", romanToInt("XV"));
