import React, { useState } from "react";
import { login } from "../../functions/axios";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function loginHandler(e) {
    const response = await login(e, String(username), String(password));
    if (response === true) {
      Cookies.set("conbol");
      return window.location.replace("/profile");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => loginHandler(e)}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="username"
          placeholder="Nombre de usuario"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default LoginForm;
