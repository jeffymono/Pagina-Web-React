import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import { getApis } from "./getApis";
const listCategories = getApis();
export default class ProductList extends Component {
  render() {
    const productos = [];
    const filterProducts = listCategories.products
      .read()
      .filter(
        (productFilter) => productFilter.categoria_id === this.props.categoryId
      );
    const mostrarProduct = filterProducts.map((product) => {
      productos.push(product);

      if (productos.length < 7) {
        return (
          <Col sm={2} width="270px" key={product.id}>
            <Product
              imageUrl={product.pro_imagen}
              brandName={product.pro_modelo}
              idCategory={product.categoria_id}
              id={product.id}
            />
          </Col>
        );
      }
      return "";
    });
    return (
      <div>
        <Container fluid>
          <Row>{mostrarProduct}</Row>
        </Container>
      </div>
    );
  }
}
