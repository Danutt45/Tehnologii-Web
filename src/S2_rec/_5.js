const fibbo = (n) => {
  if (!n) return 0;
  if (n == 1) return 1;
  return fibbo(n - 1) + fibbo(n - 2);
};
//Nu da o valoare peste 80 , crapa siteul
if (process.argv.length < 3) {
  console.log("Not enough param");
} else console.log(fibbo(parseInt(process.argv[2])));
