//Fibonnaci
// function fibGen() {
//   const cache = [1, 1];

//   const fib = (index) => {
//     if (index < cache.length) {
//       return cache[index];
//     } else {
//       cache[index] = fib(index - 1) + fib(index - 2);
//       return cache[index];
//     }
//   };
//   return fib;
// }

// const fib = fibGen();
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));

// //Rezolvare
// function exp() {
//   const cache = [0, x];
//   const f = (x, pow) => {
//     if (pow < cache.length) {
//       console.log("found " + pow);
//       return cache[pow];
//     } else {
//       console.log("calculated " + pow);
//       cache[pow] = f(x, pow - 1) * x;
//       return cache[pow];
//     }
//   };
//   return f;
// }
// let x = 4;
// const f = exp();

// console.log(f(x, 4));
// console.log(f(x, 2));
// console.log(f(x, 3));
// console.log(f(x, 5));

function pow() {
  const cache = [1, 1];
  let power = (base, exp) => {
    if (exp === 1) {
      return cache[exp];
    } else {
      cache[exp] = base * power(base, exp - 1);
      return cache[exp];
    }
  };
  console.log(cache);
  return power;
}

let p = pow();
console.log(p(2, 4));
console.log(p(2, 5));
