'use strict';

function Shape() {
  this.draw = function () {
    console.log(this);
  };
}

let s1 = new Shape();
let anotherDraw = s1.draw;
anotherDraw()