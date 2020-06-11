import React from "react"
import '../css/body.css'
import {Link} from 'react-router-dom'
export const Encabezado = ({ children,categoryName }) => {
    
  return (
      <div>
    <div style={{display: "flex"}}>
      <h2>{children}</h2>
      &nbsp;&nbsp;
      <Link to={`/ProductCategory/${categoryName}`} type="button" className="btn btn-light btnEncabezado">Ver más</Link>
    </div>
    <hr align="left" width="70%" />
    </div>
  )
}
