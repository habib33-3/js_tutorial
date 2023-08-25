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

  this.draw = () => {
    console.log("rect");
    printProperties();
    console.log(`position X= ${position.x} Y=${position.y}`);
  };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

let rect8 = new Rectangle(44, 33);
rect8.draw();
rect8.position = {
  x: 55,
  y: 89,
};
console.log(rect8.position);
