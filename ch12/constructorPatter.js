let Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("rect");
    this.printProperties();
  };

  this.printProperties = function () {
    console.log(`width: ${this.width}`);
    console.log(`height: ${this.height}`);
  };
};

let rect2 = new Rectangle(100, 40);
rect2.draw();
