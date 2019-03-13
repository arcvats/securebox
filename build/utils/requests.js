"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Requests = function Requests(token, connection) {
  (0, _classCallCheck3.default)(this, Requests);

  this.token = token;
  this.connection = connection;
  this.axios = _axios2.default.create({
    baseURL: connection,
    headers: { "X-Access-Token": token }
  });
};

exports.default = Requests;
module.exports = exports.default;