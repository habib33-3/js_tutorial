function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

let canWalk = {
  walk: function () {
    console.log("walk...");
  },
};

let canEat = {
  eat: function () {
    console.log("eat............");
  },
};

let canSwim = {
  swim: function () {
    console.log("swim");
  },
};

let person = Object.assign({}, canWalk, canEat);

// console.log(person);

function Person(name) {
  this.name = name;
}

// Object.assign(Person.prototype, canEat, canWalk);

mixin(Person.prototype, canEat, canWalk);

let p = new Person("alex");
// console.log(p);

function GoldFish(name) {
  this.name = name;
}
mixin(GoldFish.prototype, canEat, canWalk, canSwim);

let g=new GoldFish("sam")
console.log(g);
