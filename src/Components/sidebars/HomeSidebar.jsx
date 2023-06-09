import React, { useState } from "react";
import Styles from "../../Styles/dist/homesidebar.module.css";
import Dropdown from "../dropdown/Dropdown";

const HomeSidebar = () => {
  const [dropdowns] = useState([
    {
      title: "Categorias",
      rows: [
        {
          name: "Categoria 1",
          link: null,
        },
        {
          name: "Categoria 2",
          link: "null",
        },
      ],
    },
  ]);

  return (
    <div className={Styles.container}>
      <Dropdown data={dropdowns} />
    </div>
  );
};

export default HomeSidebar;
