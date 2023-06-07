import React, { useState } from "react";
import formStyle from "../../Styles/dist/baseform.module.css";
import { register } from "../../functions/axios";
const RegisterForm = () => {
  const [firstName, setNombre] = useState("");
  const [lastName, setApellido] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_areacode, setAreacode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  async function registerHandler(e) {
    const response = await register(
      e,
      String(firstName),
      String(lastName),
      String(username),
      String(email),
      Number(phone_areacode),
      Number(phone),
      String(password)
    );
    console.log(response);
    if (response.includes("exito")) {
      alert(response);
      return window.location.replace("/auth/login");
    }
  }

  return (
    <div style={localStyle} className={formStyle.container}>
      <form onSubmit={(e) => registerHandler(e)} className={formStyle.form}>
        <h3 className={formStyle.centeredText + " " + formStyle.formTitle}>
          Registrate
        </h3>
        <input
          className={formStyle.input}
          type="text"
          value={firstName}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <input
          className={formStyle.input}
          type="text"
          value={lastName}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Apellido"
        />
        <input
          className={formStyle.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
        />
        <input
          className={formStyle.input}
          type="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className={formStyle.input}
          type="number"
          value={phone_areacode}
          onChange={(e) => setAreacode(e.target.value)}
          placeholder="Codigo de area"
        />
        <input
          className={formStyle.input}
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefono"
        />
        <input
          className={formStyle.input + " " + formStyle.input_fullwidth}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <input
          className={`${formStyle.input} ${formStyle.input_fullwidth}`}
          type="submit"
          value="Registrarme"
        />
      </form>
    </div>
  );
};

const localStyle = {
  marginLeft: "2.5em",
};

export default RegisterForm;
