const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, valinit, _lambda) => {
  if (array.length === 0) return valinit;
  else {
    const [p, ...ul] = array;
    const update = _lambda(valinit, p);
    return reduce(ul, update, _lambda);
  }
};

console.log(reduce(sampleArray, 0, (x, y) => x + y));
