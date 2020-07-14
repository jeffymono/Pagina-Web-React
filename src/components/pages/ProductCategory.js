import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../body/Product";
import StaticContext from "../context/StaticContext";

export default function ProductCategory({ match }) {
  const context = useContext(StaticContext);
  const { params } = match;
  const productsArray = context.products.read().filter(productsCategory => productsCategory.categoria_id === parseInt(params.id) )
  return (
    <div style={{ marginBottom: "4.5rem" }} className="container-sm">
      <br />
      <br />
      <Container fluid>
        <Row>
          {productsArray.map((product) => {
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
          })}
        </Row>
      </Container>
    </div>
  );
}
