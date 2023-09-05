const _radius = new WeakMap();
const _name = new WeakMap();

class Circle {
  constructor(radius, name) {
    _radius.set(this, radius);
    _name.set(this, name);
  }
  draw() {
    console.log("draw");
  }
}

let c1 = new Circle(3, "cyl");


