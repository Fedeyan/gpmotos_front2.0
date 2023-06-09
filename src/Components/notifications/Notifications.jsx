import React from "react";
import Styles from "../../Styles/dist/notifications.module.css";
import { useSelector } from "react-redux";
const Notifications = () => {
  const store = useSelector((store) => store.user);
  const { Userdata } = store?.userdata;
  return (
    <div className={Styles.container}>
      <ul className={Styles.ul}>
        {Userdata?.notifications?.map(function (n, i) {
          const { title, preview } = JSON.parse(n);
          return (
            <li className={Styles.notification} key={i}>
              <h4
                className={`${Styles.title} ${
                  Styles[!!n.seen ? "seen" : "new"]
                }`}
              >
                {title}
              </h4>
              <span className={Styles.preview}>{preview}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notifications;
