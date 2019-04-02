"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _mqtt = require("mqtt");

var _mqtt2 = _interopRequireDefault(_mqtt);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appmetrics, params) {
  var host = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "localhost";
  var port = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "1883";

  var mqttClient = _mqtt2.default.connect("mqtt://" + host + ":" + port, { clientId: "arc" });
  mqttClient.on("connect", function () {
    console.log("connected on mqtt");
    _underscore2.default.each(params, function (param) {
      appmetrics.on(param, function (data) {
        mqttClient.publish(param, (0, _stringify2.default)(data));
      });
    });
  });
};

module.exports = exports.default;