import React from "react";
import Styles from "../../Styles/dist/notifications.module.css";
import { useSelector } from "react-redux";
const Notifications = () => {
  const store = useSelector((store) => store.user);
  const { userdata } = store;
  return (
    <div
      className={Styles.container}
      style={{
        display: userdata.Userdatas?.notifications.length ? "flex" : "none",
      }}
    >
      <ul className={Styles.notifications}>
        {/* <li className={Styles.notification}>
          <h3>Titulo de la notificacion</h3>
          <span>Preview de la notificacion</span>
        </li> */}
      </ul>
    </div>
  );
};

export default Notifications;
