"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _mqtt = require("./mqtt");

var _mqtt2 = _interopRequireDefault(_mqtt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectorFactory = function () {
  function ConnectorFactory() {
    (0, _classCallCheck3.default)(this, ConnectorFactory);
  }

  (0, _createClass3.default)(ConnectorFactory, null, [{
    key: "getConnector",
    value: function getConnector(type, host, port) {
      switch (type) {
        case "mqtt":
          return new _mqtt2.default(host, port);
        case "ws":
          return true; // new WS();
        case "kafka":
          return true; // new Kafka();
        default:
          throw new Error("Type not supported");
      }
    }
  }]);
  return ConnectorFactory;
}();

exports.default = ConnectorFactory;
module.exports = exports.default;