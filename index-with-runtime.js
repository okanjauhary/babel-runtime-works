"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Circle = /*#__PURE__*/function () {
  function Circle(radius) {
    (0, _classCallCheck2["default"])(this, Circle);
    this.radius = radius;
  }

  (0, _createClass2["default"])(Circle, [{
    key: "draw",
    value: function draw() {
      console.log("draw circle with radius", this.radius);
    }
  }]);
  return Circle;
}();

var Square = function Square(width, height) {
  (0, _classCallCheck2["default"])(this, Square);
  this.width = width;
  this.height = height;
};
