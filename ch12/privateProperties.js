let Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  let position = {
    x: 2,
    y: -5,
  };

  let printProperties = function () {
    console.log(`width: ${this.width}`);
    console.log(`height: ${this.height}`);
  }.bind(this);

  this.draw = function () {
    console.log("rect");
    printProperties();
    console.log(`position X= ${position.x} Y=${position.y}`);
  };
};

let rect6 = new Rectangle(34, 56);

rect6.draw();
