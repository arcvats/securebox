"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_appmetrics=require("appmetrics"),_appmetrics2=_interopRequireDefault(_appmetrics),_underscore=require("underscore"),_underscore2=_interopRequireDefault(_underscore);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var Appmetrics=function(){function a(b,c){(0,_classCallCheck3.default)(this,a),this.appmetrics=_appmetrics2.default.monitor(),this.config=b,this.cli=c}return(0,_createClass3.default)(a,[{key:"init",value:function a(){this.env(),this.generics()}},{key:"env",value:function b(){var a=this;this.appmetrics.on("initialized",function(){var b=a.appmetrics.getEnvironment();a.config.main.environment&&a.cli?console.log(b):console.log("Send to mqtt")})}},{key:"generics",value:function c(){var a=this,b=_underscore2.default.keys(_underscore2.default.omit(_underscore2.default.extend({},this.config.main,this.config.probe,this.config.requests),function(a,b){return!a||"environment"===b}));_underscore2.default.each(b,function(b){a.appmetrics.on(b,function(c){a.cli&&console.log(b,c)})})}},{key:"close",value:function a(){this.appmetrics.stop()}}]),a}();exports.default=Appmetrics,module.exports=exports.default;