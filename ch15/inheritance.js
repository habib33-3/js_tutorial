class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("draw");
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculate() {
    return this.width * this.height;
  }
}
