"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// console.log(a);
// let a = 1;
var fn = function fn() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log('a', args);
};

fn(1, 2, 3);

var Person = function Person() {
  _classCallCheck(this, Person);
}; // const obj = { "a": 1 };
// Object.freeze(obj);
// obj.a = 2
// console.log(obj.a);
