import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ log }) => {
  return (
    <nav>
      <ul>
        <li><NavLink>Inicio</NavLink></li>
        <li><NavLink>Ofertas</NavLink></li>
        <li><NavLink>Iniciar Sesión</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
