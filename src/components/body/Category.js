import React from 'react'
import {Link} from 'react-router-dom'
const Category = ({id, nombre})=>{

    return <div key={id}>
    <div style={{ display: "flex" }}>
      <h2>{nombre}</h2>
      &nbsp;&nbsp;
      <Link
        to={`/home/ProductCategory/${id}`}
        type="button"
        className="btn btn-light btnEncabezado"
      >
        Ver más
      </Link>
    </div>
    <hr align="left" width="70%" />
  </div>
}
export default Category