import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../functions/axios";

const Nav = ({ log }) => {
  function logOutHandler(e) {
    e.preventDefault();
    logout()
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Inicio</NavLink>
        </li>
        <li>
          <NavLink>Ofertas</NavLink>
        </li>{" "}
        {!log ? (
          <li>
            <NavLink to={"/auth/login"}>Iniciar Sesión</NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to={"/profile"}>Perfil</NavLink>
            </li>
            <li>
              <form onSubmit={(e) => logOutHandler(e)}>
                <input type="submit" value="Cerrar sesión" />
              </form>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
