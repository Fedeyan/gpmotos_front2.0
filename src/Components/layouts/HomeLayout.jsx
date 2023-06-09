import React from "react";
import CardsContainer from "../../Pages/customer/Home/CardsContainer";
import HomeSidebar from "../sidebars/HomeSidebar";
import Styles from '../../Styles/dist/homelayout.module.css'
const HomeLayout = () => {
  const test = "200px"
  return (
    <div style={{gridTemplateColumns: `${test} 1fr`}} className={Styles.container}>
      <HomeSidebar />
      <CardsContainer />
    </div>
  );
};

export default HomeLayout;
