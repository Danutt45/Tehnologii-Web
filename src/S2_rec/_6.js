const String = "Imi place";

const getRelativeFrequency = (string) => {
  const result = {};
  for (const _litera of string) {
    if (_litera !== " ") {
      if (_litera in result) {
        result[_litera]++;
      } else {
        result[_litera] = 1;
      }
    }
  }
  for (const letter in result) {
    result[letter] /= string.length;
  }

  return result;
};

console.log(getRelativeFrequency(String));
