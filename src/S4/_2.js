class Robot {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

// const r0 = new Robot("Some robot");
// r0.move();

class Weapon {
  constructor(description) {
    this.description = description;
  }

  fire() {
    console.log(`${this.description} is firing`);
  }
}

const w0 = new Weapon("pew pew laser");
w0.fire();

class CombatRobot extends Robot {
  constructor(name) {
    super(name);
    this.weapons = [];
  }

  addWeapon(w) {
    this.weapons.push(w);
  }

  fire() {
    for (const w of this.weapons) {
      w.fire();
    }
  }
}

const r1 = new CombatRobot("Some combar rrobot");
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly = function () {
  console.log(`${this.name} is flying`);
};

r1.fly();

//Rezolvare:

class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`Se ruleaza ${this.name}`);
  }
}

class Browser extends Software {
  plugin = [];
  constructor(name, plugins) {
    super(name);
    this.adauga(plugins);
  }
  adauga(plugin) {
    this.plugin.push(plugin);
  }
}

let p1 = new Browser("Ceva", ["Marcel", 2, 3, 4]);
console.log(p1.plugin);
