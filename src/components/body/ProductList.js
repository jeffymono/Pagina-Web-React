import React, {Component} from 'react'
import {Container,Row,Col  } from "react-bootstrap";
import Product from './Product'
export default class ProductList extends Component{
    render(){
        const{products} = this.props
        const mostrarProduct = Object.values(products)
      .slice(0, 6)
      .map((product) => (

        <Col sm={2} width="270px" key={product.id}>
            <Product 
            imageUrl={product.imageUrl}
            brandName ={product.brandName}
            id={product.id}
            />
      </Col>
      )
        )
        return(
            <div>
            <Container fluid>
              <Row>{mostrarProduct}</Row>
            </Container>
          </div>
        )
    }
}