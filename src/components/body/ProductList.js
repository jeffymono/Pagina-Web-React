import React, {Component} from 'react'
import {Container,Row,Col  } from "react-bootstrap";
import Product from './Product'
export default class ProductList extends Component{
    render(){
        const{products} = this.props
        const productos = []
        const mostrarProduct = products.map((product) => {
          
          if(this.props.categoryId===product.categoria_id){
            
            productos.push(product)
            
            if(productos.length<7){
              return(
                <Col sm={2} width="270px" key={product.id}>   
                  <Product
                    imageUrl={product.pro_imagen}
                    brandName={product.pro_modelo}
                    idCategory={product.categoria_id}
                    id={product.id}
                  />
                </Col>
                )
            }
          }
          return ""
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