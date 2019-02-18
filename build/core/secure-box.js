"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_underscore=require("underscore"),_underscore2=_interopRequireDefault(_underscore),_auth=require("../utils/auth"),_auth2=_interopRequireDefault(_auth),_appmetrics=require("../utils/appmetrics"),_appmetrics2=_interopRequireDefault(_appmetrics);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/**
 * @class SecureBox
 * @classdesc Facade interface to provide configuration and monitoring function
 * @example const securebox = new SecureBox(token, connectionString)
 */var SecureBox=function(){function a(b,c){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};(0,_classCallCheck3.default)(this,a);try{if(_underscore2.default.isUndefined(b)||_underscore2.default.isUndefined(c))throw new Error("Missing Arguments");else if(!_underscore2.default.isString(b)||!_underscore2.default.isString(c))throw new Error("Invalid Arguments");else this.token=b,this.connection=c,this.options=d}catch(a){throw a}}return(0,_createClass3.default)(a,[{key:"dashboardMonitoring",value:function d(){var a=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];try{var b=_auth2.default.connectAndVerify(this),c=new _appmetrics2.default(b,a);c.init()}catch(a){throw a}}}],[{key:"consoleMonitoring",value:function d(a){var b=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],c=new _appmetrics2.default(a,b);c.init()}}]),a}();/**
 * @file Main SecureBox Class
 * @author Archit <archit5793@gmail.com>
 */exports.default=SecureBox,module.exports=exports.default;