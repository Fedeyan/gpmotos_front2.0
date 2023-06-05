import axios from "axios";

const { REACT_APP_API_URL } = process.env;

//login
export async function login(username, password) {
  const axiosPOST = await axios.post(
    `${REACT_APP_API_URL}/auth/login`,
    {
      username: "Admin",
      password: "Aa12345",
    },
    { withCredentials: true }
  );
  const response = await axiosPOST.data;
  return response;
}

