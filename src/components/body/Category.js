import React,{useContext, Suspense,lazy} from 'react'
import {Link} from 'react-router-dom'
import StaticContext from '../context/StaticContext'
import SpinnerProduct from './SpinnerProduct'
const ProductList = lazy(() => import('./ProductList'))
const Category = ({id, nombre})=>{
  const context = useContext(StaticContext)

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
    <Suspense fallback={<SpinnerProduct/>}>
    <ProductList
          products={context.products}
          categoryId={id}
          categoryName={nombre}
        />
        </Suspense>
  </div>
}
export default Category