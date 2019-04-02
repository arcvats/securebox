"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Requests = function () {
  function Requests(token, connection) {
    (0, _classCallCheck3.default)(this, Requests);

    this.token = token;
    this.connection = connection;
    this.axios = _axios2.default.create({
      baseURL: connection,
      headers: { "X-Access-Token": token }
    });
  }

  (0, _createClass3.default)(Requests, [{
    key: "sendStackTrace",
    value: function sendStackTrace(data) {
      return this.axios.post("/stacktrace", data);
    }
  }, {
    key: "sendTimer",
    value: function sendTimer(data) {
      return this.axios.post("/timer", data);
    }
  }, {
    key: "sendAudit",
    value: function sendAudit(data) {
      return this.axios.post("/audit", data);
    }
  }]);
  return Requests;
}();

exports.default = Requests;
module.exports = exports.default;