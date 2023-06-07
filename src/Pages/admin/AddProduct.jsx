import React from "react";
import AddProductForm from "../../Components/forms/AddProductForm";
import adminStyles from '../../Styles/dist/admin_generals.module.css'

function AddProduct() {
  return (
    <div className={adminStyles.container}>
      <AddProductForm />
    </div>
  );
}

export default AddProduct;
