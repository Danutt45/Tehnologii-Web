let _converter = (_list) => {
  let result = [];
  let split = _list.split(" ");
  for (let nr of split) result.push(Number(nr));
  return result;
};

console.log(_converter("1 2 3 4 5 6 7 8"));
