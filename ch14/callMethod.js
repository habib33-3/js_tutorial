function Shape() {
  this.color = this.color;
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

let sqr = new Square(55, "green");
