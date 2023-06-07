import React, { useState } from "react";
import formStyle from "../../Styles/dist/baseform.module.css";
import { addProduct } from "../../functions/axios";
function AddProductForm() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);

  async function addProductHanler(e) {
    e.preventDefault();
    const response = await addProduct(
      Number(code),
      String(name),
      String(brand),
      String(model),
      String(description),
      Number(stock),
      image
    );

    console.log(response);
  }

  return (
    <div className={formStyle.container}>
      <form
        onSubmit={(e) => addProductHanler(e)}
        className={formStyle.form}
        encType="multipart/form-data"
      >
        <h3 className={formStyle.centeredText + " " + formStyle.formTitle}>
          Añadir un nuevo producto:{" "}
        </h3>

        {/* code */}
        <input
          className={formStyle.input}
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Codigo"
        />
        {/* name */}
        <input
          className={formStyle.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Producto"
        />
        {/* brand */}
        <input
          className={formStyle.input}
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Marca"
        />

        {/* model */}
        <input
          className={formStyle.input}
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Modelo"
        />

        {/* description */}
        <input
          className={formStyle.input}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion"
        />

        {/* stock */}
        <input
          className={formStyle.input}
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
        />

        {/* productImage */}
        <input
          id="file_upload"
          className={formStyle.input}
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image && (
          <div className={formStyle.image_placeholder}>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(image)}
            />
            <br />
          </div>
        )}
        <input className={formStyle.input} type="submit" value="Agregar" />
        <input
          className={formStyle.input}
          type="reset"
          onClick={() => setImage(null)}
          value="Limpiar"
        />
      </form>
    </div>
  );
}

export default AddProductForm;
