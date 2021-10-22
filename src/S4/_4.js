// String.prototype.capitalizeWords = function () {
//   return this.replace(/\b[a-z]/g, (match) => match.toUpperCase());
// };

// console.log("this words will be capitalized".capitalizeWords());

Number.prototype.times = function (func) {
  let rezultat = this.valueOf();
  for (let i = 0; i < 3; i++) {
    rezultat = func(rezultat);
  }
  return rezultat;
};

console.log(Number("123").times((x) => x * 2));
