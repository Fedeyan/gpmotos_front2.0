import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../../Styles/dist/dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={Styles.container}>
        <ul className={Styles.ul}>
            <li className={Styles.li}><Link className={Styles.link} to={"/admin/products"}>Lista de productos</Link></li>
            <li className={Styles.li}><Link className={Styles.link} to={"/admin/addproduct"}>Agregar producto</Link></li>
            <li className={Styles.li}><Link className={Styles.link} to={"/budgetrequest"}>Solicitudes de presupuesto</Link></li>
        </ul>
    </div>
  )
}

export default Dashboard