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

//register

export async function register(
  event,
  firstName,
  lastName,
  username,
  email,
  phone_areacode,
  phone,
  password
) {
  event.preventDefault();
  const axiosPOST = await axios.post(
    `${REACT_APP_API_URL}/register`,
    {
      firstName,
      lastName,
      username,
      email,
      phone_areacode,
      phone,
      password,
    },
    { withCredentials: true }
  );
  const response = await axiosPOST.data;
  return response;
}

//addProduct
export async function addProduct(
  code,
  name,
  brand,
  model,
  description,
  stock,
  image
) {
  const axiosPOST = await axios.post(
    `${REACT_APP_API_URL}/products`,
    {
      code,
      name,
      brand,
      model,
      description,
      stock,
      productImage: image,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  const data = await axiosPOST.data;
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
