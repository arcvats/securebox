"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _appmetrics = require("appmetrics");

var _appmetrics2 = _interopRequireDefault(_appmetrics);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _mqtt = require("./mqtt");

var _mqtt2 = _interopRequireDefault(_mqtt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Appmetrics = function () {
  function Appmetrics(config) {
    var connectorConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, Appmetrics);

    this.appmetrics = _appmetrics2.default.monitor();
    this.config = config;
    this.connectorConfig = connectorConfig;
  }

  (0, _createClass3.default)(Appmetrics, [{
    key: "init",
    value: function init() {
      this.env();
      this.generics();
    }
  }, {
    key: "env",
    value: function env() {
      var _this = this;

      this.appmetrics.on("initialized", function () {
        // const env = this.appmetrics.getEnvironment();
        if (_this.config.main.environment) {
          // TODO: send env
        }
      });
    }
  }, {
    key: "generics",
    value: function generics() {
      var params = _underscore2.default.keys(_underscore2.default.omit(_underscore2.default.extend({}, this.config.main, this.config.probe, this.config.requests), function (val, key) {
        return !val || key === "environment";
      }));
      if (this.connectorConfig.type === "mqtt") {
        (0, _mqtt2.default)(this.appmetrics, params, this.connectorConfig.host, this.connectorConfig.port);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.appmetrics.stop();
      this.connector.end();
    }
  }]);
  return Appmetrics;
}();

exports.default = Appmetrics;
module.exports = exports.default;