(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./src/utils/timestampToTime.js":
/*!**************************************!*\
  !*** ./src/utils/timestampToTime.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _semver = __webpack_require__(/*! semver */ \"./node_modules/semver/semver.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n//转化时间类\nvar dataTimeToFormat = /*#__PURE__*/function () {\n  function dataTimeToFormat() {\n    _classCallCheck(this, dataTimeToFormat);\n  }\n  _createClass(dataTimeToFormat, [{\n    key: \"timestampToTime\",\n    value: function timestampToTime(timestamp) {\n      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000\n      var Y = date.getFullYear() + '-';\n      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';\n      var D = date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate();\n      var h = date.getHours() + ':';\n      var m = date.getMinutes() + ':';\n      var s = date.getSeconds();\n      return Y + M + D; //+ h  + m + s\n    }\n  }, {\n    key: \"timestampToTimeSeparator\",\n    value: function timestampToTimeSeparator(timestamp) {\n      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000\n      var Y = date.getFullYear() + separator;\n      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + separator;\n      var D = date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate();\n      var h = date.getHours() + ':';\n      var m = date.getMinutes() + ':';\n      var s = date.getSeconds();\n      return Y + M + D; //+ h  + m + s\n    }\n  }, {\n    key: \"timestampToTimeDHM\",\n    value: function timestampToTimeDHM(timestamp) {\n      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000\n      var Y = date.getFullYear() + \"-\";\n      var M = (date.getMonth() + 1 < 10 ? \"0\" + (date.getMonth() + 1) : date.getMonth() + 1) + \"月\";\n      var D = (date.getDate() + 1 < 10 ? \"0\" + date.getDate() : date.getDate()) + \"日 \";\n      var h = date.getHours() + \":\";\n      var m = date.getMinutes() < 10 ? \"0\" + date.getMinutes() : date.getMinutes();\n      var s = date.getSeconds();\n      return M + D + h + m; //+ h  + m + s\n    }\n\n    //秒转分\n  }, {\n    key: \"sToHs\",\n    value: function sToHs(s) {\n      //计算分钟\n      //算法：将秒数除以60，然后下舍入，既得到分钟数\n      var h;\n      h = Math.floor(s / 60);\n      //计算秒\n      //算法：取得秒%60的余数，既得到秒数\n      s = s % 60;\n      //将变量转换为字符串\n      h += '';\n      s += '';\n      //如果只有一位数，前面增加一个0\n      h = h.length == 1 ? '0' + h : h;\n      s = s.length == 1 ? '0' + s : s;\n      return h + ':' + s;\n    }\n    //五分钟前 一小时前 昨天 前天 月日\n  }, {\n    key: \"formatTime\",\n    value: function formatTime(time) {\n      var dataNow = new Date();\n      var timeDiff = dataNow.getTime() - time * 1000; //相差时间毫秒数\n      var days = Math.floor(timeDiff / (24 * 3600 * 1000)); //计算天数\n      var leave1 = timeDiff % (24 * 3600 * 1000); //计算天数后剩余的时间\n      var hours = Math.floor(leave1 / (3600 * 1000)); //计算天数后剩余小时数\n      var leavel2 = timeDiff % (3600 * 1000); //计算剩余小时后剩余的秒数\n      var minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数\n\n      var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000\n      var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;\n      var D = date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate();\n      if (days !== 0 && days <= 2) {\n        if (days == 1) {\n          return \"昨天\";\n        } else if (days == 2) {\n          return \"前天\";\n        }\n      } else if (days >= 3) {\n        return M + \"月\" + D + \"日\";\n      } else if (days == 0 && hours != 0) {\n        return hours + \"小时前\";\n      } else {\n        if (minutes >= 5 && minutes < 60) {\n          return minutes + \"分钟前\";\n        } else if (minutes < 5 && minutes >= 0) {\n          return \"刚刚\";\n        }\n      }\n    }\n  }]);\n  return dataTimeToFormat;\n}();\nvar dataTimeToFormats = new dataTimeToFormat();\nvar _default = exports.default = dataTimeToFormats;\n\n//# sourceURL=webpack:///./src/utils/timestampToTime.js?");

/***/ }),

/***/ "./static/img/userData/link_logo.png":
/*!*******************************************!*\
  !*** ./static/img/userData/link_logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./static/img/userData/link_logo.png?");

/***/ })

}]);