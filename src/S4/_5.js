class Masina{
  #culoare;
  #marca;
  #pret;
  #id;

  constructor(culoare,marca,pret,id){
    this.culoare = culoare;
    this.marca = marca;
    this.id = id;
    this.pret = pret;
  }

}

function clone(instance){
  return Object.assign(
    Object.create(
      Object.getPrototypeOf(instance)),
      JSON.parse(JSON.stringify(instance)));
}


let p = new Masina("verde",1,1,112);
console.log(p);
let k = clone(p);
console.log(k);