function Square(width) {
  this.width = width;
  this.getWidth = function () {
    console.log(`width is ${this.width}`);
    this.draw();
  };
}

Square.prototype = {
  draw: function () {
    console.log("draw");
  },
  toString: function () {
    return `My width is: ${this.width}`;
  },
};

let sqr1 = new Square(10);
let sqr2 = new Square(3);

sqr1.toString();
