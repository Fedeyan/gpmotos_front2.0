import React from "react";
import noImage from "../../misc/img/product_placeholder.png";
import Styles from "../../Styles/dist/card.module.css";

const Card = ({ product }) => {
  const loadingString = "Cargando ...";

  return (
    <div className={Styles.container}>
      <img
        className={Styles.image}
        src={
          product.image_url === null
            ? noImage
            : `${process.env.REACT_APP_API_URL}/productimg/${product.image_url}`
        }
        alt=""
      />
      <div className={Styles.datacontainer}>
        <h3 className={Styles.name}>{product.name || loadingString}</h3>
        <h3 className={Styles.brand}>{`Marca: ${product.brand}` || loadingString}</h3>
        <h3 className={Styles.model}>{`Modeleo: ${product.model}`}</h3>
        <p className={Styles.description}>
          {product.description || loadingString}
        </p>
      </div>

      <div className={Styles.btnContainer}>
        <button className={Styles.button}>Añadir</button>

        <button className={Styles.button}>Consultar precio</button>
      </div>
    </div>
  );
};

export default Card;
