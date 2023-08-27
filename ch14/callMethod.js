function Shape() {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("common method");
};

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log("drawing");
};

const sqr = new Square(55, "green");
