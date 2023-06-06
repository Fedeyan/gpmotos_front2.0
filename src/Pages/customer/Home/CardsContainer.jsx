import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../../redux/productsSlice";
import Card from "../../../Components/cards/Card";

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
    <div>
      {typeof all_items === "string" ? all_items : showCards(all_items)}
    </div>
  );
};

export default CardsContainer;
