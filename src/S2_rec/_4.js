let _intercalare = (_array1, _array2) => {
  if (_array1.length !== _array2.length) return -1;

  let _ararynou = [];
  for (let i = 0; i < _array1.length; i++) {
    _ararynou.push(_array1[i]);
    _ararynou.push(_array2[i]);
  }
  return _ararynou;
};

console.log(_intercalare([1, 2, 3, 4], [5, 6, 7, 8]));

//A 2 varianta
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let result = array1.map((element, index) => [element, array2[index]]).flat();
console.log(result);
