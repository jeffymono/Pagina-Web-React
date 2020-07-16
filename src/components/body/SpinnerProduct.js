import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container, Row, Col, Card } from "react-bootstrap";
export default function Variants() {
  
  let colSixProducts = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Container fluid>
        <Row>
          {colSixProducts.map((p, indice) => {
            return (
              <Col sm={2} width="270px" key={indice}>
                <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                  <div
                    variant="top"
                    className="cardImgProduct"
                    width="148"
                    height="158"
                    src={""} /* {`data:image/jpeg;base64,${imageUrl}`} */
                  >
                    <div style={{ marginRight: "3%" }}>
                      <Skeleton
                        variant="rect"
                        height={158}
                        style={{ borderRadius: "3px" }}
                      />
                      <div
                        className="card-footer bg-transparent "
                        style={{ borderRadius: ".25rem", border: "none" }}
                      >
                        <Skeleton style={{ width: "100%" }} height={13} />
                        <Skeleton style={{ width: "100%" }} height={13} />
                        <Skeleton style={{ width: "100%" }} height={13} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
