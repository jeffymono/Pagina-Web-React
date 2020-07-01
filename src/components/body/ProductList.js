import React, {Component} from 'react'
import {Container,Row,Col  } from "react-bootstrap";
import Product from './Product'
export default class ProductList extends Component{
    render(){
      console.log("-> render ProductList")
        const{products} = this.props
        const productos = []
        const mostrarProduct = products.map((product,indice) => {
          
          if(this.props.categoryId===product.categoria_id){
            
            productos.push(product)
            if(productos.length<7){
              console.log("Hola",productos,indice)
              return(
                <Col sm={2} width="270px" key={product.id}>   
                  <Product
                    imageUrl={product.pro_imagen}
                    brandName={product.pro_marca}
                    idCategory={product.categoria_id}
                    id={product.id}
                  />
                </Col>
                )
            }
        }
        });
        return(
            <div>
            <Container fluid>
              <Row>{mostrarProduct}</Row>
            </Container>
          </div>
        )
    }
}