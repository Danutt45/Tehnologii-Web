const varsta = [15, 16, 17, 18, 19, 20, 21, 22];

console.log(
  `mapare`,
  varsta.map((x) => {
    if (x >= 18) return x;
    else return -1;
  })
);
console.log(
  `filter`,
  varsta.filter((x) => x >= 18)
);

console.log(
  `combinate`,
  varsta
    .map((x) => {
      if (x >= 18) return x;
      else return -1;
    })
    .filter((x) => x != -1)
);
