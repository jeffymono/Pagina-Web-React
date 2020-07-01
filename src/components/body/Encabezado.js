import React, {useState,useEffect} from "react"
import '../css/body.css'
import {Link} from 'react-router-dom'
import ProductList from './ProductList'
export const Encabezado = ({ children,products, categoryId }) => {
  const [listCategories, setCategories] =useState([])

  useEffect(() =>{
    fetch("https://api-xiaominario.herokuapp.com/categories", {
"method": "GET",
"headers": {
  "Content-Type": "application/json",
  "authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMjM2NDgsIm5iZiI6MTU5MzAyMzY0OCwianRpIjoiWDZYU3BLemhhUjd1aFYzSiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.iYMa9nqazn_X4tM0cosUhGmtnGJMVrl7thJodXjhUl4"
}
})
    .then((response) => response.json())
    .then((data) => {
        setCategories( data );
      
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
    const productArray=()=>{ 
      return(
        listCategories.map(category=>{
          return(
            <div key={category.id}>
             <div style={{display: "flex"}}> 
              <h2>{category.cat_nombre}</h2>
               &nbsp;&nbsp;
               <Link to={`/home/ProductCategory/${category.id}`} type="button"  className="btn btn-light btnEncabezado">Ver más</Link>

             </div>
             <hr align="left" width="70%" />
             <ProductList products={products} categoryId={category.id} categoryName={category.cat_nombre}/>
             </div>
          )
        })
      )
    }

    console.log("-> render Encabezado"                                                                                                        )
  return (
      <div>
    {productArray()}
    {/* <ProductList products={products} /> */}
    </div>
  )
}
