// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.draw = function () {
//   console.log(this);
//   console.log("drawing");
// };

// let rect1 = new Rectangle(12, 21);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log("draw");
  }
}

let rect1 = new Rectangle(33, 22);
