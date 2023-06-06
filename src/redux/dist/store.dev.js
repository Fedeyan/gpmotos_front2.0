"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _productsSlice = _interopRequireDefault(require("./productsSlice.js"));

var _userSlice = _interopRequireDefault(require("./userSlice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    products: _productsSlice["default"],
    user: _userSlice["default"]
  }
});
exports.store = store;