const _radius=Symbol()
const _name=Symbol()


class Circle {
  constructor(radius,name) {
    this[_radius] = radius;
    this[_name]=name
  }
  draw() {
    console.log("draw");
  }
}

let c1 = new Circle(3,"cyl");

