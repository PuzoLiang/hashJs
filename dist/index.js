"use strict";

var _hash = _interopRequireDefault(require("./hash"));

var _figlet = _interopRequireDefault(require("figlet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _figlet.default)('Amazing Hash', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }

  console.log(data);
  var vegetables = new _hash.default();
  vegetables.set("apple", Math.random() * 1e20);
  vegetables.set("pea", Math.random() * 1000);
  vegetables.set("Jing.Malan", "13303495232");
  console.log("\u5DF2\u7ECF\u627E\u5230\u8054\u7CFB\u4EBA\uFF0C\u4ED6\u7684\u624B\u673A\u662F".concat(vegetables.get("Jing.Malan")));
});