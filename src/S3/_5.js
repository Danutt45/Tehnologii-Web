// 5 - Urmăriți acest videoclip pentru a vedea cum se poate folosi array method chaining. După ce ați testat exemplul implementați cenzurarea unui text printr-o funcție. Funcția primește un șir de caractere și un dicționar sub forma unui array. De exemplu pentru șirul "javascript este minunat" și dicționarul ["este"] funcția va produce "javascript e**e minunat".
// 12:43:05 PM

const dictionary = ["este"];

const sample = "javascript este minunat";

let ce = sample
  .split(" ")
  .filter((x) => x)
  .map((x) => x.trim())
  .map((x) => {
    if (x.indexOf(dictionary) != -1) return (x = "e**e");
    else return x;
  })
  .join(" ");

console.log(ce);
