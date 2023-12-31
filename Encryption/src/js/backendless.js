/*
 * ********************************************************************************************************************
 *  Backendless SDK for JavaScript. Version: 7.0.1
 *
 *  Copyright 2012-2023 BACKENDLESS.COM. All Rights Reserved.
 *
 *  NOTICE: All information contained herein is, and remains the property of Backendless.com and its suppliers,
 *  if any. The intellectual and technical concepts contained herein are proprietary to Backendless.com and its
 *  suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret
 *  or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden
 *  unless prior written permission is obtained from Backendless.com.
 * ********************************************************************************************************************
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Backendless"] = factory();
	else
		root["Backendless"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bl/constants.js":
/*!*****************************!*\
  !*** ./src/bl/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isExecutionType = exports.ExecutionTypes = exports.EXECUTION_TYPE_HEADER = void 0;
var EXECUTION_TYPE_HEADER = 'bl-execution-type';
exports.EXECUTION_TYPE_HEADER = EXECUTION_TYPE_HEADER;
var ExecutionTypes = {
  SYNC: 'sync',
  ASYNC: 'async',
  ASYNC_LOW_PRIORITY: 'async-low-priority'
};
exports.ExecutionTypes = ExecutionTypes;
var executionTypesList = Object.keys(ExecutionTypes).map(function (k) {
  return ExecutionTypes[k];
});
var isExecutionType = function isExecutionType(type) {
  return executionTypesList.includes(type);
};
exports.isExecutionType = isExecutionType;

/***/ }),

/***/ "./src/bl/custom-services.js":
/*!***********************************!*\
  !*** ./src/bl/custom-services.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/bl/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CustomServices = /*#__PURE__*/function () {
  function CustomServices(app) {
    (0, _classCallCheck2["default"])(this, CustomServices);
    this.app = app;
  }
  (0, _createClass2["default"])(CustomServices, [{
    key: "invoke",
    value: function () {
      var _invoke = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(serviceName, methodName, parameters, options) {
        var headers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!serviceName || typeof serviceName !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Service Name must be provided and must be a string.');
            case 2:
              if (!(!methodName || typeof methodName !== 'string')) {
                _context.next = 4;
                break;
              }
              throw new Error('Method Name must be provided and must be a string.');
            case 4:
              if (typeof options === 'string') {
                options = {
                  executionType: options
                };
              }
              if (typeof parameters === 'string' && (0, _constants.isExecutionType)(parameters)) {
                options = {
                  executionType: parameters
                };
                parameters = undefined;
              }
              options = options || {};
              headers = _objectSpread({}, options.httpRequestHeaders);
              if (options.executionType) {
                headers[_constants.EXECUTION_TYPE_HEADER] = options.executionType;
              }
              return _context.abrupt("return", this.app.request.post({
                url: this.app.urls.blServiceMethod(serviceName, methodName),
                data: parameters,
                headers: headers
              }));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function invoke(_x, _x2, _x3, _x4) {
        return _invoke.apply(this, arguments);
      }
      return invoke;
    }()
  }]);
  return CustomServices;
}();
exports["default"] = CustomServices;

/***/ }),

/***/ "./src/bl/events.js":
/*!**************************!*\
  !*** ./src/bl/events.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/bl/constants.js");
var Events = /*#__PURE__*/function () {
  function Events(app) {
    (0, _classCallCheck2["default"])(this, Events);
    this.app = app;
  }
  (0, _createClass2["default"])(Events, [{
    key: "dispatch",
    value: function () {
      var _dispatch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(eventName, eventArgs, executionType) {
        var headers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!eventName || typeof eventName !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Event Name must be provided and must be a string.');
            case 2:
              if (typeof eventArgs === 'string' && (0, _constants.isExecutionType)(eventArgs)) {
                executionType = eventArgs;
                eventArgs = undefined;
              }
              if (!(eventArgs && ((0, _typeof2["default"])(eventArgs) !== 'object' || Array.isArray(eventArgs)))) {
                _context.next = 5;
                break;
              }
              throw new Error('Event Arguments must be an object.');
            case 5:
              headers = {};
              if (executionType) {
                headers[_constants.EXECUTION_TYPE_HEADER] = executionType;
              }
              return _context.abrupt("return", this.app.request.post({
                url: this.app.urls.blEvent(eventName),
                data: eventArgs || {},
                headers: headers
              }));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function dispatch(_x, _x2, _x3) {
        return _dispatch.apply(this, arguments);
      }
      return dispatch;
    }()
  }]);
  return Events;
}();
exports["default"] = Events;

/***/ }),

/***/ "./src/bl/index.js":
/*!*************************!*\
  !*** ./src/bl/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/bl/constants.js");
var _customServices = _interopRequireDefault(__webpack_require__(/*! ./custom-services */ "./src/bl/custom-services.js"));
var _events = _interopRequireDefault(__webpack_require__(/*! ./events */ "./src/bl/events.js"));
var BL = /*#__PURE__*/(0, _createClass2["default"])(function BL(app) {
  (0, _classCallCheck2["default"])(this, BL);
  this.app = app;
  this.ExecutionTypes = _constants.ExecutionTypes;
  this.CustomServices = new _customServices["default"](app);
  this.Events = new _events["default"](app);
});
var _default = BL;
exports["default"] = _default;

/***/ }),

/***/ "./src/cache/index.js":
/*!****************************!*\
  !*** ./src/cache/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
var Cache = /*#__PURE__*/function () {
  function Cache(app) {
    (0, _classCallCheck2["default"])(this, Cache);
    this.app = app;
    this.parsers = {};
  }
  (0, _createClass2["default"])(Cache, [{
    key: "setObjectFactory",
    value: function setObjectFactory(objectName, factoryMethod) {
      this.parsers[objectName] = factoryMethod;
    }
  }, {
    key: "parseItem",
    value: function parseItem(item) {
      var className = item && item.___class;
      if (className) {
        var Class = this.parsers[className];
        if (Class) {
          item = new Class(item);
        }
      }
      return item;
    }
  }, {
    key: "stringifyItem",
    value: function stringifyItem(item) {
      if (_utils["default"].isCustomClassInstance(item)) {
        item.___class = item.___class || _utils["default"].getClassName(item);
      }
      return JSON.stringify(item);
    }
  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(key, value, timeToLive) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!key || typeof key !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Cache Key must be provided and must be a string.');
            case 2:
              if (!(timeToLive && (typeof timeToLive !== 'number' || timeToLive < 0))) {
                _context.next = 4;
                break;
              }
              throw new Error('Cache TimeToLive must be a positive number.');
            case 4:
              return _context.abrupt("return", this.app.request.put({
                url: this.app.urls.cacheItem(key),
                query: {
                  timeout: timeToLive
                },
                headers: {
                  'Content-Type': 'application/json'
                },
                data: this.stringifyItem(value)
              }));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function put(_x, _x2, _x3) {
        return _put.apply(this, arguments);
      }
      return put;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(key) {
        var _this = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!key || typeof key !== 'string')) {
                _context2.next = 2;
                break;
              }
              throw new Error('Cache Key must be provided and must be a string.');
            case 2:
              return _context2.abrupt("return", this.app.request.get({
                url: this.app.urls.cacheItem(key)
              }).then(function (item) {
                return _this.parseItem(item);
              }));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function get(_x4) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(key) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!key || typeof key !== 'string')) {
                _context3.next = 2;
                break;
              }
              throw new Error('Cache Key must be provided and must be a string.');
            case 2:
              return _context3.abrupt("return", this.app.request["delete"]({
                url: this.app.urls.cacheItem(key)
              }));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function remove(_x5) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }, {
    key: "contains",
    value: function () {
      var _contains = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(key) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!key || typeof key !== 'string')) {
                _context4.next = 2;
                break;
              }
              throw new Error('Cache Key must be provided and must be a string.');
            case 2:
              return _context4.abrupt("return", this.app.request.get({
                url: this.app.urls.cacheItemCheck(key)
              }));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function contains(_x6) {
        return _contains.apply(this, arguments);
      }
      return contains;
    }()
  }, {
    key: "expireIn",
    value: function () {
      var _expireIn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(key, seconds) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!key || typeof key !== 'string')) {
                _context5.next = 2;
                break;
              }
              throw new Error('Cache Key must be provided and must be a string.');
            case 2:
              if (!(typeof seconds !== 'number' || seconds <= 0)) {
                _context5.next = 4;
                break;
              }
              throw new Error('Cache Expiration must be provided and must be a number of seconds.');
            case 4:
              return _context5.abrupt("return", this.app.request.put({
                url: this.app.urls.cacheItemExpireIn(key),
                query: {
                  timeout: seconds
                },
                data: {}
              }));
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function expireIn(_x7, _x8) {
        return _expireIn.apply(this, arguments);
      }
      return expireIn;
    }()
  }, {
    key: "expireAt",
    value: function () {
      var _expireAt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(key, timestamp) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!key || typeof key !== 'string')) {
                _context6.next = 2;
                break;
              }
              throw new Error('Cache Key must be provided and must be a string.');
            case 2:
              if (!(timestamp instanceof Date)) {
                _context6.next = 6;
                break;
              }
              timestamp = timestamp.getTime();
              _context6.next = 8;
              break;
            case 6:
              if (!(typeof timestamp !== 'number' || timestamp <= 0)) {
                _context6.next = 8;
                break;
              }
              throw new Error('Cache Expiration must be provided and must be a timestamp or an instance of Date.');
            case 8:
              return _context6.abrupt("return", this.app.request.put({
                url: this.app.urls.cacheItemExpireAt(key),
                query: {
                  timestamp: timestamp
                },
                data: {}
              }));
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function expireAt(_x9, _x10) {
        return _expireAt.apply(this, arguments);
      }
      return expireAt;
    }()
  }]);
  return Cache;
}();
exports["default"] = Cache;

/***/ }),

/***/ "./src/commerce/index.js":
/*!*******************************!*\
  !*** ./src/commerce/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var Commerce = /*#__PURE__*/function () {
  function Commerce(app) {
    (0, _classCallCheck2["default"])(this, Commerce);
    this.app = app;
  }
  (0, _createClass2["default"])(Commerce, [{
    key: "validatePlayPurchase",
    value: function () {
      var _validatePlayPurchase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(packageName, productId, token) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!packageName || typeof packageName !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Package Name must be provided and must be a string.');
            case 2:
              if (!(!productId || typeof productId !== 'string')) {
                _context.next = 4;
                break;
              }
              throw new Error('Product Id must be provided and must be a string.');
            case 4:
              if (!(!token || typeof token !== 'string')) {
                _context.next = 6;
                break;
              }
              throw new Error('Token must be provided and must be a string.');
            case 6:
              return _context.abrupt("return", this.app.request.get({
                url: this.app.urls.commerceValidate(packageName, productId, token)
              }));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function validatePlayPurchase(_x, _x2, _x3) {
        return _validatePlayPurchase.apply(this, arguments);
      }
      return validatePlayPurchase;
    }()
  }, {
    key: "cancelPlaySubscription",
    value: function () {
      var _cancelPlaySubscription = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(packageName, subscriptionId, token) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!packageName || typeof packageName !== 'string')) {
                _context2.next = 2;
                break;
              }
              throw new Error('Package Name must be provided and must be a string.');
            case 2:
              if (!(!subscriptionId || typeof subscriptionId !== 'string')) {
                _context2.next = 4;
                break;
              }
              throw new Error('Subscription Id must be provided and must be a string.');
            case 4:
              if (!(!token || typeof token !== 'string')) {
                _context2.next = 6;
                break;
              }
              throw new Error('Token must be provided and must be a string.');
            case 6:
              return _context2.abrupt("return", this.app.request.post({
                url: this.app.urls.commerceSubCancel(packageName, subscriptionId, token)
              }));
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function cancelPlaySubscription(_x4, _x5, _x6) {
        return _cancelPlaySubscription.apply(this, arguments);
      }
      return cancelPlaySubscription;
    }()
  }, {
    key: "getPlaySubscriptionStatus",
    value: function () {
      var _getPlaySubscriptionStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(packageName, subscriptionId, token) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!packageName || typeof packageName !== 'string')) {
                _context3.next = 2;
                break;
              }
              throw new Error('Package Name must be provided and must be a string.');
            case 2:
              if (!(!subscriptionId || typeof subscriptionId !== 'string')) {
                _context3.next = 4;
                break;
              }
              throw new Error('Subscription Id must be provided and must be a string.');
            case 4:
              if (!(!token || typeof token !== 'string')) {
                _context3.next = 6;
                break;
              }
              throw new Error('Token must be provided and must be a string.');
            case 6:
              return _context3.abrupt("return", this.app.request.get({
                url: this.app.urls.commerceSubStatus(packageName, subscriptionId, token)
              }));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getPlaySubscriptionStatus(_x7, _x8, _x9) {
        return _getPlaySubscriptionStatus.apply(this, arguments);
      }
      return getPlaySubscriptionStatus;
    }()
  }]);
  return Commerce;
}();
exports["default"] = Commerce;

/***/ }),

/***/ "./src/counters/counter.js":
/*!*********************************!*\
  !*** ./src/counters/counter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var Counter = /*#__PURE__*/function () {
  function Counter(name, counters) {
    (0, _classCallCheck2["default"])(this, Counter);
    if (!name || typeof name !== 'string') {
      throw new Error('Counter Name must be non empty String');
    }
    this.name = name;
    this.counters = counters;
  }
  (0, _createClass2["default"])(Counter, [{
    key: "incrementAndGet",
    value: function incrementAndGet() {
      return this.counters.incrementAndGet(this.name);
    }
  }, {
    key: "getAndIncrement",
    value: function getAndIncrement() {
      return this.counters.getAndIncrement(this.name);
    }
  }, {
    key: "decrementAndGet",
    value: function decrementAndGet() {
      return this.counters.decrementAndGet(this.name);
    }
  }, {
    key: "getAndDecrement",
    value: function getAndDecrement() {
      return this.counters.getAndDecrement(this.name);
    }
  }, {
    key: "reset",
    value: function reset() {
      return this.counters.reset(this.name);
    }
  }, {
    key: "get",
    value: function get() {
      return this.counters.get(this.name);
    }
  }, {
    key: "addAndGet",
    value: function addAndGet(value) {
      return this.counters.addAndGet(this.name, value);
    }
  }, {
    key: "getAndAdd",
    value: function getAndAdd(value) {
      return this.counters.getAndAdd(this.name, value);
    }
  }, {
    key: "compareAndSet",
    value: function compareAndSet(expected, updated) {
      return this.counters.compareAndSet(this.name, expected, updated);
    }
  }]);
  return Counter;
}();
exports["default"] = Counter;

/***/ }),

/***/ "./src/counters/index.js":
/*!*******************************!*\
  !*** ./src/counters/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _counter = _interopRequireDefault(__webpack_require__(/*! ./counter */ "./src/counters/counter.js"));
var Counters = /*#__PURE__*/function () {
  function Counters(app) {
    (0, _classCallCheck2["default"])(this, Counters);
    this.app = app;
  }
  (0, _createClass2["default"])(Counters, [{
    key: "of",
    value: function of(name) {
      return new _counter["default"](name, this);
    }
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pattern) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(pattern !== null && pattern !== undefined && typeof pattern !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Counters Pattern can be a string only');
            case 2:
              return _context.abrupt("return", this.app.request.get({
                url: this.app.urls.countersList(pattern)
              }));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function list(_x) {
        return _list.apply(this, arguments);
      }
      return list;
    }()
  }, {
    key: "incrementAndGet",
    value: function () {
      var _incrementAndGet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(counterName) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context2.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              return _context2.abrupt("return", this.app.request.put({
                url: this.app.urls.counterIncrementAndGet(counterName)
              }));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function incrementAndGet(_x2) {
        return _incrementAndGet.apply(this, arguments);
      }
      return incrementAndGet;
    }()
  }, {
    key: "getAndIncrement",
    value: function () {
      var _getAndIncrement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(counterName) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context3.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              return _context3.abrupt("return", this.app.request.put({
                url: this.app.urls.counterGetAndIncrement(counterName)
              }));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getAndIncrement(_x3) {
        return _getAndIncrement.apply(this, arguments);
      }
      return getAndIncrement;
    }()
  }, {
    key: "decrementAndGet",
    value: function () {
      var _decrementAndGet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(counterName) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context4.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              return _context4.abrupt("return", this.app.request.put({
                url: this.app.urls.counterDecrementAndGet(counterName)
              }));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function decrementAndGet(_x4) {
        return _decrementAndGet.apply(this, arguments);
      }
      return decrementAndGet;
    }()
  }, {
    key: "getAndDecrement",
    value: function () {
      var _getAndDecrement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(counterName) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context5.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              return _context5.abrupt("return", this.app.request.put({
                url: this.app.urls.counterGetAndDecrement(counterName)
              }));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getAndDecrement(_x5) {
        return _getAndDecrement.apply(this, arguments);
      }
      return getAndDecrement;
    }()
  }, {
    key: "reset",
    value: function () {
      var _reset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(counterName) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context6.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              return _context6.abrupt("return", this.app.request.put({
                url: this.app.urls.counterReset(counterName)
              }));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function reset(_x6) {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(counterName) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context7.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              return _context7.abrupt("return", this.app.request.get({
                url: this.app.urls.counter(counterName)
              }));
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function get(_x7) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "addAndGet",
    value: function () {
      var _addAndGet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(counterName, value) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context8.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              if (!(typeof value !== 'number')) {
                _context8.next = 4;
                break;
              }
              throw new Error('Counter Value must be a number.');
            case 4:
              return _context8.abrupt("return", this.app.request.put({
                url: this.app.urls.counterAddAndGet(counterName),
                query: {
                  value: value
                }
              }));
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function addAndGet(_x8, _x9) {
        return _addAndGet.apply(this, arguments);
      }
      return addAndGet;
    }()
  }, {
    key: "getAndAdd",
    value: function () {
      var _getAndAdd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(counterName, value) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context9.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              if (!(typeof value !== 'number')) {
                _context9.next = 4;
                break;
              }
              throw new Error('Counter Value must be a number.');
            case 4:
              return _context9.abrupt("return", this.app.request.put({
                url: this.app.urls.counterGetAndAdd(counterName),
                query: {
                  value: value
                }
              }));
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getAndAdd(_x10, _x11) {
        return _getAndAdd.apply(this, arguments);
      }
      return getAndAdd;
    }()
  }, {
    key: "compareAndSet",
    value: function () {
      var _compareAndSet = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(counterName, expected, updated) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(!counterName || typeof counterName !== 'string')) {
                _context10.next = 2;
                break;
              }
              throw new Error('Counter Name must be provided and must be a string.');
            case 2:
              if (!(typeof expected !== 'number')) {
                _context10.next = 4;
                break;
              }
              throw new Error('Counter Expected Value must be a number.');
            case 4:
              if (!(typeof updated !== 'number')) {
                _context10.next = 6;
                break;
              }
              throw new Error('Counter Updated Value must be a number.');
            case 6:
              return _context10.abrupt("return", this.app.request.put({
                url: this.app.urls.counterCompareAndSet(counterName),
                query: {
                  expected: expected,
                  updatedvalue: updated
                }
              }));
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function compareAndSet(_x12, _x13, _x14) {
        return _compareAndSet.apply(this, arguments);
      }
      return compareAndSet;
    }()
  }]);
  return Counters;
}();
exports["default"] = Counters;

/***/ }),

/***/ "./src/data/data-query-builder.js":
/*!****************************************!*\
  !*** ./src/data/data-query-builder.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.PAGING_DEFAULTS = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var PAGING_DEFAULTS = {
  pageSize: 10,
  offset: 0
};
exports.PAGING_DEFAULTS = PAGING_DEFAULTS;
var DataQueryBuilder = /*#__PURE__*/function () {
  function DataQueryBuilder() {
    (0, _classCallCheck2["default"])(this, DataQueryBuilder);
    this.offset = PAGING_DEFAULTS.offset;
    this.pageSize = PAGING_DEFAULTS.pageSize;
    this.sortBy = null;
    this.groupBy = null;
    this.properties = null;
    this.excludeProps = null;
    this.whereClause = null;
    this.havingClause = null;
    this.relations = null;
    this.relationsDepth = null;
    this.relationsPageSize = null;
    this.distinct = false;
  }
  (0, _createClass2["default"])(DataQueryBuilder, [{
    key: "setPageSize",
    value: function setPageSize(pageSize) {
      if (pageSize <= 0) {
        throw new Error('Page size must be a positive value.');
      }
      this.pageSize = pageSize;
      return this;
    }
  }, {
    key: "getPageSize",
    value: function getPageSize() {
      return this.pageSize;
    }
  }, {
    key: "setOffset",
    value: function setOffset(offset) {
      if (offset < 0) {
        throw new Error('Offset cannot have a negative value.');
      }
      this.offset = offset;
      return this;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      return this.offset;
    }
  }, {
    key: "prepareNextPage",
    value: function prepareNextPage() {
      this.setOffset(this.offset + this.pageSize);
      return this;
    }
  }, {
    key: "preparePreviousPage",
    value: function preparePreviousPage() {
      this.setOffset(Math.max(this.offset - this.pageSize, 0));
      return this;
    }
  }, {
    key: "getProperties",
    value: function getProperties() {
      return this.properties;
    }
  }, {
    key: "setProperties",
    value: function setProperties(properties) {
      this.properties = _utils["default"].castArray(properties);
      return this;
    }
  }, {
    key: "addProperty",
    value: function addProperty(prop) {
      this.properties = this.properties || [];
      this.properties.push(prop);
      return this;
    }
  }, {
    key: "addProperties",
    value: function addProperties() {
      var _this = this;
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      properties.forEach(function (p) {
        _utils["default"].castArray(p).forEach(function (property) {
          return _this.addProperty(property);
        });
      });
      return this;
    }
  }, {
    key: "addAllProperties",
    value: function addAllProperties() {
      this.addProperty('*');
      return this;
    }
  }, {
    key: "excludeProperty",
    value: function excludeProperty(property) {
      this.excludeProps = this.excludeProps || [];
      this.excludeProps.push(property);
      return this;
    }
  }, {
    key: "excludeProperties",
    value: function excludeProperties() {
      var _this2 = this;
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      properties.forEach(function (p) {
        _utils["default"].castArray(p).forEach(function (property) {
          return _this2.excludeProperty(property);
        });
      });
      return this;
    }
  }, {
    key: "getExcludeProperties",
    value: function getExcludeProperties() {
      return this.excludeProps;
    }
  }, {
    key: "getWhereClause",
    value: function getWhereClause() {
      return this.whereClause;
    }
  }, {
    key: "setWhereClause",
    value: function setWhereClause(whereClause) {
      this.whereClause = whereClause;
      return this;
    }
  }, {
    key: "getHavingClause",
    value: function getHavingClause() {
      return this.havingClause;
    }
  }, {
    key: "setHavingClause",
    value: function setHavingClause(havingClause) {
      this.havingClause = havingClause;
      return this;
    }
  }, {
    key: "getSortBy",
    value: function getSortBy() {
      return this.sortBy;
    }
  }, {
    key: "setSortBy",
    value: function setSortBy(sortBy) {
      this.sortBy = _utils["default"].castArray(sortBy);
      return this;
    }
  }, {
    key: "getGroupBy",
    value: function getGroupBy() {
      return this.groupBy;
    }
  }, {
    key: "setGroupBy",
    value: function setGroupBy(groupBy) {
      this.groupBy = _utils["default"].castArray(groupBy);
      return this;
    }
  }, {
    key: "getRelated",
    value: function getRelated() {
      return this.relations;
    }
  }, {
    key: "setRelated",
    value: function setRelated(relations) {
      this.relations = _utils["default"].castArray(relations);
      return this;
    }
  }, {
    key: "addRelated",
    value: function addRelated(relations) {
      this.relations = (this.relations || []).concat(relations);
      return this;
    }
  }, {
    key: "setRelationsDepth",
    value: function setRelationsDepth(relationsDepth) {
      this.relationsDepth = relationsDepth;
      return this;
    }
  }, {
    key: "getRelationsDepth",
    value: function getRelationsDepth() {
      return this.relationsDepth;
    }
  }, {
    key: "setRelationsPageSize",
    value: function setRelationsPageSize(relationsPageSize) {
      this.relationsPageSize = relationsPageSize;
      return this;
    }
  }, {
    key: "getRelationsPageSize",
    value: function getRelationsPageSize() {
      return this.relationsPageSize;
    }
  }, {
    key: "setDistinct",
    value: function setDistinct(distinct) {
      this.distinct = !!distinct;
      return this;
    }
  }, {
    key: "getDistinct",
    value: function getDistinct() {
      return this.distinct;
    }
  }, {
    key: "setFileReferencePrefix",
    value: function setFileReferencePrefix(fileReferencePrefix) {
      this.fileReferencePrefix = fileReferencePrefix;
      return this;
    }
  }, {
    key: "getFileReferencePrefix",
    value: function getFileReferencePrefix() {
      return this.fileReferencePrefix;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        pageSize: this.pageSize,
        offset: this.offset,
        properties: this.properties,
        excludeProps: this.excludeProps,
        where: this.whereClause,
        having: this.havingClause,
        sortBy: this.sortBy,
        groupBy: this.groupBy,
        relations: this.relations,
        relationsDepth: this.relationsDepth,
        relationsPageSize: this.relationsPageSize,
        distinct: this.distinct,
        fileReferencePrefix: this.fileReferencePrefix
      };
    }
  }], [{
    key: "create",
    value: function create() {
      return new this();
    }
  }, {
    key: "toRequestBody",
    value: function toRequestBody(queryBuilder) {
      var query = queryBuilder instanceof DataQueryBuilder ? queryBuilder.toJSON() : queryBuilder ? _objectSpread({}, queryBuilder) : {};
      Object.keys(query).forEach(function (param) {
        if (Array.isArray(query[param])) {
          if (param !== 'groupPath') {
            query[param] = query[param].join(',');
          }
        } else if (query[param] == null) {
          delete query[param];
        }
      });
      if (query.properties) {
        query.props = query.properties;
        delete query.properties;
      }
      if (query.relations) {
        query.loadRelations = query.relations;
        delete query.relations;
      }
      return query;
    }
  }, {
    key: "toQueryString",
    value: function toQueryString(query) {
      if (!query) {
        return;
      }
      if (query instanceof DataQueryBuilder) {
        query = query.toJSON();
      }
      var queryTokens = [];
      if (query.pageSize > 0) {
        queryTokens.push("pageSize=".concat(query.pageSize));
      }
      if (query.offset > 0) {
        queryTokens.push("offset=".concat(query.offset));
      }
      if (Array.isArray(query.properties) && query.properties.length) {
        query.properties.map(function (property) {
          queryTokens.push("property=".concat(encodeURIComponent(property)));
        });
      }
      if (Array.isArray(query.excludeProps) && query.excludeProps.length) {
        queryTokens.push("excludeProps=".concat(encodeArrayToUriComponent(query.excludeProps)));
      }
      if (query.where) {
        queryTokens.push("where=".concat(encodeURIComponent(query.where)));
      }
      if (query.having) {
        queryTokens.push("having=".concat(encodeURIComponent(query.having)));
      }
      if (query.sortBy) {
        queryTokens.push(Array.isArray(query.sortBy) ? "sortBy=".concat(encodeArrayToUriComponent(query.sortBy)) : "sortBy=".concat(encodeURIComponent(query.sortBy)));
      }
      if (query.groupBy) {
        queryTokens.push(Array.isArray(query.groupBy) ? "groupBy=".concat(encodeArrayToUriComponent(query.groupBy)) : "groupBy=".concat(encodeURIComponent(query.groupBy)));
      }
      if (Array.isArray(query.relations)) {
        queryTokens.push(query.relations.length ? "loadRelations=".concat(encodeArrayToUriComponent(query.relations)) : 'loadRelations=*');
      }
      if (query.relationsDepth > 0) {
        queryTokens.push("relationsDepth=".concat(query.relationsDepth));
      }
      if (query.relationsPageSize > 0) {
        queryTokens.push("relationsPageSize=".concat(query.relationsPageSize));
      }
      if (query.distinct) {
        queryTokens.push("distinct=".concat(query.distinct));
      }
      if (query.fileReferencePrefix) {
        queryTokens.push("fileReferencePrefix=".concat(encodeURIComponent(query.fileReferencePrefix)));
      }
      return queryTokens.join('&');
    }
  }]);
  return DataQueryBuilder;
}();
exports["default"] = DataQueryBuilder;
function encodeArrayToUriComponent(items) {
  return items.map(function (item) {
    return encodeURIComponent(item);
  }).join(',');
}

/***/ }),

/***/ "./src/data/geo/constants.js":
/*!***********************************!*\
  !*** ./src/data/geo/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GeoTypes = void 0;
var GeoTypes = {
  POINT: 'Point',
  LINE_STRING: 'LineString',
  POLYGON: 'Polygon'
};
exports.GeoTypes = GeoTypes;

/***/ }),

/***/ "./src/data/geo/geo-constructor.js":
/*!*****************************************!*\
  !*** ./src/data/geo/geo-constructor.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GEO_CLASSES = void 0;
exports["default"] = geoConstructor;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _point = _interopRequireDefault(__webpack_require__(/*! ./point */ "./src/data/geo/point.js"));
var _linestring = _interopRequireDefault(__webpack_require__(/*! ./linestring */ "./src/data/geo/linestring.js"));
var _polygon = _interopRequireDefault(__webpack_require__(/*! ./polygon */ "./src/data/geo/polygon.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/data/geo/constants.js");
var _spatialReferenceSystem = _interopRequireDefault(__webpack_require__(/*! ./spatial-reference-system */ "./src/data/geo/spatial-reference-system.js"));
var _Constructors;
var GEO_CLASSES = ['com.backendless.persistence.Polygon', 'com.backendless.persistence.LineString', 'com.backendless.persistence.Point', 'com.backendless.persistence.Geometry'];
exports.GEO_CLASSES = GEO_CLASSES;
var pointConstructor = function pointConstructor(coordinates, srs) {
  var _coordinates = (0, _slicedToArray2["default"])(coordinates, 2),
    x = _coordinates[0],
    y = _coordinates[1];
  return new _point["default"](srs).setX(x).setY(y);
};
var lineStringConstructor = function lineStringConstructor(coordinates, srs) {
  var points = coordinates.map(function (coordsPair) {
    return pointConstructor(coordsPair, srs);
  });
  return new _linestring["default"](points, srs);
};
var polygonConstructor = function polygonConstructor(coordinates, srs) {
  var lineStrings = coordinates.map(function (lineString) {
    return lineStringConstructor(lineString, srs);
  });
  var _lineStrings = (0, _toArray2["default"])(lineStrings),
    boundary = _lineStrings[0],
    holes = _lineStrings.slice(1);
  return new _polygon["default"](boundary, holes, srs);
};
var Constructors = (_Constructors = {}, (0, _defineProperty2["default"])(_Constructors, _constants.GeoTypes.POINT, pointConstructor), (0, _defineProperty2["default"])(_Constructors, _constants.GeoTypes.LINE_STRING, lineStringConstructor), (0, _defineProperty2["default"])(_Constructors, _constants.GeoTypes.POLYGON, polygonConstructor), _Constructors);
function geoConstructor(geoObject, srs) {
  var constructor = Constructors[geoObject.type];
  srs = srs || _spatialReferenceSystem["default"].valueBySRSId(geoObject.srsId);
  if (constructor) {
    return constructor(geoObject.coordinates, srs);
  }
  throw new Error("There is no constructor for ".concat(geoObject.type));
}

/***/ }),

/***/ "./src/data/geo/geo-json-parser.js":
/*!*****************************************!*\
  !*** ./src/data/geo/geo-json-parser.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _geoConstructor = _interopRequireDefault(__webpack_require__(/*! ./geo-constructor */ "./src/data/geo/geo-constructor.js"));
var GeoJSONParser = /*#__PURE__*/function () {
  function GeoJSONParser(srs) {
    (0, _classCallCheck2["default"])(this, GeoJSONParser);
    this.srs = srs;
  }
  (0, _createClass2["default"])(GeoJSONParser, [{
    key: "read",
    value: function read(geoJSON) {
      return (0, _geoConstructor["default"])(geoJSON, this.srs);
    }
  }]);
  return GeoJSONParser;
}();
exports["default"] = GeoJSONParser;

/***/ }),

/***/ "./src/data/geo/geometry.js":
/*!**********************************!*\
  !*** ./src/data/geo/geometry.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _spatialReferenceSystem = _interopRequireDefault(__webpack_require__(/*! ./spatial-reference-system */ "./src/data/geo/spatial-reference-system.js"));
var _geoJsonParser = _interopRequireDefault(__webpack_require__(/*! ./geo-json-parser */ "./src/data/geo/geo-json-parser.js"));
var _wktParser = _interopRequireDefault(__webpack_require__(/*! ./wkt-parser */ "./src/data/geo/wkt-parser.js"));
var Geometry = /*#__PURE__*/function () {
  function Geometry(srs) {
    (0, _classCallCheck2["default"])(this, Geometry);
    this.srs = srs || _spatialReferenceSystem["default"].DEFAULT;
  }
  (0, _createClass2["default"])(Geometry, [{
    key: "getSRS",
    value: function getSRS() {
      return this.srs;
    }

    /**
     * @abstract
     * @description It is an abstract method and it must be overridden in an inherited class
     */
  }, {
    key: "getGeojsonType",
    value: function getGeojsonType() {}

    /**
     * @abstract
     * @description It is an abstract method and it must be overridden in an inherited class
     */
  }, {
    key: "getWktType",
    value: function getWktType() {}

    /**
     * @abstract
     * @description It is an abstract method and it must be overridden in an inherited class
     */
  }, {
    key: "wktCoordinatePairs",
    value: function wktCoordinatePairs() {}

    /**
     * @abstract
     * @description It is an abstract method and it must be overridden in an inherited class
     */
  }, {
    key: "jsonCoordinatePairs",
    value: function jsonCoordinatePairs() {}
  }, {
    key: "asGeoJSON",
    value: function asGeoJSON() {
      return {
        type: this.getGeojsonType(),
        coordinates: this.jsonCoordinatePairs()
      };
    }
  }, {
    key: "asWKT",
    value: function asWKT() {
      return this.getWktType() + '(' + this.wktCoordinatePairs() + ')';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.asGeoJSON();
    }
  }, {
    key: "toString",
    value: function toString() {
      return '\'' + this.asWKT() + '\'';
    }
  }], [{
    key: "fromWKT",
    value: function fromWKT(wellKnownText, srs) {
      return new _wktParser["default"](srs).read(wellKnownText);
    }
  }, {
    key: "fromGeoJSON",
    value: function fromGeoJSON(geoJSON, srs) {
      return new _geoJsonParser["default"](srs).read(geoJSON);
    }
  }]);
  return Geometry;
}();
var _default = Geometry;
exports["default"] = _default;

/***/ }),

/***/ "./src/data/geo/linestring.js":
/*!************************************!*\
  !*** ./src/data/geo/linestring.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _geometry = _interopRequireDefault(__webpack_require__(/*! ./geometry */ "./src/data/geo/geometry.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/data/geo/constants.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var GEOJSON_TYPE = _constants.GeoTypes.LINE_STRING;
var WKT_TYPE = GEOJSON_TYPE.toUpperCase();
var LineString = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2["default"])(LineString, _Geometry);
  var _super = _createSuper(LineString);
  function LineString(points, srs) {
    var _this;
    (0, _classCallCheck2["default"])(this, LineString);
    _this = _super.call(this, srs);
    _this.points = points || [];
    return _this;
  }
  (0, _createClass2["default"])(LineString, [{
    key: "getPoints",
    value: function getPoints() {
      return this.points;
    }
  }, {
    key: "setPoints",
    value: function setPoints(points) {
      this.points = points;
      return this;
    }

    /**
     * @override
     */
  }, {
    key: "getGeojsonType",
    value: function getGeojsonType() {
      return GEOJSON_TYPE;
    }

    /**
     * @override
     */
  }, {
    key: "getWktType",
    value: function getWktType() {
      return WKT_TYPE;
    }

    /**
     * @override
     */
  }, {
    key: "jsonCoordinatePairs",
    value: function jsonCoordinatePairs() {
      var pointsArray = [];
      this.getPoints().forEach(function (point) {
        pointsArray.push([point.getX(), point.getY()]);
      });
      return pointsArray;
    }

    /**
     * @override
     */
  }, {
    key: "wktCoordinatePairs",
    value: function wktCoordinatePairs() {
      return this.getPoints().map(function (point) {
        return "".concat(point.getX(), " ").concat(point.getY());
      }).join(',');
    }
  }]);
  return LineString;
}(_geometry["default"]);
var _default = LineString;
exports["default"] = _default;

/***/ }),

/***/ "./src/data/geo/point.js":
/*!*******************************!*\
  !*** ./src/data/geo/point.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _geometry = _interopRequireDefault(__webpack_require__(/*! ./geometry */ "./src/data/geo/geometry.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/data/geo/constants.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var GEOJSON_TYPE = _constants.GeoTypes.POINT;
var WKT_TYPE = GEOJSON_TYPE.toUpperCase();
var PRECISION = .000000001;
var Point = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2["default"])(Point, _Geometry);
  var _super = _createSuper(Point);
  function Point(srs) {
    (0, _classCallCheck2["default"])(this, Point);
    return _super.call(this, srs);
  }
  (0, _createClass2["default"])(Point, [{
    key: "lng",
    get: function get() {
      return this.getLongitude();
    },
    set: function set(x) {
      this.setLongitude(x);
    }
  }, {
    key: "lat",
    get: function get() {
      return this.getLatitude();
    },
    set: function set(y) {
      this.setLatitude(y);
    }
  }, {
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
  }, {
    key: "getLongitude",
    value: function getLongitude() {
      return this.x;
    }
  }, {
    key: "getLatitude",
    value: function getLatitude() {
      return this.y;
    }
  }, {
    key: "setX",
    value: function setX(x) {
      this.x = x;
      return this;
    }
  }, {
    key: "setY",
    value: function setY(y) {
      this.y = y;
      return this;
    }
  }, {
    key: "setLongitude",
    value: function setLongitude(x) {
      return this.setX(x);
    }
  }, {
    key: "setLatitude",
    value: function setLatitude(y) {
      return this.setY(y);
    }

    /**
     * @override
     */
  }, {
    key: "getGeojsonType",
    value: function getGeojsonType() {
      return GEOJSON_TYPE;
    }

    /**
     * @override
     */
  }, {
    key: "getWktType",
    value: function getWktType() {
      return WKT_TYPE;
    }

    /**
     * @override
     */
  }, {
    key: "wktCoordinatePairs",
    value: function wktCoordinatePairs() {
      return "".concat(this.x, " ").concat(this.y);
    }

    /**
     * @override
     */
  }, {
    key: "jsonCoordinatePairs",
    value: function jsonCoordinatePairs() {
      return [this.x, this.y];
    }
  }, {
    key: "equals",
    value: function equals(point) {
      if (this === point) {
        return true;
      }
      if (!(point instanceof Point)) {
        return false;
      }
      return Math.abs(point.x - this.x) < PRECISION && Math.abs(point.y - this.y) < PRECISION && this.srs === point.srs;
    }
  }]);
  return Point;
}(_geometry["default"]);
exports["default"] = Point;

/***/ }),

/***/ "./src/data/geo/polygon.js":
/*!*********************************!*\
  !*** ./src/data/geo/polygon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _geometry = _interopRequireDefault(__webpack_require__(/*! ./geometry */ "./src/data/geo/geometry.js"));
var _linestring = _interopRequireDefault(__webpack_require__(/*! ./linestring */ "./src/data/geo/linestring.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/data/geo/constants.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var GEOJSON_TYPE = _constants.GeoTypes.POLYGON;
var WKT_TYPE = GEOJSON_TYPE.toUpperCase();
var Polygon = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2["default"])(Polygon, _Geometry);
  var _super = _createSuper(Polygon);
  function Polygon(boundary, holes, srs) {
    var _this;
    (0, _classCallCheck2["default"])(this, Polygon);
    _this = _super.call(this, srs);
    _this.setBoundary(boundary);
    _this.setHoles(holes);
    return _this;
  }
  (0, _createClass2["default"])(Polygon, [{
    key: "getBoundary",
    value: function getBoundary() {
      return this.boundary;
    }
  }, {
    key: "setBoundary",
    value: function setBoundary(boundary) {
      if (!boundary) {
        throw new Error('The \'boundary\' argument is required.');
      }
      if (!(boundary instanceof _linestring["default"])) {
        boundary = new _linestring["default"](boundary, this.srs);
      }
      this.boundary = boundary;
      return this;
    }
  }, {
    key: "getHoles",
    value: function getHoles() {
      return this.holes;
    }
  }, {
    key: "setHoles",
    value: function setHoles(holes) {
      this.holes = holes || [];
      return this;
    }

    /**
     * @override
     */
  }, {
    key: "getGeojsonType",
    value: function getGeojsonType() {
      return GEOJSON_TYPE;
    }

    /**
     * @override
     */
  }, {
    key: "getWktType",
    value: function getWktType() {
      return WKT_TYPE;
    }

    /**
     * @override
     */
  }, {
    key: "jsonCoordinatePairs",
    value: function jsonCoordinatePairs() {
      var outerBoundaries = [];
      this.getBoundary().getPoints().forEach(function (point) {
        outerBoundaries.push([point.getX(), point.getY()]);
      });
      var innerBoundaries = this.holes.map(function (hole) {
        return hole.getPoints().map(function (point) {
          return [point.getX(), point.getY()];
        });
      });
      return [outerBoundaries].concat((0, _toConsumableArray2["default"])(innerBoundaries));
    }

    /**
     * @override
     */
  }, {
    key: "wktCoordinatePairs",
    value: function wktCoordinatePairs() {
      var wktPairsListCollection = [this.getBoundary().wktCoordinatePairs()];
      this.holes.forEach(function (hole) {
        return wktPairsListCollection.push(hole.wktCoordinatePairs());
      });
      var wrapParens = function wrapParens(str) {
        return '(' + str + ')';
      };
      return wktPairsListCollection.map(wrapParens).join(',');
    }
  }]);
  return Polygon;
}(_geometry["default"]);
var _default = Polygon;
exports["default"] = _default;

/***/ }),

/***/ "./src/data/geo/spatial-reference-system.js":
/*!**************************************************!*\
  !*** ./src/data/geo/spatial-reference-system.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var SpatialType = /*#__PURE__*/function () {
  function SpatialType(_ref) {
    var srsId = _ref.srsId,
      name = _ref.name;
    (0, _classCallCheck2["default"])(this, SpatialType);
    this.srsId = srsId;
    this.name = name;
  }
  (0, _createClass2["default"])(SpatialType, [{
    key: "getSRSId",
    value: function getSRSId() {
      return this.srsId;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.getName() + '(' + this.getSRSId() + ')';
    }
  }]);
  return SpatialType;
}();
var CARTESIAN = new SpatialType({
  srsId: 0,
  name: 'Cartesian'
});
var PULKOVO_1995 = new SpatialType({
  srsId: 4200,
  name: 'Pulkovo 1995'
});
var WGS84 = new SpatialType({
  srsId: 4326,
  name: 'WGS 84'
});
var WGS84_PSEUDO_MERCATOR = new SpatialType({
  srsId: 3857,
  name: 'WGS 84 / Pseudo-Mercator'
});
var WGS84_WORLD_MERCATOR = new SpatialType({
  srsId: 3395,
  name: 'WGS 84 / World Mercator'
});
var SpatialReferenceSystem = {
  CARTESIAN: CARTESIAN,
  PULKOVO_1995: PULKOVO_1995,
  WGS84: WGS84,
  WGS84_PSEUDO_MERCATOR: WGS84_PSEUDO_MERCATOR,
  WGS84_WORLD_MERCATOR: WGS84_WORLD_MERCATOR,
  DEFAULT: WGS84,
  SRS_MAP: {},
  valueBySRSId: function valueBySRSId(srsId) {
    return SpatialReferenceSystem.SRS_MAP[srsId];
  }
};
Object.keys(SpatialReferenceSystem).forEach(function (type) {
  if (SpatialReferenceSystem[type] instanceof SpatialType) {
    var spatialType = SpatialReferenceSystem[type];
    SpatialReferenceSystem.SRS_MAP[spatialType.getSRSId()] = spatialType;
  }
});
var _default = SpatialReferenceSystem;
exports["default"] = _default;

/***/ }),

/***/ "./src/data/geo/wkt-parser.js":
/*!************************************!*\
  !*** ./src/data/geo/wkt-parser.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _wktToGeojson = _interopRequireDefault(__webpack_require__(/*! ./wkt-to-geojson */ "./src/data/geo/wkt-to-geojson.js"));
var _geoConstructor = _interopRequireDefault(__webpack_require__(/*! ./geo-constructor */ "./src/data/geo/geo-constructor.js"));
var WKTParser = /*#__PURE__*/function () {
  function WKTParser(srs) {
    (0, _classCallCheck2["default"])(this, WKTParser);
    this.srs = srs;
  }
  (0, _createClass2["default"])(WKTParser, [{
    key: "read",
    value: function read(wktString) {
      var geoObject = (0, _wktToGeojson["default"])(wktString);
      if (!geoObject) {
        throw new Error('WKT string is invalid');
      }
      return (0, _geoConstructor["default"])(geoObject, this.srs);
    }
  }]);
  return WKTParser;
}();
exports["default"] = WKTParser;

/***/ }),

/***/ "./src/data/geo/wkt-to-geojson.js":
/*!****************************************!*\
  !*** ./src/data/geo/wkt-to-geojson.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/data/geo/constants.js");
var numberRegexp = /[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/;

// Matches sequences like '100 100' or '100 100 100'.
var tuples = new RegExp('^' + numberRegexp.source + '(\\s' + numberRegexp.source + '){1,}');
var wktToGeoJSON = function wktToGeoJSON(wktString) {
  var i = 0;
  var matches = function matches(re) {
    var match = wktString.substring(i).match(re);
    if (!match) {
      return null;
    } else {
      i += match[0].length;
      return match[0];
    }
  };
  var white = function white() {
    return matches(/^\s*/);
  };
  var getMultiCoordinates = function getMultiCoordinates() {
    white();
    var depth = 0;
    var rings = [];
    var stack = [rings];
    var pointer = rings;
    var elem;
    while (elem = matches(/^(\()/) || matches(/^(\))/) || matches(/^(,)/) || matches(tuples)) {
      if (elem === '(') {
        stack.push(pointer);
        pointer = [];
        stack[stack.length - 1].push(pointer);
        depth++;
      } else if (elem === ')') {
        // For the case: Polygon(), ...
        if (pointer.length === 0) {
          return null;
        }
        pointer = stack.pop();

        // the stack was empty, wkt string was malformed
        if (!pointer) {
          return null;
        }
        depth--;
        if (depth === 0) {
          break;
        }
      } else if (elem === ',') {
        pointer = [];
        stack[stack.length - 1].push(pointer);
      } else if (!elem.split(/\s/g).some(isNaN)) {
        Array.prototype.push.apply(pointer, elem.split(/\s/g).map(parseFloat));
      } else {
        return null;
      }
      white();
    }
    if (depth !== 0) {
      return null;
    }
    return rings;
  };
  var getCoordinates = function getCoordinates() {
    var list = [];
    var item;
    var pt;
    while (pt = matches(tuples) || matches(/^(,)/)) {
      if (pt === ',') {
        list.push(item);
        item = [];
      } else if (!pt.split(/\s/g).some(isNaN)) {
        if (!item) {
          item = [];
        }
        item = [].concat((0, _toConsumableArray2["default"])(item), (0, _toConsumableArray2["default"])(pt.split(/\s/g).map(parseFloat)));
      }
      white();
    }
    if (item) {
      list.push(item);
    } else {
      return null;
    }
    return list.length ? list : null;
  };
  var point = function point() {
    if (!matches(/^(point(\sz)?)/i)) {
      return null;
    }
    white();
    if (!matches(/^(\()/)) {
      return null;
    }
    white();
    var coordinates = getCoordinates();
    if (!coordinates) {
      return null;
    }
    if (!matches(/^(\))/)) {
      return null;
    }
    return {
      type: _constants.GeoTypes.POINT,
      coordinates: coordinates[0]
    };
  };
  var linestring = function linestring() {
    if (!matches(/^(linestring(\sz)?)/i)) {
      return null;
    }
    white();
    if (!matches(/^(\()/)) {
      return null;
    }
    var coordinates = getCoordinates();
    if (!coordinates) {
      return null;
    }
    if (!matches(/^(\))/)) {
      return null;
    }
    return {
      type: _constants.GeoTypes.LINE_STRING,
      coordinates: coordinates
    };
  };
  var polygon = function polygon() {
    if (!matches(/^(polygon(\sz)?)/i)) {
      return null;
    }
    white();
    var coordinates = getMultiCoordinates();
    if (!coordinates) {
      return null;
    }
    return {
      type: _constants.GeoTypes.POLYGON,
      coordinates: coordinates
    };
  };
  return point() || linestring() || polygon();
};
var _default = wktToGeoJSON;
exports["default"] = _default;

/***/ }),

/***/ "./src/data/group-query-builder.js":
/*!*****************************************!*\
  !*** ./src/data/group-query-builder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
var _dataQueryBuilder = _interopRequireWildcard(__webpack_require__(/*! ./data-query-builder */ "./src/data/data-query-builder.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var GroupQueryBuilder = /*#__PURE__*/function (_DataQueryBuilder) {
  (0, _inherits2["default"])(GroupQueryBuilder, _DataQueryBuilder);
  var _super = _createSuper(GroupQueryBuilder);
  function GroupQueryBuilder() {
    var _this;
    (0, _classCallCheck2["default"])(this, GroupQueryBuilder);
    _this = _super.call(this);
    _this.groupPageSize = _dataQueryBuilder.PAGING_DEFAULTS.pageSize;
    _this.recordsPageSize = _dataQueryBuilder.PAGING_DEFAULTS.pageSize;
    _this.groupDepth = null;
    _this.groupPath = null;
    return _this;
  }
  (0, _createClass2["default"])(GroupQueryBuilder, [{
    key: "setGroupPageSize",
    value: function setGroupPageSize(groupPageSize) {
      if (groupPageSize <= 0) {
        throw new Error('Group page size must be a positive value.');
      }
      this.groupPageSize = groupPageSize;
      return this;
    }
  }, {
    key: "getGroupPageSize",
    value: function getGroupPageSize() {
      return this.groupPageSize;
    }
  }, {
    key: "setRecordsPageSize",
    value: function setRecordsPageSize(recordsPageSize) {
      if (recordsPageSize <= 0) {
        throw new Error('Records page size must be a positive value.');
      }
      this.recordsPageSize = recordsPageSize;
      return this;
    }
  }, {
    key: "getRecordsPageSize",
    value: function getRecordsPageSize() {
      return this.recordsPageSize;
    }
  }, {
    key: "setGroupDepth",
    value: function setGroupDepth(groupDepth) {
      if (groupDepth < 0) {
        throw new Error('Group depth cannot have a negative value.');
      }
      this.groupDepth = groupDepth;
      return this;
    }
  }, {
    key: "getGroupDepth",
    value: function getGroupDepth() {
      return this.groupDepth;
    }
  }, {
    key: "getGroupPath",
    value: function getGroupPath() {
      return this.groupPath;
    }
  }, {
    key: "addGroupPath",
    value: function addGroupPath(groupPath) {
      this.groupPath = (this.groupPath || []).concat(groupPath);
      return this;
    }
  }, {
    key: "setGroupPath",
    value: function setGroupPath(groupPath) {
      this.groupPath = _utils["default"].castArray(groupPath);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var result = (0, _get2["default"])((0, _getPrototypeOf2["default"])(GroupQueryBuilder.prototype), "toJSON", this).call(this);
      result.groupDepth = this.getGroupDepth();
      result.groupPath = this.getGroupPath();
      result.groupPageSize = this.getGroupPageSize();
      result.recordsPageSize = this.getRecordsPageSize();
      return result;
    }
  }]);
  return GroupQueryBuilder;
}(_dataQueryBuilder["default"]);
exports["default"] = GroupQueryBuilder;

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
var _user = _interopRequireDefault(__webpack_require__(/*! ../users/user */ "./src/users/user.js"));
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "./src/data/store.js"));
var _dataQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ./data-query-builder */ "./src/data/data-query-builder.js"));
var _groupQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ./group-query-builder */ "./src/data/group-query-builder.js"));
var _loadRelationsQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ./load-relations-query-builder */ "./src/data/load-relations-query-builder.js"));
var _jsonUpdateBuilder = _interopRequireDefault(__webpack_require__(/*! ./json-update-builder */ "./src/data/json-update-builder.js"));
var _point = _interopRequireDefault(__webpack_require__(/*! ./geo/point */ "./src/data/geo/point.js"));
var _linestring = _interopRequireDefault(__webpack_require__(/*! ./geo/linestring */ "./src/data/geo/linestring.js"));
var _polygon = _interopRequireDefault(__webpack_require__(/*! ./geo/polygon */ "./src/data/geo/polygon.js"));
var _geometry = _interopRequireDefault(__webpack_require__(/*! ./geo/geometry */ "./src/data/geo/geometry.js"));
var _spatialReferenceSystem = _interopRequireDefault(__webpack_require__(/*! ./geo/spatial-reference-system */ "./src/data/geo/spatial-reference-system.js"));
var _wktParser = _interopRequireDefault(__webpack_require__(/*! ./geo/wkt-parser */ "./src/data/geo/wkt-parser.js"));
var _geoJsonParser = _interopRequireDefault(__webpack_require__(/*! ./geo/geo-json-parser */ "./src/data/geo/geo-json-parser.js"));
var _persmission = _interopRequireDefault(__webpack_require__(/*! ./persmission */ "./src/data/persmission.js"));
var Data = /*#__PURE__*/function () {
  function Data(app) {
    (0, _classCallCheck2["default"])(this, Data);
    this.app = app;
    this.classToTableMap = (0, _defineProperty2["default"])({}, _user["default"].className, _user["default"]);
    this.Permissions = {
      FIND: new _persmission["default"]('FIND', app),
      REMOVE: new _persmission["default"]('REMOVE', app),
      UPDATE: new _persmission["default"]('UPDATE', app)
    };
    this.QueryBuilder = _dataQueryBuilder["default"];
    this.GroupQueryBuilder = _groupQueryBuilder["default"];
    this.LoadRelationsQueryBuilder = _loadRelationsQueryBuilder["default"];
    this.JSONUpdateBuilder = _jsonUpdateBuilder["default"];
    this.Point = _point["default"];
    this.LineString = _linestring["default"];
    this.Polygon = _polygon["default"];
    this.Geometry = _geometry["default"];
    this.GeoJSONParser = _geoJsonParser["default"];
    this.WKTParser = _wktParser["default"];
    this.SpatialReferenceSystem = _spatialReferenceSystem["default"];
  }
  (0, _createClass2["default"])(Data, [{
    key: "of",
    value: function of(model) {
      return new _store["default"](model, this);
    }
  }, {
    key: "describe",
    value: function () {
      var _describe = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(className) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              className = typeof className === 'string' ? className : _utils["default"].getClassName(className);
              return _context.abrupt("return", this.app.request.get({
                url: this.app.urls.dataTableProps(className)
              }));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function describe(_x) {
        return _describe.apply(this, arguments);
      }
      return describe;
    }()
  }, {
    key: "getTableNameById",
    value: function () {
      var _getTableNameById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tableId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.app.request.get({
                url: this.app.urls.dataTableNameById(tableId)
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getTableNameById(_x2) {
        return _getTableNameById.apply(this, arguments);
      }
      return getTableNameById;
    }()
  }, {
    key: "mapTableToClass",
    value: function mapTableToClass(tableName, clientClass) {
      if (typeof tableName === 'function') {
        clientClass = tableName;
        tableName = _utils["default"].getClassName(clientClass);
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be provided and must be a string.');
      }
      if (!clientClass || typeof clientClass !== 'function') {
        throw new Error('Class must be provided and must be a constructor function.');
      }
      this.classToTableMap[tableName] = clientClass;
    }
  }]);
  return Data;
}();
exports["default"] = Data;

/***/ }),

/***/ "./src/data/json-update-builder.js":
/*!*****************************************!*\
  !*** ./src/data/json-update-builder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var OperationTypes = {
  SET: 'JSON_SET',
  INSERT: 'JSON_INSERT',
  REPLACE: 'JSON_REPLACE',
  REMOVE: 'JSON_REMOVE',
  ARRAY_APPEND: 'JSON_ARRAY_APPEND',
  ARRAY_INSERT: 'JSON_ARRAY_INSERT'
};
var JSONUpdateBuilder = /*#__PURE__*/function () {
  function JSONUpdateBuilder(operationName) {
    (0, _classCallCheck2["default"])(this, JSONUpdateBuilder);
    this.operationName = operationName;
    this.args = {};
  }
  (0, _createClass2["default"])(JSONUpdateBuilder, [{
    key: "addArgument",
    value: function addArgument(arg, argValue) {
      if (argValue === undefined) {
        throw new Error('You have to specify function\'s second argument');
      }
      this.args[arg] = argValue;
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      this.validate();
      return {
        ___operation: this.operationName,
        args: this.args
      };
    }
  }, {
    key: "create",
    value: function create() {
      return this.toJSON();
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!Object.keys(this.args).length) {
        throw new Error('You have to add at least one argument');
      }
    }
  }], [{
    key: "SET",
    value: function SET() {
      return new JSONUpdateBuilder(OperationTypes.SET);
    }
  }, {
    key: "INSERT",
    value: function INSERT() {
      return new JSONUpdateBuilder(OperationTypes.INSERT);
    }
  }, {
    key: "REPLACE",
    value: function REPLACE() {
      return new JSONUpdateBuilder(OperationTypes.REPLACE);
    }
  }, {
    key: "REMOVE",
    value: function REMOVE() {
      return new JSONRemoveBuilder();
    }
  }, {
    key: "ARRAY_APPEND",
    value: function ARRAY_APPEND() {
      return new JSONUpdateBuilder(OperationTypes.ARRAY_APPEND);
    }
  }, {
    key: "ARRAY_INSERT",
    value: function ARRAY_INSERT() {
      return new JSONUpdateBuilder(OperationTypes.ARRAY_INSERT);
    }
  }]);
  return JSONUpdateBuilder;
}();
exports["default"] = JSONUpdateBuilder;
var JSONRemoveBuilder = /*#__PURE__*/function (_JSONUpdateBuilder) {
  (0, _inherits2["default"])(JSONRemoveBuilder, _JSONUpdateBuilder);
  var _super = _createSuper(JSONRemoveBuilder);
  function JSONRemoveBuilder() {
    var _this;
    (0, _classCallCheck2["default"])(this, JSONRemoveBuilder);
    _this = _super.call(this, OperationTypes.REMOVE);
    _this.args = [];
    return _this;
  }
  (0, _createClass2["default"])(JSONRemoveBuilder, [{
    key: "addArgument",
    value: function addArgument(arg) {
      this.args.push(arg);
      return this;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.args.length) {
        throw new Error('You have to add at least one argument');
      }
    }
  }]);
  return JSONRemoveBuilder;
}(JSONUpdateBuilder);

/***/ }),

/***/ "./src/data/load-relations-query-builder.js":
/*!**************************************************!*\
  !*** ./src/data/load-relations-query-builder.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _dataQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ./data-query-builder */ "./src/data/data-query-builder.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LoadRelationsQueryBuilder = /*#__PURE__*/function (_DataQueryBuilder) {
  (0, _inherits2["default"])(LoadRelationsQueryBuilder, _DataQueryBuilder);
  var _super = _createSuper(LoadRelationsQueryBuilder);
  function LoadRelationsQueryBuilder(RelationModel) {
    var _this;
    (0, _classCallCheck2["default"])(this, LoadRelationsQueryBuilder);
    _this = _super.call(this);
    _this.relationModel = RelationModel;
    _this.relationName = null;
    return _this;
  }
  (0, _createClass2["default"])(LoadRelationsQueryBuilder, [{
    key: "setRelationName",
    value: function setRelationName(relationName) {
      this.relationName = relationName;
      return this;
    }
  }, {
    key: "getRelationName",
    value: function getRelationName() {
      return this.relationName;
    }
  }, {
    key: "setRelationModel",
    value: function setRelationModel(relationModel) {
      this.relationModel = relationModel;
      return this;
    }
  }, {
    key: "getRelationModel",
    value: function getRelationModel() {
      return this.relationModel;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var result = (0, _get2["default"])((0, _getPrototypeOf2["default"])(LoadRelationsQueryBuilder.prototype), "toJSON", this).call(this);
      result.relationName = this.getRelationName();
      result.relationModel = this.getRelationModel();
      return result;
    }
  }], [{
    key: "of",
    value: function of(RelationModel) {
      return new this(RelationModel);
    }
  }]);
  return LoadRelationsQueryBuilder;
}(_dataQueryBuilder["default"]);
exports["default"] = LoadRelationsQueryBuilder;

/***/ }),

/***/ "./src/data/persmission.js":
/*!*********************************!*\
  !*** ./src/data/persmission.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _persmission = _interopRequireDefault(__webpack_require__(/*! ../persmission */ "./src/persmission.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DataPermission = /*#__PURE__*/function (_Permission) {
  (0, _inherits2["default"])(DataPermission, _Permission);
  var _super = _createSuper(DataPermission);
  function DataPermission() {
    (0, _classCallCheck2["default"])(this, DataPermission);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(DataPermission, [{
    key: "getRequestURL",
    value: function getRequestURL(type, dataObject) {
      if (!dataObject.___class || !dataObject.objectId) {
        throw new Error('"dataObject.___class" and "dataObject.objectId" need to be specified');
      }
      return this.app.urls.dataObjectPermission(dataObject.___class, type, dataObject.objectId);
    }
  }]);
  return DataPermission;
}(_persmission["default"]);
exports["default"] = DataPermission;
(0, _defineProperty2["default"])(DataPermission, "BACKWARD_COMPATIBILITY_LABEL", 'Backendless.Data.Permissions.{FIND|REMOVE|UPDATE}');

/***/ }),

/***/ "./src/data/rt-handlers.js":
/*!*********************************!*\
  !*** ./src/data/rt-handlers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _rt = __webpack_require__(/*! ../rt */ "./src/rt.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ChangesTypes = {
  CREATED: 'created',
  UPDATED: 'updated',
  DELETED: 'deleted',
  UPSERTED: 'upserted',
  BULK_CREATED: 'bulk-created',
  BULK_UPDATED: 'bulk-updated',
  BULK_DELETED: 'bulk-deleted',
  BULK_UPSERTED: 'bulk-upserted'
};
var RelationsChangesTypes = {
  ADD: 'add',
  SET: 'set',
  DELETE: 'delete'
};
var SingleChangesTypes = [ChangesTypes.CREATED, ChangesTypes.UPDATED, ChangesTypes.DELETED, ChangesTypes.UPSERTED];
var RTHandlers = /*#__PURE__*/function (_RTListeners) {
  (0, _inherits2["default"])(RTHandlers, _RTListeners);
  var _super = _createSuper(RTHandlers);
  function RTHandlers(dataStore) {
    var _this;
    (0, _classCallCheck2["default"])(this, RTHandlers);
    _this = _super.call(this);
    _this.dataStore = dataStore;
    _this.app = dataStore.app;
    return _this;
  }
  (0, _createClass2["default"])(RTHandlers, [{
    key: "getSubscriptionOptions",
    value: function getSubscriptionOptions() {
      return {
        tableName: this.dataStore.className
      };
    }
  }, {
    key: "addCreateListener",
    value: function addCreateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.CREATED, whereClause, callback, onError);
    }
  }, {
    key: "removeCreateListeners",
    value: function removeCreateListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.CREATED, whereClause, callback);
    }
  }, {
    key: "removeCreateListener",
    value: function removeCreateListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeCreateListeners(undefined, callback);
    }
  }, {
    key: "addUpsertListener",
    value: function addUpsertListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.UPSERTED, whereClause, callback, onError);
    }
  }, {
    key: "removeUpsertListeners",
    value: function removeUpsertListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.UPSERTED, whereClause, callback);
    }
  }, {
    key: "removeUpsertListener",
    value: function removeUpsertListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeUpsertListeners(undefined, callback);
    }
  }, {
    key: "addUpdateListener",
    value: function addUpdateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.UPDATED, whereClause, callback, onError);
    }
  }, {
    key: "removeUpdateListeners",
    value: function removeUpdateListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.UPDATED, whereClause, callback);
    }
  }, {
    key: "removeUpdateListener",
    value: function removeUpdateListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeUpdateListeners(undefined, callback);
    }
  }, {
    key: "addDeleteListener",
    value: function addDeleteListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.DELETED, whereClause, callback, onError);
    }
  }, {
    key: "removeDeleteListeners",
    value: function removeDeleteListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.DELETED, whereClause, callback);
    }
  }, {
    key: "removeDeleteListener",
    value: function removeDeleteListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeDeleteListeners(undefined, callback);
    }
  }, {
    key: "addBulkCreateListener",
    value: function addBulkCreateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_CREATED, whereClause, callback, onError);
    }
  }, {
    key: "removeBulkCreateListeners",
    value: function removeBulkCreateListeners() {
      this.removeChangesListeners(ChangesTypes.BULK_CREATED);
    }
  }, {
    key: "removeBulkCreateListener",
    value: function removeBulkCreateListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeChangesListeners(ChangesTypes.BULK_CREATED, undefined, callback);
    }
  }, {
    key: "addBulkUpdateListener",
    value: function addBulkUpdateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_UPDATED, whereClause, callback, onError);
    }
  }, {
    key: "removeBulkUpdateListeners",
    value: function removeBulkUpdateListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.BULK_UPDATED, whereClause, callback);
    }
  }, {
    key: "removeBulkUpdateListener",
    value: function removeBulkUpdateListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeBulkUpdateListeners(undefined, callback);
    }
  }, {
    key: "addBulkDeleteListener",
    value: function addBulkDeleteListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_DELETED, whereClause, callback, onError);
    }
  }, {
    key: "removeBulkDeleteListeners",
    value: function removeBulkDeleteListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.BULK_DELETED, whereClause, callback);
    }
  }, {
    key: "removeBulkDeleteListener",
    value: function removeBulkDeleteListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeBulkDeleteListeners(undefined, callback);
    }
  }, {
    key: "addBulkUpsertListener",
    value: function addBulkUpsertListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_UPSERTED, whereClause, callback, onError);
    }
  }, {
    key: "removeBulkUpsertListeners",
    value: function removeBulkUpsertListeners() {
      this.removeChangesListeners(ChangesTypes.BULK_UPSERTED);
    }
  }, {
    key: "removeBulkUpsertListener",
    value: function removeBulkUpsertListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeChangesListeners(ChangesTypes.BULK_UPSERTED, undefined, callback);
    }
  }, {
    key: "addSetRelationListener",
    value: function addSetRelationListener(relationColumnName, parentObjects, callback, onError) {
      this.addRelationsChangesListener(RelationsChangesTypes.SET, relationColumnName, parentObjects, callback, onError);
    }
  }, {
    key: "removeSetRelationListener",
    value: function removeSetRelationListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeRelationsChangesListeners(RelationsChangesTypes.SET, undefined, callback);
    }
  }, {
    key: "removeSetRelationListeners",
    value: function removeSetRelationListeners(relationColumnName, callback) {
      this.removeRelationsChangesListeners(RelationsChangesTypes.SET, relationColumnName, callback);
    }
  }, {
    key: "addAddRelationListener",
    value: function addAddRelationListener(relationColumnName, parentObjects, callback, onError) {
      this.addRelationsChangesListener(RelationsChangesTypes.ADD, relationColumnName, parentObjects, callback, onError);
    }
  }, {
    key: "removeAddRelationListener",
    value: function removeAddRelationListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeRelationsChangesListeners(RelationsChangesTypes.ADD, undefined, callback);
    }
  }, {
    key: "removeAddRelationListeners",
    value: function removeAddRelationListeners(relationColumnName, callback) {
      this.removeRelationsChangesListeners(RelationsChangesTypes.ADD, relationColumnName, callback);
    }
  }, {
    key: "addDeleteRelationListener",
    value: function addDeleteRelationListener(relationColumnName, parentObjects, callback, onError) {
      this.addRelationsChangesListener(RelationsChangesTypes.DELETE, relationColumnName, parentObjects, callback, onError);
    }
  }, {
    key: "removeDeleteRelationListener",
    value: function removeDeleteRelationListener(callback) {
      if (!callback || typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.removeRelationsChangesListeners(RelationsChangesTypes.DELETE, undefined, callback);
    }
  }, {
    key: "removeDeleteRelationListeners",
    value: function removeDeleteRelationListeners(relationColumnName, callback) {
      this.removeRelationsChangesListeners(RelationsChangesTypes.DELETE, relationColumnName, callback);
    }
  }, {
    key: "addChangesListener",
    value: function addChangesListener(event, whereClause, callback, onError) {
      if (typeof whereClause === 'function') {
        onError = callback;
        callback = whereClause;
        whereClause = undefined;
      }
      if (typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      this.addSubscription(event, this.app.RT.subscriptions.onObjectsChanges, {
        callback: callback,
        onError: onError,
        parser: SingleChangesTypes.includes(event) ? this.parseObjectToInstance.bind(this) : undefined,
        params: {
          event: event,
          whereClause: whereClause
        }
      });
    }
  }, {
    key: "removeChangesListeners",
    value: function removeChangesListeners(event, whereClause, callback) {
      if (typeof whereClause === 'function') {
        callback = whereClause;
        whereClause = undefined;
      }
      var matcher = function matcher(subscription) {
        var params = subscription.params;
        if (whereClause) {
          return params.whereClause === whereClause;
        }
        if (callback) {
          return subscription.callback === callback;
        }
        return true;
      };
      this.stopSubscription(event, {
        matcher: matcher
      });
    }
  }, {
    key: "addRelationsChangesListener",
    value: function addRelationsChangesListener(event, relationColumnName, parentObjects, callback, onError) {
      if (!relationColumnName || typeof relationColumnName !== 'string') {
        throw new Error('Relation Column Name must be a string.');
      }
      if (typeof parentObjects === 'function') {
        onError = callback;
        callback = parentObjects;
        parentObjects = undefined;
      }
      if (typeof callback !== 'function') {
        throw new Error('Listener Function must be passed.');
      }
      if (parentObjects) {
        if (!Array.isArray(parentObjects)) {
          throw new Error('Parent Objects must be an array');
        }
        parentObjects = parentObjects.map(function (o) {
          return o.objectId || o;
        });
      }
      this.addSubscription(event, this.app.RT.subscriptions.onRelationsChanges, {
        callback: callback,
        onError: onError,
        params: {
          event: event,
          relationColumnName: relationColumnName,
          parentObjects: parentObjects
        }
      });
    }
  }, {
    key: "removeRelationsChangesListeners",
    value: function removeRelationsChangesListeners(event, relationColumnName, callback) {
      if (typeof relationColumnName === 'function') {
        callback = relationColumnName;
        relationColumnName = undefined;
      }
      var matcher = function matcher(subscription) {
        var params = subscription.params;
        if (relationColumnName) {
          return params.relationColumnName === relationColumnName;
        }
        if (callback) {
          return subscription.callback === callback;
        }
        return true;
      };
      this.stopSubscription(event, {
        matcher: matcher
      });
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RTHandlers.prototype), "removeAllListeners", this).call(this);
    }

    /**
     * @private
     * */
  }, {
    key: "parseObjectToInstance",
    value: function parseObjectToInstance(object) {
      return this.dataStore.parseResponse(object);
    }
  }]);
  return RTHandlers;
}(_rt.RTListeners);
exports["default"] = RTHandlers;

/***/ }),

/***/ "./src/data/store.js":
/*!***************************!*\
  !*** ./src/data/store.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
var _expression = _interopRequireDefault(__webpack_require__(/*! ../expression */ "./src/expression.js"));
var _rtHandlers = _interopRequireDefault(__webpack_require__(/*! ./rt-handlers */ "./src/data/rt-handlers.js"));
var _dataQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ./data-query-builder */ "./src/data/data-query-builder.js"));
var _loadRelationsQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ./load-relations-query-builder */ "./src/data/load-relations-query-builder.js"));
var _jsonUpdateBuilder = _interopRequireDefault(__webpack_require__(/*! ./json-update-builder */ "./src/data/json-update-builder.js"));
var _geoConstructor = _interopRequireWildcard(__webpack_require__(/*! ./geo/geo-constructor */ "./src/data/geo/geo-constructor.js"));
var _geometry = _interopRequireDefault(__webpack_require__(/*! ./geo/geometry */ "./src/data/geo/geometry.js"));
var _excluded = ["relationName", "relationModel"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function buildFindFirstLastQuery(queryBuilder, sortDir) {
  var query = queryBuilder instanceof _dataQueryBuilder["default"] ? queryBuilder.toJSON() : queryBuilder ? _objectSpread({}, queryBuilder) : {};
  query.pageSize = 1;
  query.offset = 0;
  var sortBy = query.sortBy;
  if (!sortBy) {
    query.sortBy = ["created ".concat(sortDir)];
  }
  return _dataQueryBuilder["default"].toRequestBody(query);
}
var DataStore = /*#__PURE__*/function () {
  function DataStore(model, dataService) {
    (0, _classCallCheck2["default"])(this, DataStore);
    this.app = dataService.app;
    this.classToTableMap = dataService.classToTableMap;
    if (typeof model === 'string') {
      this.className = model;
      this.model = this.classToTableMap[this.className];
    } else {
      this.className = _utils["default"].getClassName(model);
      this.model = this.classToTableMap[this.className] || model;
    }
    if (!this.className) {
      throw new Error('Class name should be specified');
    }
  }
  (0, _createClass2["default"])(DataStore, [{
    key: "rt",
    value: function rt() {
      return this.rtHandlers = this.rtHandlers || new _rtHandlers["default"](this);
    }
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(object, isUpsert) {
        var _this = this;
        var url;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = isUpsert ? this.app.urls.dataTableUpsert(this.className) : this.app.urls.dataTable(this.className);
              return _context.abrupt("return", this.app.request.put({
                url: url,
                data: convertToServerRecord(object)
              }).then(function (result) {
                return _this.parseResponse(result);
              }));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function save(_x, _x2) {
        return _save.apply(this, arguments);
      }
      return save;
    }()
  }, {
    key: "deepSave",
    value: function () {
      var _deepSave = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(object) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.app.request.put({
                url: this.app.urls.dataTableDeepSave(this.className),
                data: convertToServerRecord(object)
              }).then(function (result) {
                return _this2.parseResponse(result);
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function deepSave(_x3) {
        return _deepSave.apply(this, arguments);
      }
      return deepSave;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(object) {
        var objectId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              objectId = object && object.objectId || object;
              if (!(!objectId || typeof objectId !== 'string' && typeof objectId !== 'number')) {
                _context3.next = 3;
                break;
              }
              throw new Error('Object Id must be provided and must be a string or number.');
            case 3:
              return _context3.abrupt("return", this.app.request["delete"]({
                url: this.app.urls.dataTableObject(this.className, objectId)
              }));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function remove(_x4) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(query) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.app.request.post({
                url: this.app.urls.dataTableFind(this.className),
                data: _dataQueryBuilder["default"].toRequestBody(query)
              }).then(function (result) {
                return _this3.parseResponse(result);
              }));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function find(_x5) {
        return _find.apply(this, arguments);
      }
      return find;
    }()
  }, {
    key: "group",
    value: function () {
      var _group = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(query) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.app.request.post({
                url: this.app.urls.dataGrouping(this.className),
                data: _dataQueryBuilder["default"].toRequestBody(query)
              }));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function group(_x6) {
        return _group.apply(this, arguments);
      }
      return group;
    }()
  }, {
    key: "countInGroup",
    value: function () {
      var _countInGroup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(query) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!query.groupPath || (0, _typeof2["default"])(query.groupPath) !== 'object')) {
                _context6.next = 2;
                break;
              }
              throw new Error('Group Path must be provided and must be an object.');
            case 2:
              return _context6.abrupt("return", this.app.request.post({
                url: "".concat(this.app.urls.dataGrouping(this.className), "/count"),
                data: _dataQueryBuilder["default"].toRequestBody(query)
              }));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function countInGroup(_x7) {
        return _countInGroup.apply(this, arguments);
      }
      return countInGroup;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(objectId, query) {
        var result;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(objectId && (0, _typeof2["default"])(objectId) === 'object' && !Array.isArray(objectId))) {
                _context7.next = 8;
                break;
              }
              if (Object.keys(objectId).length) {
                _context7.next = 3;
                break;
              }
              throw new Error('Provided object must have at least 1 primary keys.');
            case 3:
              _context7.next = 5;
              return this.app.request.get({
                url: this.app.urls.dataTablePrimaryKey(this.className),
                query: objectId
              });
            case 5:
              result = _context7.sent;
              _context7.next = 14;
              break;
            case 8:
              if (!(!objectId || typeof objectId !== 'string' && typeof objectId !== 'number')) {
                _context7.next = 10;
                break;
              }
              throw new Error('Object Id must be provided and must be a string or number or an object of primary keys.');
            case 10:
              if (query) {
                query.pageSize = null;
                query.offset = null;
              }
              _context7.next = 13;
              return this.app.request.get({
                url: this.app.urls.dataTableObject(this.className, objectId),
                queryString: _dataQueryBuilder["default"].toQueryString(query)
              });
            case 13:
              result = _context7.sent;
            case 14:
              return _context7.abrupt("return", this.parseResponse(result));
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function findById(_x8, _x9) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "findFirst",
    value: function () {
      var _findFirst = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(query) {
        var _this4 = this;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.app.request.post({
                url: this.app.urls.dataTableFind(this.className),
                data: buildFindFirstLastQuery(query, 'asc')
              }).then(function (result) {
                return _this4.parseResponse(result[0]);
              }));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function findFirst(_x10) {
        return _findFirst.apply(this, arguments);
      }
      return findFirst;
    }()
  }, {
    key: "findLast",
    value: function () {
      var _findLast = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(query) {
        var _this5 = this;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.app.request.post({
                url: this.app.urls.dataTableFind(this.className),
                data: buildFindFirstLastQuery(query, 'desc')
              }).then(function (result) {
                return _this5.parseResponse(result[0]);
              }));
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function findLast(_x11) {
        return _findLast.apply(this, arguments);
      }
      return findLast;
    }()
  }, {
    key: "getObjectCount",
    value: function () {
      var _getObjectCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(condition) {
        var distinct, groupBy;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              distinct = undefined;
              groupBy = undefined;
              if (!condition) {
                _context10.next = 11;
                break;
              }
              if (!(condition instanceof _dataQueryBuilder["default"])) {
                _context10.next = 9;
                break;
              }
              distinct = condition.getDistinct() || undefined;
              groupBy = condition.getGroupBy() || undefined;
              condition = condition.getWhereClause() || undefined;
              _context10.next = 11;
              break;
            case 9:
              if (!(typeof condition !== 'string')) {
                _context10.next = 11;
                break;
              }
              throw new Error('Condition must be a string or an instance of DataQueryBuilder.');
            case 11:
              return _context10.abrupt("return", this.app.request.post({
                url: this.app.urls.dataTableCount(this.className),
                data: {
                  where: condition,
                  distinct: distinct,
                  groupBy: groupBy
                }
              }));
            case 12:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getObjectCount(_x12) {
        return _getObjectCount.apply(this, arguments);
      }
      return getObjectCount;
    }()
  }, {
    key: "loadRelations",
    value: function () {
      var _loadRelations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(parent, queryBuilder) {
        var _this6 = this;
        var parentObjectId, _ref, relationName, relationModel, query;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              parentObjectId = parent && parent.objectId || parent;
              if (!(!parentObjectId || typeof parentObjectId !== 'string' && typeof parentObjectId !== 'number')) {
                _context11.next = 3;
                break;
              }
              throw new Error('Parent Object Id must be provided and must be a string or number.');
            case 3:
              _ref = queryBuilder instanceof _loadRelationsQueryBuilder["default"] ? queryBuilder.toJSON() : queryBuilder, relationName = _ref.relationName, relationModel = _ref.relationModel, query = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
              if (!(!relationName || typeof relationName !== 'string')) {
                _context11.next = 6;
                break;
              }
              throw new Error('Relation Name must be provided and must be a string.');
            case 6:
              return _context11.abrupt("return", this.app.request.get({
                url: this.app.urls.dataTableObjectRelation(this.className, parentObjectId, relationName),
                queryString: _loadRelationsQueryBuilder["default"].toQueryString(query)
              }).then(function (result) {
                return _this6.parseRelationsResponse(result, relationModel);
              }));
            case 7:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function loadRelations(_x13, _x14) {
        return _loadRelations.apply(this, arguments);
      }
      return loadRelations;
    }()
  }, {
    key: "setRelation",
    value: function () {
      var _setRelation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(parent, columnName, children) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", this.changeRelation(this.app.request.Methods.POST, parent, columnName, children));
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function setRelation(_x15, _x16, _x17) {
        return _setRelation.apply(this, arguments);
      }
      return setRelation;
    }()
  }, {
    key: "addRelation",
    value: function () {
      var _addRelation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(parent, columnName, children) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.changeRelation(this.app.request.Methods.PUT, parent, columnName, children));
            case 1:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function addRelation(_x18, _x19, _x20) {
        return _addRelation.apply(this, arguments);
      }
      return addRelation;
    }()
  }, {
    key: "deleteRelation",
    value: function () {
      var _deleteRelation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(parent, columnName, children) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.changeRelation(this.app.request.Methods.DELETE, parent, columnName, children));
            case 1:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function deleteRelation(_x21, _x22, _x23) {
        return _deleteRelation.apply(this, arguments);
      }
      return deleteRelation;
    }()
  }, {
    key: "bulkCreate",
    value: function () {
      var _bulkCreate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(objects) {
        var errorMessage;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              errorMessage = 'Objects must be provided and must be an array of objects.';
              if (!(!objects || !Array.isArray(objects))) {
                _context15.next = 3;
                break;
              }
              throw new Error(errorMessage);
            case 3:
              objects = objects.map(function (object) {
                if (!object || (0, _typeof2["default"])(object) !== 'object' || Array.isArray(object)) {
                  throw new Error(errorMessage);
                }
                return object;
              });
              return _context15.abrupt("return", this.app.request.post({
                url: this.app.urls.dataBulkTable(this.className),
                data: objects
              }));
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function bulkCreate(_x24) {
        return _bulkCreate.apply(this, arguments);
      }
      return bulkCreate;
    }()
  }, {
    key: "bulkUpsert",
    value: function () {
      var _bulkUpsert = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(objects) {
        var errorMessage;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              errorMessage = 'Objects must be provided and must be an array of objects.';
              if (!(!objects || !Array.isArray(objects) || !objects.length)) {
                _context16.next = 3;
                break;
              }
              throw new Error(errorMessage);
            case 3:
              objects = objects.map(function (object) {
                if (!object || (0, _typeof2["default"])(object) !== 'object' || Array.isArray(object)) {
                  throw new Error(errorMessage);
                }
                return object;
              });
              return _context16.abrupt("return", this.app.request.put({
                url: this.app.urls.dataBulkTableUpsert(this.className),
                data: objects
              }));
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function bulkUpsert(_x25) {
        return _bulkUpsert.apply(this, arguments);
      }
      return bulkUpsert;
    }()
  }, {
    key: "bulkUpdate",
    value: function () {
      var _bulkUpdate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(condition, changes) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              if (!(!condition || typeof condition !== 'string')) {
                _context17.next = 2;
                break;
              }
              throw new Error('Condition must be provided and must be a string.');
            case 2:
              if (!(!changes || (0, _typeof2["default"])(changes) !== 'object' || Array.isArray(changes))) {
                _context17.next = 4;
                break;
              }
              throw new Error('Changes must be provided and must be an object.');
            case 4:
              return _context17.abrupt("return", this.app.request.put({
                url: this.app.urls.dataBulkTable(this.className),
                query: {
                  where: condition
                },
                data: changes
              }));
            case 5:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function bulkUpdate(_x26, _x27) {
        return _bulkUpdate.apply(this, arguments);
      }
      return bulkUpdate;
    }()
  }, {
    key: "bulkDelete",
    value: function () {
      var _bulkDelete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(condition) {
        var queryData, objectIds;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (!(!condition || typeof condition !== 'string' && !Array.isArray(condition))) {
                _context18.next = 2;
                break;
              }
              throw new Error('Condition must be provided and must be a string or a list of objects.');
            case 2:
              queryData = {};
              if (typeof condition === 'string') {
                queryData.where = condition;
              } else {
                objectIds = condition.map(function (object) {
                  var objectId = object && object.objectId || object;
                  if (!objectId || typeof objectId !== 'string' && typeof objectId !== 'number') {
                    throw new Error('Can not transform "objects" to "whereClause". ' + 'Item must be a string or number or an object with property "objectId" as string.');
                  }
                  return "'".concat(objectId, "'");
                });
                queryData.where = "objectId in (".concat(objectIds.join(','), ")");
              }
              return _context18.abrupt("return", this.app.request.post({
                url: this.app.urls.dataBulkTableDelete(this.className),
                data: queryData
              }));
            case 5:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function bulkDelete(_x28) {
        return _bulkDelete.apply(this, arguments);
      }
      return bulkDelete;
    }()
    /**
     * @private
     * */
  }, {
    key: "parseRelationsResponse",
    value: function parseRelationsResponse(result, RelationModel) {
      return convertToClientRecords(result, RelationModel, this);
    }

    /**
     * @private
     * */
  }, {
    key: "parseResponse",
    value: function parseResponse(result) {
      return convertToClientRecords(result, this.model, this);
    }

    /**
     * @private
     * */
  }, {
    key: "changeRelation",
    value: function changeRelation(method, parent, columnName, children) {
      var parentId = parent && parent.objectId || parent;
      if (!parentId || typeof parentId !== 'string' && typeof parentId !== 'number') {
        throw new Error('Relation Parent must be provided and must be a string or number or an object with objectId property.');
      }
      if (!columnName || typeof columnName !== 'string') {
        throw new Error('Relation Column Name must be provided and must be a string.');
      }
      if (!children || typeof children !== 'string' && !Array.isArray(children)) {
        throw new Error('Relation Children must be provided and must be a string or a list of objects.');
      }
      var condition = {};
      if (typeof children === 'string') {
        condition.whereClause = children;
      } else {
        condition.childrenIds = children.map(function (child) {
          var childId = child && child.objectId || child;
          if (!childId || typeof childId !== 'string' && typeof childId !== 'number') {
            throw new Error('Child Id must be provided and must be a string or number.');
          }
          return childId;
        });
      }
      var query = {};
      if (condition.whereClause) {
        query.whereClause = condition.whereClause;
      }
      return this.app.request.send({
        method: method,
        url: this.app.urls.dataTableObjectRelation(this.className, parentId, columnName),
        query: query,
        data: condition.childrenIds
      });
    }
  }]);
  return DataStore;
}();
exports["default"] = DataStore;
var convertToServerRecord = function () {
  return function (sourceRecord) {
    var context = {
      instancesMap: new WeakMap()
    };
    return processTargetProps(context, sourceRecord, {});
  };
  function processTargetProps(context, source, target) {
    for (var prop in source) {
      if (Array.isArray(source[prop])) {
        processTargetProps(context, source[prop], target[prop] = []);
      } else if (source[prop] && (0, _typeof2["default"])(source[prop]) === 'object' && !(source[prop] instanceof _geometry["default"]) && !(source[prop] instanceof _jsonUpdateBuilder["default"]) && !(source[prop] instanceof _expression["default"])) {
        if (source[prop] instanceof Date) {
          target[prop] = source[prop].getTime();
        } else if (context.instancesMap.has(source[prop])) {
          var iteratedTarget = context.instancesMap.get(source[prop]);
          if (!iteratedTarget.__subID) {
            iteratedTarget.__subID = _utils["default"].uuid();
          }
          target[prop] = {
            __originSubID: iteratedTarget.__subID
          };
        } else {
          var _iteratedTarget = target[prop] = {};
          context.instancesMap.set(source[prop], _iteratedTarget);
          processTargetProps(context, source[prop], _iteratedTarget);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
}();
var convertToClientRecords = function () {
  return function (records, RootModel, dataStore) {
    if (!records) {
      return records;
    }
    var context = {
      RootModel: RootModel,
      app: dataStore.app,
      classToTableMap: dataStore.classToTableMap,
      subIds: {},
      postAssign: []
    };
    var result = Array.isArray(records) ? records.map(function (record) {
      return sanitizeItem(context, record);
    }) : sanitizeItem(context, records);
    assignPostRelations(context);
    return result;
  };
  function createTargetRecord(context, source, target, prop) {
    var __subID = source[prop].__subID;
    if (__subID && context.subIds[__subID]) {
      target[prop] = context.subIds[__subID];
      delete source[prop].__subID;
    } else {
      var Model = context.classToTableMap[source[prop].___class];
      target[prop] = Model ? new Model() : {};
      if (__subID && !context.subIds[__subID]) {
        context.subIds[__subID] = target[prop];
        delete source[prop].__subID;
      }
      processTargetProps(context, source[prop], target[prop]);
    }
  }
  function processTargetProp(context, source, target, prop) {
    if (Array.isArray(source[prop])) {
      processTargetProps(context, source[prop], target[prop] = []);
    } else if (source[prop] && (0, _typeof2["default"])(source[prop]) === 'object') {
      if (_geoConstructor.GEO_CLASSES.includes(source[prop].___class)) {
        target[prop] = (0, _geoConstructor["default"])(source[prop]);
      } else if (source[prop].__originSubID) {
        context.postAssign.push([target, prop, source[prop].__originSubID]);
      } else {
        createTargetRecord(context, source, target, prop);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  function processTargetProps(context, source, target) {
    for (var prop in source) {
      processTargetProp(context, source, target, prop);
    }
  }
  function sanitizeItem(context, sourceRecord) {
    var Model = context.RootModel || context.classToTableMap[sourceRecord.___class];
    var targetRecord = Model ? new Model() : {};
    if (sourceRecord.__subID) {
      if (context.subIds[sourceRecord.__subID]) {
        return context.subIds[sourceRecord.__subID];
      }
      context.subIds[sourceRecord.__subID] = targetRecord;
      delete sourceRecord.__subID;
    }
    processTargetProps(context, sourceRecord, targetRecord);
    return targetRecord;
  }
  function assignPostRelations(context) {
    context.postAssign.forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 3),
        target = _ref3[0],
        prop = _ref3[1],
        __originSubID = _ref3[2];
      target[prop] = context.subIds[__originSubID];
    });
  }
}();

/***/ }),

/***/ "./src/device/index.js":
/*!*****************************!*\
  !*** ./src/device/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var Device = /*#__PURE__*/(0, _createClass2["default"])(function Device(device) {
  (0, _classCallCheck2["default"])(this, Device);
  if (!device || !device.uuid || !device.platform || !device.version) {
    throw new Error('Device properties object must consist of fields "uuid", "platform" and "version".');
  }
  this.uuid = device.uuid;
  this.platform = device.platform.toUpperCase();
  this.version = device.version;
});
exports["default"] = Device;

/***/ }),

/***/ "./src/expression.js":
/*!***************************!*\
  !*** ./src/expression.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var BackendlessExpression = /*#__PURE__*/function () {
  function BackendlessExpression(value) {
    (0, _classCallCheck2["default"])(this, BackendlessExpression);
    if (!value || typeof value !== 'string') {
      throw new Error('The Backendless.Expression class can be initialized with non empty string value only');
    }
    this.value = value;
  }
  (0, _createClass2["default"])(BackendlessExpression, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        ___class: 'BackendlessExpression',
        value: this.value
      };
    }
  }]);
  return BackendlessExpression;
}();
exports["default"] = BackendlessExpression;

/***/ }),

/***/ "./src/files/index.js":
/*!****************************!*\
  !*** ./src/files/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/files/utils.js"));
var _persmission = _interopRequireDefault(__webpack_require__(/*! ./persmission */ "./src/files/persmission.js"));
var Files = /*#__PURE__*/function () {
  function Files(app) {
    (0, _classCallCheck2["default"])(this, Files);
    this.app = app;
    this.Permissions = {
      READ: new _persmission["default"]('READ', app),
      DELETE: new _persmission["default"]('DELETE', app),
      WRITE: new _persmission["default"]('WRITE', app)
    };
  }
  (0, _createClass2["default"])(Files, [{
    key: "saveFile",
    value: function () {
      var _saveFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(filePath, fileName, fileContent, overwrite) {
        var query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!filePath || typeof filePath !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('"filePath" must be provided and must be a string.');
            case 2:
              if (!(!fileName || typeof fileName !== 'string')) {
                _context.next = 4;
                break;
              }
              throw new Error('File Name must be provided and must be a string.');
            case 4:
              _context.next = 6;
              return _utils["default"].toBase64(fileContent);
            case 6:
              fileContent = _context.sent;
              query = {};
              if (typeof overwrite === 'boolean') {
                query.overwrite = overwrite;
              }
              filePath = _utils["default"].trimSlashesInPath(filePath);
              fileName = _utils["default"].sanitizeFileName(fileName);
              return _context.abrupt("return", this.app.request.put({
                url: "".concat(this.app.urls.fileBinaryPath(filePath), "/").concat(fileName),
                headers: {
                  'Content-Type': 'text/plain'
                },
                query: query,
                data: fileContent
              }));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function saveFile(_x, _x2, _x3, _x4) {
        return _saveFile.apply(this, arguments);
      }
      return saveFile;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(file, filePath, overwrite) {
        var query, pathTokens, fileName, sourcePathTokens;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              query = {};
              if (typeof overwrite === 'boolean') {
                query.overwrite = overwrite;
              }
              filePath = _utils["default"].trimSlashesInPath(filePath);
              pathTokens = _utils["default"].parseFilePath(filePath);
              if (pathTokens.fileName) {
                filePath = pathTokens.filePath;
                fileName = pathTokens.fileName;
              }
              if (!(typeof file === 'string')) {
                _context2.next = 8;
                break;
              }
              if (!fileName) {
                sourcePathTokens = _utils["default"].parseFilePath(file);
                fileName = sourcePathTokens.fileName;
              }
              return _context2.abrupt("return", this.app.request.post({
                url: "".concat(this.app.urls.filePath(filePath), "/").concat(fileName),
                query: query,
                data: {
                  url: file
                }
              }));
            case 8:
              if (!fileName) {
                fileName = _utils["default"].getFileName(file);
              }
              if (fileName) {
                _context2.next = 11;
                break;
              }
              throw new Error('Wrong type of the file source object. Can not get file name');
            case 11:
              fileName = _utils["default"].sanitizeFileName(fileName);
              return _context2.abrupt("return", this.app.request.post({
                url: "".concat(this.app.urls.filePath(filePath), "/").concat(fileName),
                query: query,
                form: {
                  file: file
                }
              }));
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function upload(_x5, _x6, _x7) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "append",
    value: function () {
      var _append = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(filePath, fileName, fileContent) {
        var pathTokens,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!filePath || typeof filePath !== 'string')) {
                _context3.next = 2;
                break;
              }
              throw new Error('"filePath" must be provided and must be a string.');
            case 2:
              filePath = _utils["default"].trimSlashesInPath(filePath);
              if (_args3.length === 2) {
                fileContent = fileName;
                fileName = undefined;
                pathTokens = _utils["default"].parseFilePath(filePath);
                if (pathTokens.fileName) {
                  filePath = pathTokens.filePath;
                  fileName = pathTokens.fileName;
                }
              }
              if (fileName) {
                _context3.next = 6;
                break;
              }
              throw new Error('Can not resolve target file name');
            case 6:
              fileName = _utils["default"].sanitizeFileName(fileName);
              if (!(typeof fileContent === 'string')) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("return", this.app.request.post({
                url: "".concat(this.app.urls.fileAppendPath(filePath), "/").concat(fileName),
                data: {
                  url: fileContent
                }
              }));
            case 9:
              if (!_utils["default"].isBytesArray(fileContent)) {
                _context3.next = 14;
                break;
              }
              _context3.next = 12;
              return _utils["default"].toBase64(fileContent);
            case 12:
              fileContent = _context3.sent;
              return _context3.abrupt("return", this.app.request.put({
                url: "".concat(this.app.urls.fileAppendBinaryPath(filePath), "/").concat(fileName),
                headers: {
                  'Content-Type': 'text/plain'
                },
                data: fileContent
              }));
            case 14:
              return _context3.abrupt("return", this.app.request.post({
                url: "".concat(this.app.urls.fileAppendPath(filePath), "/").concat(fileName),
                form: {
                  file: fileContent
                }
              }));
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function append(_x8, _x9, _x10) {
        return _append.apply(this, arguments);
      }
      return append;
    }()
  }, {
    key: "appendText",
    value: function () {
      var _appendText = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(filePath, fileName, textContent) {
        var pathTokens,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!filePath || typeof filePath !== 'string')) {
                _context4.next = 2;
                break;
              }
              throw new Error('"filePath" must be provided and must be a string.');
            case 2:
              filePath = _utils["default"].trimSlashesInPath(filePath);
              if (_args4.length === 2) {
                textContent = fileName;
                fileName = undefined;
                pathTokens = _utils["default"].parseFilePath(filePath);
                if (pathTokens.fileName) {
                  filePath = pathTokens.filePath;
                  fileName = pathTokens.fileName;
                }
              }
              if (fileName) {
                _context4.next = 6;
                break;
              }
              throw new Error('Can not resolve target file name');
            case 6:
              if (!(typeof textContent !== 'string')) {
                _context4.next = 8;
                break;
              }
              throw new Error('"textContent" must be a string');
            case 8:
              fileName = _utils["default"].sanitizeFileName(fileName);
              return _context4.abrupt("return", this.app.request.put({
                url: "".concat(this.app.urls.fileAppendPath(filePath), "/").concat(fileName),
                headers: {
                  'Content-Type': 'text/plain'
                },
                data: textContent
              }));
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function appendText(_x11, _x12, _x13) {
        return _appendText.apply(this, arguments);
      }
      return appendText;
    }()
  }, {
    key: "listing",
    value: function () {
      var _listing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(filePath, pattern, sub, pagesize, offset) {
        var query;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              query = {};
              if (!(!filePath || typeof filePath !== 'string')) {
                _context5.next = 3;
                break;
              }
              throw new Error('"filePath" must be provided and must be a string.');
            case 3:
              filePath = _utils["default"].trimSlashesInPath(filePath);
              if (pattern && typeof pattern === 'string') {
                query.pattern = pattern;
              }
              if (typeof sub === 'boolean') {
                query.sub = sub;
              }
              if (typeof pagesize === 'number' && pagesize >= 0) {
                query.pagesize = pagesize;
              }
              if (typeof offset === 'number' && offset >= 0) {
                query.offset = offset;
              }
              return _context5.abrupt("return", this.app.request.get({
                url: this.app.urls.filePath(filePath),
                query: query
              }));
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function listing(_x14, _x15, _x16, _x17, _x18) {
        return _listing.apply(this, arguments);
      }
      return listing;
    }()
  }, {
    key: "renameFile",
    value: function () {
      var _renameFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(oldPathName, newName) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!oldPathName || typeof oldPathName !== 'string')) {
                _context6.next = 2;
                break;
              }
              throw new Error('"oldPathName" must be provided and must be a string.');
            case 2:
              if (!(!newName || typeof newName !== 'string')) {
                _context6.next = 4;
                break;
              }
              throw new Error('New File Name must be provided and must be a string.');
            case 4:
              return _context6.abrupt("return", this.app.request.put({
                url: this.app.urls.fileRename(),
                data: {
                  oldPathName: _utils["default"].ensureSlashInPath(oldPathName),
                  newName: newName
                }
              }));
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function renameFile(_x19, _x20) {
        return _renameFile.apply(this, arguments);
      }
      return renameFile;
    }()
  }, {
    key: "moveFile",
    value: function () {
      var _moveFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(sourcePath, targetPath) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.app.request.put({
                url: this.app.urls.fileMove(),
                data: {
                  sourcePath: _utils["default"].ensureSlashInPath(sourcePath),
                  targetPath: _utils["default"].ensureSlashInPath(targetPath)
                }
              }));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function moveFile(_x21, _x22) {
        return _moveFile.apply(this, arguments);
      }
      return moveFile;
    }()
  }, {
    key: "copyFile",
    value: function () {
      var _copyFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(sourcePath, targetPath) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.app.request.put({
                url: this.app.urls.fileCopy(),
                data: {
                  sourcePath: _utils["default"].ensureSlashInPath(sourcePath),
                  targetPath: _utils["default"].ensureSlashInPath(targetPath)
                }
              }));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function copyFile(_x23, _x24) {
        return _copyFile.apply(this, arguments);
      }
      return copyFile;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(filePath) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!filePath || typeof filePath !== 'string')) {
                _context9.next = 2;
                break;
              }
              throw new Error('"filePath" must be provided and must be a string.');
            case 2:
              if (!filePath.startsWith('http://') && !filePath.startsWith('https://')) {
                filePath = this.app.urls.filePath(filePath);
              }
              return _context9.abrupt("return", this.app.request["delete"]({
                url: filePath
              }));
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function remove(_x25) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }, {
    key: "exists",
    value: function () {
      var _exists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(filePath) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(!filePath || typeof filePath !== 'string')) {
                _context10.next = 2;
                break;
              }
              throw new Error('"filePath" must be provided and must be a string.');
            case 2:
              filePath = _utils["default"].trimSlashesInPath(filePath);
              return _context10.abrupt("return", this.app.request.get({
                url: this.app.urls.filePath(filePath),
                query: {
                  action: 'exists'
                }
              }));
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function exists(_x26) {
        return _exists.apply(this, arguments);
      }
      return exists;
    }()
  }, {
    key: "getFileCount",
    value: function () {
      var _getFileCount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(filesPath, pattern, sub, countDirectories) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              if (!(!filesPath || typeof filesPath !== 'string')) {
                _context11.next = 2;
                break;
              }
              throw new Error('"filesPath" must be provided and must be a string.');
            case 2:
              if (!(pattern && typeof pattern !== 'string')) {
                _context11.next = 4;
                break;
              }
              throw new Error('Files Pattern must be provided and must be a string.');
            case 4:
              filesPath = _utils["default"].trimSlashesInPath(filesPath);
              return _context11.abrupt("return", this.app.request.get({
                url: this.app.urls.filePath(filesPath),
                query: {
                  action: 'count',
                  pattern: pattern || '*',
                  sub: !!sub,
                  countDirectories: !!countDirectories
                }
              }));
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function getFileCount(_x27, _x28, _x29, _x30) {
        return _getFileCount.apply(this, arguments);
      }
      return getFileCount;
    }()
  }, {
    key: "createDirectory",
    value: function () {
      var _createDirectory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(directoryPath) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (!(!directoryPath || typeof directoryPath !== 'string')) {
                _context12.next = 2;
                break;
              }
              throw new Error('Directory "path" must be provided and must be a string.');
            case 2:
              directoryPath = _utils["default"].trimSlashesInPath(directoryPath);
              return _context12.abrupt("return", this.app.request.post({
                url: this.app.urls.directoryPath(directoryPath)
              }));
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function createDirectory(_x31) {
        return _createDirectory.apply(this, arguments);
      }
      return createDirectory;
    }()
  }, {
    key: "removeDirectory",
    value: function () {
      var _removeDirectory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(directoryPath) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (!(!directoryPath || typeof directoryPath !== 'string')) {
                _context13.next = 2;
                break;
              }
              throw new Error('Directory "path" must be provided and must be a string.');
            case 2:
              directoryPath = _utils["default"].trimSlashesInPath(directoryPath);
              return _context13.abrupt("return", this.app.request["delete"]({
                url: this.app.urls.filePath(directoryPath)
              }));
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function removeDirectory(_x32) {
        return _removeDirectory.apply(this, arguments);
      }
      return removeDirectory;
    }()
  }]);
  return Files;
}();
exports["default"] = Files;

/***/ }),

/***/ "./src/files/persmission.js":
/*!**********************************!*\
  !*** ./src/files/persmission.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _persmission = _interopRequireDefault(__webpack_require__(/*! ../persmission */ "./src/persmission.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var FilePermission = /*#__PURE__*/function (_Permission) {
  (0, _inherits2["default"])(FilePermission, _Permission);
  var _super = _createSuper(FilePermission);
  function FilePermission() {
    (0, _classCallCheck2["default"])(this, FilePermission);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(FilePermission, [{
    key: "getRequestURL",
    value: function getRequestURL(type, filePath) {
      return this.app.urls.filePermission(type, filePath);
    }
  }]);
  return FilePermission;
}(_persmission["default"]);
exports["default"] = FilePermission;
(0, _defineProperty2["default"])(FilePermission, "BACKWARD_COMPATIBILITY_LABEL", 'Backendless.Files.Permissions.{READ|DELETE|WRITE}');

/***/ }),

/***/ "./src/files/utils.js":
/*!****************************!*\
  !*** ./src/files/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var FilesUtils = {
  isBytesArray: function isBytesArray(data) {
    if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
      return true;
    }
    if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
      return true;
    }
    return Array.isArray(data);
  },
  ensureSlashInPath: function ensureSlashInPath(path) {
    return !path.startsWith('/') ? "/".concat(path) : path;
  },
  trimSlashesInPath: function trimSlashesInPath(path) {
    if (path) {
      if (path.startsWith('/')) {
        path = path.slice(1);
      }
      if (path.endsWith('/')) {
        path = path.slice(0, path.length - 1);
      }
    }
    return path;
  },
  parseFilePath: function parseFilePath(path) {
    var result = {
      filePath: path,
      fileName: null
    };
    if (path) {
      var tokens = path.split('/');
      if (tokens[tokens.length - 1].includes('.')) {
        result.fileName = tokens.pop();
        result.filePath = tokens.join('/');
      }
    }
    return result;
  },
  sanitizeFileName: function sanitizeFileName(fileName) {
    return encodeURIComponent(fileName).replace(/'/g, '%27').replace(/"/g, '%22');
  },
  getFileName: function getFileName(file) {
    if (file.name) {
      return file.name;
    }
    if (file.path) {
      var path = file.path.split('/');
      return path[path.length - 1]; //last item of the file path
    }
  },
  toBase64: function toBase64(content) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof Blob !== 'undefined' && typeof FileReader !== 'undefined')) {
              _context.next = 3;
              break;
            }
            if (!(content instanceof Blob)) {
              content = new Blob([content], {
                type: ''
              });
            }
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = function (error) {
                return reject(error);
              };
              reader.onload = function (event) {
                return resolve(event.target.result.split(';base64,')[1]);
              };
              reader.readAsDataURL(content);
            }));
          case 3:
            if (!(typeof Buffer !== 'undefined')) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", Buffer.from(content).toString('base64'));
          case 5:
            return _context.abrupt("return", content);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
};
var _default = FilesUtils;
exports["default"] = _default;

/***/ }),

/***/ "./src/hive/constants.js":
/*!*******************************!*\
  !*** ./src/hive/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HiveTypes = void 0;
var HiveTypes = {
  KEY_VALUE: 'key-value',
  LIST: 'list',
  MAP: 'map',
  SET: 'set',
  SORTED_SET: 'sorted-set'
};
exports.HiveTypes = HiveTypes;

/***/ }),

/***/ "./src/hive/index.js":
/*!***************************!*\
  !*** ./src/hive/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DataHive = void 0;
exports["default"] = HiveService;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _stores = __webpack_require__(/*! ./stores */ "./src/hive/stores/index.js");
function HiveService(app) {
  function getHive(name) {
    if (!name || typeof name !== 'string') {
      throw new Error('Hive name must be provided and must be a string.');
    }
    return new DataHive(name, {
      app: app
    });
  }
  getHive.getNames = function () {
    return app.request.get({
      url: app.urls.dataHives()
    });
  };
  return getHive;
}
var DataHive = /*#__PURE__*/function () {
  function DataHive(name, context) {
    (0, _classCallCheck2["default"])(this, DataHive);
    this.hiveName = name;
    this.app = context.app;
    this.KeyValueStore = _stores.KeyValueStore.registerType(this);
    this.ListStore = _stores.ListStore.registerType(this);
    this.MapStore = _stores.MapStore.registerType(this);
    this.SetStore = _stores.SetStore.registerType(this);
    this.SortedSetStore = _stores.SortedSetStore.registerType(this);
  }
  (0, _createClass2["default"])(DataHive, [{
    key: "create",
    value: function create() {
      return this.app.request.post({
        url: this.app.urls.dataHive(this.hiveName)
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      return this.app.request["delete"]({
        url: this.app.urls.dataHive(this.hiveName)
      });
    }
  }, {
    key: "rename",
    value: function rename(newName) {
      if (!newName || typeof newName !== 'string') {
        throw new Error('New Hive name must be provided and must be a string.');
      }
      return this.app.request.put({
        url: this.app.urls.dataHive(this.hiveName),
        query: {
          newName: newName
        }
      });
    }
  }]);
  return DataHive;
}();
exports.DataHive = DataHive;

/***/ }),

/***/ "./src/hive/stores/base-store.js":
/*!***************************************!*\
  !*** ./src/hive/stores/base-store.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HiveStore = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "./src/utils.js"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var HiveStore = /*#__PURE__*/function () {
  function HiveStore(context, storeKey) {
    (0, _classCallCheck2["default"])(this, HiveStore);
    this.TYPE = this.constructor.TYPE;
    if (!storeKey || typeof storeKey !== 'string') {
      throw new Error('Store key must be a string.');
    }
    this.app = context.app;
    this.hiveName = context.hiveName;
    this.storeKey = storeKey;
  }
  (0, _createClass2["default"])(HiveStore, [{
    key: "getBaseURL",
    value: function getBaseURL() {
      return "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/").concat(this.storeKey);
    }
  }, {
    key: "delete",
    value: function _delete() {
      return this.constructor["delete"].call(_objectSpread(_objectSpread({}, this), this.constructor), [this.storeKey]);
    }
  }, {
    key: "exist",
    value: function () {
      var _exist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.constructor.exist.call(_objectSpread(_objectSpread({}, this), this.constructor), [this.storeKey]);
            case 2:
              result = _context.sent;
              return _context.abrupt("return", !!result);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function exist() {
        return _exist.apply(this, arguments);
      }
      return exist;
    }()
  }, {
    key: "rename",
    value: function rename(newKey, overwrite) {
      if (!newKey || typeof newKey !== 'string') {
        throw new Error('New key name must be provided and must be a string.');
      }
      if (overwrite !== undefined && typeof overwrite !== 'boolean') {
        throw new Error('Overwrite must be a boolean.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/rename"),
        query: {
          newKey: newKey,
          overwrite: overwrite
        }
      });
    }
  }, {
    key: "getExpiration",
    value: function getExpiration() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/get-expiration-ttl")
      });
    }
  }, {
    key: "clearExpiration",
    value: function clearExpiration() {
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/clear-expiration")
      });
    }
  }, {
    key: "expireAfter",
    value: function expireAfter(ttl) {
      if (isNaN(ttl) || typeof ttl !== 'number') {
        throw new Error('TTL must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/expire"),
        query: {
          ttl: ttl
        }
      });
    }
  }, {
    key: "expireAt",
    value: function expireAt(unixTime) {
      if (isNaN(unixTime) || typeof unixTime !== 'number') {
        throw new Error('Expiration time must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/expire-at"),
        query: {
          unixTime: unixTime
        }
      });
    }
  }, {
    key: "touch",
    value: function touch() {
      return this.constructor.touch.call(_objectSpread(_objectSpread({}, this), this.constructor), [this.storeKey]);
    }
  }, {
    key: "secondsSinceLastOperation",
    value: function secondsSinceLastOperation() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/seconds-since-last-operation")
      });
    }
  }], [{
    key: "registerType",
    value: function registerType(hive) {
      var _this = this;
      var context = _objectSpread(_objectSpread({}, this), {}, {
        app: hive.app,
        hiveName: hive.hiveName
      });
      var factory = function factory(storeKey) {
        return new _this(context, storeKey);
      };
      this.STATIC_METHODS.forEach(function (methodName) {
        factory[methodName] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _this[methodName].apply(context, args);
        };
      });
      return factory;
    }
  }, {
    key: "keys",
    value: function keys(options) {
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var cursor = options.cursor,
          pageSize = options.pageSize,
          filterPattern = options.filterPattern;
        if (cursor !== undefined && (typeof cursor !== 'number' || isNaN(cursor))) {
          throw new Error('Cursor must be a number.');
        }
        if (pageSize !== undefined && (typeof pageSize !== 'number' || isNaN(pageSize))) {
          throw new Error('Page size must be a number.');
        }
        if (filterPattern !== undefined && (typeof filterPattern !== 'string' || !filterPattern)) {
          throw new Error('Filter pattern must be a string.');
        }
      }
      return this.app.request.get({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/keys"),
        query: options
      });
    }
  }, {
    key: "delete",
    value: function _delete(keys) {
      if (!Array.isArray(keys)) {
        throw new Error('Keys must be provided and must be a list of strings.');
      }
      return this.app.request["delete"]({
        url: this.app.urls.hiveStore(this.hiveName, this.TYPE),
        data: keys
      });
    }
  }, {
    key: "exist",
    value: function exist(keys) {
      if (!Array.isArray(keys)) {
        throw new Error('Keys must be provided and must be a list of strings.');
      }
      return this.app.request.post({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/exist"),
        data: keys
      });
    }
  }, {
    key: "touch",
    value: function touch(keys) {
      if (!Array.isArray(keys)) {
        throw new Error('Keys must be provided and must be a list of strings.');
      }
      return this.app.request.put({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/touch"),
        data: keys
      });
    }
  }]);
  return HiveStore;
}();
exports.HiveStore = HiveStore;
(0, _defineProperty2["default"])(HiveStore, "STATIC_METHODS", ['keys', 'delete', 'exist', 'touch']);

/***/ }),

/***/ "./src/hive/stores/index.js":
/*!**********************************!*\
  !*** ./src/hive/stores/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _keyValue = __webpack_require__(/*! ./key-value */ "./src/hive/stores/key-value.js");
Object.keys(_keyValue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _keyValue[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keyValue[key];
    }
  });
});
var _list = __webpack_require__(/*! ./list */ "./src/hive/stores/list.js");
Object.keys(_list).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _list[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _list[key];
    }
  });
});
var _map = __webpack_require__(/*! ./map */ "./src/hive/stores/map.js");
Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _map[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _map[key];
    }
  });
});
var _set = __webpack_require__(/*! ./set */ "./src/hive/stores/set.js");
Object.keys(_set).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _set[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _set[key];
    }
  });
});
var _sortedSet = __webpack_require__(/*! ./sorted-set */ "./src/hive/stores/sorted-set.js");
Object.keys(_sortedSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sortedSet[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sortedSet[key];
    }
  });
});

/***/ }),

/***/ "./src/hive/stores/key-value.js":
/*!**************************************!*\
  !*** ./src/hive/stores/key-value.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.KeyValueStore = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _constants = __webpack_require__(/*! ../constants */ "./src/hive/constants.js");
var _baseStore = __webpack_require__(/*! ./base-store */ "./src/hive/stores/base-store.js");
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "./src/utils.js"));
var _utils2 = __webpack_require__(/*! ../utils */ "./src/hive/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var KeyValueStore = /*#__PURE__*/function (_HiveStore) {
  (0, _inherits2["default"])(KeyValueStore, _HiveStore);
  var _super = _createSuper(KeyValueStore);
  function KeyValueStore() {
    (0, _classCallCheck2["default"])(this, KeyValueStore);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(KeyValueStore, [{
    key: "get",
    value: function get() {
      return this.app.request.get({
        url: this.getBaseURL()
      });
    }
  }, {
    key: "set",
    value: function set(value, options) {
      return this.constructor.set.apply(_objectSpread(_objectSpread({}, this), this.constructor), [this.storeKey, value, options]);
    }
  }, {
    key: "increment",
    value: function increment(value) {
      if (isNaN(value) || typeof value !== 'number') {
        throw new Error('Value must be provided and must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/increment"),
        query: {
          value: value
        }
      });
    }
  }, {
    key: "decrement",
    value: function decrement(value) {
      if (isNaN(value) || typeof value !== 'number') {
        throw new Error('Value must be provided and must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/decrement"),
        query: {
          value: value
        }
      });
    }
  }], [{
    key: "get",
    value: function get(keys) {
      if (!Array.isArray(keys)) {
        throw new Error('Keys must be provided and must be a list of strings.');
      }
      return this.app.request.post({
        url: this.app.urls.hiveStore(this.hiveName, this.TYPE),
        data: keys
      });
    }
  }, {
    key: "set",
    value: function set(key, value, options) {
      if (_utils["default"].isObject(key)) {
        if (!Object.keys(key).length) {
          throw new Error('Provided object must have at least 1 key.');
        }
        return this.app.request.put({
          url: this.app.urls.hiveStore(this.hiveName, this.TYPE),
          data: key
        });
      }
      if (!key || typeof key !== 'string') {
        throw new Error('Key must be provided and must be a string.');
      }
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var ttl = options.ttl,
          expireAt = options.expireAt,
          condition = options.condition;
        if (ttl !== undefined && (isNaN(ttl) || typeof ttl !== 'number')) {
          throw new Error('TTL in seconds must be a number.');
        }
        if (expireAt !== undefined && (isNaN(expireAt) || typeof expireAt !== 'number')) {
          throw new Error('ExpireAt timestamp must be a number.');
        }
        if (condition !== undefined && !['IfExists', 'IfNotExists', 'Always'].includes(condition)) {
          throw new Error('Condition must be one of this values: [IfExists, IfNotExists, Always].');
        }
      }
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.put({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/").concat(key),
        data: _objectSpread({
          value: value
        }, options)
      });
    }
  }]);
  return KeyValueStore;
}(_baseStore.HiveStore);
exports.KeyValueStore = KeyValueStore;
(0, _defineProperty2["default"])(KeyValueStore, "TYPE", _constants.HiveTypes.KEY_VALUE);
(0, _defineProperty2["default"])(KeyValueStore, "STATIC_METHODS", [].concat((0, _toConsumableArray2["default"])(_baseStore.HiveStore.STATIC_METHODS), ['get', 'set']));

/***/ }),

/***/ "./src/hive/stores/list.js":
/*!*********************************!*\
  !*** ./src/hive/stores/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ListStore = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _constants = __webpack_require__(/*! ../constants */ "./src/hive/constants.js");
var _baseStore = __webpack_require__(/*! ./base-store */ "./src/hive/stores/base-store.js");
var _utils = __webpack_require__(/*! ../utils */ "./src/hive/utils.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ListStore = /*#__PURE__*/function (_HiveStore) {
  (0, _inherits2["default"])(ListStore, _HiveStore);
  var _super = _createSuper(ListStore);
  function ListStore() {
    (0, _classCallCheck2["default"])(this, ListStore);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(ListStore, [{
    key: "get",
    value: function get(from, to) {
      if (to !== undefined) {
        if (isNaN(to) || typeof to !== 'number') {
          throw new Error('Index To must be a number.');
        }
        if (isNaN(from) || typeof from !== 'number') {
          throw new Error('Index From must be a number.');
        }
        return this.app.request.get({
          url: this.getBaseURL(),
          query: {
            from: from,
            to: to
          }
        });
      }
      if (from !== undefined) {
        if (isNaN(from) || typeof from !== 'number') {
          throw new Error('Index must be a number.');
        }
        return this.app.request.get({
          url: "".concat(this.getBaseURL(), "/").concat(from)
        });
      }
      return this.app.request.get({
        url: this.getBaseURL()
      });
    }
  }, {
    key: "length",
    value: function length() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/length")
      });
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(valueToInsert, anchorValue) {
      return this.insert(valueToInsert, anchorValue, true);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(valueToInsert, anchorValue) {
      return this.insert(valueToInsert, anchorValue, false);
    }
  }, {
    key: "insert",
    value: function insert(valueToInsert, anchorValue, before) {
      if (!(0, _utils.isHiveValueValid)(valueToInsert)) {
        throw new Error('ValueToInsert must be provided and must be one of types: string, number, boolean, object, array.');
      }
      if (!(0, _utils.isHiveValueValid)(anchorValue)) {
        throw new Error('AnchorValue must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/insert-").concat(before ? 'before' : 'after'),
        data: {
          valueToInsert: valueToInsert,
          anchorValue: anchorValue
        }
      });
    }
  }, {
    key: "deleteValue",
    value: function deleteValue(value, count) {
      if (!(0, _utils.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/delete-value"),
        data: {
          value: value,
          count: count
        }
      });
    }
  }, {
    key: "addFirstValue",
    value: function addFirstValue(value) {
      if (!(0, _utils.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add-first"),
        data: [value]
      });
    }
  }, {
    key: "addFirstValues",
    value: function addFirstValues(values) {
      if (!values || !Array.isArray(values) || !values.length || !(0, _utils.isHiveValueValid)(values)) {
        throw new Error('Value must be provided and must be a list of valid JSON items.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add-first"),
        data: values
      });
    }
  }, {
    key: "addLastValue",
    value: function addLastValue(value) {
      if (!(0, _utils.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add-last"),
        data: [value]
      });
    }
  }, {
    key: "addLastValues",
    value: function addLastValues(values) {
      if (!values || !Array.isArray(values) || !values.length || !(0, _utils.isHiveValueValid)(values)) {
        throw new Error('Value must be provided and must be a list of valid JSON items.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add-last"),
        data: values
      });
    }
  }, {
    key: "deleteFirst",
    value: function deleteFirst(count) {
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/get-first-and-delete"),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "deleteLast",
    value: function deleteLast(count) {
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/get-last-and-delete"),
        query: {
          count: count
        }
      });
    }
  }]);
  return ListStore;
}(_baseStore.HiveStore);
exports.ListStore = ListStore;
(0, _defineProperty2["default"])(ListStore, "TYPE", _constants.HiveTypes.LIST);

/***/ }),

/***/ "./src/hive/stores/map.js":
/*!********************************!*\
  !*** ./src/hive/stores/map.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapStore = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _constants = __webpack_require__(/*! ../constants */ "./src/hive/constants.js");
var _baseStore = __webpack_require__(/*! ./base-store */ "./src/hive/stores/base-store.js");
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "./src/utils.js"));
var _utils2 = __webpack_require__(/*! ../utils */ "./src/hive/utils.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MapStore = /*#__PURE__*/function (_HiveStore) {
  (0, _inherits2["default"])(MapStore, _HiveStore);
  var _super = _createSuper(MapStore);
  function MapStore() {
    (0, _classCallCheck2["default"])(this, MapStore);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(MapStore, [{
    key: "get",
    value: function get(keys) {
      if (keys !== undefined && !(typeof keys === 'string' || Array.isArray(keys))) {
        throw new Error('Key(s) must be a string or list of strings.');
      }
      return this.app.request.post({
        url: this.getBaseURL(),
        data: _utils["default"].castArray(keys)
      });
    }
  }, {
    key: "getValue",
    value: function getValue(key) {
      if (!key || typeof key !== 'string') {
        throw new Error('Key must be provided and must be a string.');
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/get/").concat(key)
      });
    }
  }, {
    key: "keyExists",
    value: function keyExists(key) {
      if (!key || typeof key !== 'string') {
        throw new Error('Key must be provided and must be a string.');
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/exists/").concat(key)
      });
    }
  }, {
    key: "length",
    value: function length() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/length")
      });
    }
  }, {
    key: "keys",
    value: function keys() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/keys")
      });
    }
  }, {
    key: "values",
    value: function values() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/values")
      });
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (!key) {
        throw new Error('First argument must be provided and must be a string or an object.');
      }
      if (_utils["default"].isObject(key)) {
        if (!Object.keys(key).length) {
          throw new Error('Provided object must have at least 1 key.');
        }
        return this.app.request.put({
          url: this.getBaseURL(),
          data: key
        });
      }
      if (typeof key !== 'string') {
        throw new Error('Key must be a string.');
      }
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/set/").concat(key),
        data: {
          value: value
        }
      });
    }
  }, {
    key: "setWithOverwrite",
    value: function setWithOverwrite(key, value, overwrite) {
      if (!key || typeof key !== 'string') {
        throw new Error('Key must be provided and must be a string.');
      }
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      if (overwrite !== undefined && typeof overwrite !== 'boolean') {
        throw new Error('Overwrite must be a boolean.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/set-with-overwrite/").concat(key),
        data: {
          value: value,
          overwrite: overwrite
        }
      });
    }
  }, {
    key: "increment",
    value: function increment(key, count) {
      if (!key || typeof key !== 'string') {
        throw new Error('Key must be provided and must be a string.');
      }
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/increment/").concat(key),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "decrement",
    value: function decrement(key, count) {
      if (!key || typeof key !== 'string') {
        throw new Error('Key must be provided and must be a string.');
      }
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/decrement/").concat(key),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "deleteKeys",
    value: function deleteKeys(keys) {
      if (!keys || !(typeof keys === 'string' || Array.isArray(keys))) {
        throw new Error('Key(s) must be provided and must be a string or list of strings.');
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/by-obj-keys"),
        data: _utils["default"].castArray(keys)
      });
    }
  }]);
  return MapStore;
}(_baseStore.HiveStore);
exports.MapStore = MapStore;
(0, _defineProperty2["default"])(MapStore, "TYPE", _constants.HiveTypes.MAP);

/***/ }),

/***/ "./src/hive/stores/set.js":
/*!********************************!*\
  !*** ./src/hive/stores/set.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SetStore = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _baseStore = __webpack_require__(/*! ./base-store */ "./src/hive/stores/base-store.js");
var _constants = __webpack_require__(/*! ../constants */ "./src/hive/constants.js");
var _utils = __webpack_require__(/*! ../utils */ "./src/hive/utils.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SetStore = /*#__PURE__*/function (_HiveStore) {
  (0, _inherits2["default"])(SetStore, _HiveStore);
  var _super = _createSuper(SetStore);
  function SetStore() {
    (0, _classCallCheck2["default"])(this, SetStore);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(SetStore, [{
    key: "get",
    value: function get() {
      return this.app.request.get({
        url: this.getBaseURL()
      });
    }
  }, {
    key: "getRandom",
    value: function getRandom(count) {
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/random"),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "getRandomAndDelete",
    value: function getRandomAndDelete(count) {
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/random"),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "addValue",
    value: function addValue(value) {
      if (!(0, _utils.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add"),
        data: [value]
      });
    }
  }, {
    key: "addValues",
    value: function addValues(values) {
      if (!values || !Array.isArray(values) || !values.length || !(0, _utils.isHiveValueValid)(values)) {
        throw new Error('Value must be provided and must be a list of valid JSON items.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add"),
        data: values
      });
    }
  }, {
    key: "deleteValue",
    value: function deleteValue(value) {
      if (!(0, _utils.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/values"),
        data: [value]
      });
    }
  }, {
    key: "deleteValues",
    value: function deleteValues(values) {
      if (!values || !Array.isArray(values) || !values.length || !(0, _utils.isHiveValueValid)(values)) {
        throw new Error('Value must be provided and must be a list of valid JSON items.');
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/values"),
        data: values
      });
    }
  }, {
    key: "isValueMember",
    value: function isValueMember(value) {
      if (!(0, _utils.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.post({
        url: "".concat(this.getBaseURL(), "/contains"),
        data: [value]
      });
    }
  }, {
    key: "isValuesMembers",
    value: function isValuesMembers(values) {
      if (!values || !Array.isArray(values) || !values.length || !(0, _utils.isHiveValueValid)(values)) {
        throw new Error('Value must be provided and must be a list of valid JSON items.');
      }
      return this.app.request.post({
        url: "".concat(this.getBaseURL(), "/contains"),
        data: values
      });
    }
  }, {
    key: "length",
    value: function length() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/length")
      });
    }
  }], [{
    key: "difference",
    value: function difference(keyNames) {
      if (!Array.isArray(keyNames)) {
        throw new Error('Store keys must be provided and must be an array.');
      }
      return this.app.request.post({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/difference"),
        data: keyNames
      });
    }
  }, {
    key: "intersection",
    value: function intersection(keyNames) {
      if (!Array.isArray(keyNames)) {
        throw new Error('Store keys must be provided and must be an array.');
      }
      return this.app.request.post({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/intersection"),
        data: keyNames
      });
    }
  }, {
    key: "union",
    value: function union(keyNames) {
      if (!Array.isArray(keyNames)) {
        throw new Error('Store keys must be provided and must be an array.');
      }
      return this.app.request.post({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/union"),
        data: keyNames
      });
    }
  }]);
  return SetStore;
}(_baseStore.HiveStore);
exports.SetStore = SetStore;
(0, _defineProperty2["default"])(SetStore, "TYPE", _constants.HiveTypes.SET);
(0, _defineProperty2["default"])(SetStore, "STATIC_METHODS", [].concat((0, _toConsumableArray2["default"])(_baseStore.HiveStore.STATIC_METHODS), ['difference', 'intersection', 'union']));

/***/ }),

/***/ "./src/hive/stores/sorted-set.js":
/*!***************************************!*\
  !*** ./src/hive/stores/sorted-set.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SortedSetStore = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _baseStore = __webpack_require__(/*! ./base-store */ "./src/hive/stores/base-store.js");
var _constants = __webpack_require__(/*! ../constants */ "./src/hive/constants.js");
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "./src/utils.js"));
var _set = __webpack_require__(/*! ./set */ "./src/hive/stores/set.js");
var _utils2 = __webpack_require__(/*! ../utils */ "./src/hive/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SortedSetStore = /*#__PURE__*/function (_HiveStore) {
  (0, _inherits2["default"])(SortedSetStore, _HiveStore);
  var _super = _createSuper(SortedSetStore);
  function SortedSetStore() {
    (0, _classCallCheck2["default"])(this, SortedSetStore);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(SortedSetStore, [{
    key: "add",
    value: function add(items, options) {
      if (!items || !Array.isArray(items)) {
        throw new Error('Items must be provided and must be an array.');
      }
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var duplicateBehaviour = options.duplicateBehaviour,
          scoreUpdateMode = options.scoreUpdateMode,
          resultType = options.resultType;
        if (duplicateBehaviour !== undefined && !['OnlyUpdate', 'AlwaysAdd'].includes(duplicateBehaviour)) {
          throw new Error('Duplicate Behaviour argument must be one of this values: OnlyUpdate, AlwaysAdd.');
        }
        if (scoreUpdateMode !== undefined && !['Greater', 'Less'].includes(scoreUpdateMode)) {
          throw new Error('Score Update Mode argument must be one of this values: Greater, Less.');
        }
        if (resultType !== undefined && !['NewAdded', 'TotalChanged'].includes(resultType)) {
          throw new Error('Result Type must be one of this values: NewAdded, TotalChanged.');
        }
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/add"),
        data: _objectSpread({
          items: items
        }, options)
      });
    }
  }, {
    key: "incrementScore",
    value: function incrementScore(value, scoreValue) {
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      if (isNaN(scoreValue) || typeof scoreValue !== 'number') {
        throw new Error('ScoreValue must be provided and must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/increment"),
        data: {
          scoreValue: scoreValue,
          value: value
        }
      });
    }
  }, {
    key: "decrementScore",
    value: function decrementScore(value, scoreValue) {
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      if (isNaN(scoreValue) || typeof scoreValue !== 'number') {
        throw new Error('ScoreValue must be provided and must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/decrement"),
        data: {
          scoreValue: scoreValue,
          value: value
        }
      });
    }
  }, {
    key: "getAndDeleteMaxScore",
    value: function getAndDeleteMaxScore(count) {
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/get-with-max-score-and-delete"),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "getAndDeleteMinScore",
    value: function getAndDeleteMinScore(count) {
      if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
        throw new Error('Count must be a number.');
      }
      return this.app.request.put({
        url: "".concat(this.getBaseURL(), "/get-with-min-score-and-delete"),
        query: {
          count: count
        }
      });
    }
  }, {
    key: "getRandom",
    value: function getRandom(options) {
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var count = options.count,
          withScores = options.withScores;
        if (count !== undefined && (isNaN(count) || typeof count !== 'number')) {
          throw new Error('Count must be a number.');
        }
        if (withScores !== undefined && typeof withScores !== 'boolean') {
          throw new Error('With Scores argument must be a boolean.');
        }
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/get-random"),
        query: _objectSpread({}, options)
      });
    }
  }, {
    key: "getScore",
    value: function getScore(value) {
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request.post({
        url: "".concat(this.getBaseURL(), "/get-score"),
        data: {
          value: value
        }
      });
    }
  }, {
    key: "getRank",
    value: function getRank(value, reverse) {
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      if (reverse !== undefined && typeof reverse !== 'boolean') {
        throw new Error('Reverse argument must be a boolean.');
      }
      return this.app.request.post({
        url: "".concat(this.getBaseURL(), "/get-rank"),
        data: {
          value: value,
          reverse: reverse
        }
      });
    }
  }, {
    key: "getRangeByRank",
    value: function getRangeByRank(startRank, stopRank, options) {
      if (isNaN(startRank) || typeof startRank !== 'number') {
        throw new Error('Start Rank must be provided and must be a number.');
      }
      if (isNaN(stopRank) || typeof stopRank !== 'number') {
        throw new Error('Stop Rank must be provided and must be a number.');
      }
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var withScores = options.withScores,
          reverse = options.reverse;
        if (withScores !== undefined && typeof withScores !== 'boolean') {
          throw new Error('With Scores argument must be a boolean.');
        }
        if (reverse !== undefined && typeof reverse !== 'boolean') {
          throw new Error('Reverse argument must be a boolean.');
        }
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/get-range-by-rank"),
        query: _objectSpread({
          startRank: startRank,
          stopRank: stopRank
        }, options)
      });
    }
  }, {
    key: "getRangeByScore",
    value: function getRangeByScore(options) {
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var minScore = options.minScore,
          maxScore = options.maxScore,
          minBound = options.minBound,
          maxBound = options.maxBound,
          offset = options.offset,
          pageSize = options.pageSize,
          withScores = options.withScores,
          reverse = options.reverse;
        if (minScore !== undefined && (isNaN(minScore) || typeof minScore !== 'number')) {
          throw new Error('Minimal Score must be a number.');
        }
        if (maxScore !== undefined && (isNaN(maxScore) || typeof maxScore !== 'number')) {
          throw new Error('Maximal Score must be a number.');
        }
        if (minBound !== undefined && !['Include', 'Exclude', 'Infinity'].includes(minBound)) {
          throw new Error('Minimal bound must be one of this values: Include, Exclude, Infinity.');
        }
        if (maxBound !== undefined && !['Include', 'Exclude', 'Infinity'].includes(maxBound)) {
          throw new Error('Maximal bound must be one of this values: Include, Exclude, Infinity.');
        }
        if (offset !== undefined && (typeof offset !== 'number' || isNaN(offset))) {
          throw new Error('Offset must be a number.');
        }
        if (pageSize !== undefined && (typeof pageSize !== 'number' || isNaN(pageSize))) {
          throw new Error('Page Size must be a number.');
        }
        if (withScores !== undefined && typeof withScores !== 'boolean') {
          throw new Error('With Scores argument must be a boolean.');
        }
        if (reverse !== undefined && typeof reverse !== 'boolean') {
          throw new Error('Reverse argument must be a boolean.');
        }
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/get-range-by-score"),
        query: _objectSpread({}, options)
      });
    }
  }, {
    key: "deleteValue",
    value: function deleteValue(value) {
      if (!(0, _utils2.isHiveValueValid)(value)) {
        throw new Error('Value must be provided and must be one of types: string, number, boolean, object, array.');
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/values"),
        data: [value]
      });
    }
  }, {
    key: "deleteValues",
    value: function deleteValues(values) {
      if (!values || !Array.isArray(values) || !values.length || !(0, _utils2.isHiveValueValid)(values)) {
        throw new Error('Value must be provided and must be a list of JSON items.');
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/values"),
        data: values
      });
    }
  }, {
    key: "deleteValuesByRank",
    value: function deleteValuesByRank(startRank, stopRank) {
      if (isNaN(startRank) || typeof startRank !== 'number') {
        throw new Error('Start Rank must be provided and must be a number.');
      }
      if (isNaN(stopRank) || typeof stopRank !== 'number') {
        throw new Error('Stop Rank must be provided and must be a number.');
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/delete-by-rank"),
        query: {
          startRank: startRank,
          stopRank: stopRank
        }
      });
    }
  }, {
    key: "deleteValuesByScore",
    value: function deleteValuesByScore(options) {
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var minScore = options.minScore,
          maxScore = options.maxScore,
          minBound = options.minBound,
          maxBound = options.maxBound;
        if (minScore !== undefined && (isNaN(minScore) || typeof minScore !== 'number')) {
          throw new Error('Minimal Score must be a number.');
        }
        if (maxScore !== undefined && (isNaN(maxScore) || typeof maxScore !== 'number')) {
          throw new Error('Maximal Score must be a number.');
        }
        if (minBound !== undefined && !['Include', 'Exclude', 'Infinity'].includes(minBound)) {
          throw new Error('Minimal bound must be one of this values: Include, Exclude, Infinity.');
        }
        if (maxBound !== undefined && !['Include', 'Exclude', 'Infinity'].includes(maxBound)) {
          throw new Error('Maximal bound must be one of this values: Include, Exclude, Infinity.');
        }
      }
      return this.app.request["delete"]({
        url: "".concat(this.getBaseURL(), "/delete-by-score"),
        query: _objectSpread({}, options)
      });
    }
  }, {
    key: "length",
    value: function length() {
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/length")
      });
    }
  }, {
    key: "countBetweenScores",
    value: function countBetweenScores(options) {
      if (options !== undefined) {
        if (!_utils["default"].isObject(options)) {
          throw new Error('Options must be an object.');
        }
        var minScore = options.minScore,
          maxScore = options.maxScore,
          minBound = options.minBound,
          maxBound = options.maxBound;
        if (minScore !== undefined && (isNaN(minScore) || typeof minScore !== 'number')) {
          throw new Error('Minimal Score must be a number.');
        }
        if (maxScore !== undefined && (isNaN(maxScore) || typeof maxScore !== 'number')) {
          throw new Error('Maximal Score must be a number.');
        }
        if (minBound !== undefined && !['Include', 'Exclude', 'Infinity'].includes(minBound)) {
          throw new Error('Minimal bound must be one of this values: Include, Exclude, Infinity.');
        }
        if (maxBound !== undefined && !['Include', 'Exclude', 'Infinity'].includes(maxBound)) {
          throw new Error('Maximal bound must be one of this values: Include, Exclude, Infinity.');
        }
      }
      return this.app.request.get({
        url: "".concat(this.getBaseURL(), "/count"),
        query: _objectSpread({}, options)
      });
    }
  }], [{
    key: "intersection",
    value: function intersection(keyNames) {
      if (!Array.isArray(keyNames)) {
        throw new Error('Store keys must be provided and must be an array.');
      }
      return this.app.request.post({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/intersection"),
        data: keyNames
      });
    }
  }, {
    key: "union",
    value: function union(keyNames) {
      if (!Array.isArray(keyNames)) {
        throw new Error('Store keys must be provided and must be an array.');
      }
      return this.app.request.post({
        url: "".concat(this.app.urls.hiveStore(this.hiveName, this.TYPE), "/action/union"),
        data: keyNames
      });
    }
  }]);
  return SortedSetStore;
}(_baseStore.HiveStore);
exports.SortedSetStore = SortedSetStore;
(0, _defineProperty2["default"])(SortedSetStore, "TYPE", _constants.HiveTypes.SORTED_SET);
(0, _defineProperty2["default"])(SortedSetStore, "STATIC_METHODS", [].concat((0, _toConsumableArray2["default"])(_baseStore.HiveStore.STATIC_METHODS), ['difference', 'intersection', 'union']));
(0, _defineProperty2["default"])(SortedSetStore, "difference", _set.SetStore.difference);

/***/ }),

/***/ "./src/hive/utils.js":
/*!***************************!*\
  !*** ./src/hive/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isHiveValueValid = isHiveValueValid;
function isHiveValueValid(value) {
  if (value == null) {
    return false;
  }
  try {
    var json = JSON.stringify(value);
    return !!json;
  } catch (_unused) {
    return false;
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _backendlessRequest = _interopRequireDefault(__webpack_require__(/*! backendless-request */ "./node_modules/backendless-request/dist/backendless-request.js"));
var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ "./src/request/index.js"));
var _urls = _interopRequireDefault(__webpack_require__(/*! ./urls */ "./src/urls.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/utils.js"));
var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./src/expression.js"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_PROPS = {
  appId: null,
  apiKey: null,
  serverURL: 'https://api.backendless.com',
  domain: null,
  apiURI: '/api',
  debugMode: false,
  standalone: false,
  XMLHttpRequest: typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined
};
var STATELESS_PROPS = ['appId', 'apiKey', 'domain'];
var root = (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) === 'object' && self.self === self && self || (typeof __webpack_require__.g === "undefined" ? "undefined" : (0, _typeof2["default"])(__webpack_require__.g)) === 'object' && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g;
var previousBackendless = root && root.Backendless;
var showLegacyDataWarning = function showLegacyDataWarning() {
  if (!showLegacyDataWarning.isShown) {
    // eslint-disable-next-line no-console
    console.warn('Backendless.Persistence is deprecated namespace, use Backendless.Data instead');
    showLegacyDataWarning.isShown = true;
  }
};

// Backendless supports three signatures for the initApp method
// two args - applicationId {String} and secretKey {String}
// one argument - domain {String}
// one argument - whole set of options {Object}
var parseInitConfig = function parseInitConfig() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var appId = args[0],
    apiKey = args[1];
  if (appId && (0, _typeof2["default"])(appId) === 'object') {
    return appId;
  }
  if (typeof appId === 'string' && !apiKey) {
    return {
      domain: appId
    };
  }
  return {
    appId: appId,
    apiKey: apiKey
  };
};
var validateConfig = function validateConfig(config) {
  if (config.domain) {
    if (!config.domain.startsWith('https://') && !config.domain.startsWith('http://')) {
      throw new Error('When initialize the SDK with a custom domain it should start with http:// or https://, ' + 'for example: Backendless.initApp(\'https://foobar.com\')');
    }
  }
};
var SERVICES = {
  'Logging': function Logging() {
    return (__webpack_require__(/*! ./logging */ "./src/logging/index.js")["default"]);
  },
  'Counters': function Counters() {
    return (__webpack_require__(/*! ./counters */ "./src/counters/index.js")["default"]);
  },
  'Cache': function Cache() {
    return (__webpack_require__(/*! ./cache */ "./src/cache/index.js")["default"]);
  },
  'Commerce': function Commerce() {
    return (__webpack_require__(/*! ./commerce */ "./src/commerce/index.js")["default"]);
  },
  'Users': function Users() {
    return (__webpack_require__(/*! ./users */ "./src/users/index.js")["default"]);
  },
  'BL': function BL() {
    return (__webpack_require__(/*! ./bl */ "./src/bl/index.js")["default"]);
  },
  'Data': function Data() {
    return (__webpack_require__(/*! ./data */ "./src/data/index.js")["default"]);
  },
  'Hive': function Hive() {
    return (__webpack_require__(/*! ./hive */ "./src/hive/index.js")["default"]);
  },
  'Messaging': function Messaging() {
    return (__webpack_require__(/*! ./messaging */ "./src/messaging/index.js")["default"]);
  },
  'Files': function Files() {
    return (__webpack_require__(/*! ./files */ "./src/files/index.js")["default"]);
  },
  'RT': function RT() {
    return (__webpack_require__(/*! ./rt */ "./src/rt.js")["default"]);
  },
  'SharedObject': function SharedObject() {
    return (__webpack_require__(/*! ./rso */ "./src/rso/index.js")["default"]);
  },
  'LocalCache': function LocalCache() {
    return (__webpack_require__(/*! ./local-cache */ "./src/local-cache/index.js")["default"]);
  },
  'UnitOfWork': function UnitOfWork() {
    return (__webpack_require__(/*! ./unit-of-work */ "./src/unit-of-work/index.js")["default"]);
  },
  'Management': function Management() {
    return (__webpack_require__(/*! ./management */ "./src/management/index.js")["default"]);
  }
};
var Backendless = /*#__PURE__*/function () {
  function Backendless(props) {
    (0, _classCallCheck2["default"])(this, Backendless);
    this.initConfig(props);
    this.Request = _backendlessRequest["default"];
    this.request = new _request["default"](this);
    this.urls = new _urls["default"](this);
  }

  /**
   * @param {Object} config
   */
  (0, _createClass2["default"])(Backendless, [{
    key: "initConfig",
    value: function initConfig(config) {
      config = _objectSpread({}, config);
      if (config.domain) {
        delete config.appId;
        delete config.apiKey;
      }
      for (var key in DEFAULT_PROPS) {
        if (DEFAULT_PROPS.hasOwnProperty(key)) {
          var privateKey = "__".concat(key);
          if (STATELESS_PROPS.includes(key)) {
            delete this[privateKey];
          }
          var defaultValue = this[privateKey] === undefined ? DEFAULT_PROPS[key] : this[privateKey];
          this[privateKey] = config[key] === undefined ? defaultValue : config[key];
        }
      }
    }

    /**
     * @param {string|Object} appId|domain|config
     * @param {string} [apiKey]
     * @returns {Backendless}
     */
  }, {
    key: "initApp",
    value: function initApp() {
      var config = parseInitConfig.apply(void 0, arguments);
      validateConfig(config);
      var app = config.standalone ? new Backendless(this) : this;
      app.initConfig(config);
      app.resetRT();
      app.__removeService('LocalCache');
      var loggingConfig = (0, _extends2["default"])({
        loadLevels: true,
        defaultLevel: 'all',
        levels: {}
      }, config.logging);
      if (app.__hasService('Logging')) {
        app.Logging.reset();
        app.Logging.setConfig(loggingConfig);
      }
      if (app.__hasService('Users')) {
        app.Users.currentUser = null;
      }
      delete this.__device;
      app.loggingConfig = loggingConfig;
      return app;
    }
  }, {
    key: "__hasService",
    value: function __hasService(name) {
      return !!this["__".concat(name)];
    }
  }, {
    key: "__removeService",
    value: function __removeService(name) {
      delete this["__".concat(name)];
    }
  }, {
    key: "__getService",
    value: function __getService(name) {
      var privateName = "__".concat(name);
      if (!this[privateName]) {
        var Service = SERVICES[name]();
        this[privateName] = new Service(this);
      }
      return this[privateName];
    }

    ///--------SETTERS/GETTERS-------///

    ///--------standalone-------///
  }, {
    key: "standalone",
    get: function get() {
      return this.__standalone;
    },
    set: function set(standalone) {
      throw new Error('Setting value to Backendless.standalone directly is not possible, ' + "instead you must use Backendless.initApp({ appId: [APP_ID], apiKey: [API_KEY], standalone: ".concat(standalone, " })"));
    }
  }, {
    key: "appId",
    get: function get() {
      return this.__appId;
    },
    set: function set(appId) {
      throw new Error("Setting '".concat(appId, "' value to Backendless.appId directly is not possible, ") + "instead you must use Backendless.initApp('".concat(appId, "', API_KEY)"));
    }
  }, {
    key: "apiKey",
    get: function get() {
      return this.__apiKey;
    },
    set: function set(apiKey) {
      throw new Error("Setting '".concat(apiKey, "' value to Backendless.apiKey directly is not possible, ") + "instead you must use Backendless.initApp(APP_ID, '".concat(apiKey, "')"));
    }

    ///--------serverURL-------///
  }, {
    key: "serverURL",
    get: function get() {
      return this.__serverURL;
    },
    set: function set(serverURL) {
      this.__serverURL = serverURL;
    }

    ///--------domain-------///
  }, {
    key: "domain",
    get: function get() {
      return this.__domain;
    },
    set: function set(domain) {
      this.__domain = domain;
    }

    ///--------apiURI-------///
  }, {
    key: "apiURI",
    get: function get() {
      return this.__apiURI;
    },
    set: function set(apiURI) {
      this.__apiURI = apiURI;
    }

    ///--------appPath-------///
  }, {
    key: "appPath",
    get: function get() {
      if (this.domain) {
        return this.domain + this.apiURI;
      }
      return [this.serverURL, this.appId, this.apiKey].join('/');
    },
    set: function set(appPath) {
      throw new Error("Setting '".concat(appPath, "' value to Backendless.appPath directly is not possible, ") + 'instead you must use Backendless.initApp(APP_ID, API_KEY) for setup the value');
    }

    ///--------debugMode-------///
  }, {
    key: "debugMode",
    get: function get() {
      return this.__debugMode;
    },
    set: function set(debugMode) {
      debugMode = !!debugMode;
      if (this.__debugMode !== debugMode) {
        this.__debugMode = debugMode;
        if (this.__RT) {
          this.RT.setDebugMode(debugMode);
        }
      }
    }

    ///--------XMLHttpRequestMode-------///
  }, {
    key: "XMLHttpRequest",
    get: function get() {
      return this.__XMLHttpRequest;
    },
    set: function set(XMLHttpRequest) {
      this.__XMLHttpRequest = XMLHttpRequest;
    }

    ///--------device-------///
  }, {
    key: "device",
    get: function get() {
      if (!this.__device) {
        throw new Error('Device is not defined. Please, run the Backendless.setupDevice');
      }
      return this.__device;
    },
    set: function set(props) {
      throw new Error('Setting value to Backendless.device directly is not possible, ' + 'instead you must use Backendless.setupDevice(deviceProperties) for setup the device');
    }
  }, {
    key: "setupDevice",
    value: function setupDevice(device) {
      var Device = (__webpack_require__(/*! ./device */ "./src/device/index.js")["default"]);
      this.__device = new Device(device);
    }

    ///----------UTIL METHODS--------///
  }, {
    key: "Utils",
    get: function get() {
      return _utils["default"];
    }
  }, {
    key: "getCurrentUserToken",
    value: function getCurrentUserToken() {
      return this.Users.getCurrentUserToken();
    }
  }, {
    key: "setCurrentUserToken",
    value: function setCurrentUserToken(userToken) {
      this.Users.setCurrentUserToken(userToken);
    }
  }, {
    key: "browser",
    get: function get() {
      return (__webpack_require__(/*! ./user-agent */ "./src/user-agent.js").getUserAgent)();
    }
  }, {
    key: "noConflict",
    value: function noConflict() {
      if (root) {
        root.Backendless = previousBackendless;
      }
      return this;
    }

    ///-------------------------------------///
    ///-------------- SERVICES -------------///
  }, {
    key: "Logging",
    get: function get() {
      return this.__getService('Logging');
    }
  }, {
    key: "Counters",
    get: function get() {
      return this.__getService('Counters');
    }
  }, {
    key: "Cache",
    get: function get() {
      return this.__getService('Cache');
    }
  }, {
    key: "Commerce",
    get: function get() {
      return this.__getService('Commerce');
    }
  }, {
    key: "Users",
    get: function get() {
      return this.__getService('Users');
    }
  }, {
    key: "User",
    get: function get() {
      return (__webpack_require__(/*! ./users/user */ "./src/users/user.js")["default"]);
    }
  }, {
    key: "UserService",
    get: function get() {
      return this.Users;
    }
  }, {
    key: "BL",
    get: function get() {
      return this.__getService('BL');
    }
  }, {
    key: "CustomServices",
    get: function get() {
      return this.BL.CustomServices;
    }
  }, {
    key: "APIServices",
    get: function get() {
      return this.BL.CustomServices;
    }
  }, {
    key: "Events",
    get: function get() {
      return this.BL.Events;
    }
  }, {
    key: "Data",
    get: function get() {
      return this.__getService('Data');
    }
  }, {
    key: "Hive",
    get: function get() {
      return this.__getService('Hive');
    }
  }, {
    key: "Messaging",
    get: function get() {
      return this.__getService('Messaging');
    }
  }, {
    key: "Files",
    get: function get() {
      return this.__getService('Files');
    }
  }, {
    key: "RT",
    get: function get() {
      return this.__getService('RT');
    }
  }, {
    key: "resetRT",
    value: function resetRT() {
      if (this.__RT) {
        this.__RT.terminate();
        delete this.__RT;
      }
    }
  }, {
    key: "SharedObject",
    get: function get() {
      return this.__getService('SharedObject');
    }
  }, {
    key: "LocalCache",
    get: function get() {
      return this.__getService('LocalCache');
    }
  }, {
    key: "UnitOfWork",
    get: function get() {
      return this.__getService('UnitOfWork');
    }
  }, {
    key: "Management",
    get: function get() {
      return this.__getService('Management');
    }

    ///-------------- SERVICES -------------///
    ///-------------------------------------///

    ///-------------------------------------///
    ///--------BACKWARD COMPATIBILITY-------///

    /** @deprecated */
  }, {
    key: "applicationId",
    get: function get() {
      // eslint-disable-next-line no-console
      // temporary comment it because it breaks JS-CodeRunner version less than 6.3.0
      // console.warn('getter/setter for Backendless.applicationId is deprecated, instead use Backendless.appId')

      return this.appId;
    }

    /** @deprecated */,
    set: function set(appId) {
      // eslint-disable-next-line no-console
      console.warn('getter/setter for Backendless.applicationId is deprecated, instead use Backendless.appId');
      this.appId = appId;
    }

    /** @deprecated */
  }, {
    key: "secretKey",
    get: function get() {
      // eslint-disable-next-line no-console
      console.warn('getter/setter for Backendless.secretKey is deprecated, instead use Backendless.apiKey');
      return this.apiKey;
    }

    /** @deprecated */,
    set: function set(apiKey) {
      // eslint-disable-next-line no-console
      console.warn('getter/setter for Backendless.secretKey is deprecated, instead use Backendless.apiKey');
      this.apiKey = apiKey;
    }

    /** @deprecated */
  }, {
    key: "Persistence",
    get: function get() {
      showLegacyDataWarning();
      return this.Data;
    }
  }, {
    key: "DataQueryBuilder",
    get: function get() {
      return this.Data.QueryBuilder;
    }
  }, {
    key: "GroupQueryBuilder",
    get: function get() {
      return this.Data.GroupQueryBuilder;
    }
  }, {
    key: "JSONUpdateBuilder",
    get: function get() {
      return this.Data.JSONUpdateBuilder;
    }
  }, {
    key: "LoadRelationsQueryBuilder",
    get: function get() {
      return this.Data.LoadRelationsQueryBuilder;
    }
  }, {
    key: "Bodyparts",
    get: function get() {
      return this.Messaging.Bodyparts;
    }
  }, {
    key: "PublishOptions",
    get: function get() {
      return this.Messaging.PublishOptions;
    }
  }, {
    key: "DeliveryOptions",
    get: function get() {
      return this.Messaging.DeliveryOptions;
    }
  }, {
    key: "PublishOptionsHeaders",
    get: function get() {
      return this.Messaging.PublishOptionsHeaders;
    }
  }, {
    key: "EmailEnvelope",
    get: function get() {
      return this.Messaging.EmailEnvelope;
    }
  }, {
    key: "Expression",
    get: function get() {
      return _expression["default"];
    }

    ///--------BACKWARD COMPATIBILITY-------///
    ///-------------------------------------///
  }]);
  return Backendless;
}();
var backendless = new Backendless(DEFAULT_PROPS);
if (root) {
  root.Backendless = backendless;
}
exports = module.exports = backendless;
var _default = backendless;
exports["default"] = _default;

/***/ }),

/***/ "./src/local-cache/index.js":
/*!**********************************!*\
  !*** ./src/local-cache/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
var _virtualStorage = _interopRequireDefault(__webpack_require__(/*! ./virtual-storage */ "./src/local-cache/virtual-storage.js"));
var _localStorage = _interopRequireDefault(__webpack_require__(/*! ./local-storage */ "./src/local-cache/local-storage.js"));
var STORAGE_KEY_NAMESPACE = 'Backendless';
var LocalCache = /*#__PURE__*/function () {
  function LocalCache(app) {
    (0, _classCallCheck2["default"])(this, LocalCache);
    this.app = app;
    this.storageName = this.app.appId ? "".concat(STORAGE_KEY_NAMESPACE, "_").concat(this.app.appId) : STORAGE_KEY_NAMESPACE;
    var Storage = _utils["default"].isLocalStorageSupported ? _localStorage["default"] : _virtualStorage["default"];
    this.setStorage(Storage);
    this.Keys = {
      USER_TOKEN: 'user-token',
      CURRENT_USER_ID: 'current-user-id',
      STAY_LOGGED_IN: 'stayLoggedIn'
    };
  }
  (0, _createClass2["default"])(LocalCache, [{
    key: "setStorage",
    value: function setStorage(Storage) {
      this.storage = new Storage(this.storageName, STORAGE_KEY_NAMESPACE);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.storage.set(key, value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.storage.get(key);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.storage.remove(key);
    }
  }]);
  return LocalCache;
}();
exports["default"] = LocalCache;

/***/ }),

/***/ "./src/local-cache/local-storage.js":
/*!******************************************!*\
  !*** ./src/local-cache/local-storage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
function migrateLegacyStorageData(storage, legacyStorageName) {
  //TODO: this will be removed in the nearest release

  if (!localStorage.getItem(storage.storageName)) {
    var legacyStorageData = localStorage.getItem(legacyStorageName);
    if (legacyStorageData) {
      localStorage.setItem(storage.storageName, legacyStorageData);
      localStorage.removeItem(legacyStorageName);
    }
  }
}
var LocalStorage = /*#__PURE__*/function () {
  function LocalStorage(storageName, legacyStorageName) {
    (0, _classCallCheck2["default"])(this, LocalStorage);
    this.storageName = storageName;
    migrateLegacyStorageData(this, legacyStorageName);
  }
  (0, _createClass2["default"])(LocalStorage, [{
    key: "getStore",
    value: function getStore() {
      try {
        return JSON.parse(localStorage.getItem(this.storageName)) || {};
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Could not parse data from LocalStorage', e);
      }
      return {};
    }
  }, {
    key: "setStore",
    value: function setStore(data) {
      localStorage.setItem(this.storageName, JSON.stringify(data));
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.getStore()[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var store = this.getStore();
      store[key] = value;
      this.setStore(store);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var store = this.getStore();
      delete store[key];
      this.setStore(store);
    }
  }]);
  return LocalStorage;
}();
exports["default"] = LocalStorage;

/***/ }),

/***/ "./src/local-cache/virtual-storage.js":
/*!********************************************!*\
  !*** ./src/local-cache/virtual-storage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var VirtualStorage = /*#__PURE__*/function () {
  function VirtualStorage() {
    (0, _classCallCheck2["default"])(this, VirtualStorage);
    this.data = {};
  }
  (0, _createClass2["default"])(VirtualStorage, [{
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      delete this.data[key];
    }
  }]);
  return VirtualStorage;
}();
exports["default"] = VirtualStorage;

/***/ }),

/***/ "./src/logging/index.js":
/*!******************************!*\
  !*** ./src/logging/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _logger = _interopRequireDefault(__webpack_require__(/*! ./logger */ "./src/logging/logger.js"));
var GLOBAL_LOGGER_NAME = 'Global logger';
var Logging = /*#__PURE__*/function () {
  function Logging(app) {
    (0, _classCallCheck2["default"])(this, Logging);
    this.app = app;
    this.reset();
    this.setConfig(app.loggingConfig);
  }
  (0, _createClass2["default"])(Logging, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
      if (config.loadLevels) {
        this.loadLoggingLevels();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.loggers = {};
      this.messages = [];
      this.numOfMessages = 10;
      this.timeFrequency = 1;
      this.messagesLimit = 100;
    }
  }, {
    key: "loadLoggingLevels",
    value: function loadLoggingLevels() {
      var _this = this;
      this.app.request.get({
        url: this.app.urls.loggingLevels()
      }).then(function (loggers) {
        loggers.forEach(function (logger) {
          _this.config.levels[logger.name] = logger.level;
        });
        _this.config.defaultLevel = _this.config.levels[GLOBAL_LOGGER_NAME] || _this.config.defaultLevel;
      })["catch"](function (error) {
        // eslint-disable-next-line no-console
        console.error('Could not load logging levels: ', error);
      });
    }
  }, {
    key: "getLogger",
    value: function getLogger(loggerName) {
      if (!loggerName || typeof loggerName !== 'string') {
        throw new Error('Logger Name must be provided and must be a string.');
      }
      if (!this.loggers[loggerName]) {
        this.loggers[loggerName] = new _logger["default"](loggerName, this);
      }
      return this.loggers[loggerName];
    }
  }, {
    key: "flush",
    value: function () {
      var _flush = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;
        var messages;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.flushRequest && this.messages.length) {
                this.stopFlushInterval();
                messages = (0, _toConsumableArray2["default"])(this.messages);
                this.messages = [];
                this.flushRequest = this.app.request.put({
                  url: this.app.urls.logging(),
                  data: messages
                })["catch"](function (error) {
                  _this2.messages = [].concat((0, _toConsumableArray2["default"])(messages), (0, _toConsumableArray2["default"])(_this2.messages));
                  _this2.checkMessagesLimit();
                  throw error;
                })["finally"](function () {
                  return delete _this2.flushRequest;
                });
              }
              return _context.abrupt("return", this.flushRequest);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function flush() {
        return _flush.apply(this, arguments);
      }
      return flush;
    }()
  }, {
    key: "push",
    value: function push(logger, logLevel, message, exception) {
      if (typeof message !== 'string') {
        throw new Error('"message" must be a string');
      }
      this.messages.push({
        logger: logger,
        message: message,
        exception: exception,
        'log-level': logLevel,
        timestamp: Date.now()
      });
      this.checkMessagesLimit();
      this.checkMessagesLen();
    }
  }, {
    key: "checkMessagesLen",
    value: function checkMessagesLen() {
      if (this.messages.length >= this.numOfMessages) {
        this.startFlushInterval();
      }
    }
  }, {
    key: "checkMessagesLimit",
    value: function checkMessagesLimit() {
      if (this.messages.length > this.messagesLimit) {
        this.messages = this.messages.slice(this.messages.length - this.messagesLimit);
      }
    }
  }, {
    key: "startFlushInterval",
    value: function startFlushInterval() {
      var _this3 = this;
      if (!this.flushInterval) {
        this.flushInterval = setTimeout(function () {
          return _this3.flush();
        }, this.timeFrequency * 1000);
      }
    }
  }, {
    key: "stopFlushInterval",
    value: function stopFlushInterval() {
      if (this.flushInterval) {
        clearTimeout(this.flushInterval);
        delete this.flushInterval;
      }
    }
  }, {
    key: "setLogReportingPolicy",
    value: function setLogReportingPolicy(numOfMessages, timeFrequency) {
      if (timeFrequency !== undefined && this.timeFrequency !== timeFrequency) {
        this.stopFlushInterval();
      }
      if (numOfMessages > this.messagesLimit) {
        this.messagesLimit = numOfMessages;
      }
      this.numOfMessages = numOfMessages;
      this.timeFrequency = timeFrequency;
      this.checkMessagesLen();
    }
  }, {
    key: "setMessagesLimit",
    value: function setMessagesLimit(messagesLimit) {
      this.messagesLimit = messagesLimit;
      this.checkMessagesLimit();
    }
  }]);
  return Logging;
}();
exports["default"] = Logging;

/***/ }),

/***/ "./src/logging/logger.js":
/*!*******************************!*\
  !*** ./src/logging/logger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var LogLevelPriorities = {
  off: 0,
  fatal: 1,
  error: 2,
  warn: 3,
  info: 4,
  debug: 5,
  trace: 6,
  all: 6
};
var Logger = /*#__PURE__*/function () {
  function Logger(name, logging) {
    (0, _classCallCheck2["default"])(this, Logger);
    this.name = name;
    this.logging = logging;
  }
  (0, _createClass2["default"])(Logger, [{
    key: "debug",
    value: function debug(message) {
      return this.log('DEBUG', message);
    }
  }, {
    key: "info",
    value: function info(message) {
      return this.log('INFO', message);
    }
  }, {
    key: "warn",
    value: function warn(message, exception) {
      return this.log('WARN', message, exception);
    }
  }, {
    key: "error",
    value: function error(message, exception) {
      return this.log('ERROR', message, exception);
    }
  }, {
    key: "fatal",
    value: function fatal(message, exception) {
      return this.log('FATAL', message, exception);
    }
  }, {
    key: "trace",
    value: function trace(message) {
      return this.log('TRACE', message);
    }
  }, {
    key: "log",
    value: function log(level, message, exception) {
      if (this.min(level)) {
        return this.logging.push(this.name, level, message, exception);
      }
    }
  }, {
    key: "min",
    value: function min(level) {
      var configuredLevel = this.logging.config.levels[this.name];
      if (!configuredLevel) {
        var defaultLevel = this.logging.config.defaultLevel;
        return LogLevelPriorities[defaultLevel.toLowerCase()] >= LogLevelPriorities[level.toLowerCase()];
      }
      return LogLevelPriorities[configuredLevel.toLowerCase()] >= LogLevelPriorities[level.toLowerCase()];
    }
  }]);
  return Logger;
}();
exports["default"] = Logger;

/***/ }),

/***/ "./src/management/data.js":
/*!********************************!*\
  !*** ./src/management/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var Data = /*#__PURE__*/function () {
  function Data(app) {
    (0, _classCallCheck2["default"])(this, Data);
    this.app = app;
  }
  (0, _createClass2["default"])(Data, [{
    key: "createTable",
    value: function createTable(name, columns) {
      if (!name || typeof name !== 'string') {
        throw new Error('Table name must be provided and must be a string.');
      }
      if (!Array.isArray(columns)) {
        throw new Error('Columns must be a list.');
      }
      return this.app.request.post({
        url: this.app.urls.managementDataTable(),
        data: {
          name: name,
          columns: columns
        }
      });
    }
  }]);
  return Data;
}();
exports["default"] = Data;

/***/ }),

/***/ "./src/management/index.js":
/*!*********************************!*\
  !*** ./src/management/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./src/management/data.js"));
var Management = /*#__PURE__*/(0, _createClass2["default"])(function Management(app) {
  (0, _classCallCheck2["default"])(this, Management);
  this.app = app;
  this.Data = new _data["default"](app);
});
exports["default"] = Management;

/***/ }),

/***/ "./src/messaging/channel/index.js":
/*!****************************************!*\
  !*** ./src/messaging/channel/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js"));
var _rt = __webpack_require__(/*! ../../rt */ "./src/rt.js");
var _dec, _class;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ListenerTypes = {
  MESSAGE: 'MESSAGE'
};
var Channel = (_dec = _rt.RTScopeConnector.connectionRequired(), (_class = /*#__PURE__*/function (_RTScopeConnector) {
  (0, _inherits2["default"])(Channel, _RTScopeConnector);
  var _super = _createSuper(Channel);
  function Channel(options, app) {
    var _this;
    (0, _classCallCheck2["default"])(this, Channel);
    _this = _super.call(this, options);
    _this.app = app;
    _this.connect();
    return _this;
  }
  (0, _createClass2["default"])(Channel, [{
    key: "connectSubscriber",
    get: function get() {
      return this.app.RT.subscriptions.connectToPubSub;
    }
  }, {
    key: "usersSubscriber",
    get: function get() {
      return this.app.RT.subscriptions.onPubSubUserStatus;
    }
  }, {
    key: "commandSubscriber",
    get: function get() {
      return this.app.RT.subscriptions.onPubSubCommand;
    }
  }, {
    key: "commandSender",
    get: function get() {
      return this.app.RT.methods.sendPubSubCommand;
    }
  }, {
    key: "getScopeOptions",
    value: function getScopeOptions() {
      var name = this.options.name;
      return {
        channel: name
      };
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.app) {
        return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "connect", this).call(this);
      }
    }
  }, {
    key: "publish",
    value: function publish(message, publishOptions, deliveryTarget) {
      return this.app.Messaging.publish(this.options.name, message, publishOptions, deliveryTarget);
    }
  }, {
    key: "addMessageListener",
    value: function addMessageListener(selector, callback, onError) {
      if (typeof selector === 'function') {
        onError = callback;
        callback = selector;
        selector = undefined;
      }
      this.addSubscription(ListenerTypes.MESSAGE, this.app.RT.subscriptions.onPubSubMessage, {
        callback: callback,
        onError: onError,
        params: {
          selector: selector
        }
      });
    }
  }, {
    key: "removeMessageListener",
    value: function removeMessageListener(selector, callback) {
      if (typeof selector === 'function') {
        callback = selector;
        selector = undefined;
      }
      if (selector && typeof selector !== 'string') {
        throw new Error('Selector must be a string.');
      }
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function.');
      }
      var matcher = function matcher(subscription) {
        if (selector) {
          return subscription.params.selector === selector && subscription.callback === callback;
        }
        return subscription.callback === callback;
      };
      this.stopSubscription(ListenerTypes.MESSAGE, {
        matcher: matcher
      });
    }
  }, {
    key: "removeMessageListeners",
    value: function removeMessageListeners(selector) {
      if (typeof selector !== 'string') {
        throw new Error('Selector must be a string.');
      }
      var matcher = function matcher(subscription) {
        return subscription.params.selector === selector;
      };
      this.stopSubscription(ListenerTypes.MESSAGE, {
        matcher: matcher
      });
    }
  }, {
    key: "removeAllMessageListeners",
    value: function removeAllMessageListeners() {
      this.stopSubscription(ListenerTypes.MESSAGE, {});
    }
  }, {
    key: "addCommandListener",
    value: function addCommandListener(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "addCommandListener", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "addUserStatusListener",
    value: function addUserStatusListener(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "addUserStatusListener", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeCommandListener",
    value: function removeCommandListener(callback) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "removeCommandListeners", this).call(this, callback);
      return this;
    }
  }, {
    key: "removeCommandListeners",
    value: function removeCommandListeners(callback) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "removeCommandListeners", this).call(this, callback);
      return this;
    }
  }, {
    key: "removeUserStatusListeners",
    value: function removeUserStatusListeners(callback) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "removeUserStatusListeners", this).call(this, callback);
      return this;
    }
  }, {
    key: "addConnectListener",
    value: function addConnectListener(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "addConnectListener", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeConnectListeners",
    value: function removeConnectListeners(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "removeConnectListeners", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "removeAllListeners", this).call(this);
      return this;
    }
  }, {
    key: "send",
    value: function send(type, data) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "send", this).call(this, type, data);
    }
  }, {
    key: "join",
    value: function join() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "connect", this).call(this);
    }
  }, {
    key: "leave",
    value: function leave() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "disconnect", this).call(this);
    }
  }, {
    key: "isJoined",
    value: function isJoined() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Channel.prototype), "isConnected", this).call(this);
    }
  }]);
  return Channel;
}(_rt.RTScopeConnector), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addMessageListener", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addMessageListener"), _class.prototype)), _class));
exports["default"] = Channel;

/***/ }),

/***/ "./src/messaging/helpers/body-parts.js":
/*!*********************************************!*\
  !*** ./src/messaging/helpers/body-parts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var Bodyparts = /*#__PURE__*/(0, _createClass2["default"])(function Bodyparts(args) {
  (0, _classCallCheck2["default"])(this, Bodyparts);
  args = args || {};
  this.textmessage = args && args.textmessage;
  this.htmlmessage = args && args.htmlmessage;
});
exports["default"] = Bodyparts;

/***/ }),

/***/ "./src/messaging/helpers/delivery-options.js":
/*!***************************************************!*\
  !*** ./src/messaging/helpers/delivery-options.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var DeliveryOptions = /*#__PURE__*/(0, _createClass2["default"])(function DeliveryOptions(args) {
  (0, _classCallCheck2["default"])(this, DeliveryOptions);
  args = args || {};
  this.publishPolicy = args.publishPolicy || undefined;
  this.pushBroadcast = args.pushBroadcast || undefined;
  this.pushSinglecast = args.pushSinglecast || undefined;
  this.publishAt = args.publishAt || undefined;
  this.repeatEvery = args.repeatEvery || undefined;
  this.repeatExpiresAt = args.repeatExpiresAt || undefined;
});
exports["default"] = DeliveryOptions;

/***/ }),

/***/ "./src/messaging/helpers/email-envelope.js":
/*!*************************************************!*\
  !*** ./src/messaging/helpers/email-envelope.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils */ "./src/utils.js"));
var EmailEnvelope = /*#__PURE__*/function () {
  function EmailEnvelope(data) {
    (0, _classCallCheck2["default"])(this, EmailEnvelope);
    data = data || {};
    this.addresses = _utils["default"].castArray(data.addresses);
    this.ccAddresses = _utils["default"].castArray(data.ccAddresses);
    this.bccAddresses = _utils["default"].castArray(data.bccAddresses);
    this.query = data.query || null;
    this.uniqueEmails = data.uniqueEmails || false;
  }

  /**
   *
   * @param {Array|String} addresses
   * @returns {EmailEnvelope}
   */
  (0, _createClass2["default"])(EmailEnvelope, [{
    key: "setTo",
    value: function setTo(addresses) {
      this.addresses = _utils["default"].castArray(addresses);
      return this;
    }

    /**
     *
     * @param {Array|String} addresses
     * @returns {EmailEnvelope}
     */
  }, {
    key: "addTo",
    value: function addTo(addresses) {
      this.addresses = this.addresses.concat(_utils["default"].castArray(addresses));
      return this;
    }

    /**
     *
     * @returns {Array} - addresses
     */
  }, {
    key: "getTo",
    value: function getTo() {
      return this.addresses;
    }

    /**
     *
     * @param {Array|String} addresses
     * @returns {EmailEnvelope}
     */
  }, {
    key: "setCc",
    value: function setCc(addresses) {
      this.ccAddresses = _utils["default"].castArray(addresses);
      return this;
    }

    /**
     *
     * @param {Array|String} addresses
     * @returns {EmailEnvelope}
     */
  }, {
    key: "addCc",
    value: function addCc(addresses) {
      this.ccAddresses = this.ccAddresses.concat(_utils["default"].castArray(addresses));
      return this;
    }

    /**
     *
     * @returns {Array} - cc-addresses
     */
  }, {
    key: "getCc",
    value: function getCc() {
      return this.ccAddresses;
    }

    /**
     *
     * @param {Array|String} addresses
     * @returns {EmailEnvelope}
     */
  }, {
    key: "setBcc",
    value: function setBcc(addresses) {
      this.bccAddresses = _utils["default"].castArray(addresses);
      return this;
    }

    /**
     *
     * @param {Array|String} addresses
     * @returns {EmailEnvelope}
     */
  }, {
    key: "addBcc",
    value: function addBcc(addresses) {
      this.bccAddresses = this.bccAddresses.concat(_utils["default"].castArray(addresses));
      return this;
    }

    /**
     *
     * @returns {Array} - bcc-addresses
     */
  }, {
    key: "getBcc",
    value: function getBcc() {
      return this.bccAddresses;
    }

    /**
     *
     * @param {String|null} query
     * @returns {EmailEnvelope}
     */
  }, {
    key: "setQuery",
    value: function setQuery(query) {
      this.query = query;
      return this;
    }

    /**
     *
     * @returns {String} - query
     */
  }, {
    key: "getQuery",
    value: function getQuery() {
      return this.query;
    }

    /**
     * @param {boolean} uniqueEmails
     * @returns {EmailEnvelope}
     */
  }, {
    key: "setUniqueEmails",
    value: function setUniqueEmails(uniqueEmails) {
      this.uniqueEmails = uniqueEmails;
      return this;
    }

    /**
     * @returns {uniqueEmails|boolean}
     */
  }, {
    key: "getUniqueEmails",
    value: function getUniqueEmails() {
      return this.uniqueEmails;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var data = {};
      if (this.addresses.length > 0) {
        data.addresses = this.addresses;
      }
      if (this.ccAddresses.length > 0) {
        data['cc-addresses'] = this.ccAddresses;
      }
      if (this.bccAddresses.length > 0) {
        data['bcc-addresses'] = this.bccAddresses;
      }
      if (this.query) {
        data.criteria = this.query;
      }
      data.uniqueEmails = this.uniqueEmails;
      return data;
    }
  }], [{
    key: "create",
    value:
    /**
     *
     * @param {Object} data
     * @returns {EmailEnvelope}
     */
    function create(data) {
      return new EmailEnvelope(data);
    }
  }]);
  return EmailEnvelope;
}();
exports["default"] = EmailEnvelope;

/***/ }),

/***/ "./src/messaging/helpers/index.js":
/*!****************************************!*\
  !*** ./src/messaging/helpers/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Bodyparts", ({
  enumerable: true,
  get: function get() {
    return _bodyParts["default"];
  }
}));
Object.defineProperty(exports, "DeliveryOptions", ({
  enumerable: true,
  get: function get() {
    return _deliveryOptions["default"];
  }
}));
Object.defineProperty(exports, "EmailEnvelope", ({
  enumerable: true,
  get: function get() {
    return _emailEnvelope["default"];
  }
}));
Object.defineProperty(exports, "PublishOptions", ({
  enumerable: true,
  get: function get() {
    return _publishOptions["default"];
  }
}));
Object.defineProperty(exports, "PublishOptionsHeaders", ({
  enumerable: true,
  get: function get() {
    return _publishOptionsHeader["default"];
  }
}));
var _publishOptionsHeader = _interopRequireDefault(__webpack_require__(/*! ./publish-options-header */ "./src/messaging/helpers/publish-options-header.js"));
var _publishOptions = _interopRequireDefault(__webpack_require__(/*! ./publish-options */ "./src/messaging/helpers/publish-options.js"));
var _deliveryOptions = _interopRequireDefault(__webpack_require__(/*! ./delivery-options */ "./src/messaging/helpers/delivery-options.js"));
var _bodyParts = _interopRequireDefault(__webpack_require__(/*! ./body-parts */ "./src/messaging/helpers/body-parts.js"));
var _emailEnvelope = _interopRequireDefault(__webpack_require__(/*! ./email-envelope */ "./src/messaging/helpers/email-envelope.js"));

/***/ }),

/***/ "./src/messaging/helpers/publish-options-header.js":
/*!*********************************************************!*\
  !*** ./src/messaging/helpers/publish-options-header.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var PublishOptionsHeaders = {
  MESSAGE_TAG: 'message',
  IOS_ALERT_TAG: 'ios-alert',
  IOS_BADGE_TAG: 'ios-badge',
  IOS_SOUND_TAG: 'ios-sound',
  ANDROID_TICKER_TEXT_TAG: 'android-ticker-text',
  ANDROID_CONTENT_TITLE_TAG: 'android-content-title',
  ANDROID_CONTENT_TEXT_TAG: 'android-content-text',
  ANDROID_ACTION_TAG: 'android-action',
  WP_TYPE_TAG: 'wp-type',
  WP_TITLE_TAG: 'wp-title',
  WP_TOAST_SUBTITLE_TAG: 'wp-subtitle',
  WP_TOAST_PARAMETER_TAG: 'wp-parameter',
  WP_TILE_BACKGROUND_IMAGE: 'wp-backgroundImage',
  WP_TILE_COUNT: 'wp-count',
  WP_TILE_BACK_TITLE: 'wp-backTitle',
  WP_TILE_BACK_BACKGROUND_IMAGE: 'wp-backImage',
  WP_TILE_BACK_CONTENT: 'wp-backContent',
  WP_RAW_DATA: 'wp-raw'
};
var _default = PublishOptionsHeaders;
exports["default"] = _default;

/***/ }),

/***/ "./src/messaging/helpers/publish-options.js":
/*!**************************************************!*\
  !*** ./src/messaging/helpers/publish-options.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var PublishOptions = /*#__PURE__*/(0, _createClass2["default"])(function PublishOptions(args) {
  (0, _classCallCheck2["default"])(this, PublishOptions);
  args = args || {};
  this.publisherId = args.publisherId || undefined;
  this.headers = args.headers || undefined;
  this.subtopic = args.subtopic || undefined;
});
exports["default"] = PublishOptions;

/***/ }),

/***/ "./src/messaging/index.js":
/*!********************************!*\
  !*** ./src/messaging/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _channel = _interopRequireDefault(__webpack_require__(/*! ./channel */ "./src/messaging/channel/index.js"));
var _helpers = __webpack_require__(/*! ./helpers */ "./src/messaging/helpers/index.js");
var Messaging = /*#__PURE__*/function () {
  function Messaging(app) {
    (0, _classCallCheck2["default"])(this, Messaging);
    this.app = app;
    this.Bodyparts = _helpers.Bodyparts;
    this.PublishOptions = _helpers.PublishOptions;
    this.DeliveryOptions = _helpers.DeliveryOptions;
    this.PublishOptionsHeaders = _helpers.PublishOptionsHeaders;
    this.EmailEnvelope = _helpers.EmailEnvelope;
  }
  (0, _createClass2["default"])(Messaging, [{
    key: "subscribe",
    value: function subscribe(channelName) {
      validateChannelName(channelName);
      return new _channel["default"]({
        name: channelName
      }, this.app);
    }
  }, {
    key: "publish",
    value: function () {
      var _publish = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(channelName, message, publishOptions, deliveryOptions) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              validateChannelName(channelName);
              data = {
                message: message
              };
              if (!publishOptions) {
                _context.next = 6;
                break;
              }
              if (!(Array.isArray(publishOptions) || (0, _typeof2["default"])(publishOptions) !== 'object')) {
                _context.next = 5;
                break;
              }
              throw new Error('"publishOptions" argument must be an object.');
            case 5:
              (0, _extends2["default"])(data, publishOptions);
            case 6:
              if (!deliveryOptions) {
                _context.next = 10;
                break;
              }
              if (!(Array.isArray(deliveryOptions) || (0, _typeof2["default"])(deliveryOptions) !== 'object')) {
                _context.next = 9;
                break;
              }
              throw new Error('"deliveryOptions" argument must be an object.');
            case 9:
              (0, _extends2["default"])(data, deliveryOptions);
            case 10:
              return _context.abrupt("return", this.app.request.post({
                url: this.app.urls.messagingChannel(channelName),
                data: data
              }));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function publish(_x, _x2, _x3, _x4) {
        return _publish.apply(this, arguments);
      }
      return publish;
    }()
  }, {
    key: "pushWithTemplate",
    value: function () {
      var _pushWithTemplate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(templateName, templateValues) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!templateName || typeof templateName !== 'string')) {
                _context2.next = 2;
                break;
              }
              throw new Error('Push Template Name must be provided and must be a string.');
            case 2:
              data = {};
              if (templateValues) {
                data.templateValues = templateValues;
              }
              return _context2.abrupt("return", this.app.request.post({
                url: this.app.urls.messagingPushWithTemplate(templateName),
                data: data
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function pushWithTemplate(_x5, _x6) {
        return _pushWithTemplate.apply(this, arguments);
      }
      return pushWithTemplate;
    }()
  }, {
    key: "sendEmail",
    value: function () {
      var _sendEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(subject, bodyParts, recipients, attachments) {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!subject || typeof subject !== 'string')) {
                _context3.next = 2;
                break;
              }
              throw new Error('Email Subject must be provided and must be a string.');
            case 2:
              if (!(!bodyParts || Array.isArray(bodyParts) || (0, _typeof2["default"])(bodyParts) !== 'object')) {
                _context3.next = 4;
                break;
              }
              throw new Error('BodyParts must be an object');
            case 4:
              if (!(!bodyParts.textmessage && !bodyParts.htmlmessage)) {
                _context3.next = 6;
                break;
              }
              throw new Error('BodyParts must contain at least one property of [ textmessage | htmlmessage ]');
            case 6:
              if (!(!Array.isArray(recipients) || !recipients.length)) {
                _context3.next = 8;
                break;
              }
              throw new Error('Recipients must be a non empty array.');
            case 8:
              data = {
                subject: subject,
                bodyparts: bodyParts,
                to: recipients
              };
              if (Array.isArray(attachments) && attachments.length) {
                data.attachment = attachments;
              }
              return _context3.abrupt("return", this.app.request.post({
                url: this.app.urls.messagingEmail(),
                data: data
              }));
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function sendEmail(_x7, _x8, _x9, _x10) {
        return _sendEmail.apply(this, arguments);
      }
      return sendEmail;
    }()
  }, {
    key: "sendEmailFromTemplate",
    value: function () {
      var _sendEmailFromTemplate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(templateName, envelopeObject, templateValues, attachments) {
        var data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!templateName || typeof templateName !== 'string')) {
                _context4.next = 2;
                break;
              }
              throw new Error('Email Template Name must be provided and must be a string.');
            case 2:
              if (envelopeObject instanceof _helpers.EmailEnvelope) {
                _context4.next = 4;
                break;
              }
              throw new Error('EmailEnvelope is required and should be instance of Backendless.Messaging.EmailEnvelope');
            case 4:
              data = envelopeObject.toJSON();
              data['template-name'] = templateName;
              if (templateValues && !Array.isArray(templateValues)) {
                data['template-values'] = templateValues;
              }
              if (Array.isArray(templateValues) && !attachments) {
                attachments = templateValues;
              }
              if (attachments) {
                data.attachment = attachments;
              }
              return _context4.abrupt("return", this.app.request.post({
                url: this.app.urls.emailTemplateSend(),
                data: data
              }));
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function sendEmailFromTemplate(_x11, _x12, _x13, _x14) {
        return _sendEmailFromTemplate.apply(this, arguments);
      }
      return sendEmailFromTemplate;
    }()
  }, {
    key: "cancel",
    value: function () {
      var _cancel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(messageId) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!messageId || typeof messageId !== 'string')) {
                _context5.next = 2;
                break;
              }
              throw new Error('Message ID must be provided and must be a string.');
            case 2:
              return _context5.abrupt("return", this.app.request["delete"]({
                url: this.app.urls.messagingMessage(messageId)
              }));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function cancel(_x15) {
        return _cancel.apply(this, arguments);
      }
      return cancel;
    }()
  }, {
    key: "registerDevice",
    value: function () {
      var _registerDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(deviceToken, channels, expiration) {
        var device, data;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              device = this.app.device;
              data = {
                deviceToken: deviceToken,
                deviceId: device.uuid,
                os: device.platform,
                osVersion: device.version
              };
              if (Array.isArray(channels)) {
                data.channels = channels;
              }
              if (typeof expiration === 'number') {
                data.expiration = expiration;
              } else if (expiration instanceof Date) {
                data.expiration = expiration.getTime() / 1000;
              }
              return _context6.abrupt("return", this.app.request.post({
                url: this.app.urls.messagingRegistrations(),
                data: data
              }));
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function registerDevice(_x16, _x17, _x18) {
        return _registerDevice.apply(this, arguments);
      }
      return registerDevice;
    }()
  }, {
    key: "getRegistrations",
    value: function () {
      var _getRegistrations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var device;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              device = this.app.device;
              return _context7.abrupt("return", this.app.request.get({
                url: this.app.urls.messagingRegistrationDevice(device.uuid)
              }));
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getRegistrations() {
        return _getRegistrations.apply(this, arguments);
      }
      return getRegistrations;
    }()
  }, {
    key: "unregisterDevice",
    value: function () {
      var _unregisterDevice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var device;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              device = this.app.device;
              return _context8.abrupt("return", this.app.request["delete"]({
                url: this.app.urls.messagingRegistrationDevice(device.uuid)
              }));
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function unregisterDevice() {
        return _unregisterDevice.apply(this, arguments);
      }
      return unregisterDevice;
    }()
  }, {
    key: "getMessageStatus",
    value: function () {
      var _getMessageStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(messageId) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!messageId || typeof messageId !== 'string')) {
                _context9.next = 2;
                break;
              }
              throw new Error('Message ID must be provided and must be a string.');
            case 2:
              return _context9.abrupt("return", this.app.request.get({
                url: this.app.urls.messagingMessage(messageId)
              }));
            case 3:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getMessageStatus(_x19) {
        return _getMessageStatus.apply(this, arguments);
      }
      return getMessageStatus;
    }()
  }, {
    key: "getPushTemplates",
    value: function () {
      var _getPushTemplates = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(deviceType) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!(!deviceType || typeof deviceType !== 'string')) {
                _context10.next = 2;
                break;
              }
              throw new Error('Device Type must be provided and must be a string.');
            case 2:
              return _context10.abrupt("return", this.app.request.get({
                url: this.app.urls.messagingPushTemplates(deviceType)
              }));
            case 3:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getPushTemplates(_x20) {
        return _getPushTemplates.apply(this, arguments);
      }
      return getPushTemplates;
    }()
  }]);
  return Messaging;
}();
exports["default"] = Messaging;
function validateChannelName(channelName) {
  if (!channelName || typeof channelName !== 'string') {
    throw new Error('Channel Name must be provided and must be a string.');
  }
  if (channelName.indexOf('/') >= 0) {
    throw new Error('Channel Name can not contain slash chars');
  }
}

/***/ }),

/***/ "./src/persmission.js":
/*!****************************!*\
  !*** ./src/persmission.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var PermissionTypes = {
  GRANT: 'GRANT',
  DENY: 'DENY'
};
var Permission = /*#__PURE__*/function () {
  function Permission(permission, app) {
    (0, _classCallCheck2["default"])(this, Permission);
    this.permission = permission;
    this.app = app;
    this.grantUser = this.backwardCompatibility('grantForUser', 'grantUser');
    this.denyUser = this.backwardCompatibility('denyForUser', 'denyUser');
    this.grantRole = this.backwardCompatibility('grantForRole', 'grantRole');
    this.denyRole = this.backwardCompatibility('denyForRole', 'denyRole');
    this.grant = this.backwardCompatibility('grantForAllUsers', 'grant');
    this.deny = this.backwardCompatibility('denyForAllUsers', 'deny');
  }
  (0, _createClass2["default"])(Permission, [{
    key: "backwardCompatibility",
    value: function backwardCompatibility(methodName, oldMethodName) {
      //TODO: this method will be removed

      var context = this;
      var bcLabel = this.constructor.BACKWARD_COMPATIBILITY_LABEL;
      return function () {
        var mainMessage = "\"".concat(bcLabel, ".").concat(oldMethodName, "\" is deprecated and will be removed in the nearest release.");
        var helpMessage = "Please use \"".concat(bcLabel, ".").concat(methodName, "\" instead of.");

        // eslint-disable-next-line no-console
        console.warn("".concat(mainMessage, "\n").concat(helpMessage));
        return context[methodName].apply(context, arguments);
      };
    }
  }, {
    key: "grantForUser",
    value: function grantForUser(userId, object) {
      return this.sendRequest(PermissionTypes.GRANT, object, {
        userId: userId
      });
    }
  }, {
    key: "denyForUser",
    value: function denyForUser(userId, object) {
      return this.sendRequest(PermissionTypes.DENY, object, {
        userId: userId
      });
    }
  }, {
    key: "grantForRole",
    value: function grantForRole(roleName, object) {
      return this.sendRequest(PermissionTypes.GRANT, object, {
        roleName: roleName
      });
    }
  }, {
    key: "denyForRole",
    value: function denyForRole(roleName, object) {
      return this.sendRequest(PermissionTypes.DENY, object, {
        roleName: roleName
      });
    }
  }, {
    key: "grantForAllUsers",
    value: function grantForAllUsers(object) {
      return this.sendRequest(PermissionTypes.GRANT, object, {
        userId: '*'
      });
    }
  }, {
    key: "denyForAllUsers",
    value: function denyForAllUsers(object) {
      return this.sendRequest(PermissionTypes.DENY, object, {
        userId: '*'
      });
    }
  }, {
    key: "grantForAllRoles",
    value: function grantForAllRoles(object) {
      return this.sendRequest(PermissionTypes.GRANT, object, {
        roleName: '*'
      });
    }
  }, {
    key: "denyForAllRoles",
    value: function denyForAllRoles(object) {
      return this.sendRequest(PermissionTypes.DENY, object, {
        roleName: '*'
      });
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(type, entity, _ref) {
      var userId = _ref.userId,
        roleName = _ref.roleName;
      var data = {
        permission: this.permission
      };
      if (userId) {
        data.user = userId;
      } else if (roleName) {
        data.role = roleName;
      }
      return this.app.request.put({
        url: this.getRequestURL(type, entity),
        data: data
      });
    }

    /**
     * @abstract
     **/
  }, {
    key: "getRequestURL",
    value: function getRequestURL( /** type, entity **/
    ) {}
  }]);
  return Permission;
}();
exports["default"] = Permission;
(0, _defineProperty2["default"])(Permission, "BACKWARD_COMPATIBILITY_LABEL", null);

/***/ }),

/***/ "./src/request/index.js":
/*!******************************!*\
  !*** ./src/request/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _backendlessRequest = _interopRequireDefault(__webpack_require__(/*! backendless-request */ "./node_modules/backendless-request/dist/backendless-request.js"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};
var Request = /*#__PURE__*/function () {
  function Request(app) {
    (0, _classCallCheck2["default"])(this, Request);
    this.app = app;
    this.Methods = Methods;
  }
  (0, _createClass2["default"])(Request, [{
    key: "send",
    value: function send(options) {
      _backendlessRequest["default"].verbose = !!this.app.debugMode;
      _backendlessRequest["default"].XMLHttpRequest = this.app.XMLHttpRequest;
      var method = options.method.toLowerCase();
      var headers = options.headers || {};
      var userToken = this.app.getCurrentUserToken();
      if (userToken) {
        headers['user-token'] = userToken;
      }
      if (options.queryString) {
        options.url = "".concat(options.url, "?").concat(options.queryString);
      }
      return _backendlessRequest["default"][method](options.url, options.data).set(headers).query(options.query).form(options.form);
    }
  }, {
    key: "get",
    value: function get(options) {
      return this.send(_objectSpread(_objectSpread({}, options), {}, {
        method: Methods.GET
      }));
    }
  }, {
    key: "post",
    value: function post(options) {
      return this.send(_objectSpread(_objectSpread({}, options), {}, {
        method: Methods.POST
      }));
    }
  }, {
    key: "put",
    value: function put(options) {
      return this.send(_objectSpread(_objectSpread({}, options), {}, {
        method: Methods.PUT
      }));
    }
  }, {
    key: "delete",
    value: function _delete(options) {
      return this.send(_objectSpread(_objectSpread({}, options), {}, {
        method: Methods.DELETE
      }));
    }
  }]);
  return Request;
}();
exports["default"] = Request;

/***/ }),

/***/ "./src/rso/connection.js":
/*!*******************************!*\
  !*** ./src/rso/connection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js"));
var _rt = __webpack_require__(/*! ../rt */ "./src/rt.js");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ListenerTypes = {
  CHANGES: 'CHANGES',
  CLEARED: 'CLEARED',
  INVOKE: 'INVOKE'
};
var RemoteSharedObject = (_dec = _rt.RTScopeConnector.connectionRequired(), _dec2 = _rt.RTScopeConnector.connectionRequired(), _dec3 = _rt.RTScopeConnector.connectionRequired(), _dec4 = _rt.RTScopeConnector.connectionRequired(), _dec5 = _rt.RTScopeConnector.connectionRequired(true), _dec6 = _rt.RTScopeConnector.connectionRequired(true), _dec7 = _rt.RTScopeConnector.connectionRequired(true), _dec8 = _rt.RTScopeConnector.connectionRequired(true), _dec9 = _rt.RTScopeConnector.connectionRequired(true), (_class = /*#__PURE__*/function (_RTScopeConnector) {
  (0, _inherits2["default"])(RemoteSharedObject, _RTScopeConnector);
  var _super = _createSuper(RemoteSharedObject);
  function RemoteSharedObject(options, app) {
    var _this;
    (0, _classCallCheck2["default"])(this, RemoteSharedObject);
    _this = _super.call(this, options);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onInvoke", function (_ref) {
      var _this$invocationTarge;
      var method = _ref.method,
        args = _ref.args;
      checkInvocationTargetMethod(_this.invocationTarget, method);
      (_this$invocationTarge = _this.invocationTarget)[method].apply(_this$invocationTarge, (0, _toConsumableArray2["default"])(args));
    });
    _this.app = app;
    _this.invocationTarget = null;
    _this.connect();
    return _this;
  }
  (0, _createClass2["default"])(RemoteSharedObject, [{
    key: "connectSubscriber",
    get: function get() {
      return this.app.RT.subscriptions.connectToRSO;
    }
  }, {
    key: "usersSubscriber",
    get: function get() {
      return this.app.RT.subscriptions.onRSOUserStatus;
    }
  }, {
    key: "commandSubscriber",
    get: function get() {
      return this.app.RT.subscriptions.onRSOCommand;
    }
  }, {
    key: "commandSender",
    get: function get() {
      return this.app.RT.methods.sendRSOCommand;
    }
  }, {
    key: "setInvocationTarget",
    value: function setInvocationTarget(invocationTarget) {
      this.invocationTarget = invocationTarget;
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.app) {
        return (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "connect", this).call(this);
      }
    }
  }, {
    key: "onConnect",
    value: function onConnect() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "onConnect", this).apply(this, arguments);
      this.addSubscription(ListenerTypes.INVOKE, this.app.RT.subscriptions.onRSOInvoke, {
        callback: this.onInvoke
      });
    }
  }, {
    key: "onDisconnect",
    value: function onDisconnect() {
      this.stopSubscription(ListenerTypes.INVOKE, {
        callback: this.onInvoke
      });
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "onDisconnect", this).apply(this, arguments);
    }
  }, {
    key: "addChangesListener",
    value: function addChangesListener(callback, onError) {
      this.addSubscription(ListenerTypes.CHANGES, this.app.RT.subscriptions.onRSOChanges, {
        callback: callback,
        onError: onError
      });
    }
  }, {
    key: "removeChangesListeners",
    value: function removeChangesListeners(callback) {
      this.stopSubscription(ListenerTypes.CHANGES, {
        callback: callback
      });
    }
  }, {
    key: "addClearListener",
    value: function addClearListener(callback, onError) {
      this.addSubscription(ListenerTypes.CLEARED, this.app.RT.subscriptions.onRSOClear, {
        callback: callback,
        onError: onError
      });
    }
  }, {
    key: "removeClearListeners",
    value: function removeClearListeners(callback) {
      this.stopSubscription(ListenerTypes.CLEARED, {
        callback: callback
      });
    }
  }, {
    key: "addCommandListener",
    value: function addCommandListener(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "addCommandListener", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeCommandListener",
    value: function removeCommandListener(callback) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "removeCommandListeners", this).call(this, callback);
      return this;
    }
  }, {
    key: "removeCommandListeners",
    value: function removeCommandListeners(callback) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "removeCommandListeners", this).call(this, callback);
      return this;
    }
  }, {
    key: "addUserStatusListener",
    value: function addUserStatusListener(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "addUserStatusListener", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeUserStatusListeners",
    value: function removeUserStatusListeners(callback) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "removeUserStatusListeners", this).call(this, callback);
      return this;
    }
  }, {
    key: "addConnectListener",
    value: function addConnectListener(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "addConnectListener", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeConnectListeners",
    value: function removeConnectListeners(callback, onError) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "removeConnectListeners", this).call(this, callback, onError);
      return this;
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RemoteSharedObject.prototype), "removeAllListeners", this).call(this);
      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.app.RT.methods.getRSO(_objectSpread(_objectSpread({}, this.getScopeOptions()), {}, {
        key: key
      }));
    }
  }, {
    key: "set",
    value: function set(key, data) {
      return this.app.RT.methods.setRSO(_objectSpread(_objectSpread({}, this.getScopeOptions()), {}, {
        key: key,
        data: data
      }));
    }
  }, {
    key: "clear",
    value: function clear() {
      return this.app.RT.methods.clearRSO(this.getScopeOptions());
    }
  }, {
    key: "invoke",
    value: function invoke(method) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return this.invokeOn.apply(this, [method, undefined].concat(args));
    }
  }, {
    key: "invokeOn",
    value: function invokeOn(method, targets) {
      var _this2 = this;
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      return Promise.resolve().then(function () {
        return checkInvocationTargetMethod(_this2.invocationTarget, method);
      }).then(function () {
        return _this2.app.RT.methods.invokeRSOMethod(_objectSpread(_objectSpread({}, _this2.getScopeOptions()), {}, {
          method: method,
          targets: targets,
          args: args
        }));
      });
    }
  }]);
  return RemoteSharedObject;
}(_rt.RTScopeConnector), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addChangesListener", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addChangesListener"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "removeChangesListeners", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "removeChangesListeners"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addClearListener", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "addClearListener"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "removeClearListeners", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "removeClearListeners"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "get", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "get"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "set", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "set"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "clear", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "clear"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "invoke", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "invoke"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "invokeOn", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "invokeOn"), _class.prototype)), _class));
exports["default"] = RemoteSharedObject;
function checkInvocationTargetMethod(invocationTarget, method) {
  if (!invocationTarget) {
    throw new Error('"invocationTarget" is not specified');
  }
  if (typeof invocationTarget[method] !== 'function') {
    throw new Error("Method \"".concat(method, "\" of invocationTarget is not function"));
  }
}

/***/ }),

/***/ "./src/rso/index.js":
/*!**************************!*\
  !*** ./src/rso/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _connection = _interopRequireDefault(__webpack_require__(/*! ./connection */ "./src/rso/connection.js"));
var RemoteSharedObjects = /*#__PURE__*/function () {
  function RemoteSharedObjects(app) {
    (0, _classCallCheck2["default"])(this, RemoteSharedObjects);
    this.app = app;
  }
  (0, _createClass2["default"])(RemoteSharedObjects, [{
    key: "connect",
    value: function connect(name) {
      return new _connection["default"]({
        name: name
      }, this.app);
    }
  }]);
  return RemoteSharedObjects;
}();
exports["default"] = RemoteSharedObjects;

/***/ }),

/***/ "./src/rt.js":
/*!*******************!*\
  !*** ./src/rt.js ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.RTScopeConnector = exports.RTListeners = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _backendlessRequest = _interopRequireDefault(__webpack_require__(/*! backendless-request */ "./node_modules/backendless-request/dist/backendless-request.js"));
var _backendlessRtClient = _interopRequireDefault(__webpack_require__(/*! backendless-rt-client */ "./node_modules/backendless-rt-client/dist/backendless-rt-client.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/utils.js"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RTListeners = _backendlessRtClient["default"].Listeners;
exports.RTListeners = RTListeners;
var RTScopeConnector = _backendlessRtClient["default"].ScopeConnector;
exports.RTScopeConnector = RTScopeConnector;
function loadAppInfo(appPath) {
  return _backendlessRequest["default"].get("".concat(appPath, "/info"));
}
var RT = /*#__PURE__*/function (_BackendlessRTClient) {
  (0, _inherits2["default"])(RT, _BackendlessRTClient);
  var _super = _createSuper(RT);
  function RT(app) {
    var _this;
    (0, _classCallCheck2["default"])(this, RT);
    var appId = app.appId,
      apiKey = app.apiKey,
      appPath = app.appPath,
      debugMode = app.debugMode;
    var clientId = _utils["default"].uuid();
    var lookupPath = "".concat(appPath, "/rt/lookup");
    _this = _super.call(this, {
      appId: appId || undefined,
      lookupPath: lookupPath,
      debugMode: debugMode,
      connectQuery: function connectQuery() {
        var userToken = app.getCurrentUserToken();
        return {
          apiKey: apiKey || undefined,
          clientId: clientId,
          userToken: userToken
        };
      },
      socketConfigTransform: function () {
        var _socketConfigTransform = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(socketConfig) {
          var appInfo;
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (appId) {
                  _context.next = 7;
                  break;
                }
                _context.next = 3;
                return loadAppInfo(appPath);
              case 3:
                appInfo = _context.sent;
                socketConfig.url = "".concat(socketConfig.host, "/").concat(appInfo.appId);
                socketConfig.options.path = "/".concat(appInfo.appId);
                socketConfig.options.query.apiKey = appInfo.apiKey;
              case 7:
                return _context.abrupt("return", socketConfig);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function socketConfigTransform(_x) {
          return _socketConfigTransform.apply(this, arguments);
        }
        return socketConfigTransform;
      }()
    });
    _this.app = app;
    return _this;
  }
  (0, _createClass2["default"])(RT, [{
    key: "updateUserTokenIfNeeded",
    value: function updateUserTokenIfNeeded() {
      if (this.session) {
        var userToken = this.app.getCurrentUserToken();
        this.methods.setUserToken({
          userToken: userToken
        });
      }
    }
  }, {
    key: "setDebugMode",
    value: function setDebugMode(debugMode) {
      this.setConfig({
        debugMode: debugMode
      });
    }
  }]);
  return RT;
}(_backendlessRtClient["default"]);
exports["default"] = RT;

/***/ }),

/***/ "./src/unit-of-work/constants.js":
/*!***************************************!*\
  !*** ./src/unit-of-work/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OperationType = exports.IsolationLevelEnum = void 0;
var OperationType = {
  CREATE: 'CREATE',
  CREATE_BULK: 'CREATE_BULK',
  UPDATE: 'UPDATE',
  UPDATE_BULK: 'UPDATE_BULK',
  DELETE: 'DELETE',
  DELETE_BULK: 'DELETE_BULK',
  UPSERT: 'UPSERT',
  UPSERT_BULK: 'UPSERT_BULK',
  FIND: 'FIND',
  ADD_RELATION: 'ADD_RELATION',
  SET_RELATION: 'SET_RELATION',
  DELETE_RELATION: 'DELETE_RELATION'
};
exports.OperationType = OperationType;
var IsolationLevelEnum = {
  READ_UNCOMMITTED: 'READ_UNCOMMITTED',
  READ_COMMITTED: 'READ_COMMITTED',
  REPEATABLE_READ: 'REPEATABLE_READ',
  SERIALIZABLE: 'SERIALIZABLE'
};
exports.IsolationLevelEnum = IsolationLevelEnum;

/***/ }),

/***/ "./src/unit-of-work/index.js":
/*!***********************************!*\
  !*** ./src/unit-of-work/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = UnitOfWorkService;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils */ "./src/utils.js"));
var _dataQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ../data/data-query-builder */ "./src/data/data-query-builder.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/unit-of-work/constants.js");
var _jsonAdapter = __webpack_require__(/*! ./json-adapter */ "./src/unit-of-work/json-adapter.js");
var _opResult = __webpack_require__(/*! ./op-result */ "./src/unit-of-work/op-result.js");
var _opResultValueReference = __webpack_require__(/*! ./op-result-value-reference */ "./src/unit-of-work/op-result-value-reference.js");
var _excluded = ["meta"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TransactionOperationError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(TransactionOperationError, _Error);
  var _super = _createSuper(TransactionOperationError);
  function TransactionOperationError(message, operation) {
    var _this;
    (0, _classCallCheck2["default"])(this, TransactionOperationError);
    _this = _super.call(this, message);
    _this.operation = operation;
    return _this;
  }
  (0, _createClass2["default"])(TransactionOperationError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        message: this.message,
        operation: this.operation
      };
    }
  }]);
  return TransactionOperationError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
var UnitOfWorkResult = /*#__PURE__*/function () {
  function UnitOfWorkResult(_ref) {
    var success = _ref.success,
      error = _ref.error,
      results = _ref.results;
    (0, _classCallCheck2["default"])(this, UnitOfWorkResult);
    this.success = success;
    this.error = error;
    this.results = results;
  }
  (0, _createClass2["default"])(UnitOfWorkResult, [{
    key: "isSuccess",
    value: function isSuccess() {
      return this.success;
    }
  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "getResults",
    value: function getResults() {
      return this.results;
    }
  }]);
  return UnitOfWorkResult;
}();
var UnitOfWork = /*#__PURE__*/function () {
  function UnitOfWork(isolationLevelEnum, app) {
    (0, _classCallCheck2["default"])(this, UnitOfWork);
    this.app = app;
    this.payload = {
      isolationLevelEnum: isolationLevelEnum,
      operations: []
    };
    this.usedOpIds = {};
  }
  (0, _createClass2["default"])(UnitOfWork, [{
    key: "getOpResultById",
    value: function getOpResultById(opResultId) {
      var operation = this.payload.operations.find(function (opResult) {
        return opResult.meta.opResult.getOpResultId() === opResultId;
      });
      return operation.meta.opResult;
    }
  }, {
    key: "setIsolationLevel",
    value: function setIsolationLevel(isolationLevelEnum) {
      this.payload.isolationLevelEnum = isolationLevelEnum;
    }
  }, {
    key: "getOpStackName",
    value: function getOpStackName(operationType, table) {
      return "".concat(operationType.toLowerCase()).concat(table);
    }
  }, {
    key: "getNextOpResultIndex",
    value: function getNextOpResultIndex(stackName) {
      if (!this.usedOpIds[stackName]) {
        this.usedOpIds[stackName] = 0;
      }
      return ++this.usedOpIds[stackName];
    }
  }, {
    key: "addOperations",
    value: function addOperations(operationType, table, payload) {
      if (Array.isArray(payload)) {
        payload = payload.map(function (item) {
          delete item.___jsonclass;
          return item;
        });
      } else {
        delete payload.___jsonclass;
      }
      var opResult = new _opResult.OpResult(this, {
        operationType: operationType,
        table: table,
        payload: payload
      });
      this.payload.operations.push({
        operationType: operationType,
        table: table,
        payload: payload,
        meta: {
          opResult: opResult
        }
      });
      return opResult;
    }
  }, {
    key: "composePayload",
    value: function composePayload() {
      return _objectSpread(_objectSpread({}, this.payload), {}, {
        operations: this.payload.operations.map(function (_ref2) {
          var meta = _ref2.meta,
            operation = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
          return _objectSpread(_objectSpread({}, operation), {}, {
            opResultId: meta.opResult.getOpResultId()
          });
        })
      });
    }
  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.app.request.post({
                url: this.app.urls.transactions(),
                data: this.composePayload()
              });
            case 2:
              result = _context.sent;
              return _context.abrupt("return", this.setResult(result));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function execute() {
        return _execute.apply(this, arguments);
      }
      return execute;
    }()
  }, {
    key: "setResult",
    value: function setResult(result) {
      if (result.results) {
        this.payload.operations.forEach(function (operation) {
          var opResultId = operation.meta.opResult.getOpResultId();
          if (result.results[opResultId]) {
            operation.meta.opResult.setResult(result.results[opResultId].result);
          }
        });
      }
      if (result.error) {
        var operation = this.payload.operations.find(function (op) {
          return result.error.operation.opResultId === op.meta.opResult.getOpResultId();
        });
        result.error = new TransactionOperationError(result.error.message, operation.meta.opResult);
        operation.meta.opResult.setError(result.error);
      }
      return new UnitOfWorkResult(result);
    }
  }, {
    key: "find",
    value: function find(tableName, queryBuilder) {
      var query = queryBuilder instanceof _dataQueryBuilder["default"] ? queryBuilder.toJSON() : queryBuilder || {};
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Invalid arguments');
      }
      if ((0, _typeof2["default"])(query) !== 'object' || Array.isArray(query)) {
        throw new Error('Invalid arguments');
      }
      var payload = {
        queryOptions: {}
      };
      if (query.pageSize > 0) {
        payload.pageSize = query.pageSize;
      }
      if (query.offset > 0) {
        payload.offset = query.offset;
      }
      if (query.properties) {
        payload.properties = query.properties;
      }
      if (query.excludeProps) {
        payload.excludeProps = query.excludeProps;
      }
      if (query.excludeProps) {
        payload.excludeProps = query.excludeProps;
      }
      if (query.where) {
        payload.whereClause = query.where;
      }
      if (query.having) {
        payload.havingClause = query.having;
      }
      if (query.groupBy) {
        payload.groupBy = query.groupBy;
      }
      if (query.sortBy) {
        payload.queryOptions.sortBy = query.sortBy;
      }
      if (query.relations) {
        payload.queryOptions.related = query.relations;
      }
      if (query.relationsDepth) {
        payload.queryOptions.relationsDepth = query.relationsDepth;
      }
      if (query.relationsPageSize > 0) {
        payload.queryOptions.relationsPageSize = query.relationsPageSize;
      }
      return this.addOperations(_constants.OperationType.FIND, tableName, payload);
    }

    /**
     * upsert(object: object): OpResult;
     * upsert(tableName: string, object: object): OpResult;
     * **/
  }, {
    key: "upsert",
    value: function upsert() {
      var tableName;
      var changes;
      if (arguments.length === 1) {
        tableName = _utils["default"].getClassName(arguments.length <= 0 ? undefined : arguments[0]);
        changes = arguments.length <= 0 ? undefined : arguments[0];
      } else if (arguments.length === 2) {
        tableName = arguments.length <= 0 ? undefined : arguments[0];
        changes = arguments.length <= 1 ? undefined : arguments[1];
      } else {
        throw new Error('Invalid arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Invalid arguments');
      }
      if (!changes || (0, _typeof2["default"])(changes) !== 'object' || Array.isArray(changes)) {
        throw new Error('Invalid arguments');
      }
      return this.addOperations(_constants.OperationType.UPSERT, tableName, changes);
    }

    /**
     * create(object: object): OpResult;
     * create(tableName: string, object: object): OpResult;
     * **/
  }, {
    key: "create",
    value: function create() {
      var tableName;
      var changes;
      if (arguments.length === 1) {
        tableName = _utils["default"].getClassName(arguments.length <= 0 ? undefined : arguments[0]);
        changes = arguments.length <= 0 ? undefined : arguments[0];
      } else if (arguments.length === 2) {
        tableName = arguments.length <= 0 ? undefined : arguments[0];
        changes = arguments.length <= 1 ? undefined : arguments[1];
      } else {
        throw new Error('Invalid arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Invalid arguments');
      }
      if (!changes || (0, _typeof2["default"])(changes) !== 'object' || Array.isArray(changes)) {
        throw new Error('Invalid arguments');
      }
      return this.addOperations(_constants.OperationType.CREATE, tableName, changes);
    }

    /**
     * update(object: object): OpResult;
     * update(tableName: string, object: object): OpResult;
     * update(opResult: OpResult | OpResultValueReference, object: object): OpResult;
     *
     * update(
     *    opResult: OpResult | OpResultValueReference,
     *    propertyName: string,
     *    propertyValue: OpResultValueReference): OpResult;
     *
     * update(
     *    opResult: OpResult | OpResultValueReference,
     *    propertyName: string,
     *    propertyValue: number | string | boolean): OpResult;
     * **/
  }, {
    key: "update",
    value: function update() {
      var tableName;
      var payload;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1) {
        tableName = _utils["default"].getClassName(args[0]);
        payload = args[0];
      } else if (args.length === 2 && typeof args[0] === 'string') {
        tableName = args[0];
        payload = args[1];
      } else if (args[0] instanceof _opResult.OpResult || args[0] instanceof _opResultValueReference.OpResultValueReference) {
        tableName = args[0].getTableName();
        payload = {
          objectId: args[0]
        };
        if (args.length === 3 && typeof args[1] === 'string') {
          payload[args[1]] = args[2];
        } else if (args.length === 2) {
          payload = _objectSpread(_objectSpread({}, payload), args[1]);
        } else {
          throw new Error('Invalid arguments');
        }
      } else {
        throw new Error('Invalid arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Invalid arguments');
      }
      return this.addOperations(_constants.OperationType.UPDATE, tableName, payload);
    }

    /**
     * delete(opResult: OpResult | OpResultValueReference): OpResult;
     * delete(object: object): OpResult;
     * delete(tableName: string, object: object): OpResult;
     * delete(tableName: string, objectId: string): OpResult;
     * **/
  }, {
    key: "delete",
    value: function _delete() {
      var tableName;
      var object;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (args.length === 1) {
        if (args[0] instanceof _opResult.OpResult || args[0] instanceof _opResultValueReference.OpResultValueReference) {
          tableName = args[0].getTableName();
          object = args[0];
        } else if (args[0] && (0, _typeof2["default"])(args[0]) === 'object' && !Array.isArray(args[0])) {
          tableName = _utils["default"].getClassName(args[0]);
          object = args[0].objectId;
        }
      } else if (args.length === 2) {
        tableName = args[0];
        object = args[1] && args[1].objectId || args[1];
      } else {
        throw new Error('Invalid arguments');
      }
      if (!object || Array.isArray(object) || typeof object !== 'string' && (0, _typeof2["default"])(object) !== 'object') {
        throw new Error('Invalid arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be a string.');
      }
      return this.addOperations(_constants.OperationType.DELETE, tableName, object);
    }

    /**
     * bulkUpsert(tableName: string, objects: object[]): OpResult;
     * bulkUpsert(objects: object[]): OpResult;
     * **/
  }, {
    key: "bulkUpsert",
    value: function bulkUpsert(tableName, objects) {
      if (Array.isArray(tableName)) {
        objects = tableName;
        tableName = _utils["default"].getClassName(objects[0]);
      }
      if (!objects || !Array.isArray(objects)) {
        throw new Error('Objects must be an array of objects.');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be a string.');
      }
      return this.addOperations(_constants.OperationType.UPSERT_BULK, tableName, objects);
    }

    /**
     * bulkCreate(tableName: string, objects: object[]): OpResult;
     * bulkCreate(objects: object[]): OpResult;
     * **/
  }, {
    key: "bulkCreate",
    value: function bulkCreate(tableName, objects) {
      if (Array.isArray(tableName)) {
        objects = tableName;
        tableName = _utils["default"].getClassName(objects[0]);
      }
      if (!objects || !Array.isArray(objects)) {
        throw new Error('Objects must be an array of objects.');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be a string.');
      }
      return this.addOperations(_constants.OperationType.CREATE_BULK, tableName, objects);
    }

    /**
     * bulkUpdate(opResult: OpResult, changes: object): OpResult;
     *
     * bulkUpdate(tableName: string, whereClause: string, changes: object): OpResult;
     * bulkUpdate(tableName: string, objectIds: string[], changes: object): OpResult;
     * bulkUpdate(tableName: string, objects: object[], changes: object): OpResult;
     * **/
  }, {
    key: "bulkUpdate",
    value: function bulkUpdate() {
      var tableName;
      var payload = {};
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (args.length === 2) {
        payload.changes = args[1];
        if (typeof args[0] === 'string') {
          tableName = _utils["default"].getClassName(args[1]);
          payload.conditional = args[0];
        } else if (args[0] instanceof _opResult.OpResult) {
          tableName = args[0].getTableName();
          payload.unconditional = args[0];
        }
      } else if (args.length === 3) {
        tableName = args[0];
        payload.changes = args[2];
        if (typeof args[1] === 'string') {
          payload.conditional = args[1];
        } else if (Array.isArray(args[1])) {
          payload.unconditional = args[1].map(function (o) {
            return o.objectId || o;
          });
        } else {
          throw new Error('Invalid arguments');
        }
      } else {
        throw new Error('Invalid arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be a string.');
      }
      return this.addOperations(_constants.OperationType.UPDATE_BULK, tableName, payload);
    }

    /**
     * bulkDelete(opResult: OpResult): OpResult;
     * bulkDelete(objects: object[]): OpResult;
     *
     * bulkDelete(tableName: string, objects: object[]): OpResult;
     * bulkDelete(tableName: string, objectIds: string[]): OpResult;
     * bulkDelete(tableName: string, whereClause: string): OpResult;
     * **/
  }, {
    key: "bulkDelete",
    value: function bulkDelete() {
      var payload = {};
      var tableName;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      if (args.length === 1) {
        if (args[0] instanceof _opResult.OpResult) {
          tableName = args[0].getTableName();
          payload.unconditional = args[0];
        } else if (Array.isArray(args[0])) {
          tableName = _utils["default"].getClassName(args[0][0]);
          payload.unconditional = args[0].map(function (o) {
            return o.objectId;
          });
        } else {
          throw new Error('Invalid arguments');
        }
      } else if (args.length === 2) {
        tableName = args[0];
        if (typeof args[1] === 'string') {
          payload.conditional = args[1];
        } else if (Array.isArray(args[1])) {
          payload.unconditional = args[1].map(function (o) {
            return o.objectId || o;
          });
        } else {
          throw new Error('Invalid arguments');
        }
      } else {
        throw new Error('Invalid arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be a string.');
      }
      return this.addOperations(_constants.OperationType.DELETE_BULK, tableName, payload);
    }
  }, {
    key: "addToRelation",
    value: function addToRelation() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return this.relationsOperation(_constants.OperationType.ADD_RELATION, args);
    }
  }, {
    key: "setRelation",
    value: function setRelation() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return this.relationsOperation(_constants.OperationType.SET_RELATION, args);
    }
  }, {
    key: "deleteRelation",
    value: function deleteRelation() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return this.relationsOperation(_constants.OperationType.DELETE_RELATION, args);
    }

    /**
     *
     *  uow.[...]Relation(
     *      parentObject: OpResult|OpResultValue|Class,
     *      columnName: String,
     *      children: String|Class|OpResult|OpResultValue|List<String|Class|OpResult|OpResultValue>
     *    )
     *
     *  uow.[...]Relation(
     *      tableName: String,
     *      parentObject: String|Class|Object,
     *      columnName: String,
     *      children: String|Class|OpResult|OpResultValue|List<String|Class|OpResult|OpResultValue>
     *    )
     *
     * */
  }, {
    key: "relationsOperation",
    value: function relationsOperation(operationType, args) {
      var tableName;
      var relationColumn;
      var parentObject;
      var conditional;
      var unconditional;
      var children;
      if (args.length === 3) {
        parentObject = args[0];
        relationColumn = args[1];
        children = args[2];
        if (parentObject instanceof _opResult.OpResult || parentObject instanceof _opResultValueReference.OpResultValueReference) {
          tableName = parentObject.getTableName();
        } else if (parentObject && (0, _typeof2["default"])(parentObject) === 'object') {
          tableName = _utils["default"].getClassName(parentObject);
        } else {
          throw new Error('Invalid the first argument, it must be an instance of [OpResult|OpResultValueReference|Object]');
        }
      } else if (args.length === 4) {
        tableName = args[0];
        relationColumn = args[2];
        children = args[3];
        if (typeof args[1] === 'string') {
          parentObject = args[1];
        } else if (args[1] && (0, _typeof2["default"])(args[1]) === 'object') {
          parentObject = args[1];
        } else {
          throw new Error('Invalid the second argument, it must be an Object or objectId');
        }
      } else {
        throw new Error('Invalid arguments');
      }
      if (parentObject && parentObject.objectId) {
        parentObject = parentObject.objectId;
      }
      if (typeof children === 'string') {
        conditional = children;
      } else if (children instanceof _opResult.OpResult && children.isCollectionRef()) {
        unconditional = children;
      } else {
        if (!Array.isArray(children)) {
          children = [children];
        }
        unconditional = children.map(function (child) {
          if (child) {
            if (child instanceof _opResult.OpResult || child instanceof _opResultValueReference.OpResultValueReference) {
              return child;
            }
            if (typeof child === 'string') {
              return child;
            }
            if (child.objectId) {
              return child.objectId;
            }
          }
          throw new Error('Invalid child argument, it must be an instance of [OpResult|OpResultValueReference|Object] or objectId');
        });
      }
      if (!relationColumn || typeof relationColumn !== 'string') {
        throw new Error('Invalid "relationColumn" parameter, check passed arguments');
      }
      if (!unconditional && !conditional) {
        throw new Error('Neither "unconditional" nor "conditional" parameter is specified, check passed arguments');
      }
      if (!tableName || typeof tableName !== 'string') {
        throw new Error('Table Name must be a string.');
      }
      var payload = {
        parentObject: parentObject,
        relationColumn: relationColumn
      };
      if (conditional) {
        payload.conditional = conditional;
      } else {
        payload.unconditional = unconditional;
      }
      return this.addOperations(operationType, tableName, payload);
    }
  }]);
  return UnitOfWork;
}();
(0, _defineProperty2["default"])(UnitOfWork, "IsolationLevelEnum", _constants.IsolationLevelEnum);
(0, _defineProperty2["default"])(UnitOfWork, "OpResult", _opResult.OpResult);
(0, _defineProperty2["default"])(UnitOfWork, "OpResultValueReference", _opResultValueReference.OpResultValueReference);
function UnitOfWorkService(app) {
  return /*#__PURE__*/function (_UnitOfWork) {
    (0, _inherits2["default"])(_class, _UnitOfWork);
    var _super2 = _createSuper(_class);
    function _class(isolationLevelEnum) {
      (0, _classCallCheck2["default"])(this, _class);
      return _super2.call(this, isolationLevelEnum, app);
    }
    (0, _createClass2["default"])(_class, null, [{
      key: "initFromJSON",
      value: function initFromJSON(data) {
        var uow = new this(data.transactionIsolation);
        data.operations.forEach(function (op) {
          var opResult = _jsonAdapter.OperationJSONAdapter[op.operationType](uow, op);
          opResult.setOpResultId(op.opResultId);
        });
        return uow;
      }
    }]);
    return _class;
  }(UnitOfWork);
}

/***/ }),

/***/ "./src/unit-of-work/json-adapter.js":
/*!******************************************!*\
  !*** ./src/unit-of-work/json-adapter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OperationJSONAdapter = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/unit-of-work/constants.js");
var _opResult = __webpack_require__(/*! ./op-result */ "./src/unit-of-work/op-result.js");
function resolveOpResultValueReference(uow, value) {
  if (Array.isArray(value)) {
    return value.map(function (item) {
      return resolveOpResultValueReference(uow, item);
    });
  }
  if (value && (0, _typeof2["default"])(value) === 'object') {
    if (value.___ref) {
      var opResult = uow.getOpResultById(value.opResultId);
      if (value.resultIndex !== undefined) {
        return opResult.resolveTo(value.resultIndex, value.propName);
      }
      if (value.propName !== undefined) {
        return opResult.resolveTo(value.propName);
      }
      return opResult;
    }
    var result = {};
    for (var prop in value) {
      result[prop] = resolveOpResultValueReference(uow, value[prop]);
    }
    return result;
  }
  return value;
}
var OperationJSONAdapter = {
  CREATE: function CREATE(uow, _ref) {
    var table = _ref.table,
      payload = _ref.payload;
    return uow.create.call(uow, table, resolveOpResultValueReference(uow, payload));
  },
  DELETE: function DELETE(uow, _ref2) {
    var table = _ref2.table,
      payload = _ref2.payload;
    return uow["delete"].call(uow, table, resolveOpResultValueReference(uow, payload));
  },
  UPDATE: function UPDATE(uow, _ref3) {
    var table = _ref3.table,
      payload = _ref3.payload;
    return uow.update.call(uow, table, resolveOpResultValueReference(uow, payload));
  },
  UPSERT: function UPSERT(uow, _ref4) {
    var table = _ref4.table,
      payload = _ref4.payload;
    return uow.upsert.call(uow, table, resolveOpResultValueReference(uow, payload));
  },
  UPDATE_BULK: function UPDATE_BULK(uow, _ref5) {
    var table = _ref5.table,
      payload = _ref5.payload;
    var args = baseBulkArgs(uow, {
      table: table,
      payload: payload
    });
    args.push(resolveOpResultValueReference(uow, payload.changes));
    return uow.bulkUpdate.apply(uow, args);
  },
  DELETE_BULK: function DELETE_BULK(uow, _ref6) {
    var table = _ref6.table,
      payload = _ref6.payload;
    var args = baseBulkArgs(uow, {
      table: table,
      payload: payload
    });
    return uow.bulkDelete.apply(uow, args);
  },
  CREATE_BULK: function CREATE_BULK(uow, _ref7) {
    var table = _ref7.table,
      payload = _ref7.payload;
    return uow.bulkCreate.call(uow, table, resolveOpResultValueReference(uow, payload));
  },
  UPSERT_BULK: function UPSERT_BULK(uow, _ref8) {
    var table = _ref8.table,
      payload = _ref8.payload;
    return uow.bulkUpsert.call(uow, table, resolveOpResultValueReference(uow, payload));
  },
  SET_RELATION: function SET_RELATION(uow, _ref9) {
    var table = _ref9.table,
      payload = _ref9.payload;
    return updateRelations(uow, 'setRelation', {
      table: table,
      payload: payload
    });
  },
  DELETE_RELATION: function DELETE_RELATION(uow, _ref10) {
    var table = _ref10.table,
      payload = _ref10.payload;
    return updateRelations(uow, 'deleteRelation', {
      table: table,
      payload: payload
    });
  },
  ADD_RELATION: function ADD_RELATION(uow, _ref11) {
    var table = _ref11.table,
      payload = _ref11.payload;
    return updateRelations(uow, 'addToRelation', {
      table: table,
      payload: payload
    });
  },
  FIND: function FIND(uow, _ref12) {
    var table = _ref12.table,
      payload = _ref12.payload;
    return uow.addOperations(_constants.OperationType.FIND, table, payload);
  }
};
exports.OperationJSONAdapter = OperationJSONAdapter;
function baseBulkArgs(uow, _ref13) {
  var table = _ref13.table,
    payload = _ref13.payload;
  var args = [];
  if (payload.conditional) {
    args.push(table);
    args.push(payload.conditional);
  } else {
    var opRef = resolveOpResultValueReference(uow, payload.unconditional);
    if (opRef instanceof _opResult.OpResult) {
      args.push(opRef);
    } else {
      args.push(table);
      args.push(opRef);
    }
  }
  return args;
}
function updateRelations(uow, method, _ref14) {
  var table = _ref14.table,
    payload = _ref14.payload;
  var args = [table];
  if (typeof payload.parentObject === 'string') {
    args.push({
      objectId: payload.parentObject
    });
  } else {
    args.push(resolveOpResultValueReference(uow, payload.parentObject));
  }
  args.push(payload.relationColumn);
  args.push(payload.conditional || resolveOpResultValueReference(uow, payload.unconditional));
  return uow[method].apply(uow, args);
}

/***/ }),

/***/ "./src/unit-of-work/op-result-value-reference.js":
/*!*******************************************************!*\
  !*** ./src/unit-of-work/op-result-value-reference.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OpResultValueReference = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var OpResultValueReference = /*#__PURE__*/function () {
  function OpResultValueReference(opResult, _ref) {
    var resultIndex = _ref.resultIndex,
      propName = _ref.propName;
    (0, _classCallCheck2["default"])(this, OpResultValueReference);
    this.opResult = opResult;
    this.resultIndex = resultIndex;
    this.propName = propName;
  }
  (0, _createClass2["default"])(OpResultValueReference, [{
    key: "getTableName",
    value: function getTableName() {
      return this.opResult.getTableName();
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var result = this.opResult.toJSON();
      if (this.resultIndex !== undefined) {
        result.resultIndex = this.resultIndex;
      }
      if (this.propName !== undefined) {
        result.propName = this.propName;
      }
      if (!result.propName && this.opResult.isFindRef()) {
        result.propName = 'objectId';
      }
      return result;
    }
  }]);
  return OpResultValueReference;
}();
exports.OpResultValueReference = OpResultValueReference;

/***/ }),

/***/ "./src/unit-of-work/op-result.js":
/*!***************************************!*\
  !*** ./src/unit-of-work/op-result.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OpResult = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _constants = __webpack_require__(/*! ./constants */ "./src/unit-of-work/constants.js");
var _opResultValueReference = __webpack_require__(/*! ./op-result-value-reference */ "./src/unit-of-work/op-result-value-reference.js");
var OpResult = /*#__PURE__*/function () {
  function OpResult(uow, _ref) {
    var operationType = _ref.operationType,
      table = _ref.table,
      payload = _ref.payload;
    (0, _classCallCheck2["default"])(this, OpResult);
    this.uow = uow;
    this.operationType = operationType;
    this.table = table;
    this.payload = payload;
    var stackName = this.uow.getOpStackName(operationType, table);
    var resultIndex = this.uow.getNextOpResultIndex(stackName);
    this.opResultId = "".concat(stackName).concat(resultIndex);
    this.result = null;
  }
  (0, _createClass2["default"])(OpResult, [{
    key: "setResult",
    value: function setResult(result) {
      this.result = result;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }, {
    key: "setError",
    value: function setError(error) {
      this.error = error;
    }
  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.operationType;
    }
  }, {
    key: "isFindRef",
    value: function isFindRef() {
      return this.operationType === _constants.OperationType.FIND;
    }
  }, {
    key: "isCollectionRef",
    value: function isCollectionRef() {
      return this.operationType === _constants.OperationType.FIND || this.operationType === _constants.OperationType.CREATE_BULK;
    }
  }, {
    key: "isObjectRef",
    value: function isObjectRef() {
      return this.operationType === _constants.OperationType.CREATE || this.operationType === _constants.OperationType.UPDATE;
    }
  }, {
    key: "setOpResultId",
    value: function setOpResultId(opResultId) {
      this.opResultId = opResultId;
      return this;
    }
  }, {
    key: "getOpResultId",
    value: function getOpResultId() {
      return this.opResultId;
    }
  }, {
    key: "getTableName",
    value: function getTableName() {
      return this.table;
    }
  }, {
    key: "resolveTo",
    value: function resolveTo(resultIndex, propName) {
      if (typeof resultIndex === 'string') {
        propName = resultIndex;
        resultIndex = undefined;
      }
      return new _opResultValueReference.OpResultValueReference(this, {
        resultIndex: resultIndex,
        propName: propName
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var result = {
        ___ref: true,
        opResultId: this.opResultId
      };
      if (this.isObjectRef()) {
        result.propName = 'objectId';
      }
      return result;
    }
  }]);
  return OpResult;
}();
exports.OpResult = OpResult;

/***/ }),

/***/ "./src/urls.js":
/*!*********************!*\
  !*** ./src/urls.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var Urls = /*#__PURE__*/function () {
  function Urls(app) {
    (0, _classCallCheck2["default"])(this, Urls);
    this.app = app;
  }
  (0, _createClass2["default"])(Urls, [{
    key: "root",
    value: function root() {
      return this.app.appPath;
    }

    //bl
  }, {
    key: "blServices",
    value: function blServices() {
      return "".concat(this.root(), "/services");
    }
  }, {
    key: "blServiceMethod",
    value: function blServiceMethod(name, method) {
      return "".concat(this.blServices(), "/").concat(name, "/").concat(method);
    }
  }, {
    key: "blEvent",
    value: function blEvent(eventName) {
      return "".concat(this.root(), "/servercode/events/").concat(eventName);
    }

    //logging
  }, {
    key: "logging",
    value: function logging() {
      return "".concat(this.root(), "/log");
    }
  }, {
    key: "loggingLevels",
    value: function loggingLevels() {
      return "".concat(this.logging(), "/logger");
    }

    //cache
  }, {
    key: "cache",
    value: function cache() {
      return "".concat(this.root(), "/cache");
    }
  }, {
    key: "cacheItem",
    value: function cacheItem(key) {
      return "".concat(this.cache(), "/").concat(key);
    }
  }, {
    key: "cacheItemExpireIn",
    value: function cacheItemExpireIn(key) {
      return "".concat(this.cacheItem(key), "/expireIn");
    }
  }, {
    key: "cacheItemExpireAt",
    value: function cacheItemExpireAt(key) {
      return "".concat(this.cacheItem(key), "/expireAt");
    }
  }, {
    key: "cacheItemCheck",
    value: function cacheItemCheck(key) {
      return "".concat(this.cacheItem(key), "/check");
    }

    //counters
  }, {
    key: "counters",
    value: function counters() {
      return "".concat(this.root(), "/counters");
    }
  }, {
    key: "countersList",
    value: function countersList(pattern) {
      return "".concat(this.counters(), "/").concat(pattern || '*', "/list");
    }
  }, {
    key: "counter",
    value: function counter(name) {
      return "".concat(this.counters(), "/").concat(name);
    }
  }, {
    key: "counterAddAndGet",
    value: function counterAddAndGet(name) {
      return "".concat(this.counter(name), "/incrementby/get");
    }
  }, {
    key: "counterGetAndAdd",
    value: function counterGetAndAdd(name) {
      return "".concat(this.counter(name), "/get/incrementby");
    }
  }, {
    key: "counterIncrementAndGet",
    value: function counterIncrementAndGet(name) {
      return "".concat(this.counter(name), "/increment/get");
    }
  }, {
    key: "counterDecrementAndGet",
    value: function counterDecrementAndGet(name) {
      return "".concat(this.counter(name), "/decrement/get");
    }
  }, {
    key: "counterGetAndDecrement",
    value: function counterGetAndDecrement(name) {
      return "".concat(this.counter(name), "/get/decrement");
    }
  }, {
    key: "counterGetAndIncrement",
    value: function counterGetAndIncrement(name) {
      return "".concat(this.counter(name), "/get/increment");
    }
  }, {
    key: "counterCompareAndSet",
    value: function counterCompareAndSet(name) {
      return "".concat(this.counter(name), "/get/compareandset");
    }
  }, {
    key: "counterReset",
    value: function counterReset(name) {
      return "".concat(this.counter(name), "/reset");
    }

    //data
  }, {
    key: "data",
    value: function data() {
      return "".concat(this.root(), "/data");
    }
  }, {
    key: "dataGrouping",
    value: function dataGrouping(className) {
      return "".concat(this.data(), "/data-grouping/").concat(className);
    }
  }, {
    key: "dataTable",
    value: function dataTable(tableName) {
      return "".concat(this.data(), "/").concat(tableName);
    }
  }, {
    key: "dataTableUpsert",
    value: function dataTableUpsert(tableName) {
      return "".concat(this.data(), "/").concat(tableName, "/upsert");
    }
  }, {
    key: "dataTableDeepSave",
    value: function dataTableDeepSave(tableName) {
      return "".concat(this.data(), "/").concat(tableName, "/deep-save");
    }
  }, {
    key: "dataTableFind",
    value: function dataTableFind(tableName) {
      return "".concat(this.dataTable(tableName), "/find");
    }
  }, {
    key: "dataTablePrimaryKey",
    value: function dataTablePrimaryKey(tableName) {
      return "".concat(this.dataTable(tableName), "/pk");
    }
  }, {
    key: "dataTableObject",
    value: function dataTableObject(tableName, objectId) {
      return "".concat(this.dataTable(tableName), "/").concat(encodeURIComponent(objectId));
    }
  }, {
    key: "dataTableObjectRelation",
    value: function dataTableObjectRelation(tableName, objectId, columnName) {
      return "".concat(this.dataTableObject(tableName, objectId), "/").concat(columnName);
    }
  }, {
    key: "dataTableCount",
    value: function dataTableCount(tableName) {
      return "".concat(this.dataTable(tableName), "/count");
    }
  }, {
    key: "dataTableProps",
    value: function dataTableProps(tableName) {
      return "".concat(this.dataTable(tableName), "/properties");
    }
  }, {
    key: "dataBulkTable",
    value: function dataBulkTable(tableName) {
      return "".concat(this.data(), "/bulk/").concat(tableName);
    }
  }, {
    key: "dataBulkTableUpsert",
    value: function dataBulkTableUpsert(tableName) {
      return "".concat(this.data(), "/bulkupsert/").concat(tableName);
    }
  }, {
    key: "dataBulkTableDelete",
    value: function dataBulkTableDelete(tableName) {
      return "".concat(this.dataBulkTable(tableName), "/delete");
    }
  }, {
    key: "dataObjectPermission",
    value: function dataObjectPermission(tableName, permissionType, objectId) {
      return "".concat(this.dataTable(tableName), "/permissions/").concat(permissionType, "/").concat(objectId);
    }
  }, {
    key: "dataTableNameById",
    value: function dataTableNameById(tableId) {
      return "".concat(this.data(), "/").concat(tableId, "/table-name");
    }
  }, {
    key: "transactions",
    value: function transactions() {
      return "".concat(this.root(), "/transaction/unit-of-work");
    }
  }, {
    key: "dataHives",
    value: function dataHives() {
      return "".concat(this.root(), "/hive");
    }
  }, {
    key: "dataHive",
    value: function dataHive(name) {
      return "".concat(this.dataHives(), "/").concat(name);
    }
  }, {
    key: "hiveStore",
    value: function hiveStore(name, storeType) {
      return "".concat(this.dataHive(name), "/").concat(storeType);
    }
  }, {
    key: "messaging",
    value: function messaging() {
      return "".concat(this.root(), "/messaging");
    }
  }, {
    key: "messagingPush",
    value: function messagingPush() {
      return "".concat(this.messaging(), "/push");
    }
  }, {
    key: "messagingPushTemplates",
    value: function messagingPushTemplates(deviceType) {
      return "".concat(this.messaging(), "/pushtemplates/").concat(deviceType);
    }
  }, {
    key: "messagingPushWithTemplate",
    value: function messagingPushWithTemplate(templateName) {
      return "".concat(this.messagingPush(), "/").concat(templateName);
    }
  }, {
    key: "messagingEmail",
    value: function messagingEmail() {
      return "".concat(this.messaging(), "/email");
    }
  }, {
    key: "messagingChannel",
    value: function messagingChannel(channel) {
      return "".concat(this.messaging(), "/").concat(channel);
    }
  }, {
    key: "messagingMessage",
    value: function messagingMessage(messageId) {
      return "".concat(this.messaging(), "/").concat(messageId);
    }
  }, {
    key: "messagingRegistrations",
    value: function messagingRegistrations() {
      return "".concat(this.messaging(), "/registrations");
    }
  }, {
    key: "messagingRegistrationDevice",
    value: function messagingRegistrationDevice(deviceId) {
      return "".concat(this.messagingRegistrations(), "/").concat(deviceId);
    }
  }, {
    key: "emailTemplate",
    value: function emailTemplate() {
      return "".concat(this.root(), "/emailtemplate");
    }
  }, {
    key: "emailTemplateSend",
    value: function emailTemplateSend() {
      return "".concat(this.emailTemplate(), "/send");
    }

    //commerce
  }, {
    key: "commerce",
    value: function commerce() {
      return "".concat(this.root(), "/commerce/googleplay");
    }
  }, {
    key: "commerceValidate",
    value: function commerceValidate(name, productId, token) {
      return "".concat(this.commerce(), "/validate/").concat(name, "/inapp/").concat(productId, "/purchases/").concat(token);
    }
  }, {
    key: "commerceSubCancel",
    value: function commerceSubCancel(name, subId, token) {
      return "".concat(this.commerce(), "/").concat(name, "/subscription/").concat(subId, "/purchases/").concat(token, "/cancel");
    }
  }, {
    key: "commerceSubStatus",
    value: function commerceSubStatus(name, subId, token) {
      return "".concat(this.commerce(), "/").concat(name, "/subscription/").concat(subId, "/purchases/").concat(token);
    }

    //files
  }, {
    key: "files",
    value: function files() {
      return "".concat(this.root(), "/files");
    }
  }, {
    key: "filePath",
    value: function filePath(path) {
      return "".concat(this.files(), "/").concat(path);
    }
  }, {
    key: "directoryPath",
    value: function directoryPath(path) {
      return "".concat(this.files(), "/").concat(path, "/");
    }
  }, {
    key: "fileCopy",
    value: function fileCopy() {
      return "".concat(this.files(), "/copy");
    }
  }, {
    key: "fileMove",
    value: function fileMove() {
      return "".concat(this.files(), "/move");
    }
  }, {
    key: "fileRename",
    value: function fileRename() {
      return "".concat(this.files(), "/rename");
    }
  }, {
    key: "filePermissions",
    value: function filePermissions() {
      return "".concat(this.files(), "/permissions");
    }
  }, {
    key: "filePermission",
    value: function filePermission(type, url) {
      return "".concat(this.filePermissions(), "/").concat(type, "/").concat(encodeURIComponent(url));
    }
  }, {
    key: "fileBinaryPath",
    value: function fileBinaryPath(path) {
      return "".concat(this.files(), "/binary/").concat(path);
    }
  }, {
    key: "fileAppendPath",
    value: function fileAppendPath(path) {
      return "".concat(this.files(), "/append/").concat(path);
    }
  }, {
    key: "fileAppendBinaryPath",
    value: function fileAppendBinaryPath(path) {
      return "".concat(this.files(), "/append/binary/").concat(path);
    }

    //users
  }, {
    key: "users",
    value: function users() {
      return "".concat(this.root(), "/users");
    }
  }, {
    key: "userObject",
    value: function userObject(objectId) {
      return "".concat(this.users(), "/").concat(objectId);
    }
  }, {
    key: "userRegister",
    value: function userRegister() {
      return "".concat(this.users(), "/register");
    }
  }, {
    key: "userLogin",
    value: function userLogin() {
      return "".concat(this.users(), "/login");
    }
  }, {
    key: "userLogout",
    value: function userLogout() {
      return "".concat(this.users(), "/logout");
    }
  }, {
    key: "userRoles",
    value: function userRoles(userId) {
      return "".concat(this.users(), "/userroles").concat(userId ? "/".concat(userId) : '');
    }
  }, {
    key: "usersRole",
    value: function usersRole(roleName) {
      return "".concat(this.users(), "/role/").concat(roleName);
    }
  }, {
    key: "userRoleOperation",
    value: function userRoleOperation(operation) {
      return "".concat(this.users(), "/").concat(operation);
    }
  }, {
    key: "userClassProps",
    value: function userClassProps() {
      return "".concat(this.users(), "/userclassprops");
    }
  }, {
    key: "userRestorePassword",
    value: function userRestorePassword(identity) {
      return "".concat(this.users(), "/restorepassword/").concat(encodeURIComponent(identity));
    }
  }, {
    key: "userTokenCheck",
    value: function userTokenCheck(token) {
      return "".concat(this.users(), "/isvalidusertoken/").concat(token);
    }
  }, {
    key: "userVerifyPassowrd",
    value: function userVerifyPassowrd() {
      return "".concat(this.users(), "/verifypassowrd");
    }
  }, {
    key: "userResendConfirmation",
    value: function userResendConfirmation(identity) {
      return "".concat(this.users(), "/resendconfirmation/").concat(identity);
    }
  }, {
    key: "userCreateConfirmationURL",
    value: function userCreateConfirmationURL(identity) {
      return "".concat(this.users(), "/createEmailConfirmationURL/").concat(identity);
    }
  }, {
    key: "userSocial",
    value: function userSocial() {
      return "".concat(this.users(), "/social");
    }
  }, {
    key: "userSocialOAuth",
    value: function userSocialOAuth(socialType) {
      return "".concat(this.userSocial(), "/oauth/").concat(socialType.toLowerCase(), "/request_url");
    }
  }, {
    key: "userSocialLogin",
    value: function userSocialLogin(socialType) {
      return "".concat(this.userSocial(), "/").concat(socialType.toLowerCase(), "/sdk/login");
    }
  }, {
    key: "userOAuthLogin",
    value: function userOAuthLogin(providerCode) {
      return "".concat(this.userSocial(), "/").concat(providerCode.toLowerCase(), "/login");
    }
  }, {
    key: "userAuthorizationURL",
    value: function userAuthorizationURL(providerCode) {
      return "".concat(this.users(), "/oauth/").concat(providerCode.toLowerCase(), "/request_url");
    }
  }, {
    key: "guestLogin",
    value: function guestLogin() {
      return "".concat(this.users(), "/register/guest");
    }
  }, {
    key: "userStatus",
    value: function userStatus(userId) {
      return "".concat(this.userObject(userId), "/status");
    }

    //management
  }, {
    key: "management",
    value: function management() {
      return "".concat(this.root(), "/management");
    }
  }, {
    key: "managementData",
    value: function managementData() {
      return "".concat(this.management(), "/data");
    }
  }, {
    key: "managementDataTable",
    value: function managementDataTable() {
      return "".concat(this.managementData(), "/table");
    }
  }]);
  return Urls;
}();
exports["default"] = Urls;

/***/ }),

/***/ "./src/user-agent.js":
/*!***************************!*\
  !*** ./src/user-agent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getUserAgent = getUserAgent;
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/utils.js"));
function getUserAgent() {
  var ua = 'NodeJS';
  if (_utils["default"].isBrowser) {
    ua = navigator.userAgent ? navigator.userAgent.toLowerCase() : 'hybrid-app';
  }
  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
  var matched = {
    browser: match[1] || '',
    version: match[2] || '0'
  };
  var browser = {};
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }
  return browser;
}

/***/ }),

/***/ "./src/users/index.js":
/*!****************************!*\
  !*** ./src/users/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _utils = __webpack_require__(/*! ./utils */ "./src/users/utils.js");
var _user = _interopRequireDefault(__webpack_require__(/*! ./user */ "./src/users/user.js"));
var _roles = _interopRequireDefault(__webpack_require__(/*! ./roles */ "./src/users/roles.js"));
var _social = _interopRequireDefault(__webpack_require__(/*! ./social */ "./src/users/social/index.js"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Users = /*#__PURE__*/function () {
  function Users(app) {
    (0, _classCallCheck2["default"])(this, Users);
    this.app = app;
    this.roles = new _roles["default"](this);
    this.social = new _social["default"](this);
    this.dataStore = this.app.Data.of(_user["default"]);
  }
  (0, _createClass2["default"])(Users, [{
    key: "Utils",
    get: function get() {
      return _utils.UsersUtils;
    }
  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
        var _this = this;
        var clientUserLocale;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              user = _objectSpread({}, user);
              if (!user.blUserLocale) {
                clientUserLocale = this.Utils.getClientUserLocale();
                if (clientUserLocale) {
                  user.blUserLocale = clientUserLocale;
                }
              }
              return _context.abrupt("return", this.app.request.post({
                url: this.app.urls.userRegister(),
                data: user
              }).then(function (data) {
                return _this.dataStore.parseResponse(data);
              }));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function register(_x) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_login, password, stayLoggedIn) {
        var _this2 = this;
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = {};
              if (!(typeof _login !== 'string' && typeof _login !== 'number')) {
                _context2.next = 3;
                break;
              }
              throw new Error('the first argument must be either a string or a number');
            case 3:
              if (_login) {
                _context2.next = 5;
                break;
              }
              throw new Error('the first argument cannot be an empty value');
            case 5:
              if (typeof password === 'boolean') {
                stayLoggedIn = password;
                password = undefined;
              }
              if (!(typeof _login === 'string' && password === undefined)) {
                _context2.next = 10;
                break;
              }
              data.objectId = _login;
              _context2.next = 14;
              break;
            case 10:
              if (password) {
                _context2.next = 12;
                break;
              }
              throw new Error('the "password" value cannot be an empty value');
            case 12:
              data.login = _login;
              data.password = password;
            case 14:
              stayLoggedIn = stayLoggedIn === true;
              return _context2.abrupt("return", this.app.request.post({
                url: this.app.urls.userLogin(),
                data: data
              }).then(function (data) {
                return _this2.setCurrentUser(data, stayLoggedIn);
              }));
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login(_x2, _x3, _x4) {
        return _login2.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "loginAsGuest",
    value: function () {
      var _loginAsGuest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(stayLoggedIn) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              stayLoggedIn = stayLoggedIn === true;
              return _context3.abrupt("return", this.app.request.post({
                url: this.app.urls.guestLogin()
              }).then(function (data) {
                return _this3.setCurrentUser(data, stayLoggedIn);
              }));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function loginAsGuest(_x5) {
        return _loginAsGuest.apply(this, arguments);
      }
      return loginAsGuest;
    }()
  }, {
    key: "loginWithFacebook",
    value: function () {
      var _loginWithFacebook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(fieldsMapping, permissions, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.social.loginWithFacebook(fieldsMapping, permissions, stayLoggedIn));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function loginWithFacebook(_x6, _x7, _x8) {
        return _loginWithFacebook.apply(this, arguments);
      }
      return loginWithFacebook;
    }()
  }, {
    key: "loginWithFacebookSdk",
    value: function () {
      var _loginWithFacebookSdk = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(accessToken, fieldsMapping, stayLoggedIn, options) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.social.loginWithFacebookSdk(accessToken, fieldsMapping, stayLoggedIn, options));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function loginWithFacebookSdk(_x9, _x10, _x11, _x12) {
        return _loginWithFacebookSdk.apply(this, arguments);
      }
      return loginWithFacebookSdk;
    }()
  }, {
    key: "loginWithGooglePlus",
    value: function () {
      var _loginWithGooglePlus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(fieldsMapping, permissions, container, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.social.loginWithGooglePlus(fieldsMapping, permissions, container, stayLoggedIn));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function loginWithGooglePlus(_x13, _x14, _x15, _x16) {
        return _loginWithGooglePlus.apply(this, arguments);
      }
      return loginWithGooglePlus;
    }()
  }, {
    key: "loginWithGooglePlusSdk",
    value: function () {
      var _loginWithGooglePlusSdk = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(accessToken, fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.social.loginWithGooglePlusSdk(accessToken, fieldsMapping, stayLoggedIn));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function loginWithGooglePlusSdk(_x17, _x18, _x19) {
        return _loginWithGooglePlusSdk.apply(this, arguments);
      }
      return loginWithGooglePlusSdk;
    }()
  }, {
    key: "loginWithTwitter",
    value: function () {
      var _loginWithTwitter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.social.loginWithTwitter(fieldsMapping, stayLoggedIn));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function loginWithTwitter(_x20, _x21) {
        return _loginWithTwitter.apply(this, arguments);
      }
      return loginWithTwitter;
    }()
  }, {
    key: "loginWithOauth2",
    value: function () {
      var _loginWithOauth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(providerCode, accessToken, guestUser, fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.social.loginWithOauth2(providerCode, accessToken, guestUser, fieldsMapping, stayLoggedIn));
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function loginWithOauth2(_x22, _x23, _x24, _x25, _x26) {
        return _loginWithOauth.apply(this, arguments);
      }
      return loginWithOauth2;
    }()
  }, {
    key: "loginWithOauth1",
    value: function () {
      var _loginWithOauth2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(providerCode, accessToken, accessTokenSecret, guestUser, fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.social.loginWithOauth1(providerCode, accessToken, accessTokenSecret, guestUser, fieldsMapping, stayLoggedIn));
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function loginWithOauth1(_x27, _x28, _x29, _x30, _x31, _x32) {
        return _loginWithOauth2.apply(this, arguments);
      }
      return loginWithOauth1;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        var _this4 = this;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", this.app.request.get({
                url: this.app.urls.userLogout()
              }).then(function () {
                _this4.setCurrentUser(null);
              })["catch"](function (error) {
                if ([3023, 3064, 3090, 3091].includes(error.code)) {
                  _this4.setCurrentUser(null);
                }
                throw error;
              }));
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
  }, {
    key: "getCurrentUser",
    value: function () {
      var _getCurrentUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(reload) {
        var _this5 = this;
        var currentUserId;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (!(this.currentUser && !reload)) {
                _context12.next = 2;
                break;
              }
              return _context12.abrupt("return", this.currentUser);
            case 2:
              if (!this.currentUserRequest) {
                _context12.next = 4;
                break;
              }
              return _context12.abrupt("return", this.currentUserRequest);
            case 4:
              currentUserId = this.getCurrentUserId();
              if (!currentUserId) {
                _context12.next = 7;
                break;
              }
              return _context12.abrupt("return", this.currentUserRequest = this.dataStore.findById(currentUserId).then(function (user) {
                _this5.currentUserRequest = null;
                user['user-token'] = _this5.currentUser && _this5.currentUser['user-token'] || undefined;
                return _this5.currentUser = user;
              })["catch"](function (error) {
                _this5.currentUserRequest = null;
                throw error;
              }));
            case 7:
              return _context12.abrupt("return", null);
            case 8:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function getCurrentUser(_x33) {
        return _getCurrentUser.apply(this, arguments);
      }
      return getCurrentUser;
    }()
  }, {
    key: "setCurrentUser",
    value: function setCurrentUser(user, stayLoggedIn) {
      this.app.LocalCache.remove(this.app.LocalCache.Keys.USER_TOKEN);
      this.app.LocalCache.remove(this.app.LocalCache.Keys.CURRENT_USER_ID);
      this.app.LocalCache.remove(this.app.LocalCache.Keys.STAY_LOGGED_IN);
      this.currentUser = user || null;
      if (this.currentUser) {
        if (!(this.currentUser instanceof _user["default"])) {
          this.currentUser = this.dataStore.parseResponse(this.currentUser);
        }
        if (stayLoggedIn) {
          this.app.LocalCache.set(this.app.LocalCache.Keys.STAY_LOGGED_IN, true);
          this.app.LocalCache.set(this.app.LocalCache.Keys.USER_TOKEN, this.currentUser['user-token']);
          this.app.LocalCache.set(this.app.LocalCache.Keys.CURRENT_USER_ID, this.currentUser.objectId);
        }
      }
      if (this.app.__RT) {
        this.app.RT.updateUserTokenIfNeeded();
      }
      return this.currentUser;
    }
  }, {
    key: "isValidLogin",
    value: function () {
      var _isValidLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
        var userToken;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              userToken = this.getCurrentUserToken();
              if (!userToken) {
                _context13.next = 3;
                break;
              }
              return _context13.abrupt("return", this.app.request.get({
                url: this.app.urls.userTokenCheck(userToken)
              }));
            case 3:
              return _context13.abrupt("return", false);
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function isValidLogin() {
        return _isValidLogin.apply(this, arguments);
      }
      return isValidLogin;
    }()
  }, {
    key: "verifyPassword",
    value: function () {
      var _verifyPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(currentPassword) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              if (!(!currentPassword || typeof currentPassword !== 'string')) {
                _context14.next = 2;
                break;
              }
              throw new Error('Password has to be a non empty string');
            case 2:
              if (this.getCurrentUserToken()) {
                _context14.next = 4;
                break;
              }
              throw new Error('In order to check password you have to be logged in');
            case 4:
              return _context14.abrupt("return", this.app.request.post({
                url: this.app.urls.userVerifyPassowrd(),
                data: {
                  password: currentPassword
                }
              }).then(function (result) {
                return !!(result && result.valid);
              }));
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function verifyPassword(_x34) {
        return _verifyPassword.apply(this, arguments);
      }
      return verifyPassword;
    }()
  }, {
    key: "restorePassword",
    value: function () {
      var _restorePassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(emailAddress) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              if (!(!emailAddress || typeof emailAddress !== 'string')) {
                _context15.next = 2;
                break;
              }
              throw new Error('Email Address must be provided and must be a string.');
            case 2:
              return _context15.abrupt("return", this.app.request.get({
                url: this.app.urls.userRestorePassword(emailAddress)
              }));
            case 3:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function restorePassword(_x35) {
        return _restorePassword.apply(this, arguments);
      }
      return restorePassword;
    }()
  }, {
    key: "resendEmailConfirmation",
    value: function () {
      var _resendEmailConfirmation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(identity) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              if (!(typeof identity === 'string')) {
                _context16.next = 5;
                break;
              }
              if (identity) {
                _context16.next = 3;
                break;
              }
              throw new Error('Identity can not be an empty string.');
            case 3:
              _context16.next = 7;
              break;
            case 5:
              if (!(typeof identity !== 'number')) {
                _context16.next = 7;
                break;
              }
              throw new Error('Identity must be a string or number.');
            case 7:
              return _context16.abrupt("return", this.app.request.post({
                url: this.app.urls.userResendConfirmation(identity)
              }));
            case 8:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function resendEmailConfirmation(_x36) {
        return _resendEmailConfirmation.apply(this, arguments);
      }
      return resendEmailConfirmation;
    }()
  }, {
    key: "createEmailConfirmationURL",
    value: function () {
      var _createEmailConfirmationURL = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(identity) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              if (!(typeof identity === 'string')) {
                _context17.next = 5;
                break;
              }
              if (identity) {
                _context17.next = 3;
                break;
              }
              throw new Error('Identity can not be an empty string.');
            case 3:
              _context17.next = 7;
              break;
            case 5:
              if (!(typeof identity !== 'number')) {
                _context17.next = 7;
                break;
              }
              throw new Error('Identity must be a string or number.');
            case 7:
              return _context17.abrupt("return", this.app.request.post({
                url: this.app.urls.userCreateConfirmationURL(identity)
              }));
            case 8:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function createEmailConfirmationURL(_x37) {
        return _createEmailConfirmationURL.apply(this, arguments);
      }
      return createEmailConfirmationURL;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(user) {
        var _this6 = this;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              return _context18.abrupt("return", this.app.request.put({
                url: this.app.urls.userObject(user.objectId),
                data: user
              }).then(function (data) {
                return _this6.dataStore.parseResponse(data);
              }));
            case 1:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function update(_x38) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "findByRole",
    value: function () {
      var _findByRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(roleName, loadRoles, query) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", this.roles.findByRole(roleName, loadRoles, query));
            case 1:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function findByRole(_x39, _x40, _x41) {
        return _findByRole.apply(this, arguments);
      }
      return findByRole;
    }()
  }, {
    key: "getUserRoles",
    value: function () {
      var _getUserRoles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(userId) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", this.roles.getUserRoles(userId));
            case 1:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function getUserRoles(_x42) {
        return _getUserRoles.apply(this, arguments);
      }
      return getUserRoles;
    }()
  }, {
    key: "assignRole",
    value: function () {
      var _assignRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(identity, rolename) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", this.roles.assignRole(identity, rolename));
            case 1:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function assignRole(_x43, _x44) {
        return _assignRole.apply(this, arguments);
      }
      return assignRole;
    }()
  }, {
    key: "unassignRole",
    value: function () {
      var _unassignRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(identity, rolename) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              return _context22.abrupt("return", this.roles.unassignRole(identity, rolename));
            case 1:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function unassignRole(_x45, _x46) {
        return _unassignRole.apply(this, arguments);
      }
      return unassignRole;
    }()
  }, {
    key: "describeUserClass",
    value: function () {
      var _describeUserClass = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23() {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              return _context23.abrupt("return", this.app.request.get({
                url: this.app.urls.userClassProps()
              }));
            case 1:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function describeUserClass() {
        return _describeUserClass.apply(this, arguments);
      }
      return describeUserClass;
    }()
  }, {
    key: "enableUser",
    value: function () {
      var _enableUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(userId) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              return _context24.abrupt("return", this.updateUserStatus(userId, 'ENABLED'));
            case 1:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function enableUser(_x47) {
        return _enableUser.apply(this, arguments);
      }
      return enableUser;
    }()
  }, {
    key: "disableUser",
    value: function () {
      var _disableUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(userId) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              return _context25.abrupt("return", this.updateUserStatus(userId, 'DISABLED'));
            case 1:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function disableUser(_x48) {
        return _disableUser.apply(this, arguments);
      }
      return disableUser;
    }()
  }, {
    key: "updateUserStatus",
    value: function () {
      var _updateUserStatus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(userId, userStatus) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              if (!(!userId || typeof userId !== 'string' && typeof userId !== 'number')) {
                _context26.next = 2;
                break;
              }
              throw new Error('User objectId must be non empty string/number');
            case 2:
              if (!(!userStatus || typeof userStatus !== 'string')) {
                _context26.next = 4;
                break;
              }
              throw new Error('User Status must be a valid string');
            case 4:
              return _context26.abrupt("return", this.app.request.put({
                url: this.app.urls.userStatus(userId),
                data: {
                  userStatus: userStatus
                }
              }));
            case 5:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function updateUserStatus(_x49, _x50) {
        return _updateUserStatus.apply(this, arguments);
      }
      return updateUserStatus;
    }()
  }, {
    key: "getAuthorizationUrlLink",
    value: function getAuthorizationUrlLink(providerCode, fieldsMapping, scope, redirect, redirectAfterLoginUrl, callbackUrlDomain) {
      return this.app.request.post({
        url: this.app.urls.userAuthorizationURL(providerCode),
        data: {
          fieldsMapping: fieldsMapping,
          permissions: scope,
          redirect: redirect,
          redirectAfterLoginUrl: redirectAfterLoginUrl,
          callbackUrlDomain: callbackUrlDomain
        }
      });
    }
  }, {
    key: "loggedInUser",
    value: function loggedInUser() {
      return this.getCurrentUserId();
    }
  }, {
    key: "getCurrentUserToken",
    value: function getCurrentUserToken() {
      if (this.currentUser && this.currentUser['user-token']) {
        return this.currentUser['user-token'];
      }
      return this.app.LocalCache.get(this.app.LocalCache.Keys.USER_TOKEN) || null;
    }
  }, {
    key: "setCurrentUserToken",
    value: function setCurrentUserToken(userToken) {
      userToken = userToken || null;
      if (this.currentUser) {
        this.currentUser['user-token'] = userToken;
      }
      if (this.app.LocalCache.get('user-token')) {
        this.app.LocalCache.set('user-token', userToken);
      }
      if (this.app.__RT) {
        this.app.RT.updateUserTokenIfNeeded();
      }
    }
  }, {
    key: "getCurrentUserId",
    value: function getCurrentUserId() {
      if (this.currentUser) {
        return this.currentUser.objectId;
      }
      return this.app.LocalCache.get(this.app.LocalCache.Keys.CURRENT_USER_ID) || null;
    }

    /**
     * @deprecated
     * */
  }, {
    key: "getLocalCurrentUser",
    value: function getLocalCurrentUser() {
      return this.currentUser;
    }

    /**
     * @deprecated
     * */
  }, {
    key: "setLocalCurrentUser",
    value: function setLocalCurrentUser(user, stayLoggedIn) {
      return this.setCurrentUser(user, stayLoggedIn);
    }
  }]);
  return Users;
}();
exports["default"] = Users;

/***/ }),

/***/ "./src/users/roles.js":
/*!****************************!*\
  !*** ./src/users/roles.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _dataQueryBuilder = _interopRequireDefault(__webpack_require__(/*! ../data/data-query-builder */ "./src/data/data-query-builder.js"));
var UsersRoles = /*#__PURE__*/function () {
  function UsersRoles(users) {
    (0, _classCallCheck2["default"])(this, UsersRoles);
    this.users = users;
    this.app = users.app;
  }
  (0, _createClass2["default"])(UsersRoles, [{
    key: "findByRole",
    value: function () {
      var _findByRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(roleName, loadRoles, query) {
        var _this = this;
        var queryStringTokens;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!roleName || typeof roleName !== 'string')) {
                _context.next = 2;
                break;
              }
              throw new Error('Role Name must be a string and can not be empty');
            case 2:
              if (!(loadRoles !== null && loadRoles !== undefined && typeof loadRoles !== 'boolean')) {
                _context.next = 4;
                break;
              }
              throw new Error('The second argument "loadRoles" can be a boolean only');
            case 4:
              if (!(query !== null && query !== undefined && (Array.isArray(query) || (0, _typeof2["default"])(query) !== 'object'))) {
                _context.next = 6;
                break;
              }
              throw new Error('The third argument "query" can be an instance of DataQueryBuilder or a plain object only');
            case 6:
              queryStringTokens = [];
              if (typeof loadRoles === 'boolean') {
                queryStringTokens.push("loadRoles=".concat(loadRoles));
              }
              if (query) {
                queryStringTokens.push(_dataQueryBuilder["default"].toQueryString(query));
              }
              return _context.abrupt("return", this.app.request.get({
                url: this.app.urls.usersRole(roleName),
                queryString: queryStringTokens.join('&')
              }).then(function (result) {
                return _this.users.dataStore.parseResponse(result);
              }));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function findByRole(_x, _x2, _x3) {
        return _findByRole.apply(this, arguments);
      }
      return findByRole;
    }()
  }, {
    key: "getUserRoles",
    value: function () {
      var _getUserRoles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.app.request.get({
                url: this.app.urls.userRoles(userId)
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getUserRoles(_x4) {
        return _getUserRoles.apply(this, arguments);
      }
      return getUserRoles;
    }()
  }, {
    key: "assignRole",
    value: function () {
      var _assignRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(identity, rolename) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.changeRole(identity, rolename, 'assignRole'));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function assignRole(_x5, _x6) {
        return _assignRole.apply(this, arguments);
      }
      return assignRole;
    }()
  }, {
    key: "unassignRole",
    value: function () {
      var _unassignRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(identity, rolename) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.changeRole(identity, rolename, 'unassignRole'));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function unassignRole(_x7, _x8) {
        return _unassignRole.apply(this, arguments);
      }
      return unassignRole;
    }()
  }, {
    key: "changeRole",
    value: function () {
      var _changeRole = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(identity, roleName, operation) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!identity || !(typeof identity === 'string' || typeof identity === 'number'))) {
                _context5.next = 2;
                break;
              }
              throw new Error('User identity must be a string or number and can not be empty.');
            case 2:
              if (!(!roleName || typeof roleName !== 'string')) {
                _context5.next = 4;
                break;
              }
              throw new Error('Role Name must be a string and can not be empty.');
            case 4:
              return _context5.abrupt("return", this.app.request.post({
                url: this.app.urls.userRoleOperation(operation),
                data: {
                  user: identity,
                  roleName: roleName
                }
              }));
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function changeRole(_x9, _x10, _x11) {
        return _changeRole.apply(this, arguments);
      }
      return changeRole;
    }()
  }]);
  return UsersRoles;
}();
exports["default"] = UsersRoles;

/***/ }),

/***/ "./src/users/social/container.js":
/*!***************************************!*\
  !*** ./src/users/social/container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SocialContainer = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var SocialContainer = /*#__PURE__*/function () {
  function SocialContainer(socialType, container) {
    (0, _classCallCheck2["default"])(this, SocialContainer);
    this.socialType = socialType;
    this.container = container;
    if (container) {
      this.processContainer();
    } else {
      this.createContainer();
    }
  }
  (0, _createClass2["default"])(SocialContainer, [{
    key: "processContainer",
    value: function processContainer() {
      var _this = this;
      var client;
      var container = this.container[0] || this.container;
      var loadingMsg = document.createElement('div');
      loadingMsg.innerHTML = 'Loading...';
      container.appendChild(loadingMsg);
      container.style.cursor = 'wait';
      this.closeContainer = function () {
        container.style.cursor = 'default';
        container.removeChild(client);
      };
      this.removeLoading = function () {
        container.removeChild(loadingMsg);
      };
      this.doAuthorizationActivity = function (url) {
        _this.removeLoading();
        client = document.createElement('iframe');
        client.frameBorder = 0;
        client.width = container.style.width;
        client.height = container.style.height;
        client.id = 'SocialAuthFrame';
        client.setAttribute('src', url + '&amp;output=embed');
        container.appendChild(client);
        client.onload = function () {
          container.style.cursor = 'default';
        };
      };
    }
  }, {
    key: "createContainer",
    value: function createContainer() {
      var container = window.open('', this.socialType + ' authorization', 'resizable=yes, scrollbars=yes, titlebar=yes, top=10, left=10');
      var body = container.document.getElementsByTagName('body')[0];
      body.innerHTML = 'Loading...';
      container.document.getElementsByTagName('html')[0].style.cursor = 'wait';
      this.closeContainer = function () {
        container.close();
      };
      this.doAuthorizationActivity = function (url) {
        container.location.href = url;
        container.onload = function () {
          container.document.getElementsByTagName('html')[0].style.cursor = 'default';
        };
      };
    }
  }]);
  return SocialContainer;
}();
exports.SocialContainer = SocialContainer;

/***/ }),

/***/ "./src/users/social/index.js":
/*!***********************************!*\
  !*** ./src/users/social/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _user = _interopRequireDefault(__webpack_require__(/*! ../user */ "./src/users/user.js"));
var _container = __webpack_require__(/*! ./container */ "./src/users/social/container.js");
var UsersSocial = /*#__PURE__*/function () {
  function UsersSocial(users) {
    (0, _classCallCheck2["default"])(this, UsersSocial);
    this.users = users;
    this.app = users.app;
  }
  (0, _createClass2["default"])(UsersSocial, [{
    key: "loginWithFacebook",
    value: function () {
      var _loginWithFacebook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fieldsMapping, permissions, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.loginWithContainer('facebook', fieldsMapping, permissions, null, stayLoggedIn));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loginWithFacebook(_x, _x2, _x3) {
        return _loginWithFacebook.apply(this, arguments);
      }
      return loginWithFacebook;
    }()
  }, {
    key: "loginWithGooglePlus",
    value: function () {
      var _loginWithGooglePlus = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fieldsMapping, permissions, container, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.loginWithContainer('googleplus', fieldsMapping, permissions, container, stayLoggedIn));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function loginWithGooglePlus(_x4, _x5, _x6, _x7) {
        return _loginWithGooglePlus.apply(this, arguments);
      }
      return loginWithGooglePlus;
    }()
  }, {
    key: "loginWithTwitter",
    value: function () {
      var _loginWithTwitter = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.loginWithContainer('twitter', fieldsMapping, null, null, stayLoggedIn));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function loginWithTwitter(_x8, _x9) {
        return _loginWithTwitter.apply(this, arguments);
      }
      return loginWithTwitter;
    }()
  }, {
    key: "loginWithFacebookSdk",
    value: function () {
      var _loginWithFacebookSdk = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(accessToken, fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.sendWithAccessToken('facebook', accessToken, fieldsMapping, stayLoggedIn));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function loginWithFacebookSdk(_x10, _x11, _x12) {
        return _loginWithFacebookSdk.apply(this, arguments);
      }
      return loginWithFacebookSdk;
    }()
  }, {
    key: "loginWithGooglePlusSdk",
    value: function () {
      var _loginWithGooglePlusSdk = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(accessToken, fieldsMapping, stayLoggedIn) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.sendWithAccessToken('googleplus', accessToken, fieldsMapping, stayLoggedIn));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function loginWithGooglePlusSdk(_x13, _x14, _x15) {
        return _loginWithGooglePlusSdk.apply(this, arguments);
      }
      return loginWithGooglePlusSdk;
    }()
  }, {
    key: "sendWithAccessToken",
    value: function () {
      var _sendWithAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(socialType, accessToken, fieldsMapping, stayLoggedIn) {
        var _this = this;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!accessToken || typeof accessToken !== 'string')) {
                _context6.next = 2;
                break;
              }
              throw new Error('"accessToken" must be non empty string.');
            case 2:
              if (typeof fieldsMapping === 'boolean') {
                stayLoggedIn = fieldsMapping;
                fieldsMapping = undefined;
              }
              return _context6.abrupt("return", this.app.request.post({
                url: this.app.urls.userSocialLogin(socialType),
                data: {
                  accessToken: accessToken,
                  fieldsMapping: fieldsMapping
                }
              }).then(function (data) {
                return _this.users.setCurrentUser(data, stayLoggedIn);
              }));
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function sendWithAccessToken(_x16, _x17, _x18, _x19) {
        return _sendWithAccessToken.apply(this, arguments);
      }
      return sendWithAccessToken;
    }()
  }, {
    key: "loginWithContainer",
    value: function () {
      var _loginWithContainer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(socialType, fieldsMapping, permissions, container, stayLoggedIn) {
        var _this2 = this;
        var socialContainer, resolveContainer;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              socialContainer = new _container.SocialContainer(socialType, container);
              resolveContainer = function resolveContainer() {
                return new Promise(function (resolve, reject) {
                  var onMessage = function onMessage(event) {
                    if (event.origin === _this2.app.serverURL) {
                      var result = JSON.parse(event.data);
                      if (result.fault) {
                        reject(new Error(result.fault));
                      } else {
                        resolve(result);
                      }
                      removeWindowEventListener('message', window, onMessage);
                      socialContainer.closeContainer();
                    }
                  };
                  addWindowEventListener('message', window, onMessage);
                });
              };
              return _context7.abrupt("return", this.app.request.post({
                url: this.app.urls.userSocialOAuth(socialType),
                data: {
                  fieldsMapping: fieldsMapping || {},
                  permissions: permissions || []
                }
              }).then(function (authUrl) {
                return socialContainer.doAuthorizationActivity(authUrl);
              })["catch"](function (error) {
                socialContainer.closeContainer();
                throw error;
              }).then(resolveContainer).then(function (data) {
                return _this2.users.setCurrentUser(data, stayLoggedIn);
              }));
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function loginWithContainer(_x20, _x21, _x22, _x23, _x24) {
        return _loginWithContainer.apply(this, arguments);
      }
      return loginWithContainer;
    }()
  }, {
    key: "loginWithOauth2",
    value: function () {
      var _loginWithOauth = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(providerCode, accessToken, guestUser, fieldsMapping, stayLoggedIn) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(!providerCode || typeof providerCode !== 'string')) {
                _context8.next = 2;
                break;
              }
              throw new Error('"providerCode" must be non empty string.');
            case 2:
              if (!(!accessToken || typeof accessToken !== 'string')) {
                _context8.next = 4;
                break;
              }
              throw new Error('"accessToken" must be non empty string.');
            case 4:
              if (guestUser && !(guestUser instanceof _user["default"])) {
                stayLoggedIn = fieldsMapping;
                fieldsMapping = guestUser;
                guestUser = undefined;
              }
              if (typeof fieldsMapping === 'boolean') {
                stayLoggedIn = fieldsMapping;
                fieldsMapping = undefined;
              }
              return _context8.abrupt("return", this.app.request.post({
                url: this.app.urls.userOAuthLogin(providerCode),
                data: {
                  accessToken: accessToken,
                  fieldsMapping: fieldsMapping,
                  guestUser: guestUser
                }
              }).then(function (data) {
                return _this3.users.setCurrentUser(data, stayLoggedIn);
              }));
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function loginWithOauth2(_x25, _x26, _x27, _x28, _x29) {
        return _loginWithOauth.apply(this, arguments);
      }
      return loginWithOauth2;
    }()
  }, {
    key: "loginWithOauth1",
    value: function () {
      var _loginWithOauth2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(providerCode, accessToken, accessTokenSecret, guestUser, fieldsMapping, stayLoggedIn) {
        var _this4 = this;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!providerCode || typeof providerCode !== 'string')) {
                _context9.next = 2;
                break;
              }
              throw new Error('"providerCode" must be non empty string.');
            case 2:
              if (!(!accessToken || typeof accessToken !== 'string')) {
                _context9.next = 4;
                break;
              }
              throw new Error('"accessToken" must be non empty string.');
            case 4:
              if (!(!accessTokenSecret || typeof accessTokenSecret !== 'string')) {
                _context9.next = 6;
                break;
              }
              throw new Error('"accessTokenSecret" must be non empty string.');
            case 6:
              if (guestUser && !(guestUser instanceof _user["default"])) {
                stayLoggedIn = fieldsMapping;
                fieldsMapping = guestUser;
                guestUser = undefined;
              }
              if (typeof fieldsMapping === 'boolean') {
                stayLoggedIn = fieldsMapping;
                fieldsMapping = undefined;
              }
              return _context9.abrupt("return", this.app.request.post({
                url: this.app.urls.userOAuthLogin(providerCode),
                data: {
                  accessToken: accessToken,
                  accessTokenSecret: accessTokenSecret,
                  fieldsMapping: fieldsMapping,
                  guestUser: guestUser
                }
              }).then(function (data) {
                return _this4.users.setCurrentUser(data, stayLoggedIn);
              }));
            case 9:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function loginWithOauth1(_x30, _x31, _x32, _x33, _x34, _x35) {
        return _loginWithOauth2.apply(this, arguments);
      }
      return loginWithOauth1;
    }()
  }]);
  return UsersSocial;
}();
exports["default"] = UsersSocial;
function addWindowEventListener(event, elem, callback) {
  if (elem.addEventListener) {
    elem.addEventListener(event, callback, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + event, callback);
  } else {
    elem[event] = callback;
  }
}
function removeWindowEventListener(event, elem, callback) {
  if (elem.removeEventListener) {
    elem.removeEventListener(event, callback, false);
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + event, callback);
  }
  elem[event] = null;
}

/***/ }),

/***/ "./src/users/user.js":
/*!***************************!*\
  !*** ./src/users/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var User = /*#__PURE__*/function () {
  function User(user) {
    var _this = this;
    (0, _classCallCheck2["default"])(this, User);
    user = user || {};
    Object.keys(user).map(function (userProp) {
      _this[userProp] = user[userProp];
    });

    //TODO: must be moved
    this.___class = User.className;
  }
  (0, _createClass2["default"])(User, null, [{
    key: "className",
    get: function get() {
      return 'Users';
    }
  }]);
  return User;
}(); //TODO: must be removed
exports["default"] = User;
User.prototype.___class = User.className;

/***/ }),

/***/ "./src/users/utils.js":
/*!****************************!*\
  !*** ./src/users/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UsersUtils = void 0;
var UsersUtils = {
  getClientUserLocale: function getClientUserLocale() {
    if (typeof navigator === 'undefined') {
      return;
    }
    var language = '';
    if (navigator.languages && navigator.languages.length) {
      language = navigator.languages[0];
    } else {
      language = navigator.userLanguage || navigator.language || navigator.browserLanguage || navigator.systemLanguage || '';
    }
    return language.slice(0, 2).toLowerCase();
  }
};
exports.UsersUtils = UsersUtils;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var Utils = {
  isBrowser: isBrowser(),
  isLocalStorageSupported: isLocalStorageSupported(),
  globalScope: (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) === 'object' && self.self === self && self || (typeof __webpack_require__.g === "undefined" ? "undefined" : (0, _typeof2["default"])(__webpack_require__.g)) === 'object' && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g,
  castArray: function castArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === 'undefined') {
      return [];
    }
    return [value];
  },
  isCustomClassInstance: function isCustomClassInstance(item) {
    if (!item || (0, _typeof2["default"])(item) !== 'object' || Array.isArray(item)) {
      return false;
    }
    return item.constructor !== Object;
  },
  getClassName: function getClassName(obj) {
    if (obj && obj.className) {
      return obj.className;
    }
    if (typeof obj === 'function') {
      if (obj.name) {
        return obj.name;
      }
    }
    if (obj && (0, _typeof2["default"])(obj) === 'object' && !Array.isArray(obj)) {
      if (obj.___class) {
        return obj.___class;
      }
      if (obj.constructor !== Object) {
        return Utils.getClassName(obj.constructor);
      }
    }
    return null;
  },
  uuid: function uuid() {
    var chr4 = function chr4() {
      return Math.random().toString(16).slice(-4).toUpperCase();
    };
    var chr8 = function chr8() {
      return "".concat(chr4()).concat(chr4());
    };
    var chr12 = function chr12() {
      return "".concat(chr4()).concat(chr4()).concat(chr4());
    };
    return "".concat(chr8(), "-").concat(chr4(), "-").concat(chr4(), "-").concat(chr4(), "-").concat(chr12());
  },
  isObject: function isObject(obj) {
    return obj != null && obj.constructor.name === 'Object';
  }
};
function isBrowser() {
  return (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) === 'object' && self.self === self && (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === 'object' && window === self;
}
function isLocalStorageSupported() {
  try {
    if (isBrowser() && window.localStorage) {
      localStorage.setItem('localStorageTest', true);
      localStorage.removeItem('localStorageTest');
      return true;
    }
  } catch (e) {}
  return false;
}
var _default = Utils;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/backendless-request/dist/backendless-request.js":
/*!**********************************************************************!*\
  !*** ./node_modules/backendless-request/dist/backendless-request.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BackendlessRequest"] = factory();
	else
		root["BackendlessRequest"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStream = exports.isObject = exports.isFormData = exports.castArray = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Casts `value` as an array if it's not one.
 * Equvivalent to lodash/castArray
 */
var castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};
exports.castArray = castArray;
var isObject = function isObject(value) {
  return null != value && _typeof(value) === 'object';
};
exports.isObject = isObject;
var isFormData = function isFormData(value) {
  return value && value.constructor && value.constructor.toString().trim().indexOf('function FormData') === 0;
};
exports.isFormData = isFormData;
var isStream = function isStream(value) {
  var stream = __webpack_require__(5);
  return value instanceof stream.Stream;
};
exports.isStream = isStream;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = void 0;
var _cache = __webpack_require__(10);
var _eventEmitter = _interopRequireDefault(__webpack_require__(11));
var qs = _interopRequireWildcard(__webpack_require__(12));
var _utils = __webpack_require__(0);
var _error = __webpack_require__(13);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CONTENT_TYPE_HEADER = 'Content-Type';
var REQUEST_EVENT = 'request';
var RESPONSE_EVENT = 'response';
var ERROR_EVENT = 'error';
var DONE_EVENT = 'done';
var Request = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Request, _EventEmitter);
  var _super = _createSuper(Request);
  function Request(path, method, body) {
    var _this;
    _classCallCheck(this, Request);
    _this = _super.call(this);
    _this.method = method;
    _this.path = path;
    _this.body = body;
    _this.tags = undefined;
    _this.unwrap = true;
    _this.cacheTTL = 0;
    _this.headers = {};
    _this.queryParams = {};
    _this.encoding = 'utf8';
    _this.timeout = 0;
    return _this;
  }

  /**
   * Sets a header
   *
   * @param {String|Object} key or map of headers
   * @param {String} [value]
   * @returns {Request}
   */
  _createClass(Request, [{
    key: "set",
    value: function set(key, value) {
      if ((0, _utils.isObject)(key)) {
        for (var headerName in key) {
          this.set(headerName, key[headerName]);
        }
      } else if (typeof value !== 'undefined') {
        this.headers[key] = value;
      }
      return this;
    }

    /**
     * Which kind of tags this request affects.
     * Used for cache validation.
     * Non GET requests with defined tags, will clean all related to these tags caches
     *
     * @param {Array.<String>} tags
     * @returns {Request}
     */
  }, {
    key: "cacheTags",
    value: function cacheTags() {
      for (var _len = arguments.length, tags = new Array(_len), _key = 0; _key < _len; _key++) {
        tags[_key] = arguments[_key];
      }
      this.tags = tags;
      return this;
    }

    /**
     * @param {Object} queryParams
     * @returns {Request}
     */
  }, {
    key: "query",
    value: function query(queryParams) {
      Object.assign(this.queryParams, queryParams);
      return this;
    }
  }, {
    key: "form",
    value: function form(_form) {
      var _this2 = this;
      if (_form) {
        var FormData = Request.FormData;
        if (_form instanceof FormData) {
          this.body = _form;
        } else {
          (function () {
            var formData = new FormData();
            var _loop = function _loop(formKey) {
              if (formKey) {
                (0, _utils.castArray)(_form[formKey]).forEach(function (formValue) {
                  if (formValue && formValue.hasOwnProperty('value') && formValue.hasOwnProperty('options')) {
                    formData.append(formKey, formValue.value, formValue.options);
                  } else {
                    formData.append(formKey, formValue);
                  }
                });
              }
            };
            for (var formKey in _form) {
              _loop(formKey);
            }
            _this2.body = formData;
          })();
        }
      }
      return this;
    }

    /**
     * Should we cache or use cached result
     *
     * @param {Number} ttl Time to live for cached response. 15 seconds by default
     * @returns {Request}
     */
  }, {
    key: "useCache",
    value: function useCache() {
      var ttl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;
      this.cacheTTL = ttl;
      return this;
    }

    /**
     * Reset cache if passed TRUE and tags has been specified before
     *
     * @param {Boolean} reset - flag to reset cache or not
     * @returns {Request}
     */
  }, {
    key: "resetCache",
    value: function resetCache(reset) {
      if (reset && this.tags) {
        _cache.cache.deleteByTags(this.tags);
      }
      return this;
    }

    /**
     * Shortcut for req.set('Content-Type', value)
     *
     * @param {String} contentType
     * @returns {Request}
     */
  }, {
    key: "type",
    value: function type(contentType) {
      this.set(CONTENT_TYPE_HEADER, contentType);
      return this;
    }

    /**
     * Should we unwrap the response and return only body. true by default
     * @param {Boolean} unwrap
     * @returns {Request}
     */
  }, {
    key: "unwrapBody",
    value: function unwrapBody(unwrap) {
      this.unwrap = unwrap;
      return this;
    }

    /**
     * set encoding to response
     * works only for Node js
     *
     * @param {String} encoding
     * @returns {Request}
     */
  }, {
    key: "setEncoding",
    value: function setEncoding(encoding) {
      this.encoding = encoding;
      return this;
    }

    /**
     * A number specifying request timeout in milliseconds.
     * @param {Number} ms
     * @returns {Request}
     */
  }, {
    key: "setTimeout",
    value: function setTimeout(ms) {
      this.timeout = ms;
      return this;
    }

    /**
     * Sends the requst
     *
     * @param {Object} body
     * @returns {Promise}
     */
  }, {
    key: "send",
    value: function send(body) {
      var _this3 = this;
      this.emit(REQUEST_EVENT, this);
      var path = this.path;
      var queryString = qs.stringify(this.queryParams);
      if (queryString) {
        path += '?' + queryString;
      }
      if (this.cacheTTL) {
        var cached = _cache.cache.get(path);
        if (cached !== undefined) {
          return Promise.resolve(cached);
        }
      }
      var type = this.headers[CONTENT_TYPE_HEADER];
      if (!type && (0, _utils.isObject)(body) && !(0, _utils.isFormData)(body)) {
        this.type('application/json');
      }
      if (body) {
        var isJSON = this.headers[CONTENT_TYPE_HEADER] === 'application/json';
        body = isJSON && typeof body !== 'string' ? JSON.stringify(body) : body;
      }
      var unwrapBody = function unwrapBody(res) {
        return _this3.unwrap ? res.body : res;
      };

      /**
       * Caches the response if required
       */
      var cacheResponse = function cacheResponse(res) {
        if (_this3.cacheTTL) {
          _cache.cache.set(path, res, _this3.tags, _this3.cacheTTL);
        }
        return res;
      };

      /**
       * Deletes all relevant to req.cacheTags keys from the cache if this request method is not GET
       */
      var flushCache = function flushCache(res) {
        if (_this3.tags && _this3.method !== 'get') {
          _cache.cache.deleteByTags(_this3.tags);
        }
        return res;
      };
      if (Request.verbose) {
        console.log(this.method.toUpperCase(), decodeURIComponent(path), body, this.headers);
      }
      var request = Request.send(path, this.method.toUpperCase(), this.headers, body, this.encoding, this.timeout).then(parseBody).then(checkStatus).then(unwrapBody).then(cacheResponse).then(flushCache);
      request.then(function (result) {
        _this3.emit(RESPONSE_EVENT, result);
        _this3.emit(DONE_EVENT, null, result);
      })["catch"](function (error) {
        _this3.emit(ERROR_EVENT, error);
        _this3.emit(DONE_EVENT, error);
      });
      return request;
    }

    /**
     * If you are too lazy to use method 'send', don't use it and stay cool :)
     *
     * @param {Function} successHandler
     * @param {Function} errorHandler
     * @returns {Promise}
     */
  }, {
    key: "then",
    value: function then(successHandler, errorHandler) {
      this.promise = this.promise || this.send(this.body);
      return this.promise.then(successHandler, errorHandler);
    }

    /**
     * @param {Function} errorHandler
     * @returns {Promise}
     */
  }, {
    key: "catch",
    value: function _catch(errorHandler) {
      this.promise = this.promise || this.send(this.body);
      return this.promise["catch"](errorHandler);
    }
  }]);
  return Request;
}(_eventEmitter["default"]);
exports.Request = Request;
function parseBody(res) {
  try {
    return _objectSpread(_objectSpread({}, res), {}, {
      body: JSON.parse(res.body)
    });
  } catch (e) {
    return res;
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new _error.ResponseError(response);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clientNode = __webpack_require__(4);
var _clientBrowser = __webpack_require__(9);
var _request = __webpack_require__(2);
Object.defineProperty(_request.Request, 'FormData', {
  get: function get() {
    return typeof FormData !== 'undefined' ? FormData : __webpack_require__(14);
  }
});
_request.Request.XMLHttpRequest = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined;
_request.Request.send = function (path, method, headers, body, encoding, timeout) {
  var sender = typeof _request.Request.XMLHttpRequest !== 'undefined' ? _clientBrowser.sendXmlHttpRequest : _clientNode.sendNodeAPIRequest;
  return sender(path, method, headers, body, encoding, timeout);
};
_request.Request.verbose = false;
_request.Request.methods = ['get', 'post', 'put', 'patch', 'delete'];
_request.Request.methods.forEach(function (method) {
  _request.Request[method] = function (path, body) {
    return new _request.Request(path, method, body);
  };
});
exports = module.exports = _request.Request;
var _default = _request.Request;
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNodeAPIRequest = sendNodeAPIRequest;
var _utils = __webpack_require__(0);
function sendNodeAPIRequest(path, method, headers, body, encoding, timeout) {
  return new Promise(function (resolve, reject) {
    var u = __webpack_require__(6).parse(path);
    var form = (0, _utils.isFormData)(body) && body;
    var https = u.protocol === 'https:';
    var options = {
      host: u.hostname,
      port: u.port || (https ? 443 : 80),
      path: u.pathname + (u.search || ''),
      method: method,
      headers: headers,
      timeout: timeout
    };
    var _send = function _send() {
      var Buffer = __webpack_require__(1).Buffer;
      var httpClient = __webpack_require__(https ? 7 : 8);
      var req = httpClient.request(options, function (res) {
        var strings = [];
        var buffers = [];
        var bufferLength = 0;
        var body = '';
        var status = res.statusCode,
          statusText = res.statusMessage,
          headers = res.headers;
        res.on('data', function (chunk) {
          if (!Buffer.isBuffer(chunk)) {
            strings.push(chunk);
          } else if (chunk.length) {
            bufferLength += chunk.length;
            buffers.push(chunk);
          }
        });
        res.on('end', function () {
          if (bufferLength) {
            body = Buffer.concat(buffers, bufferLength);
            if (encoding != null) {
              body = body.toString(encoding);
            }
          } else if (strings.length) {
            body = strings.join();
          }
          resolve({
            status: status,
            statusText: statusText,
            headers: headers,
            body: body
          });
        });
        res.on('error', reject);
      });
      req.on('error', reject);
      req.on('timeout', function () {
        req.destroy(new Error('Connection aborted due to timeout'));
      });
      if (body) {
        if ((0, _utils.isStream)(body)) {
          body.pipe(req);
          return;
        }
        req.write(body);
      }
      req.end();
    };
    if (form) {
      Object.assign(options.headers, form.getHeaders());
      form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          options.headers['content-length'] = length;
        }
        _send();
      });
    } else {
      if (body && !options.headers['content-length']) {
        var Buffer = __webpack_require__(1).Buffer;
        options.headers['content-length'] = Buffer.byteLength(body);
      }
      _send();
    }
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendXmlHttpRequest = sendXmlHttpRequest;
var _request2 = __webpack_require__(2);
function sendXmlHttpRequest(path, method, headers, body, encoding, timeout) {
  return new Promise(function sendRequest(resolve, reject) {
    var request = new _request2.Request.XMLHttpRequest();
    request.timeout = timeout;
    if (!encoding) {
      request.responseType = 'arraybuffer';
    }
    request.open(method.toUpperCase(), path, true);
    request.onload = function handleLoadEvent() {
      var headers = parseHeaders(request.getAllResponseHeaders());
      var _request = request,
        status = _request.status,
        statusText = _request.statusText;
      var result = {
        status: status,
        statusText: statusText,
        headers: headers
      };
      if (encoding === 'utf8') {
        result.body = request.response || request.responseText;
      } else if (request.response) {
        result.body = new Uint8Array(request.response);
      }
      resolve(result);
      request = null;
    };
    request.onerror = function handleErrorEvent() {
      reject(new Error('Network Error'));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      reject(new Error('Connection aborted due to timeout'));
      request = null;
    };
    Object.keys(headers).forEach(function (key) {
      request.setRequestHeader(key, headers[key]);
    });
    request.send(body);
  });
}
function parseHeaders(headersString) {
  var parsed = {};
  if (!headersString) {
    return parsed;
  }
  headersString.split('\n').forEach(function (line) {
    var i = line.indexOf(':');
    var key = line.substr(0, i).trim();
    var val = line.substr(i + 1).trim();
    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * @typedef {Object} CacheItem
 * @property {*} value
 * @property {Array.<RegExp|String>} tags
 * @property {Number} ttl
 */

/**
 * @param {*} value
 * @param {Array.<RegExp|String>}tags
 * @param {Number} ttl
 * @returns {CacheItem}
 */
var cacheItem = function cacheItem(value, tags, ttl) {
  return {
    value: value,
    tags: tags,
    ttl: ttl
  };
};
var currentTime = function currentTime() {
  return new Date().getTime();
};

/**
 * Returns true if tag A matches tag B :
 *  - if they are non-strictly equal
 *  - if one of them is Regexp matching the opposite
 *
 * @param {String|RegExp} a
 * @param {String|RegExp} b
 * @returns {Boolean}
 */
var tagsMatches = function tagsMatches(a, b) {
  var result = a == b; // eslint-disable-line

  if (!result && a instanceof RegExp) {
    result = a.test(b);
  }
  if (!result && b instanceof RegExp) {
    result = b.test(a);
  }
  return result;
};

/**
 * Returns true if any of A tags matches any of B tags
 *
 * @param {Array.<String|RegExp>} a
 * @param {Array.<String|RegExp>} b
 * @returns {Boolean}
 */
var tagsContainMatches = function tagsContainMatches(a, b) {
  return !!a.find(function (aTag) {
    return b.find(function (bTag) {
      return tagsMatches(aTag, bTag);
    });
  });
};

/**
 * A Cache with TTL and optional tags for the keys
 * Makes it possible to assign multiple tags for a key and delete keys by tags
 * Optionally it starts flushing timer which cleans all outdated keys
 */
var Cache = /*#__PURE__*/function () {
  /**
   * @param {Number?} flushInterval
   */
  function Cache(flushInterval) {
    _classCallCheck(this, Cache);
    this.setFlushInterval(flushInterval);

    /**
     * @type {Map.<String, CacheItem>}
     */
    this.map = new Map();
  }
  _createClass(Cache, [{
    key: "setFlushInterval",
    value: function setFlushInterval(flushInterval) {
      this.flushInterval = flushInterval;
      if (this.flushTimer) {
        clearInterval(this.flushTimer);
        delete this.flushTimer;
      }
    }

    /**
     * @param {String} key
     * @returns {*}
     */
  }, {
    key: "get",
    value: function get(key) {
      var cacheItem = this.map.get(key);
      if (cacheItem) {
        if (cacheItem.ttl > currentTime()) {
          return cacheItem.value;
        } else {
          this.map["delete"](key);
        }
      }
    }

    /**
     * @param {String} key
     * @param {*} value
     * @param {Array.<RegExp|String>=} tags
     * @param {Number=} ttl
     */
  }, {
    key: "set",
    value: function set(key, value, tags, ttl) {
      this.map.set(key, cacheItem(value, tags, currentTime() + ttl));
      if (this.flushInterval && !this.flushTimer) {
        this.flushTimer = setInterval(this.flush.bind(this), this.flushInterval);
        if (this.flushTimer.unref) {
          this.flushTimer.unref();
        }
      }
    }

    /**
     * @param {String} key
     */
  }, {
    key: "delete",
    value: function _delete(key) {
      this.map["delete"](key);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var _iterator = _createForOfIteratorHelper(this.map),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 1),
            key = _step$value[0];
          this["delete"](key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * @param {Array.<String>} tags
     */
  }, {
    key: "deleteByTags",
    value: function deleteByTags(tags) {
      var _iterator2 = _createForOfIteratorHelper(this.map),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];
          if (value.tags && tagsContainMatches(tags, value.tags)) {
            this["delete"](key);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    /**
     * Deletes all outdated keys
     */
  }, {
    key: "flush",
    value: function flush() {
      var now = currentTime();
      var _iterator3 = _createForOfIteratorHelper(this.map),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            key = _step3$value[0],
            value = _step3$value[1];
          if (value.ttl < now) {
            this["delete"](key);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
  return Cache;
}();
var CACHE_FLUSH_INTERVAL = 60000; //60 sec

var cache = new Cache(CACHE_FLUSH_INTERVAL);
exports.cache = cache;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    this.events = {};
  }
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(callback);
      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        this.events = {};
      } else if (this.events[eventName]) {
        if (callback) {
          this.events[eventName] = this.events[eventName].filter(function (c) {
            return c !== callback;
          });
        } else {
          delete this.events[eventName];
        }
      }
      return this;
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.events[eventName]) {
        this.events[eventName].forEach(function (callback) {
          return callback.apply(void 0, args);
        });
      }
    }
  }]);
  return EventEmitter;
}();
exports["default"] = EventEmitter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = void 0;
var _utils = __webpack_require__(0);
/**
 * Produces a URL query string from a given obj by iterating through the object's "own properties".
 * @param {Object} obj
 * @returns {string}
 */
var stringify = function stringify(obj) {
  var tokens = [];
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (value !== undefined) {
      (0, _utils.castArray)(value).forEach(function (value) {
        tokens.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)));
      });
    }
  });
  return tokens.join('&');
};
exports.stringify = stringify;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseError = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ResponseError = /*#__PURE__*/function (_Error) {
  _inherits(ResponseError, _Error);
  var _super = _createSuper(ResponseError);
  function ResponseError(response) {
    var _this;
    _classCallCheck(this, ResponseError);
    _this = _super.call(this);
    var error = parseError(response);
    _this.message = error.message || error;
    _this.code = error.code;
    _this.status = response.status;
    _this.headers = response.headers;
    _this.body = response.body;
    return _this;
  }
  return _createClass(ResponseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.ResponseError = ResponseError;
function parseError(res) {
  if (res.status === 502) {
    return 'No connection with server';
  }
  return res.body || "Status Code ".concat(res.status, " (").concat(res.statusText, ")");
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless-request.js.map

/***/ }),

/***/ "./node_modules/backendless-rt-client/dist/backendless-rt-client.js":
/*!**************************************************************************!*\
  !*** ./node_modules/backendless-rt-client/dist/backendless-rt-client.js ***!
  \**************************************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * ********************************************************************************************************************
 *  Backendless RT Client for JavaScript. Version: 0.2.0
 *
 *  Copyright 2012-2018 BACKENDLESS.COM. All Rights Reserved.
 *
 *  NOTICE: All information contained herein is, and remains the property of Backendless.com and its suppliers,
 *  if any. The intellectual and technical concepts contained herein are proprietary to Backendless.com and its
 *  suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret
 *  or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden
 *  unless prior written permission is obtained from Backendless.com.
 * ********************************************************************************************************************
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_7011__) => {

var superPropBase = __nested_webpack_require_7011__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _get.apply(this, arguments);
}

module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_8985__) => {

var setPrototypeOf = __nested_webpack_require_8985__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_10677__) => {

var _typeof = (__nested_webpack_require_10677__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

var assertThisInitialized = __nested_webpack_require_10677__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_11743__) => {

var _typeof = (__nested_webpack_require_11743__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_26795__) => {

var getPrototypeOf = __nested_webpack_require_26795__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_28402__) => {

// TODO(Babel 8): Remove this file.

const runtime = __nested_webpack_require_28402__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/after/index.js":
/*!*************************************!*\
  !*** ./node_modules/after/index.js ***!
  \*************************************/
/***/ ((module) => {

module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}


/***/ }),

/***/ "./node_modules/arraybuffer.slice/index.js":
/*!*************************************************!*\
  !*** ./node_modules/arraybuffer.slice/index.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};


/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_30986__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_30986__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_30986__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_30986__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_30986__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _constants = __nested_webpack_require_30986__(/*! ./constants */ "./src/constants.js");

var _config = _interopRequireDefault(__nested_webpack_require_30986__(/*! ./config */ "./src/config.js"));

var _subscriptions = _interopRequireDefault(__nested_webpack_require_30986__(/*! ./subscriptions */ "./src/subscriptions.js"));

var _methods = _interopRequireDefault(__nested_webpack_require_30986__(/*! ./methods */ "./src/methods.js"));

var _session = _interopRequireDefault(__nested_webpack_require_30986__(/*! ./session */ "./src/session.js"));

var CONNECTION_MANAGE_EVENTS = [_constants.NativeSocketEvents.CONNECTING, _constants.NativeSocketEvents.CONNECT, _constants.NativeSocketEvents.CONNECT_ERROR, _constants.NativeSocketEvents.DISCONNECT, _constants.NativeSocketEvents.RECONNECT_ATTEMPT];

var RTClient = /*#__PURE__*/function () {
  function RTClient(config) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, RTClient);
    (0, _defineProperty2["default"])(this, "onConnectError", function () {
      if (!_this.subscriptions.hasActivity() && !_this.methods.hasActivity()) {
        _this.disconnect('There are no active subscriptions and methods');

        _this.connectible = true;
      }
    });
    (0, _defineProperty2["default"])(this, "connectOnMethod", function (method) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (_this.connectible) {
          var rtSocketPromise = _this.provideConnection();

          if (_this.connected) {
            rtSocketPromise.then(function (rtSocket) {
              return rtSocket[method].apply(rtSocket, args);
            });
          }
        }
      };
    });
    (0, _defineProperty2["default"])(this, "on", this.connectOnMethod('on'));
    (0, _defineProperty2["default"])(this, "emit", this.connectOnMethod('emit'));
    (0, _defineProperty2["default"])(this, "onSessionDisconnect", function () {
      _this.subscriptions.stop();

      _this.methods.stop();

      delete _this.session;

      _this.provideConnection();
    });
    (0, _defineProperty2["default"])(this, "emitSocketEventListeners", function (event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.socketEvents[event]) {
        _this.socketEvents[event].forEach(function (callback) {
          return callback.apply(void 0, args);
        });
      }
    });
    (0, _defineProperty2["default"])(this, "addConnectingEventListener", function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.CONNECTING, callback);
    });
    (0, _defineProperty2["default"])(this, "removeConnectingEventListener", function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.CONNECTING, callback);
    });
    (0, _defineProperty2["default"])(this, "addConnectEventListener", function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.CONNECT, callback);
    });
    (0, _defineProperty2["default"])(this, "removeConnectEventListener", function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.CONNECT, callback);
    });
    (0, _defineProperty2["default"])(this, "addConnectErrorEventListener", function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.CONNECT_ERROR, callback);
    });
    (0, _defineProperty2["default"])(this, "removeConnectErrorEventListener", function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.CONNECT_ERROR, callback);
    });
    (0, _defineProperty2["default"])(this, "addDisconnectEventListener", function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.DISCONNECT, callback);
    });
    (0, _defineProperty2["default"])(this, "removeDisconnectEventListener", function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.DISCONNECT, callback);
    });
    (0, _defineProperty2["default"])(this, "addReconnectAttemptEventListener", function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.RECONNECT_ATTEMPT, callback);
    });
    (0, _defineProperty2["default"])(this, "removeReconnectAttemptEventListener", function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.RECONNECT_ATTEMPT, callback);
    });
    (0, _defineProperty2["default"])(this, "removeConnectionListeners", function () {
      CONNECTION_MANAGE_EVENTS.forEach(function (event) {
        return _this.removeSocketEventListener(event);
      });
    });
    this.config = new _config["default"](config);
    this.resetSocketEvents();
    var socketContext = {
      onMessage: this.on.bind(this),
      emitMessage: this.emit.bind(this)
    };
    this.subscriptions = new _subscriptions["default"](socketContext);
    this.methods = new _methods["default"](socketContext);
    this.connectible = true;
    this.connected = false;
  }

  (0, _createClass2["default"])(RTClient, [{
    key: "resetSocketEvents",
    value: function resetSocketEvents() {
      this.socketEvents = {};
      this.addConnectErrorEventListener(this.onConnectError);
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config.set(config);

      if (this.session) {
        this.disconnect('Re-config socket connection');
        this.connect();
      }
    }
  }, {
    key: "provideConnection",
    value: function provideConnection() {
      var _this2 = this;

      if (!this.session) {
        this.session = new _session["default"](this.config, this.emitSocketEventListeners, this.onSessionDisconnect);
        this.session.getSocket().then(function () {
          _this2.connected = true;

          _this2.methods.initialize();

          _this2.methods.restore();

          _this2.subscriptions.initialize();

          _this2.subscriptions.restore();
        });
      }

      return this.session.getSocket();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectible = true;
      this.provideConnection();
    }
  }, {
    key: "disconnect",
    value: function disconnect(reason) {
      if (this.session) {
        this.subscriptions.stop();
        this.methods.stop();
        this.session.terminate();
        delete this.session;
        this.emitSocketEventListeners(_constants.NativeSocketEvents.DISCONNECT, reason || 'disconnected by client');
      }

      this.connectible = false;
      this.connected = false;
    }
  }, {
    key: "terminate",
    value: function terminate(reason) {
      this.resetSocketEvents();
      this.subscriptions.reset();
      this.methods.reset();
      this.disconnect(reason || 'Terminated by client');
    }
  }, {
    key: "addSocketEventListener",
    value: function addSocketEventListener(event, callback) {
      this.socketEvents[event] = this.socketEvents[event] || [];
      this.socketEvents[event].push(callback);
      return this;
    }
  }, {
    key: "removeSocketEventListener",
    value: function removeSocketEventListener(event, callback) {
      if (this.socketEvents[event]) {
        this.socketEvents[event] = callback ? this.socketEvents[event].filter(function (cb) {
          return cb !== callback;
        }) : [];

        if (!this.socketEvents[event].length) {
          delete this.socketEvents[event];
        }
      }

      return this;
    }
  }]);
  return RTClient;
}();

exports["default"] = RTClient;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_39655__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_39655__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__nested_webpack_require_39655__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__nested_webpack_require_39655__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_39655__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_39655__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _typeof2 = _interopRequireDefault(__nested_webpack_require_39655__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _backendlessRequest = _interopRequireDefault(__nested_webpack_require_39655__(/*! backendless-request */ "./node_modules/backendless-request/dist/backendless-request.js"));

var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

var isString = function isString(value) {
  return typeof value === 'string';
};

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

var isObject = function isObject(value) {
  return (0, _typeof2["default"])(value) === 'object' && value !== null;
};

var RTConfig = /*#__PURE__*/function () {
  function RTConfig(config) {
    (0, _classCallCheck2["default"])(this, RTConfig);
    this.appId = null;
    this.lookupPath = null;
    this.lookupHeaders = {};
    this.debugMode = false;
    this.connectQuery = {};
    this.socketConfigTransform = null;
    this.socketConfig = null;
    this.set(config);
  }

  (0, _createClass2["default"])(RTConfig, [{
    key: "set",
    value: function set(config) {
      if (!config) {
        return;
      }

      if (!isUndefined(config.appId)) {
        if (!isString(config.appId)) {
          throw new Error('"appId" must be String.');
        }

        this.appId = config.appId;
      }

      if (!isUndefined(config.lookupPath)) {
        if (!isString(config.lookupPath)) {
          throw new Error('"lookupPath" must be String.');
        }

        this.lookupPath = config.lookupPath;
      }

      if (!isUndefined(config.lookupHeaders)) {
        if (!isObject(config.lookupHeaders)) {
          throw new Error('"lookupHeaders" must be Object.');
        }

        this.lookupHeaders = config.lookupHeaders;
      }

      if (!isUndefined(config.debugMode)) {
        this.debugMode = !!config.debugMode;
      }

      if (!isUndefined(config.connectQuery)) {
        if (isFunction(config.connectQuery)) {
          this.getConnectQuery = config.connectQuery;
        } else if (isObject(config.connectQuery)) {
          this.connectQuery = config.connectQuery;
        } else {
          throw new Error('"connectQuery" must be Function or Object.');
        }
      }

      if (!isUndefined(config.socketConfigTransform)) {
        if (isFunction(config.socketConfigTransform)) {
          this.socketConfigTransform = config.socketConfigTransform;
        } else {
          throw new Error('"socketConfigTransform" must be Function.');
        }
      }
    }
  }, {
    key: "getConnectQuery",
    value: function getConnectQuery() {
      return this.connectQuery;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var host, url, path, query, socketConfig;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isString(this.lookupPath)) {
                  _context.next = 2;
                  break;
                }

                throw new Error('lookupPath must be String');

              case 2:
                _context.next = 4;
                return _backendlessRequest["default"].get(this.lookupPath).set(this.lookupHeaders);

              case 4:
                host = _context.sent;
                url = this.appId ? "".concat(host, "/").concat(this.appId) : host;
                path = this.appId ? "/".concat(this.appId) : undefined;
                query = this.getConnectQuery();
                this.socketConfig = {
                  host: host,
                  url: url,
                  options: {
                    path: path,
                    query: query,
                    forceNew: true,
                    autoConnect: false,
                    reconnection: false
                  }
                };

                if (!this.socketConfigTransform) {
                  _context.next = 14;
                  break;
                }

                _context.next = 12;
                return this.socketConfigTransform(this.socketConfig);

              case 12:
                socketConfig = _context.sent;

                if (socketConfig) {
                  this.socketConfig = socketConfig;
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function prepare() {
        return _prepare.apply(this, arguments);
      }

      return prepare;
    }()
  }, {
    key: "getSocketConfig",
    value: function getSocketConfig() {
      return this.socketConfig;
    }
  }]);
  return RTConfig;
}();

exports["default"] = RTConfig;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RTSubscriptionTypes = exports.RTSocketEvents = exports.RTMethodTypes = exports.NativeSocketEvents = void 0;
var NativeSocketEvents = {
  CONNECTING: 'connecting',
  CONNECT: 'connect',
  CONNECT_ERROR: 'connect_error',
  CONNECT_TIMEOUT: 'connect_timeout',
  DISCONNECT: 'disconnect',
  RECONNECT: 'reconnect',
  RECONNECT_ATTEMPT: 'reconnect_attempt',
  RECONNECTING: 'reconnecting',
  RECONNECT_ERROR: 'reconnect_error',
  RECONNECT_FAILED: 'reconnect_failed',
  ERROR: 'error',
  PING: 'ping',
  PONG: 'pong'
};
exports.NativeSocketEvents = NativeSocketEvents;
var RTSocketEvents = {
  SUB_ON: 'SUB_ON',
  SUB_OFF: 'SUB_OFF',
  SUB_RES: 'SUB_RES',
  SUB_READY: 'SUB_READY',
  MET_REQ: 'MET_REQ',
  MET_RES: 'MET_RES'
};
exports.RTSocketEvents = RTSocketEvents;
var RTSubscriptionTypes = {
  OBJECTS_CHANGES: 'OBJECTS_CHANGES',
  RELATIONS_CHANGES: 'RELATIONS_CHANGES',
  PUB_SUB_CONNECT: 'PUB_SUB_CONNECT',
  PUB_SUB_MESSAGES: 'PUB_SUB_MESSAGES',
  PUB_SUB_COMMANDS: 'PUB_SUB_COMMANDS',
  PUB_SUB_USERS: 'PUB_SUB_USERS',
  RSO_CONNECT: 'RSO_CONNECT',
  RSO_CHANGES: 'RSO_CHANGES',
  RSO_CLEARED: 'RSO_CLEARED',
  RSO_COMMANDS: 'RSO_COMMANDS',
  RSO_INVOKE: 'RSO_INVOKE',
  RSO_USERS: 'RSO_USERS',
  //-----------------------------------------//
  //----------- FOR CONSOLE ONLY ------------//
  LOGGING_MESSAGES: 'LOGGING_MESSAGES',
  CONSOLE_MESSAGES: 'CONSOLE_MESSAGES',
  DEVELOPER_MESSAGES: 'DEVELOPER_MESSAGES' //----------- FOR CONSOLE ONLY ------------//
  //-----------------------------------------//

};
exports.RTSubscriptionTypes = RTSubscriptionTypes;
var RTMethodTypes = {
  SET_USER_TOKEN: 'SET_USER_TOKEN',
  RSO_GET: 'RSO_GET',
  RSO_SET: 'RSO_SET',
  RSO_CLEAR: 'RSO_CLEAR',
  RSO_COMMAND: 'RSO_COMMAND',
  RSO_INVOKE: 'RSO_INVOKE',
  PUB_SUB_COMMAND: 'PUB_SUB_COMMAND'
};
exports.RTMethodTypes = RTMethodTypes;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, exports, __nested_webpack_require_47786__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_47786__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.RTScopeConnector = exports.RTListeners = void 0;

var _typeof2 = _interopRequireDefault(__nested_webpack_require_47786__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _backendlessRequest = _interopRequireDefault(__nested_webpack_require_47786__(/*! backendless-request */ "./node_modules/backendless-request/dist/backendless-request.js"));

var _client = _interopRequireDefault(__nested_webpack_require_47786__(/*! ./client */ "./src/client.js"));

var _listeners = _interopRequireDefault(__nested_webpack_require_47786__(/*! ./listeners */ "./src/listeners.js"));

var _scopeConnector = _interopRequireDefault(__nested_webpack_require_47786__(/*! ./scope-connector */ "./src/scope-connector.js"));

var root = (typeof self === "undefined" ? "undefined" : (0, _typeof2["default"])(self)) === 'object' && self.self === self && self || (typeof __nested_webpack_require_47786__.g === "undefined" ? "undefined" : (0, _typeof2["default"])(__nested_webpack_require_47786__.g)) === 'object' && __nested_webpack_require_47786__.g.global === __nested_webpack_require_47786__.g && __nested_webpack_require_47786__.g;
_client["default"].Request = _backendlessRequest["default"];
_client["default"].Listeners = _listeners["default"];
_client["default"].ScopeConnector = _scopeConnector["default"];

if (root) {
  root.BackendlessRTClient = _client["default"];
}

module.exports = _client["default"];
var _default = _client["default"];
exports["default"] = _default;
var RTListeners = _listeners["default"];
exports.RTListeners = RTListeners;
var RTScopeConnector = _scopeConnector["default"];
exports.RTScopeConnector = RTScopeConnector;

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_49816__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_49816__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_49816__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_49816__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_49816__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var RTListeners = /*#__PURE__*/function () {
  function RTListeners() {
    (0, _classCallCheck2["default"])(this, RTListeners);
    this.subscriptions = {};
    this.simpleListeners = {};
  }

  (0, _createClass2["default"])(RTListeners, [{
    key: "addSubscription",
    value: function addSubscription(type, subscriberFn, _ref) {
      var _this = this;

      var callback = _ref.callback,
          onError = _ref.onError,
          onReady = _ref.onReady,
          parser = _ref.parser,
          params = _ref.params;
      this.subscriptions[type] = this.subscriptions[type] || [];
      var subscription = subscriberFn(_objectSpread(_objectSpread({}, params), this.getSubscriptionOptions()), {
        parser: parser,
        onData: callback,
        onError: onError,
        onReady: onReady,
        onStop: function onStop() {
          _this.subscriptions[type] = _this.subscriptions[type].filter(function (s) {
            return s.subscription !== subscription;
          });
        }
      });
      var subscriptionStore = {
        callback: callback,
        params: params,
        subscription: subscription,
        stop: function stop() {
          return subscription.stop();
        }
      };
      this.subscriptions[type].push(subscriptionStore);
      return subscriptionStore;
    }
  }, {
    key: "getSubscriptionOptions",
    value: function getSubscriptionOptions() {
      return {};
    }
  }, {
    key: "stopSubscription",
    value: function stopSubscription(type, _ref2) {
      var callback = _ref2.callback,
          matcher = _ref2.matcher;
      var subscriptionsStack = this.subscriptions[type] = this.subscriptions[type] || [];

      if (matcher) {
        subscriptionsStack.forEach(function (subscriptionStore) {
          if (matcher(subscriptionStore)) {
            subscriptionStore.subscription.stop();
          }
        });
      } else {
        subscriptionsStack.forEach(function (subscriptionStore) {
          if (!callback || subscriptionStore.callback === callback) {
            subscriptionStore.subscription.stop();
          }
        });
      }
    }
  }, {
    key: "addSimpleListener",
    value: function addSimpleListener(type, callback) {
      var listenersStack = this.simpleListeners[type] = this.simpleListeners[type] || [];
      listenersStack.push(callback);
    }
  }, {
    key: "removeSimpleListener",
    value: function removeSimpleListener(type, callback) {
      if (this.simpleListeners[type]) {
        this.simpleListeners[type] = callback ? this.simpleListeners[type].filter(function (cb) {
          return cb !== callback;
        }) : [];
      }
    }
  }, {
    key: "runSimpleListeners",
    value: function runSimpleListeners(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.simpleListeners[type]) {
        this.simpleListeners[type].forEach(function (callback) {
          return callback.apply(void 0, args);
        });
      }
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      var _this2 = this;

      Object.keys(this.subscriptions).forEach(function (listenerType) {
        _this2.subscriptions[listenerType].forEach(function (_ref3) {
          var subscription = _ref3.subscription;
          return subscription.stop();
        });
      });
      this.simpleListeners = {};
    }
  }]);
  return RTListeners;
}();

exports["default"] = RTListeners;

/***/ }),

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_55223__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_55223__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_55223__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_55223__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_55223__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _constants = __nested_webpack_require_55223__(/*! ./constants */ "./src/constants.js");

var _utils = _interopRequireDefault(__nested_webpack_require_55223__(/*! ./utils */ "./src/utils.js"));

var method = function method(type) {
  return function (data) {
    return this.send(type, data);
  };
};

var RTMethods = /*#__PURE__*/function () {
  function RTMethods(_ref) {
    var _this = this;

    var onMessage = _ref.onMessage,
        emitMessage = _ref.emitMessage;
    (0, _classCallCheck2["default"])(this, RTMethods);
    (0, _defineProperty2["default"])(this, "sendRequest", function (invocationId) {
      if (_this.invocations[invocationId]) {
        _this.emitMessage(_constants.RTSocketEvents.MET_REQ, _this.invocations[invocationId].data);
      }
    });
    (0, _defineProperty2["default"])(this, "onResponse", function (_ref2) {
      var id = _ref2.id,
          error = _ref2.error,
          result = _ref2.result;

      if (_this.invocations[id]) {
        var invocation = _this.invocations[id];

        if (error) {
          invocation.reject(error);
        } else {
          invocation.resolve(result);
        }

        delete _this.invocations[id];
      }
    });
    (0, _defineProperty2["default"])(this, "setUserToken", method(_constants.RTMethodTypes.SET_USER_TOKEN).bind(this));
    (0, _defineProperty2["default"])(this, "sendPubSubCommand", method(_constants.RTMethodTypes.PUB_SUB_COMMAND).bind(this));
    (0, _defineProperty2["default"])(this, "getRSO", method(_constants.RTMethodTypes.RSO_GET).bind(this));
    (0, _defineProperty2["default"])(this, "setRSO", method(_constants.RTMethodTypes.RSO_SET).bind(this));
    (0, _defineProperty2["default"])(this, "clearRSO", method(_constants.RTMethodTypes.RSO_CLEAR).bind(this));
    (0, _defineProperty2["default"])(this, "sendRSOCommand", method(_constants.RTMethodTypes.RSO_COMMAND).bind(this));
    (0, _defineProperty2["default"])(this, "invokeRSOMethod", method(_constants.RTMethodTypes.RSO_INVOKE).bind(this));
    this.onMessage = onMessage;
    this.emitMessage = emitMessage;
    this.invocations = {};
  }

  (0, _createClass2["default"])(RTMethods, [{
    key: "initialize",
    value: function initialize() {
      this.onMessage(_constants.RTSocketEvents.MET_RES, this.onResponse);
    }
  }, {
    key: "restore",
    value: function restore() {
      var _this2 = this;

      Object.keys(this.invocations).forEach(function (invocationId) {
        _this2.sendRequest(invocationId);
      });
    }
  }, {
    key: "stop",
    value: function stop() {}
  }, {
    key: "reset",
    value: function reset() {
      this.invocations = {};
    }
  }, {
    key: "hasActivity",
    value: function hasActivity() {
      return !!Object.keys(this.invocations).length;
    }
  }, {
    key: "send",
    value: function send(name, options) {
      var _this3 = this;

      var invocationId = _utils["default"].generateUID();

      this.invocations[invocationId] = {
        data: {
          id: invocationId,
          name: name,
          options: options
        }
      };
      this.sendRequest(invocationId);
      return new Promise(function (resolve, reject) {
        _this3.invocations[invocationId].resolve = resolve;
        _this3.invocations[invocationId].reject = reject;
      });
    } //----------- RSO METHODS ---------//
    //---------------------------------//

  }]);
  return RTMethods;
}();

exports["default"] = RTMethods;

/***/ }),

/***/ "./src/scope-connector.js":
/*!********************************!*\
  !*** ./src/scope-connector.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_59672__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_59672__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _get2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js"));

var _inherits2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__nested_webpack_require_59672__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js"));

var _listeners = _interopRequireDefault(__nested_webpack_require_59672__(/*! ./listeners */ "./src/listeners.js"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ListenerTypes = {
  CONNECT: 'CONNECT',
  ERROR: 'ERROR',
  COMMAND: 'COMMAND',
  USER_STATUS: 'USER_STATUS'
};
var RTScopeConnector = (_dec = connectionRequired(), _dec2 = connectionRequired(), _dec3 = connectionRequired(), _dec4 = connectionRequired(), _dec5 = connectionRequired(true), (_class = (_class2 = /*#__PURE__*/function (_RTListeners) {
  (0, _inherits2["default"])(RTScopeConnector, _RTListeners);

  var _super = _createSuper(RTScopeConnector);

  function RTScopeConnector(options) {
    var _this2;

    (0, _classCallCheck2["default"])(this, RTScopeConnector);
    _this2 = _super.call(this);
    _this2.options = options;
    _this2.waitConnection = [];

    _this2.connect();

    return _this2;
  }
  /**
   * @public method
   *
   * connect to connection scope, if you already connected the method do nothing
   **/


  (0, _createClass2["default"])(RTScopeConnector, [{
    key: "connectSubscriber",
    get:
    /**
     * @static
     * @function
     * @decorator
     * @param {Boolean} [returnPromise] - if passed to TRUE the method returns a Promise
     *                                    and will be resolved when the instance is connected to scope
     *                                    and method return any result
     *
     * decorate instance's methods of the Class
     * puts the method's execution to pool and run it immediately after connected to Connection Scope.
     * if the instance is already connected to the scope the method will be executed immediately
     **/

    /**
     * @abstract getter, must be overridden in an inherited class
     * must returns a function for adding subscriptions to CONNECT to connection scope
     * For ex.: RTProvider.subscriptions.connectToRSO
     **/
    function get() {
      return null;
    }
    /**
     * @abstract getter, must be overridden in an inherited class
     *
     * must returns a function for adding subscriptions to listening COMMANDS in connection scope
     * For ex.: RTProvider.subscriptions.onRSOCommand
     **/

  }, {
    key: "commandSubscriber",
    get: function get() {
      return null;
    }
    /**
     * @abstract getter, must be overridden in an inherited class
     *
     * must returns a function for adding subscriptions to listening changes of USER_STATUS in connection scope
     * For ex.: RTProvider.subscriptions.onRSOUserStatus
     **/

  }, {
    key: "usersSubscriber",
    get: function get() {
      return null;
    }
    /**
     * @abstract getter, must be overridden in an inherited class
     *
     * must returns a function for sending COMMAND into connection scope
     * For ex.: RTProvider.methods.sendRSOCommand
     **/

  }, {
    key: "commandSender",
    get: function get() {
      return null;
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this3 = this;

      if (!this.isConnected()) {
        this.connection = this.connectSubscriber(this.getScopeOptions(), {
          onError: function onError(error) {
            return _this3.onError(error);
          },
          onReady: function onReady() {
            return _this3.onConnect();
          },
          onStop: function onStop() {
            return _this3.onDisconnect();
          }
        });
      }
    }
    /**
     * @public method
     *
     * disconnect from connection scope, if you already disconnect the method do nothing
     **/

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.isConnected()) {
        this.connection.stop();
      }
    }
    /**
     * @public method
     *
     * returns TRUE if you connected to connection scope otherwise returns FALSE
     **/

  }, {
    key: "isConnected",
    value: function isConnected() {
      return !!this.connection && this.connection.isReady();
    }
    /**
     * @private method
     **/

  }, {
    key: "getSubscriptionOptions",
    value: function getSubscriptionOptions() {
      return this.getScopeOptions();
    }
    /**
     * @private method
     **/

  }, {
    key: "getScopeOptions",
    value: function getScopeOptions() {
      return this.options;
    }
    /**
     * @private method
     **/

  }, {
    key: "onConnect",
    value: function onConnect() {
      this.waitConnection.forEach(function (operation) {
        return operation();
      });
      this.waitConnection = [];
      this.runSimpleListeners(ListenerTypes.CONNECT);
    }
    /**
     * @private method
     **/

  }, {
    key: "onError",
    value: function onError(error) {
      this.runSimpleListeners(ListenerTypes.ERROR, error);
    }
    /**
     * @private method
     **/

  }, {
    key: "onDisconnect",
    value: function onDisconnect() {
      this.connection = null;
    }
    /**
     * @public method
     **/

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      this.waitConnection = [];
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(RTScopeConnector.prototype), "removeAllListeners", this).call(this);
      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "addConnectListener",
    value: function addConnectListener(callback, onError) {
      this.addSimpleListener(ListenerTypes.CONNECT, callback);

      if (onError) {
        this.addSimpleListener(ListenerTypes.ERROR, onError);
      }

      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "removeConnectListeners",
    value: function removeConnectListeners(callback, onError) {
      this.removeSimpleListener(ListenerTypes.CONNECT, callback);

      if (onError) {
        this.removeSimpleListener(ListenerTypes.ERROR, onError);
      }

      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "addCommandListener",
    value: function addCommandListener(callback, onError) {
      this.addSubscription(ListenerTypes.COMMAND, this.commandSubscriber, {
        callback: callback,
        onError: onError
      });
      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "removeCommandListeners",
    value: function removeCommandListeners(callback) {
      this.stopSubscription(ListenerTypes.COMMAND, {
        callback: callback
      });
      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "addUserStatusListener",
    value: function addUserStatusListener(callback, onError) {
      this.addSubscription(ListenerTypes.USER_STATUS, this.usersSubscriber, {
        callback: callback,
        onError: onError
      });
      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "removeUserStatusListeners",
    value: function removeUserStatusListeners(callback) {
      this.stopSubscription(ListenerTypes.USER_STATUS, {
        callback: callback
      });
      return this;
    }
    /**
     * @public method
     **/

  }, {
    key: "send",
    value: function send(type, data) {
      return this.commandSender(_objectSpread(_objectSpread({}, this.getScopeOptions()), {}, {
        type: type,
        data: data
      }));
    }
  }]);
  return RTScopeConnector;
}(_listeners["default"]), (0, _defineProperty2["default"])(_class2, "connectionRequired", connectionRequired), _class2), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addCommandListener", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addCommandListener"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "removeCommandListeners", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "removeCommandListeners"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "addUserStatusListener", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "addUserStatusListener"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "removeUserStatusListeners", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "removeUserStatusListeners"), _class.prototype), (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "send", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "send"), _class.prototype)), _class));
exports["default"] = RTScopeConnector;

function connectionRequired(returnPromise) {
  return function (target, key, descriptor) {
    var decorated = descriptor.value;

    descriptor.value = function () {
      var _arguments = arguments,
          _this = this;

      var run = function run() {
        return decorated.apply(_this, _arguments);
      };

      if (this.isConnected()) {
        return run();
      }

      if (returnPromise) {
        return new Promise(function (resolve, reject) {
          return _this.waitConnection.push(function () {
            return run().then(resolve, reject);
          });
        });
      }

      this.waitConnection.push(run);
      return this;
    };

    return descriptor;
  };
}

/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_72280__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_72280__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_72280__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_72280__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _constants = __nested_webpack_require_72280__(/*! ./constants */ "./src/constants.js");

var _socket = _interopRequireDefault(__nested_webpack_require_72280__(/*! ./socket */ "./src/socket.js"));

var INCREASE_RECONNECTION_TIMEOUT_STEP = 10;
var INITIAL_RECONNECTION_TIMEOUT = 200;
var MAX_RECONNECTION_TIMEOUT = 60 * 1000; // a minute

var wait = function wait(milliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, milliseconds);
  });
};

var RTSession = /*#__PURE__*/function () {
  function RTSession(config, dispatch, onDisconnect) {
    (0, _classCallCheck2["default"])(this, RTSession);
    this.config = config;
    this.dispatch = dispatch;
    this.onDisconnect = onDisconnect;
    this.connectAttempt = 0;
    this.socketPromise = this.connect();
  }

  (0, _createClass2["default"])(RTSession, [{
    key: "terminate",
    value: function terminate() {
      if (!this.terminated) {
        this.terminated = true;

        this.dispatch = function () {//if sessions has been terminated don't need to dispatch any events
        };

        this.socketPromise.then(function (rtSocket) {
          if (rtSocket) {
            rtSocket.close();
          }
        });
      }
    }
  }, {
    key: "getSocket",
    value: function getSocket() {
      var _this = this;

      return this.socketPromise.then(function (rtSocket) {
        if (_this.terminated) {
          return new Promise(function () {//return unresolvable promise for preventing errors
            //this connection session has been terminated and a new one will be created if it necessary
          });
        }

        return rtSocket;
      });
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      if (this.terminated) {
        return;
      }

      this.connectAttempt = this.connectAttempt + 1;
      var nextReconnectionTimeout = this.getNextReconnectionTimeout();
      this.onConnecting();

      if (this.connectAttempt > 1) {
        this.onReconnectAttempt(this.connectAttempt - 1, nextReconnectionTimeout);
      }

      return _socket["default"].connect(this.config, this.onSocketDisconnect.bind(this)).then(function (rtSocket) {
        _this2.connectAttempt = 0;

        _this2.onConnect();

        return rtSocket;
      })["catch"](function (error) {
        _this2.onConnectError(error);

        if (!_this2.terminated) {
          // wait for 400|800|1600|...|MAX_RECONNECTION_TIMEOUT milliseconds
          return wait(nextReconnectionTimeout).then(function () {
            return _this2.connect();
          });
        }
      });
    }
  }, {
    key: "getNextReconnectionTimeout",
    value: function getNextReconnectionTimeout() {
      var factor = Math.ceil(this.connectAttempt / INCREASE_RECONNECTION_TIMEOUT_STEP);
      var timeout = INITIAL_RECONNECTION_TIMEOUT * Math.pow(2, factor);
      return Math.min(timeout, MAX_RECONNECTION_TIMEOUT);
    }
  }, {
    key: "onSocketDisconnect",
    value: function onSocketDisconnect(reason) {
      this.dispatch(_constants.NativeSocketEvents.DISCONNECT, reason);

      if (!this.terminated) {
        this.terminate();
        this.onDisconnect();
      }
    }
  }, {
    key: "onConnecting",
    value: function onConnecting() {
      this.dispatch(_constants.NativeSocketEvents.CONNECTING);
    }
  }, {
    key: "onConnect",
    value: function onConnect() {
      this.dispatch(_constants.NativeSocketEvents.CONNECT);
    }
  }, {
    key: "onConnectError",
    value: function onConnectError(error) {
      this.dispatch(_constants.NativeSocketEvents.CONNECT_ERROR, error && error.message || error);
    }
  }, {
    key: "onReconnectAttempt",
    value: function onReconnectAttempt(attempt, timeout) {
      this.dispatch(_constants.NativeSocketEvents.RECONNECT_ATTEMPT, attempt, timeout);
    }
  }]);
  return RTSession;
}();

exports["default"] = RTSession;

/***/ }),

/***/ "./src/socket-parser.js":
/*!******************************!*\
  !*** ./src/socket-parser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_77009__) => {

"use strict";


/* eslint-disable */

/**
 * Since JS Clients don't use binary data through sockets
 * we do not need to use socket.io-parser module inside the socket.io-client
 *
 * The custom SocketIO Parser is based on both modules:
 *  - socket.io-json-parser
 *  - socket.io-parser
 */
var Emitter = __nested_webpack_require_77009__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

exports.protocol = 4;
exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
exports.CONNECT = 0;
exports.DISCONNECT = 1;
exports.EVENT = 2;
exports.ACK = 3;
exports.ERROR = 4;
exports.BINARY_EVENT = 5;
exports.BINARY_ACK = 6;
exports.Encoder = Encoder;
exports.Decoder = Decoder;

function Encoder() {}
/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */


Encoder.prototype.encode = function (obj, callback) {
  callback([encodeAsString(obj)]);
};
/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */


function encodeAsString(obj) {
  // first is type
  var str = '' + obj.type; // attachments if we have them

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  } // if we have a namespace other than `/`
  // we append it followed by a comma `,`


  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  } // immediately followed by the id


  if (null != obj.id) {
    str += obj.id;
  } // json data


  if (null != obj.data) {
    str += JSON.stringify(obj.data);
  }

  return str;
}

function Decoder() {}

Emitter(Decoder.prototype);
/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  if (typeof obj === 'string') {
    this.emit('decoded', decodeString(obj));
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};
/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */


function decodeString(str) {
  var i = 0; // look up type

  var p = {
    type: Number(str.charAt(0))
  };
  if (null == exports.types[p.type]) return error(); // look up attachments if type binary

  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';

    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }

    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }

    p.attachments = Number(buf);
  } // look up namespace (if any)


  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';

    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  } // look up id


  var next = str.charAt(i + 1);

  if ('' !== next && Number(next) == next) {
    p.id = '';

    while (++i) {
      var c = str.charAt(i);

      if (null == c || Number(c) != c) {
        --i;
        break;
      }

      p.id += str.charAt(i);
      if (i === str.length) break;
    }

    p.id = Number(p.id);
  } // look up json data


  if (str.charAt(++i)) {
    p = tryParse(p, str.substr(i));
  }

  return p;
}

function tryParse(p, str) {
  try {
    p.data = JSON.parse(str);
  } catch (e) {
    return error();
  }

  return p;
}
/**
 * Deallocates a parser's resources
 *
 * @api public
 */


Decoder.prototype.destroy = function () {};

function error() {
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

/***/ }),

/***/ "./src/socket.js":
/*!***********************!*\
  !*** ./src/socket.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_81063__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_81063__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_81063__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_81063__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _constants = __nested_webpack_require_81063__(/*! ./constants */ "./src/constants.js");

var RTSocket = /*#__PURE__*/function () {
  function RTSocket(config, host) {
    (0, _classCallCheck2["default"])(this, RTSocket);

    var io = __nested_webpack_require_81063__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

    this.config = config;
    this.events = {};

    var _config$getSocketConf = config.getSocketConfig(),
        url = _config$getSocketConf.url,
        options = _config$getSocketConf.options;

    this.ioSocket = io(url, options);
  }

  (0, _createClass2["default"])(RTSocket, [{
    key: "connect",
    value: function connect() {
      this.ioSocket.connect();
    }
  }, {
    key: "close",
    value: function close() {
      this.log('log', 'close socket');
      this.events = {};
      this.ioSocket.off();
      this.ioSocket.close();
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      var _this = this;

      if (!this.events[event]) {
        this.ioSocket.on(event, function (data) {
          return _this.onEvent(event, data);
        });
      }

      this.events[event] = this.events[event] || [];
      this.events[event].push(callback);
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      this.events[event] = callback ? this.events[event].filter(function (f) {
        return f !== callback;
      }) : [];

      if (!this.events[event].length) {
        delete this.events[event];
      }

      if (!this.events[event]) {
        this.ioSocket.off(event);
      }
    }
  }, {
    key: "onEvent",
    value: function onEvent(event, data) {
      this.logMessage('FROM SERVER', event, data);

      if (this.events[event]) {
        this.events[event].forEach(function (callback) {
          return callback(data);
        });
      }
    }
  }, {
    key: "emit",
    value: function emit(event, data) {
      this.logMessage('TO SERVER', event, data);
      this.ioSocket.emit(event, data);
    }
  }, {
    key: "log",
    value: function log(type) {
      if (this.config.debugMode) {
        var _console;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // eslint-disable-next-line
        (_console = console)[type].apply(_console, ['[RT Client]:'].concat(args));
      }
    }
  }, {
    key: "logMessage",
    value: function logMessage(type, event, data) {
      this.log('log', "[".concat(type, "] - [event: ").concat(event, "] - arguments: ").concat(JSON.stringify(data), " "));
    }
  }], [{
    key: "connect",
    value: function connect(config, onDisconnect) {
      return Promise.resolve().then(function () {
        return config.prepare();
      }).then(function () {
        return new Promise(function (resolve, reject) {
          var rtSocket = new RTSocket(config);
          rtSocket.on(_constants.NativeSocketEvents.CONNECT, onConnect);
          rtSocket.on(_constants.NativeSocketEvents.CONNECT_ERROR, onError);
          rtSocket.on(_constants.NativeSocketEvents.CONNECT_TIMEOUT, onError);
          rtSocket.on(_constants.NativeSocketEvents.ERROR, function (error) {
            rtSocket.log('error', 'received ERROR event while connecting', error);
            closeAndReject(error);
          });
          rtSocket.connect();

          function onConnect() {
            rtSocket.log('log', 'socket connected');
            resolve(rtSocket);
          }

          function onError(error) {
            rtSocket.log('error', 'received one of [CONNECT_ERROR,CONNECT_TIMEOUT] socket event while connecting', error);
            closeAndReject(error);
          }

          function closeAndReject(error) {
            rtSocket.log('log', 'close and reject socket with error:', error);
            rtSocket.close();
            reject(error);
          }
        });
      }).then(function (rtSocket) {
        rtSocket.on(_constants.NativeSocketEvents.DISCONNECT, onDisconnect);
        rtSocket.on(_constants.NativeSocketEvents.ERROR, onDisconnect);
        return rtSocket;
      });
    }
  }]);
  return RTSocket;
}();

exports["default"] = RTSocket;

/***/ }),

/***/ "./src/subscriptions.js":
/*!******************************!*\
  !*** ./src/subscriptions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_86125__) => {

"use strict";


var _interopRequireDefault = __nested_webpack_require_86125__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__nested_webpack_require_86125__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__nested_webpack_require_86125__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__nested_webpack_require_86125__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _constants = __nested_webpack_require_86125__(/*! ./constants */ "./src/constants.js");

var _utils = _interopRequireDefault(__nested_webpack_require_86125__(/*! ./utils */ "./src/utils.js"));

var subscription = function subscription(type) {
  return function (options, callbacks) {
    return this.subscribe(type, options, callbacks);
  };
};

var RTSubscriptions = /*#__PURE__*/function () {
  function RTSubscriptions(_ref) {
    var onMessage = _ref.onMessage,
        emitMessage = _ref.emitMessage;
    (0, _classCallCheck2["default"])(this, RTSubscriptions);
    (0, _defineProperty2["default"])(this, "onObjectsChanges", subscription(_constants.RTSubscriptionTypes.OBJECTS_CHANGES).bind(this));
    (0, _defineProperty2["default"])(this, "onRelationsChanges", subscription(_constants.RTSubscriptionTypes.RELATIONS_CHANGES).bind(this));
    (0, _defineProperty2["default"])(this, "connectToPubSub", subscription(_constants.RTSubscriptionTypes.PUB_SUB_CONNECT).bind(this));
    (0, _defineProperty2["default"])(this, "onPubSubMessage", subscription(_constants.RTSubscriptionTypes.PUB_SUB_MESSAGES).bind(this));
    (0, _defineProperty2["default"])(this, "onPubSubCommand", subscription(_constants.RTSubscriptionTypes.PUB_SUB_COMMANDS).bind(this));
    (0, _defineProperty2["default"])(this, "onPubSubUserStatus", subscription(_constants.RTSubscriptionTypes.PUB_SUB_USERS).bind(this));
    (0, _defineProperty2["default"])(this, "connectToRSO", subscription(_constants.RTSubscriptionTypes.RSO_CONNECT).bind(this));
    (0, _defineProperty2["default"])(this, "onRSOChanges", subscription(_constants.RTSubscriptionTypes.RSO_CHANGES).bind(this));
    (0, _defineProperty2["default"])(this, "onRSOClear", subscription(_constants.RTSubscriptionTypes.RSO_CLEARED).bind(this));
    (0, _defineProperty2["default"])(this, "onRSOCommand", subscription(_constants.RTSubscriptionTypes.RSO_COMMANDS).bind(this));
    (0, _defineProperty2["default"])(this, "onRSOInvoke", subscription(_constants.RTSubscriptionTypes.RSO_INVOKE).bind(this));
    (0, _defineProperty2["default"])(this, "onRSOUserStatus", subscription(_constants.RTSubscriptionTypes.RSO_USERS).bind(this));
    (0, _defineProperty2["default"])(this, "onLoggingMessages", subscription(_constants.RTSubscriptionTypes.LOGGING_MESSAGES).bind(this));
    (0, _defineProperty2["default"])(this, "onConsoleMessages", subscription(_constants.RTSubscriptionTypes.CONSOLE_MESSAGES).bind(this));
    (0, _defineProperty2["default"])(this, "onDeveloperMessage", subscription(_constants.RTSubscriptionTypes.DEVELOPER_MESSAGES).bind(this));
    this.onMessage = onMessage;
    this.emitMessage = emitMessage;
    this.subscriptions = {};
  }

  (0, _createClass2["default"])(RTSubscriptions, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.onMessage(_constants.RTSocketEvents.SUB_READY, function (data) {
        return _this.onSubscriptionReady(data);
      });
      this.onMessage(_constants.RTSocketEvents.SUB_RES, function (data) {
        return _this.onSubscriptionResponse(data);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this2 = this;

      Object.keys(this.subscriptions).forEach(function (subscriptionId) {
        _this2.subscriptions[subscriptionId].ready = false;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;

      Object.keys(this.subscriptions).forEach(function (subscriptionId) {
        return _this3.stopSubscription(subscriptionId);
      });
    }
  }, {
    key: "restore",
    value: function restore() {
      var _this4 = this;

      Object.keys(this.subscriptions).forEach(function (subscriptionId) {
        _this4.startSubscription(subscriptionId);
      });
    }
  }, {
    key: "hasActivity",
    value: function hasActivity() {
      return !!Object.keys(this.subscriptions).length;
    }
  }, {
    key: "subscribe",
    value: function subscribe(name, options, _ref2) {
      var _this5 = this;

      var parser = _ref2.parser,
          onData = _ref2.onData,
          onError = _ref2.onError,
          onStop = _ref2.onStop,
          onReady = _ref2.onReady;

      var subscriptionId = _utils["default"].generateUID();

      this.subscriptions[subscriptionId] = {
        data: {
          id: subscriptionId,
          name: name,
          options: options
        },
        ready: false,
        parser: parser,
        onData: onData,
        onError: onError,
        onStop: onStop,
        onReady: onReady
      };
      this.startSubscription(subscriptionId);
      return {
        isReady: function isReady() {
          return !!_this5.subscriptions[subscriptionId] && _this5.subscriptions[subscriptionId].ready;
        },
        stop: function stop() {
          if (_this5.subscriptions[subscriptionId]) {
            _this5.offSubscription(subscriptionId);
          }
        }
      };
    }
  }, {
    key: "startSubscription",
    value: function startSubscription(subscriptionId) {
      var subscription = this.subscriptions[subscriptionId];
      this.emitMessage(_constants.RTSocketEvents.SUB_ON, subscription.data);
    }
  }, {
    key: "stopSubscription",
    value: function stopSubscription(subscriptionId) {
      var subscription = this.subscriptions[subscriptionId];

      if (subscription) {
        if (subscription.onStop) {
          subscription.onStop();
        }

        delete this.subscriptions[subscriptionId];
      }
    }
  }, {
    key: "offSubscription",
    value: function offSubscription(subscriptionId) {
      var subscription = this.subscriptions[subscriptionId];

      if (subscription) {
        this.emitMessage(_constants.RTSocketEvents.SUB_OFF, {
          id: subscriptionId
        });
        this.stopSubscription(subscriptionId);
      }
    }
  }, {
    key: "onSubscriptionReady",
    value: function onSubscriptionReady(_ref3) {
      var id = _ref3.id;
      var subscription = this.subscriptions[id];

      if (subscription && !subscription.ready) {
        subscription.ready = true;

        if (subscription.onReady) {
          subscription.onReady();
        }
      }
    }
  }, {
    key: "onSubscriptionResponse",
    value: function onSubscriptionResponse(_ref4) {
      var id = _ref4.id,
          data = _ref4.data,
          error = _ref4.error;
      var subscription = this.subscriptions[id];

      if (subscription) {
        if (error) {
          if (subscription.onError) {
            subscription.onError(error);
          }

          this.stopSubscription(id);
        } else {
          if (!subscription.ready) {
            subscription.ready = true;

            if (subscription.onReady) {
              subscription.onReady();
            }
          }

          if (subscription.onData) {
            if (typeof subscription.parser === 'function') {
              data = subscription.parser(data);
            }

            subscription.onData(data);
          }
        }
      }
    }
    /******************************************************************************* **/

    /******************************************************************************* **/

    /** COMMON SUBSCRIPTIONS ******************************************************** **/

    /***************************************** **/

    /***** DATA SUBSCRIPTIONS **************** **/

    /** */

    /***** CONSOLE SUBSCRIPTIONS ****** **/

    /***************************************** **/

    /** CONSOLE's SUBSCRIPTIONS **************************************************** **/

    /******************************************************************************* **/

    /******************************************************************************* **/

  }]);
  return RTSubscriptions;
}();

exports["default"] = RTSubscriptions;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var Utils = {
  generateUID: function generateUID() {
    //TODO: find a better solution for generate UID
    var hash = '';

    for (var i = 0; i < 8; i++) {
      hash += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }

    return hash + Date.now();
  }
};
var _default = Utils;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/backendless-request/dist/backendless-request.js":
/*!**********************************************************************!*\
  !*** ./node_modules/backendless-request/dist/backendless-request.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(true)
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_96401__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_96401__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_96401__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_96401__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_96401__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_96401__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_96401__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_96401__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_96401__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_96401__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_96401__(__nested_webpack_require_96401__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_98678__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStream = exports.isObject = exports.isFormData = exports.castArray = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Casts `value` as an array if it's not one.
 * Equvivalent to lodash/castArray
 */
var castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};
exports.castArray = castArray;
var isObject = function isObject(value) {
  return null != value && _typeof(value) === 'object';
};
exports.isObject = isObject;
var isFormData = function isFormData(value) {
  return value && value.constructor && value.constructor.toString().trim().indexOf('function FormData') === 0;
};
exports.isFormData = isFormData;
var isStream = function isStream(value) {
  var stream = __nested_webpack_require_98678__(5);
  return value instanceof stream.Stream;
};
exports.isStream = isStream;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_100215__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = void 0;
var _cache = __nested_webpack_require_100215__(10);
var _eventEmitter = _interopRequireDefault(__nested_webpack_require_100215__(11));
var qs = _interopRequireWildcard(__nested_webpack_require_100215__(12));
var _utils = __nested_webpack_require_100215__(0);
var _error = __nested_webpack_require_100215__(13);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var CONTENT_TYPE_HEADER = 'Content-Type';
var REQUEST_EVENT = 'request';
var RESPONSE_EVENT = 'response';
var ERROR_EVENT = 'error';
var DONE_EVENT = 'done';
var Request = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Request, _EventEmitter);
  var _super = _createSuper(Request);
  function Request(path, method, body) {
    var _this;
    _classCallCheck(this, Request);
    _this = _super.call(this);
    _this.method = method;
    _this.path = path;
    _this.body = body;
    _this.tags = undefined;
    _this.unwrap = true;
    _this.cacheTTL = 0;
    _this.headers = {};
    _this.queryParams = {};
    _this.encoding = 'utf8';
    _this.timeout = 0;
    return _this;
  }

  /**
   * Sets a header
   *
   * @param {String|Object} key or map of headers
   * @param {String} [value]
   * @returns {Request}
   */
  _createClass(Request, [{
    key: "set",
    value: function set(key, value) {
      if ((0, _utils.isObject)(key)) {
        for (var headerName in key) {
          this.set(headerName, key[headerName]);
        }
      } else if (typeof value !== 'undefined') {
        this.headers[key] = value;
      }
      return this;
    }

    /**
     * Which kind of tags this request affects.
     * Used for cache validation.
     * Non GET requests with defined tags, will clean all related to these tags caches
     *
     * @param {Array.<String>} tags
     * @returns {Request}
     */
  }, {
    key: "cacheTags",
    value: function cacheTags() {
      for (var _len = arguments.length, tags = new Array(_len), _key = 0; _key < _len; _key++) {
        tags[_key] = arguments[_key];
      }
      this.tags = tags;
      return this;
    }

    /**
     * @param {Object} queryParams
     * @returns {Request}
     */
  }, {
    key: "query",
    value: function query(queryParams) {
      Object.assign(this.queryParams, queryParams);
      return this;
    }
  }, {
    key: "form",
    value: function form(_form) {
      var _this2 = this;
      if (_form) {
        var FormData = Request.FormData;
        if (_form instanceof FormData) {
          this.body = _form;
        } else {
          (function () {
            var formData = new FormData();
            var _loop = function _loop(formKey) {
              if (formKey) {
                (0, _utils.castArray)(_form[formKey]).forEach(function (formValue) {
                  if (formValue && formValue.hasOwnProperty('value') && formValue.hasOwnProperty('options')) {
                    formData.append(formKey, formValue.value, formValue.options);
                  } else {
                    formData.append(formKey, formValue);
                  }
                });
              }
            };
            for (var formKey in _form) {
              _loop(formKey);
            }
            _this2.body = formData;
          })();
        }
      }
      return this;
    }

    /**
     * Should we cache or use cached result
     *
     * @param {Number} ttl Time to live for cached response. 15 seconds by default
     * @returns {Request}
     */
  }, {
    key: "useCache",
    value: function useCache() {
      var ttl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;
      this.cacheTTL = ttl;
      return this;
    }

    /**
     * Reset cache if passed TRUE and tags has been specified before
     *
     * @param {Boolean} reset - flag to reset cache or not
     * @returns {Request}
     */
  }, {
    key: "resetCache",
    value: function resetCache(reset) {
      if (reset && this.tags) {
        _cache.cache.deleteByTags(this.tags);
      }
      return this;
    }

    /**
     * Shortcut for req.set('Content-Type', value)
     *
     * @param {String} contentType
     * @returns {Request}
     */
  }, {
    key: "type",
    value: function type(contentType) {
      this.set(CONTENT_TYPE_HEADER, contentType);
      return this;
    }

    /**
     * Should we unwrap the response and return only body. true by default
     * @param {Boolean} unwrap
     * @returns {Request}
     */
  }, {
    key: "unwrapBody",
    value: function unwrapBody(unwrap) {
      this.unwrap = unwrap;
      return this;
    }

    /**
     * set encoding to response
     * works only for Node js
     *
     * @param {String} encoding
     * @returns {Request}
     */
  }, {
    key: "setEncoding",
    value: function setEncoding(encoding) {
      this.encoding = encoding;
      return this;
    }

    /**
     * A number specifying request timeout in milliseconds.
     * @param {Number} ms
     * @returns {Request}
     */
  }, {
    key: "setTimeout",
    value: function setTimeout(ms) {
      this.timeout = ms;
      return this;
    }

    /**
     * Sends the requst
     *
     * @param {Object} body
     * @returns {Promise}
     */
  }, {
    key: "send",
    value: function send(body) {
      var _this3 = this;
      this.emit(REQUEST_EVENT, this);
      var path = this.path;
      var queryString = qs.stringify(this.queryParams);
      if (queryString) {
        path += '?' + queryString;
      }
      if (this.cacheTTL) {
        var cached = _cache.cache.get(path);
        if (cached !== undefined) {
          return Promise.resolve(cached);
        }
      }
      var type = this.headers[CONTENT_TYPE_HEADER];
      if (!type && (0, _utils.isObject)(body) && !(0, _utils.isFormData)(body)) {
        this.type('application/json');
      }
      if (body) {
        var isJSON = this.headers[CONTENT_TYPE_HEADER] === 'application/json';
        body = isJSON && typeof body !== 'string' ? JSON.stringify(body) : body;
      }
      var unwrapBody = function unwrapBody(res) {
        return _this3.unwrap ? res.body : res;
      };

      /**
       * Caches the response if required
       */
      var cacheResponse = function cacheResponse(res) {
        if (_this3.cacheTTL) {
          _cache.cache.set(path, res, _this3.tags, _this3.cacheTTL);
        }
        return res;
      };

      /**
       * Deletes all relevant to req.cacheTags keys from the cache if this request method is not GET
       */
      var flushCache = function flushCache(res) {
        if (_this3.tags && _this3.method !== 'get') {
          _cache.cache.deleteByTags(_this3.tags);
        }
        return res;
      };
      if (Request.verbose) {
        console.log(this.method.toUpperCase(), decodeURIComponent(path), body, this.headers);
      }
      var request = Request.send(path, this.method.toUpperCase(), this.headers, body, this.encoding, this.timeout).then(parseBody).then(checkStatus).then(unwrapBody).then(cacheResponse).then(flushCache);
      request.then(function (result) {
        _this3.emit(RESPONSE_EVENT, result);
        _this3.emit(DONE_EVENT, null, result);
      })["catch"](function (error) {
        _this3.emit(ERROR_EVENT, error);
        _this3.emit(DONE_EVENT, error);
      });
      return request;
    }

    /**
     * If you are too lazy to use method 'send', don't use it and stay cool :)
     *
     * @param {Function} successHandler
     * @param {Function} errorHandler
     * @returns {Promise}
     */
  }, {
    key: "then",
    value: function then(successHandler, errorHandler) {
      this.promise = this.promise || this.send(this.body);
      return this.promise.then(successHandler, errorHandler);
    }

    /**
     * @param {Function} errorHandler
     * @returns {Promise}
     */
  }, {
    key: "catch",
    value: function _catch(errorHandler) {
      this.promise = this.promise || this.send(this.body);
      return this.promise["catch"](errorHandler);
    }
  }]);
  return Request;
}(_eventEmitter["default"]);
exports.Request = Request;
function parseBody(res) {
  try {
    return _objectSpread(_objectSpread({}, res), {}, {
      body: JSON.parse(res.body)
    });
  } catch (e) {
    return res;
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new _error.ResponseError(response);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_114339__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clientNode = __nested_webpack_require_114339__(4);
var _clientBrowser = __nested_webpack_require_114339__(9);
var _request = __nested_webpack_require_114339__(2);
Object.defineProperty(_request.Request, 'FormData', {
  get: function get() {
    return typeof FormData !== 'undefined' ? FormData : __nested_webpack_require_114339__(14);
  }
});
_request.Request.XMLHttpRequest = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined;
_request.Request.send = function (path, method, headers, body, encoding, timeout) {
  var sender = typeof _request.Request.XMLHttpRequest !== 'undefined' ? _clientBrowser.sendXmlHttpRequest : _clientNode.sendNodeAPIRequest;
  return sender(path, method, headers, body, encoding, timeout);
};
_request.Request.verbose = false;
_request.Request.methods = ['get', 'post', 'put', 'patch', 'delete'];
_request.Request.methods.forEach(function (method) {
  _request.Request[method] = function (path, body) {
    return new _request.Request(path, method, body);
  };
});
exports = module.exports = _request.Request;
var _default = _request.Request;
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_115593__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNodeAPIRequest = sendNodeAPIRequest;
var _utils = __nested_webpack_require_115593__(0);
function sendNodeAPIRequest(path, method, headers, body, encoding, timeout) {
  return new Promise(function (resolve, reject) {
    var u = __nested_webpack_require_115593__(6).parse(path);
    var form = (0, _utils.isFormData)(body) && body;
    var https = u.protocol === 'https:';
    var options = {
      host: u.hostname,
      port: u.port || (https ? 443 : 80),
      path: u.pathname + (u.search || ''),
      method: method,
      headers: headers,
      timeout: timeout
    };
    var _send = function _send() {
      var Buffer = __nested_webpack_require_115593__(1).Buffer;
      var httpClient = __nested_webpack_require_115593__(https ? 7 : 8);
      var req = httpClient.request(options, function (res) {
        var strings = [];
        var buffers = [];
        var bufferLength = 0;
        var body = '';
        var status = res.statusCode,
          statusText = res.statusMessage,
          headers = res.headers;
        res.on('data', function (chunk) {
          if (!Buffer.isBuffer(chunk)) {
            strings.push(chunk);
          } else if (chunk.length) {
            bufferLength += chunk.length;
            buffers.push(chunk);
          }
        });
        res.on('end', function () {
          if (bufferLength) {
            body = Buffer.concat(buffers, bufferLength);
            if (encoding != null) {
              body = body.toString(encoding);
            }
          } else if (strings.length) {
            body = strings.join();
          }
          resolve({
            status: status,
            statusText: statusText,
            headers: headers,
            body: body
          });
        });
        res.on('error', reject);
      });
      req.on('error', reject);
      req.on('timeout', function () {
        req.destroy(new Error('Connection aborted due to timeout'));
      });
      if (body) {
        if ((0, _utils.isStream)(body)) {
          body.pipe(req);
          return;
        }
        req.write(body);
      }
      req.end();
    };
    if (form) {
      Object.assign(options.headers, form.getHeaders());
      form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          options.headers['content-length'] = length;
        }
        _send();
      });
    } else {
      if (body && !options.headers['content-length']) {
        var Buffer = __nested_webpack_require_115593__(1).Buffer;
        options.headers['content-length'] = Buffer.byteLength(body);
      }
      _send();
    }
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_119346__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendXmlHttpRequest = sendXmlHttpRequest;
var _request2 = __nested_webpack_require_119346__(2);
function sendXmlHttpRequest(path, method, headers, body, encoding, timeout) {
  return new Promise(function sendRequest(resolve, reject) {
    var request = new _request2.Request.XMLHttpRequest();
    request.timeout = timeout;
    if (!encoding) {
      request.responseType = 'arraybuffer';
    }
    request.open(method.toUpperCase(), path, true);
    request.onload = function handleLoadEvent() {
      var headers = parseHeaders(request.getAllResponseHeaders());
      var _request = request,
        status = _request.status,
        statusText = _request.statusText;
      var result = {
        status: status,
        statusText: statusText,
        headers: headers
      };
      if (encoding === 'utf8') {
        result.body = request.response || request.responseText;
      } else if (request.response) {
        result.body = new Uint8Array(request.response);
      }
      resolve(result);
      request = null;
    };
    request.onerror = function handleErrorEvent() {
      reject(new Error('Network Error'));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      reject(new Error('Connection aborted due to timeout'));
      request = null;
    };
    Object.keys(headers).forEach(function (key) {
      request.setRequestHeader(key, headers[key]);
    });
    request.send(body);
  });
}
function parseHeaders(headersString) {
  var parsed = {};
  if (!headersString) {
    return parsed;
  }
  headersString.split('\n').forEach(function (line) {
    var i = line.indexOf(':');
    var key = line.substr(0, i).trim();
    var val = line.substr(i + 1).trim();
    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * @typedef {Object} CacheItem
 * @property {*} value
 * @property {Array.<RegExp|String>} tags
 * @property {Number} ttl
 */

/**
 * @param {*} value
 * @param {Array.<RegExp|String>}tags
 * @param {Number} ttl
 * @returns {CacheItem}
 */
var cacheItem = function cacheItem(value, tags, ttl) {
  return {
    value: value,
    tags: tags,
    ttl: ttl
  };
};
var currentTime = function currentTime() {
  return new Date().getTime();
};

/**
 * Returns true if tag A matches tag B :
 *  - if they are non-strictly equal
 *  - if one of them is Regexp matching the opposite
 *
 * @param {String|RegExp} a
 * @param {String|RegExp} b
 * @returns {Boolean}
 */
var tagsMatches = function tagsMatches(a, b) {
  var result = a == b; // eslint-disable-line

  if (!result && a instanceof RegExp) {
    result = a.test(b);
  }
  if (!result && b instanceof RegExp) {
    result = b.test(a);
  }
  return result;
};

/**
 * Returns true if any of A tags matches any of B tags
 *
 * @param {Array.<String|RegExp>} a
 * @param {Array.<String|RegExp>} b
 * @returns {Boolean}
 */
var tagsContainMatches = function tagsContainMatches(a, b) {
  return !!a.find(function (aTag) {
    return b.find(function (bTag) {
      return tagsMatches(aTag, bTag);
    });
  });
};

/**
 * A Cache with TTL and optional tags for the keys
 * Makes it possible to assign multiple tags for a key and delete keys by tags
 * Optionally it starts flushing timer which cleans all outdated keys
 */
var Cache = /*#__PURE__*/function () {
  /**
   * @param {Number?} flushInterval
   */
  function Cache(flushInterval) {
    _classCallCheck(this, Cache);
    this.setFlushInterval(flushInterval);

    /**
     * @type {Map.<String, CacheItem>}
     */
    this.map = new Map();
  }
  _createClass(Cache, [{
    key: "setFlushInterval",
    value: function setFlushInterval(flushInterval) {
      this.flushInterval = flushInterval;
      if (this.flushTimer) {
        clearInterval(this.flushTimer);
        delete this.flushTimer;
      }
    }

    /**
     * @param {String} key
     * @returns {*}
     */
  }, {
    key: "get",
    value: function get(key) {
      var cacheItem = this.map.get(key);
      if (cacheItem) {
        if (cacheItem.ttl > currentTime()) {
          return cacheItem.value;
        } else {
          this.map["delete"](key);
        }
      }
    }

    /**
     * @param {String} key
     * @param {*} value
     * @param {Array.<RegExp|String>=} tags
     * @param {Number=} ttl
     */
  }, {
    key: "set",
    value: function set(key, value, tags, ttl) {
      this.map.set(key, cacheItem(value, tags, currentTime() + ttl));
      if (this.flushInterval && !this.flushTimer) {
        this.flushTimer = setInterval(this.flush.bind(this), this.flushInterval);
        if (this.flushTimer.unref) {
          this.flushTimer.unref();
        }
      }
    }

    /**
     * @param {String} key
     */
  }, {
    key: "delete",
    value: function _delete(key) {
      this.map["delete"](key);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var _iterator = _createForOfIteratorHelper(this.map),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 1),
            key = _step$value[0];
          this["delete"](key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * @param {Array.<String>} tags
     */
  }, {
    key: "deleteByTags",
    value: function deleteByTags(tags) {
      var _iterator2 = _createForOfIteratorHelper(this.map),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];
          if (value.tags && tagsContainMatches(tags, value.tags)) {
            this["delete"](key);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    /**
     * Deletes all outdated keys
     */
  }, {
    key: "flush",
    value: function flush() {
      var now = currentTime();
      var _iterator3 = _createForOfIteratorHelper(this.map),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            key = _step3$value[0],
            value = _step3$value[1];
          if (value.ttl < now) {
            this["delete"](key);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
  return Cache;
}();
var CACHE_FLUSH_INTERVAL = 60000; //60 sec

var cache = new Cache(CACHE_FLUSH_INTERVAL);
exports.cache = cache;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    this.events = {};
  }
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(callback);
      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        this.events = {};
      } else if (this.events[eventName]) {
        if (callback) {
          this.events[eventName] = this.events[eventName].filter(function (c) {
            return c !== callback;
          });
        } else {
          delete this.events[eventName];
        }
      }
      return this;
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.events[eventName]) {
        this.events[eventName].forEach(function (callback) {
          return callback.apply(void 0, args);
        });
      }
    }
  }]);
  return EventEmitter;
}();
exports["default"] = EventEmitter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_131856__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = void 0;
var _utils = __nested_webpack_require_131856__(0);
/**
 * Produces a URL query string from a given obj by iterating through the object's "own properties".
 * @param {Object} obj
 * @returns {string}
 */
var stringify = function stringify(obj) {
  var tokens = [];
  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    if (value !== undefined) {
      (0, _utils.castArray)(value).forEach(function (value) {
        tokens.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)));
      });
    }
  });
  return tokens.join('&');
};
exports.stringify = stringify;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseError = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ResponseError = /*#__PURE__*/function (_Error) {
  _inherits(ResponseError, _Error);
  var _super = _createSuper(ResponseError);
  function ResponseError(response) {
    var _this;
    _classCallCheck(this, ResponseError);
    _this = _super.call(this);
    var error = parseError(response);
    _this.message = error.message || error;
    _this.code = error.code;
    _this.status = response.status;
    _this.headers = response.headers;
    _this.body = response.body;
    return _this;
  }
  return _createClass(ResponseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.ResponseError = ResponseError;
function parseError(res) {
  if (res.status === 502) {
    return 'No connection with server';
  }
  return res.body || "Status Code ".concat(res.status, " (").concat(res.statusText, ")");
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless-request.js.map

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/***/ ((module) => {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/blob/index.js":
/*!************************************!*\
  !*** ./node_modules/blob/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_142446__) => {

/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = __nested_webpack_require_142446__.g.BlobBuilder
  || __nested_webpack_require_142446__.g.WebKitBlobBuilder
  || __nested_webpack_require_142446__.g.MSBlobBuilder
  || __nested_webpack_require_142446__.g.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? __nested_webpack_require_142446__.g.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();


/***/ }),

/***/ "./node_modules/component-bind/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/***/ ((module) => {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),

/***/ "./node_modules/component-inherit/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-inherit/index.js ***!
  \*************************************************/
/***/ ((module) => {


module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __nested_webpack_require_149489__) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __nested_webpack_require_149489__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/***/ ((module, exports, __nested_webpack_require_154524__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __nested_webpack_require_154524__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_159273__) => {


module.exports = __nested_webpack_require_159273__(/*! ./socket */ "./node_modules/engine.io-client/lib/socket.js");

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = __nested_webpack_require_159273__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");


/***/ }),

/***/ "./node_modules/engine.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_159857__) => {

/**
 * Module dependencies.
 */

var transports = __nested_webpack_require_159857__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
var Emitter = __nested_webpack_require_159857__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var debug = __nested_webpack_require_159857__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:socket');
var index = __nested_webpack_require_159857__(/*! indexof */ "./node_modules/indexof/index.js");
var parser = __nested_webpack_require_159857__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseuri = __nested_webpack_require_159857__(/*! parseuri */ "./node_modules/parseuri/index.js");
var parseqs = __nested_webpack_require_159857__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (__nested_webpack_require_159857__.g.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (__nested_webpack_require_159857__.g.location ? location.hostname : 'localhost');
  this.port = opts.port || (__nested_webpack_require_159857__.g.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof __nested_webpack_require_159857__.g === 'object' && __nested_webpack_require_159857__.g;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __nested_webpack_require_159857__(/*! ./transport */ "./node_modules/engine.io-client/lib/transport.js");
Socket.transports = __nested_webpack_require_159857__(/*! ./transports/index */ "./node_modules/engine.io-client/lib/transports/index.js");
Socket.parser = __nested_webpack_require_159857__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transport.js":
/*!********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_179604__) => {

/**
 * Module dependencies.
 */

var parser = __nested_webpack_require_179604__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var Emitter = __nested_webpack_require_179604__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_182872__) => {

/**
 * Module dependencies
 */

var XMLHttpRequest = __nested_webpack_require_182872__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var XHR = __nested_webpack_require_182872__(/*! ./polling-xhr */ "./node_modules/engine.io-client/lib/transports/polling-xhr.js");
var JSONP = __nested_webpack_require_182872__(/*! ./polling-jsonp */ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
var websocket = __nested_webpack_require_182872__(/*! ./websocket */ "./node_modules/engine.io-client/lib/transports/websocket.js");

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (__nested_webpack_require_182872__.g.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-jsonp.js":
/*!***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_184675__) => {


/**
 * Module requirements.
 */

var Polling = __nested_webpack_require_184675__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var inherit = __nested_webpack_require_184675__(/*! component-inherit */ "./node_modules/component-inherit/index.js");

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!__nested_webpack_require_184675__.g.___eio) __nested_webpack_require_184675__.g.___eio = [];
    callbacks = __nested_webpack_require_184675__.g.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (__nested_webpack_require_184675__.g.document && __nested_webpack_require_184675__.g.addEventListener) {
    __nested_webpack_require_184675__.g.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling-xhr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_190157__) => {

/**
 * Module requirements.
 */

var XMLHttpRequest = __nested_webpack_require_190157__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
var Polling = __nested_webpack_require_190157__(/*! ./polling */ "./node_modules/engine.io-client/lib/transports/polling.js");
var Emitter = __nested_webpack_require_190157__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var inherit = __nested_webpack_require_190157__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var debug = __nested_webpack_require_190157__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (__nested_webpack_require_190157__.g.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== __nested_webpack_require_190157__.g.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          var contentType;
          try {
            contentType = xhr.getResponseHeader('Content-Type');
          } catch (e) {}
          if (contentType === 'application/octet-stream') {
            xhr.responseType = 'arraybuffer';
          }
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (__nested_webpack_require_190157__.g.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (__nested_webpack_require_190157__.g.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof __nested_webpack_require_190157__.g.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (__nested_webpack_require_190157__.g.document) {
  if (__nested_webpack_require_190157__.g.attachEvent) {
    __nested_webpack_require_190157__.g.attachEvent('onunload', unloadHandler);
  } else if (__nested_webpack_require_190157__.g.addEventListener) {
    __nested_webpack_require_190157__.g.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/polling.js":
/*!*****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_199752__) => {

/**
 * Module dependencies.
 */

var Transport = __nested_webpack_require_199752__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parseqs = __nested_webpack_require_199752__(/*! parseqs */ "./node_modules/parseqs/index.js");
var parser = __nested_webpack_require_199752__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var inherit = __nested_webpack_require_199752__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __nested_webpack_require_199752__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __nested_webpack_require_199752__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __nested_webpack_require_199752__(/*! xmlhttprequest-ssl */ "./node_modules/engine.io-client/lib/xmlhttprequest.js");
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/transports/websocket.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_205491__) => {

/**
 * Module dependencies.
 */

var Transport = __nested_webpack_require_205491__(/*! ../transport */ "./node_modules/engine.io-client/lib/transport.js");
var parser = __nested_webpack_require_205491__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/browser.js");
var parseqs = __nested_webpack_require_205491__(/*! parseqs */ "./node_modules/parseqs/index.js");
var inherit = __nested_webpack_require_205491__(/*! component-inherit */ "./node_modules/component-inherit/index.js");
var yeast = __nested_webpack_require_205491__(/*! yeast */ "./node_modules/yeast/index.js");
var debug = __nested_webpack_require_205491__(/*! debug */ "./node_modules/debug/src/browser.js")('engine.io-client:websocket');
var BrowserWebSocket = __nested_webpack_require_205491__.g.WebSocket || __nested_webpack_require_205491__.g.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __nested_webpack_require_205491__(/*! ws */ "?1bcf");
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? __nested_webpack_require_205491__.g.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};


/***/ }),

/***/ "./node_modules/engine.io-client/lib/xmlhttprequest.js":
/*!*************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_212472__) => {

// browser shim for xmlhttprequest module

var hasCORS = __nested_webpack_require_212472__(/*! has-cors */ "./node_modules/has-cors/index.js");

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new __nested_webpack_require_212472__.g[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/browser.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/browser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_214051__) => {

/**
 * Module dependencies.
 */

var keys = __nested_webpack_require_214051__(/*! ./keys */ "./node_modules/engine.io-parser/lib/keys.js");
var hasBinary = __nested_webpack_require_214051__(/*! has-binary2 */ "./node_modules/has-binary2/index.js");
var sliceBuffer = __nested_webpack_require_214051__(/*! arraybuffer.slice */ "./node_modules/arraybuffer.slice/index.js");
var after = __nested_webpack_require_214051__(/*! after */ "./node_modules/after/index.js");
var utf8 = __nested_webpack_require_214051__(/*! ./utf8 */ "./node_modules/engine.io-parser/lib/utf8.js");

var base64encoder;
if (__nested_webpack_require_214051__.g && __nested_webpack_require_214051__.g.ArrayBuffer) {
  base64encoder = __nested_webpack_require_214051__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __nested_webpack_require_214051__(/*! blob */ "./node_modules/blob/index.js");

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (__nested_webpack_require_214051__.g.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof __nested_webpack_require_214051__.g.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof __nested_webpack_require_214051__.g.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += __nested_webpack_require_214051__.g.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/keys.js ***!
  \***************************************************/
/***/ ((module) => {


/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};


/***/ }),

/***/ "./node_modules/engine.io-parser/lib/utf8.js":
/*!***************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/utf8.js ***!
  \***************************************************/
/***/ (function(module, exports, __nested_webpack_require_230052__) {

/* module decorator */ module = __nested_webpack_require_230052__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports =   true && exports;

	// Detect free variable `module`
	var freeModule =   true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof __nested_webpack_require_230052__.g == 'object' && __nested_webpack_require_230052__.g;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return utf8;
		}).call(exports, __nested_webpack_require_230052__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key, hasOwnProperty, object; }

}(this));


/***/ }),

/***/ "./node_modules/has-binary2/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-binary2/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_236803__) => {

/* global Blob File */

/*
 * Module requirements.
 */

var isArray = __nested_webpack_require_236803__(/*! isarray */ "./node_modules/isarray/index.js");

var toString = Object.prototype.toString;
var withNativeBlob = typeof __nested_webpack_require_236803__.g.Blob === 'function' || toString.call(__nested_webpack_require_236803__.g.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof __nested_webpack_require_236803__.g.File === 'function' || toString.call(__nested_webpack_require_236803__.g.File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof __nested_webpack_require_236803__.g.Buffer === 'function' && __nested_webpack_require_236803__.g.Buffer.isBuffer && __nested_webpack_require_236803__.g.Buffer.isBuffer(obj)) ||
     (typeof __nested_webpack_require_236803__.g.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
     (withNativeBlob && obj instanceof Blob) ||
     (withNativeFile && obj instanceof File)
    ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "./node_modules/has-cors/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
/***/ ((module) => {


/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}


/***/ }),

/***/ "./node_modules/indexof/index.js":
/*!***************************************!*\
  !*** ./node_modules/indexof/index.js ***!
  \***************************************/
/***/ ((module) => {


var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};


/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/***/ ((module, exports, __nested_webpack_require_245468__) => {


/**
 * Module dependencies.
 */

var url = __nested_webpack_require_245468__(/*! ./url */ "./node_modules/socket.io-client/lib/url.js");
var parser = __nested_webpack_require_245468__(/*! socket.io-parser */ "./src/socket-parser.js");
var Manager = __nested_webpack_require_245468__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
var debug = __nested_webpack_require_245468__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __nested_webpack_require_245468__(/*! ./manager */ "./node_modules/socket.io-client/lib/manager.js");
exports.Socket = __nested_webpack_require_245468__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");


/***/ }),

/***/ "./node_modules/socket.io-client/lib/manager.js":
/*!******************************************************!*\
  !*** ./node_modules/socket.io-client/lib/manager.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_247884__) => {


/**
 * Module dependencies.
 */

var eio = __nested_webpack_require_247884__(/*! engine.io-client */ "./node_modules/engine.io-client/lib/index.js");
var Socket = __nested_webpack_require_247884__(/*! ./socket */ "./node_modules/socket.io-client/lib/socket.js");
var Emitter = __nested_webpack_require_247884__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var parser = __nested_webpack_require_247884__(/*! socket.io-parser */ "./src/socket-parser.js");
var on = __nested_webpack_require_247884__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __nested_webpack_require_247884__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __nested_webpack_require_247884__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:manager');
var indexOf = __nested_webpack_require_247884__(/*! indexof */ "./node_modules/indexof/index.js");
var Backoff = __nested_webpack_require_247884__(/*! backo2 */ "./node_modules/backo2/index.js");

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/on.js":
/*!*************************************************!*\
  !*** ./node_modules/socket.io-client/lib/on.js ***!
  \*************************************************/
/***/ ((module) => {


/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}


/***/ }),

/***/ "./node_modules/socket.io-client/lib/socket.js":
/*!*****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/socket.js ***!
  \*****************************************************/
/***/ ((module, exports, __nested_webpack_require_261830__) => {


/**
 * Module dependencies.
 */

var parser = __nested_webpack_require_261830__(/*! socket.io-parser */ "./src/socket-parser.js");
var Emitter = __nested_webpack_require_261830__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var toArray = __nested_webpack_require_261830__(/*! to-array */ "./node_modules/to-array/index.js");
var on = __nested_webpack_require_261830__(/*! ./on */ "./node_modules/socket.io-client/lib/on.js");
var bind = __nested_webpack_require_261830__(/*! component-bind */ "./node_modules/component-bind/index.js");
var debug = __nested_webpack_require_261830__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:socket');
var parseqs = __nested_webpack_require_261830__(/*! parseqs */ "./node_modules/parseqs/index.js");

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = { type: parser.EVENT, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  if (packet.nsp !== this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};


/***/ }),

/***/ "./node_modules/socket.io-client/lib/url.js":
/*!**************************************************!*\
  !*** ./node_modules/socket.io-client/lib/url.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_270245__) => {


/**
 * Module dependencies.
 */

var parseuri = __nested_webpack_require_270245__(/*! parseuri */ "./node_modules/parseuri/index.js");
var debug = __nested_webpack_require_270245__(/*! debug */ "./node_modules/debug/src/browser.js")('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || __nested_webpack_require_270245__.g.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}


/***/ }),

/***/ "./node_modules/to-array/index.js":
/*!****************************************!*\
  !*** ./node_modules/to-array/index.js ***!
  \****************************************/
/***/ ((module) => {

module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}


/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;


/***/ }),

/***/ "?1bcf":
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_274360__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_274360__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_274360__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__nested_webpack_require_274360__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_274360__("./src/index.js");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=backendless-rt-client.js.map

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}
module.exports = _applyDecoratedDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toArray.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");
var construct = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/construct.js");
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=backendless.js.map