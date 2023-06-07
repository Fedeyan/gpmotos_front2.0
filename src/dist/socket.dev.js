"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketEmitWithDispatch = socketEmitWithDispatch;
exports["default"] = void 0;

var _socket = require("socket.io-client");

var socket = (0, _socket.io)(process.env.REACT_APP_API_SOCKET_URL, {
  withCredentials: true
});

function socketEmitWithDispatch(event, socket, dispatch, cb) {
  return socket.on(event, function () {
    dispatch(cb());
  });
} // export const add_product = (socket, dispatch) =>
//   socket.on("add_product", function () {
//     dispatch(fetchItems());
//   });


var _default = socket;
exports["default"] = _default;