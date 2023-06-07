import { io } from "socket.io-client";
const socket = io(process.env.REACT_APP_API_SOCKET_URL, {
  withCredentials: true,
});

export function socketEmitWithDispatch(event, socket, dispatch, cb) {
  return socket.on(event, function () {
    dispatch(cb());
  });
}

// export const add_product = (socket, dispatch) =>
//   socket.on("add_product", function () {
//     dispatch(fetchItems());
//   });

export default socket;
