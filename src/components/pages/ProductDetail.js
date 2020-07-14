import React, {useContext} from 'react'
import StaticContext from '../context/StaticContext'
export default function ProductDetail({match}){
  
  const context = useContext(StaticContext)

  const {params} = match

  const productArray = context.products.read().filter(product => product.id===parseInt(params.id))

   return <div>
     {
       productArray.map(product=>{
         return(
          <div className="container" key={product.id}>
          <div className="card mb-3" style={{maxWidth: "100%", marginTop: "4%"}}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={`${product.pro_imagen}`} className="card-img" alt={product.pro_modelo} />
                <br/>
                <br/>
                <div className="col text-center">
                  <a href={`${product.pro_enlace}`} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-warning" style={{background: "#ff7e00", border: "1px solid #b6610e", width: "50%"}}>Comprar</button>
                  </a>
                </div>
                <br/>
              </div>
              <div className="col-md-8">
                <div className="card-header">
                  {product.pro_marca}
                </div>
                <div className="card-body">
                  <h5 className="card-title"><b>{product.pro_modelo}</b></h5>
                  <p className="card-text">{product.pro_descripcion}</p>
                  
                  <h5 className="card-title"><b>Especifícaciones</b></h5>
                  <p className="card-text">{product.pro_dimesiones}</p>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
        </div>
         )
       })
     }
   </div>
}