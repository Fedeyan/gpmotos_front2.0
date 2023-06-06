"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.productSlice = exports.fetchItems = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchItems = (0, _toolkit.createAsyncThunk)("fetchAllItems", function _callee() {
  var response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_API_URL, "/products")));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.data);

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchItems = fetchItems;
var initialState = {
  all_items: [],
  current_item: []
};
var productSlice = (0, _toolkit.createSlice)({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchItems.fulfilled, function (state, action) {
      state.all_items = action.payload;
    });
  }
}); // export const {} = productSlice.actions;

exports.productSlice = productSlice;
var _default = productSlice.reducer;
exports["default"] = _default;