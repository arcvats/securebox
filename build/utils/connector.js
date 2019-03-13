"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = null;

var Connector = function () {
  function Connector(host, port) {
    (0, _classCallCheck3.default)(this, Connector);

    if (!instance) {
      instance = this;
    }
    this.host = host;
    this.port = port;
    this.client = null;
    return instance;
  }

  (0, _createClass3.default)(Connector, [{
    key: "publish",
    value: function publish() {
      if (_underscore2.default.isNull(this.client)) {
        throw new Error("Unsupported publish");
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      if (_underscore2.default.isNull(this.client)) {
        throw new Error("Unsupported subscribe");
      }
    }
  }]);
  return Connector;
}();

exports.default = Connector;
module.exports = exports.default;