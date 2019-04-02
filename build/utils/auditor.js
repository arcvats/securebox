"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require("child_process");

var _requests = require("./requests");

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var child = (0, _child_process.spawn)("npm", ["audit", "--json"]);
  var finalString = "";
  // use child.stdout.setEncoding('utf8'); if you want text chunks
  child.stdout.on("data", function (chunk) {
    finalString += chunk.toString();
  });

  child.on("close", function (code) {
    new _requests2.default("abcd", "http://localhost:9000").sendAudit({ audit: JSON.parse(finalString) }).then(function (res) {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    });
    console.log("child process exited with code " + code);
  });
};

module.exports = exports.default;