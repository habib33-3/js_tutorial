function Shape() {}

Shape.prototype = {
  common: function () {
    console.log("common method");
  },
};

function Square(width) {
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  console.log("drawing");
};

let shape = new Shape();
let sqr = new Square(55);

sqr.common()

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);

let c=new Circle()

c.common()