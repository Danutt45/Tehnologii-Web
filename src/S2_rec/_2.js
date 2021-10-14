let getNrCaractereDiferite = (string1, stirng2) => {
  if (string1.length !== stirng2.length) return -1;

  let _nr = 0;
  for (let _index; _index < string1.length; _index++) {
    if (string1[_index] !== stirng2[_index]) _nr++;
  }
  return _nr;
};

console.log(getNrCaractereDiferite("Ana", "Ana"));
console.log(getNrCaractereDiferite("Periuta", "Castravete"));
