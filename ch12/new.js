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

function myNew(constructor) {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);

  let argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}

let rect3 = myNew(Rectangle, 45, 22);
rect3.draw();
