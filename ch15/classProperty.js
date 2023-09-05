class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.another = function () {};
  }
  name = "alex";
  draw() {
    console.log("draw");
  }
}

let rect1 = new Rectangle(33, 22);

console.log(rect1);
