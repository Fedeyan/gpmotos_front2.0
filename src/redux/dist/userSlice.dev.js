"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.checkSessionAction = exports.getUserdata = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _axios2 = require("../functions/axios");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUserdata = (0, _toolkit.createAsyncThunk)("fetchUserdata", function _callee() {
  var axiosFetch, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_API_URL, "/user"), {
            withCredentials: true
          }));

        case 2:
          axiosFetch = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(axiosFetch.data);

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
exports.getUserdata = getUserdata;
var checkSessionAction = (0, _toolkit.createAsyncThunk)("checkSesison", _axios2.checkSession);
exports.checkSessionAction = checkSessionAction;
var initialState = {
  sessionBool: true,
  userdata: []
};
var userReducer = (0, _toolkit.createSlice)({
  name: "userdata",
  initialState: initialState,
  reducers: {
    clearState: function clearState(state) {
      state = initialState;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(getUserdata.fulfilled, function (state, action) {
      state.userdata = action.payload;
    });
    builder.addCase(checkSessionAction.fulfilled, function (state, action) {
      state.sessionBool = action.payload;
    });
  }
});
var _default = userReducer.reducer;
exports["default"] = _default;