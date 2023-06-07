import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../functions/axios";
import { useSelector } from "react-redux";
import Styles from "../../Styles/dist/nav.module.css";
import Notifications from "../notifications/Notifications";

const Nav = () => {
  const store = useSelector((store) => store.user);
  const { sessionBool, userdata } = store;

  function logOutHandler(e) {
    e.preventDefault();
    logout();
  }
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.ul}>
        <li>
          <NavLink className={Styles.navLink} to={"/"}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className={Styles.navLink}>Ofertas</NavLink>
        </li>
        {!sessionBool ? (
          <li>
            <NavLink className={Styles.navLink} to={"/auth/login"}>
              Iniciar Sesión
            </NavLink>
          </li>
        ) : (
          <>
            {userdata.Userdata?.role === "admin" ? (
              <li>
                <NavLink to={"/dashboard"} className={Styles.navLink}>
                  Administrar
                </NavLink>
              </li>
            ) : null}
            <li className={Styles.alertccteiner + " " + Styles.navLink}>
              <button className={Styles.navLink}>Alertas</button>
              <div
                style={{
                  display: userdata.Userdata?.notifications?.length
                    ? "flex"
                    : "none",
                }}
                className={Styles.notificationsCount_container}
              >
                <i className={Styles.notificationsCount}>
                  {userdata.Userdata?.notifications?.length}
                </i>
              </div>
              <Notifications />
            </li>
            <li>
              <NavLink className={Styles.navLink} to={"/profile"}>
                Perfil
              </NavLink>
            </li>

            <li>
              <form
                className={Styles.logoutForm}
                onSubmit={(e) => logOutHandler(e)}
              >
                <input
                  className={Styles.navLink}
                  type="submit"
                  value="Cerrar sesión"
                />
              </form>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
