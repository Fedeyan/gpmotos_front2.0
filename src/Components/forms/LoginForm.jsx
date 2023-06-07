import React, { useState } from "react";
import { login } from "../../functions/axios";
import formStyle from "../../Styles/dist/baseform.module.css";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function loginHandler(e) {
    const response = await login(e, String(username), String(password));
    if (response === true) {
      alert("has iniciado sesion correctamente");
      window.location.replace("/");
    }
  }

  return (
    <div style={localStyle} className={formStyle.container}>
      <form className={formStyle.form} onSubmit={(e) => loginHandler(e)}>
        <h3 className={formStyle.centeredText + " " + formStyle.formTitle}>
          Inicia sesión
        </h3>
        <input
          className={formStyle.input}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="username"
          placeholder="Nombre de usuario"
        />
        <input
          className={formStyle.input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <input
          className={formStyle.input + " " + formStyle.input_fullwidth}
          type="submit"
          value="Iniciar sesión"
        />
      </form>
    </div>
  );
};

const localStyle = {
  marginLeft: "2.5em",
};

export default LoginForm;
