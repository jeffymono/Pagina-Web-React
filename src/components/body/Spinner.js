import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Variants() {
  let placeholderSix = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <br />

      {placeholderSix.map((placeHolder, indice) => {
        return (
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <Skeleton
                  variant="rect"
                  style={{ marginRight: "4%" }}
                  width={90}
                  height={35}
                />
                <Skeleton variant="rect" width={60} height={35} />
              </div>
            </div>
            <hr align="left" width="70%" />
            <Container fluid>
              <Row>
                <Col sm={2} width="270px">
                  <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                    <div
                      variant="top"
                      className="cardImgProduct"
                      width="148"
                      height="158"
                      src={""} /* {`data:image/jpeg;base64,${imageUrl}`} */
                    >
                      <div style={{ marginRight: "3%" }}>
                        <Skeleton variant="rect" height={158} />
                        <div className="card-footer bg-transparent ">
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col sm={2} width="270px">
                  <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                    <div
                      variant="top"
                      className="cardImgProduct"
                      width="148"
                      height="158"
                      src={""} /* {`data:image/jpeg;base64,${imageUrl}`} */
                    >
                      <div style={{ marginRight: "3%" }}>
                        <Skeleton variant="rect" height={158} />
                        <div className="card-footer bg-transparent ">
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>{" "}
                <Col sm={2} width="270px">
                  <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                    <div
                      variant="top"
                      className="cardImgProduct"
                      width="148"
                      height="158"
                      src={""} /* {`data:image/jpeg;base64,${imageUrl}`} */
                    >
                      <div style={{ marginRight: "3%" }}>
                        <Skeleton variant="rect" height={158} />
                        <div className="card-footer bg-transparent ">
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>{" "}
                <Col sm={2} width="270px">
                  <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                    <div
                      variant="top"
                      className="cardImgProduct"
                      width="148"
                      height="158"
                      src={""} /* {`data:image/jpeg;base64,${imageUrl}`} */
                    >
                      <div style={{ marginRight: "3%" }}>
                        <Skeleton variant="rect" height={158} />
                        <div className="card-footer bg-transparent ">
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>{" "}
                <Col sm={2} width="270px">
                  <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                    <div
                      variant="top"
                      className="cardImgProduct"
                      width="148"
                      height="158"
                      src={""} 
                    >
                      <div style={{ marginRight: "3%" }}>
                        <Skeleton variant="rect" height={158} />
                        <div className="card-footer bg-transparent ">
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>{" "}
                <Col sm={2} width="270px">
                  <Card style={{ width: "100%", margin: "2%", border: "none" }}>
                    <div
                      variant="top"
                      className="cardImgProduct"
                      width="148"
                      height="158"
                      src={""} 
                    >
                      <div style={{ marginRight: "3%" }}>
                        <Skeleton variant="rect" height={158} />
                        <div className="card-footer bg-transparent ">
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                          <Skeleton style={{ width: "100%" }} height={13} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
    </div>
  );
}
