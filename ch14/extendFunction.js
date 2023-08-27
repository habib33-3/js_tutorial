function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("common method");
};

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}

extend(Shape, Square);

Square.prototype.draw = function () {
  console.log("drawing");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Shape, Circle);
