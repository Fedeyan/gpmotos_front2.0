import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserdata } from "../redux/userSlice";
import noImage from "../misc/img/product_placeholder.png";
import greenShield from "../misc/img/greenshield.png";

import Styles from "../Styles/dist/profile.module.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const store = useSelector((store) => store.user);
  const { userdata } = store;
  const dispatch = useDispatch();
  const loadingString = "Cargando ...";
  useEffect(
    function () {
      if (!userdata?.length) {
        dispatch(getUserdata());
      }
    },
    [dispatch, userdata.length]
  );

  return (
    <div className={Styles.profile}>
      <div className={Styles.baseProfileData}>
        <img
          className={Styles.profileImage}
          src={noImage}
          alt="profile_picture"
        />
        <div className={Styles.profile_stuff}>
          <h3>{`${userdata.firstName || loadingString} ${
            userdata.lastName || loadingString
          }`}</h3>
          <h4>{`${userdata.username}`}</h4>
        </div>
      </div>

      <div className={Styles.optionsContainer}>
        <ul className={Styles.optionsUl}>
          <li className={Styles.optionsLi}>
            <img
              className={Styles.optionsIcon}
              width={"60px"}
              src={greenShield}
              alt="security-icon"
            />
            <Link to={"/profile/info"}>Mi cuenta</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
