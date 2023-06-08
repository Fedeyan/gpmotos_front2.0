import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../../redux/productsSlice";
import Card from "../../../Components/cards/Card";
import Styles from "../../../Styles/dist/common_styles.module.css";

const CardsContainer = () => {
  const store = useSelector((store) => store.products);
  const all_items = store.all_items;
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(fetchItems());
    },
    [dispatch]
  );

  function showCards(products) {
    return (
      products &&
      products?.map((element) => {
        return <Card key={element.id} product={element} />;
      })
    );
  }

  return (
    <div className={Styles.centered_items_container}>
      {typeof all_items === "string" ? all_items : showCards(all_items)}
    </div>
  );
};

export default CardsContainer;
