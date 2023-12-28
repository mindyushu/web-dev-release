(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./src/assets/img/user/member/mBean.svg":
/*!**********************************************!*\
  !*** ./src/assets/img/user/member/mBean.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/mBean.226da5d9.svg\";\n\n//# sourceURL=webpack:///./src/assets/img/user/member/mBean.svg?");

/***/ }),

/***/ "./src/utils/ImageToolkit.js":
/*!***********************************!*\
  !*** ./src/utils/ImageToolkit.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _LoadLocalXJMind = _interopRequireDefault(__webpack_require__(/*! ../viewmodel/core/tools/mapfile/LoadLocalXJMind */ \"./src/viewmodel/core/tools/mapfile/LoadLocalXJMind.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n//转换图片格式类\nvar imageToStyle = /*#__PURE__*/function () {\n  function imageToStyle() {\n    _classCallCheck(this, imageToStyle);\n  }\n  _createClass(imageToStyle, [{\n    key: \"base64ToBlob\",\n    value: function base64ToBlob(data) {\n      var arr = data.split(\",\"),\n        mime = arr[0].match(/:(.*?);/)[1],\n        bstr = atob(arr[1]),\n        n = bstr.length,\n        u8arr = new Uint8Array(n);\n      while (n--) {\n        u8arr[n] = bstr.charCodeAt(n);\n      }\n      return new Blob([u8arr], {\n        type: mime\n      });\n    }\n  }, {\n    key: \"getBase64Image\",\n    value: function getBase64Image(img) {\n      var canvas = document.createElement(\"canvas\");\n      canvas.width = img.width;\n      canvas.height = img.height;\n      var ctx = canvas.getContext(\"2d\");\n      ctx.drawImage(img, 0, 0, img.width, img.height);\n      var ext = img.src.substring(img.src.lastIndexOf(\".\") + 1).toLowerCase();\n      var dataURL = canvas.toDataURL(\"image/\" + ext);\n      return dataURL;\n    }\n  }, {\n    key: \"localhostToBase64\",\n    value: function localhostToBase64(data) {\n      var that = this;\n      var image = new Image();\n      return new Promise(function (resolve, reject) {\n        image.onerror = function (e) {\n          reject(e);\n        };\n        image.src = data;\n        image.onload = function () {\n          resolve(that.getBase64Image(image));\n        };\n      });\n    }\n  }, {\n    key: \"webToBase64\",\n    value: function webToBase64(src) {\n      var that = this;\n      var image = new Image();\n      image.setAttribute('crossOrigin', 'Anonymouse');\n      image.src = _LoadLocalXJMind.default.getLocalFilePath(src);\n      return new Promise(function (resolve) {\n        image.onload = function () {\n          resolve(that.getBase64Image(image));\n        };\n      });\n    }\n  }]);\n  return imageToStyle;\n}();\nvar _default = exports.default = imageToStyle;\n\n//# sourceURL=webpack:///./src/utils/ImageToolkit.js?");

/***/ })

}]);