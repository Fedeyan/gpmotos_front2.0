import React from "react";
import { Link, useLocation } from "react-router-dom";
import RegisterForm from "../../Components/forms/RegisterForm";
import LoginForm from "../../Components/forms/LoginForm";
import Styles from "../../Styles/dist/common_styles.module.css";

const Auth = () => {
  const path = useLocation().pathname;

  return (
    <div className={Styles.centered_items_container}>
      <h1
        className={
          Styles.h1_title +
          " " +
          Styles.like_floor_shadow +
          " " +
          Styles.title_with_cool_shadow
        }
      >
        Bienvenidos a GP Motos
      </h1>
      <div style={localStyle_div_need_center}>
        {path.includes("register") ? <RegisterForm /> : <LoginForm />}
        {path.includes("/register") ? (
          <h3
            style={{ marginLeft: "2.5em" }}
            className={`${Styles.wrap_item} ${Styles.center_text}`}
          >
            Ya tenes una cuenta? <Link to={"/auth/login"}>Inicia sesión</Link>
          </h3>
        ) : (
          <h3
            style={{ marginLeft: "2.5em" }}
            className={`${Styles.wrap_item} ${Styles.center_text}`}
          >
            No tenes cuenta? <Link to={"/auth/register"}>Registrate</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

const localStyle_div_need_center = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4em",
};

export default Auth;
