import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/dist/dropdown.module.css";

const Dropdown = ({ data }) => {
  const [dropdownDisplay, setDropDownDisplay] = useState({});

  function dropdownDisplayHandler(name) {
    setDropDownDisplay({
      ...dropdownDisplay,
      [name]: dropdownDisplay[name] === "none" ? "inline-block" : "none",
    });
  }

  return (
    <ul className={Styles.dropdown}>
      {data?.map((element, index) => {
        if (!dropdownDisplay.hasOwnProperty(element.title)) {
          setDropDownDisplay({
            ...dropdownDisplay,
            [element.title]: "none",
          });
        }

        return (
          <React.Fragment key={Date.now()}>
            <h3 onClick={() => dropdownDisplayHandler(element.title)}>
              {element.title}
            </h3>
            {element.rows?.map((row, index) => {
              return (
                <li
                  key={index}
                  style={{ display: dropdownDisplay[element.title] }}
                  className={Styles.row}
                >
                  {!!row.link ? (
                    <Link className={Styles.row__data} to={row.link}>
                      {row.name}
                    </Link>
                  ) : (
                    <button className={Styles.row__data}>{row.name}</button>
                  )}
                </li>
              );
            })}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Dropdown;
