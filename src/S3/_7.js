const array = [1, 2, 3, 4, 5];

let _Medie = (array) => array.reduce((x, y) => x + y) / array.length;

console.log(_Medie(array));
