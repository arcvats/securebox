"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stackUtils = require("stack-utils");

var _stackUtils2 = _interopRequireDefault(_stackUtils);

var _performanceNow = require("performance-now");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _callsites = require("callsites");

var _callsites2 = _interopRequireDefault(_callsites);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = null;

var Tracer = function () {
  function Tracer() {
    (0, _classCallCheck3.default)(this, Tracer);

    if (!instance) {
      instance = this;
    }
    this.stack = new _stackUtils2.default({ cwd: process.cwd(), internals: _stackUtils2.default.nodeInternals() });
    this.timer = _performanceNow2.default;
    this.calls = _callsites2.default;
    this.start = 0;
    this.end = 0;
    return instance;
  }

  (0, _createClass3.default)(Tracer, [{
    key: "startTimer",
    value: function startTimer() {
      this.start = this.timer();
    }
  }, {
    key: "endTimer",
    value: function endTimer() {
      this.end = this.timer();
      return {
        total_time: (this.end - this.start).toFixed(3),
        metadata: {
          filename: (0, _callsites2.default)()[2].getFileName(),
          methodName: (0, _callsites2.default)()[2].getMethodName(),
          functionName: (0, _callsites2.default)()[2].getFunctionName(),
          lineNumber: (0, _callsites2.default)()[2].getLineNumber(),
          columnNumber: (0, _callsites2.default)()[2].getColumnNumber()
        },
        time: (0, _moment2.default)().format("MM-DD-YY, h:mm:ss a"),
        trace: _underscore2.default.rest(this.stack.clean(new Error().stack).split("\n"), 2)
      };
    }
  }, {
    key: "stackTrace",
    value: function stackTrace() {
      return {
        trace: _underscore2.default.rest(this.stack.clean(new Error().stack).split("\n"), 2),
        time: (0, _moment2.default)().format("MM-DD-YY, h:mm:ss a")
      };
    }
  }]);
  return Tracer;
}();

exports.default = new Tracer();
module.exports = exports.default;