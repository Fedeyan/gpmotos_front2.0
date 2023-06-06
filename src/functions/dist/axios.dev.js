"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.logout = logout;
exports.checkSession = checkSession;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var REACT_APP_API_URL = process.env.REACT_APP_API_URL; //login

function login(event, username, password) {
  var axiosPOST, response;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(REACT_APP_API_URL, "/auth/login"), {
            username: username,
            password: password
          }, {
            withCredentials: true
          }));

        case 3:
          axiosPOST = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(axiosPOST.data);

        case 6:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
} //logout


function logout() {
  var axiosResponse, data;
  return regeneratorRuntime.async(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(REACT_APP_API_URL, "/auth/logout"), {}, {
            withCredentials: true
          }));

        case 2:
          axiosResponse = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(axiosResponse.data);

        case 5:
          data = _context2.sent;
          window.location.replace("/");
          return _context2.abrupt("return", data);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
} //check


function checkSession() {
  var response, data;
  return regeneratorRuntime.async(function checkSession$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(REACT_APP_API_URL, "/checksession"), {
            withCredentials: true
          }));

        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(response.data);

        case 5:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}