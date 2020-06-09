import React, {Component} from 'react'
import {Card,Container,Row,Col  } from "react-bootstrap";
export default class Toy extends Component {

                 mostrarProduct() {
                   const { products } = this.props;
                   return Object.values(products).slice(0,6).map((toy,indice) => {

                       return(<Col sm={2} key={toy.id} width="270px">
                           <a href="https://www.google.com/">
                         <Card style={{ width: "100%", margin:"1%" }} >
                           <Card.Img
                             variant="top"
                             src={"http://" + toy.imageUrl}
                           />
                           <Card.Body>
                             <Card.Title>{toy.brandName}</Card.Title>
                           </Card.Body>
                         </Card>
                         </a>
                       </Col>
                       )
                   })
                 }
                 render() {
                   return (
                     <div>
                       <Container fluid>
                         <Row>{this.mostrarProduct()}</Row>
                       </Container>
                     </div>
                   )
                 }
               }