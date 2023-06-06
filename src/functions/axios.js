import axios from "axios";

const { REACT_APP_API_URL } = process.env;

//login
export async function login(event, username, password) {
  event.preventDefault();
  const axiosPOST = await axios.post(
    `${REACT_APP_API_URL}/auth/login`,
    {
      username,
      password,
    },
    { withCredentials: true }
  );
  const response = await axiosPOST.data;
  return response;
}
//logout
export async function logout() {
  const axiosResponse = await axios.post(
    `${REACT_APP_API_URL}/auth/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  const data = await axiosResponse.data;
  window.location.replace("/");
  return data;
}
//check
export async function checkSession() {
  const response = await axios.get(`${REACT_APP_API_URL}/checksession`, {
    withCredentials: true,
  });
  const data = await response.data;

  return data;
}
