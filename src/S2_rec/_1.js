let concat1 = (array) => {
  let _newString = "";
  for (let elements of array) {
    _newString += elements;
  }
  return _newString;
};

let concat2 = (_array) => {
  let _newString = "";
  _array.forEach((element) => {
    _newString += element;
  });
  return _newString;
};

console.log(`Metoda 1:`, concat1(["Ana", "are", "mere"]));
console.log(`Metoda 2:`, concat2(["Ana", "Nu", "Mai", "Are", "Mere"]));
