const laptop = [
  {
    brand: "Hppp",
    procesor: "i5",
    ram: 3
  },
  {
    brand: "He",
    procesor: "i5",
    ram: 5
  },
  {
    brand: "A",
    procesor: "i5",
    ram: 8
  }
];

const Sort = (array, string) => {
  return array.sort((x, y) =>
    x[string] < y[string] ? -1 : x[string] > y[string] ? 1 : 0
  );
};

console.log(Sort(laptop, "brand"));

//De facut
