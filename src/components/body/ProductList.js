import React, {Component} from 'react'
import {Container,Row,Col  } from "react-bootstrap";
import Product from './Product'
export default class ProductList extends Component{
    render(){
      console.log("-> render ProductList")
        const{products} = this.props
        const mostrarProduct = products.map(product => {
          if(this.props.categoryId===product.categoria_id){
            console.log("Hola",product)
          return(
          <Col sm={2} width="270px" key={product.id}>   
            <Product
              imageUrl={product.pro_imagen}
              brandName={product.pro_marca}
              id={product.id}
            />
          </Col>
          )}
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