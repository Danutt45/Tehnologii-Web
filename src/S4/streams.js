class Stream {
  #value;
  #nextValue;
  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
    Stream.#count++;
  }

  get value() {
    return this.#value;
  }
  get next() {
    this.#value = this.#nextValue(this.#value);
    return this.#value;
  }

  static get count() {
    return Stream.#count;
  }
}

class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}

class NextIntegerStream extends Stream {
  constructor() {
    super(0, (value) => value + 1);
  }
}

//Rezolvare cerinta
class NextIntegerOdd extends Stream {
  constructor(value) {
    if (value % 2 != 0) value++;
    super(value, (value) => value + 2);
  }
}

const constant = new ConstantStream(1);
const NextInteger = new NextIntegerStream();
const Odd = new NextIntegerOdd(1);

for (let i = 0; i < 10; i++) {
  console.log(`Odd[${i}] = ${Odd.next}`);
}

console.log(Stream.count);
