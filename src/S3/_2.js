const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = 2;

console.log(array.filter((x) => x % num == 0).reduce((x, y) => x + y));
