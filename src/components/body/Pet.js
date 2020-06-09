import React, {Component} from 'react'
import {Card,Container,Row,Col  } from "react-bootstrap";
export default class Pet extends Component {

                 mostrarProduct() {
                   const { products } = this.props;
                   return Object.values(products).slice(0,6).map((pet,indice) => {

                       return(<Col sm={2} key={pet.id} width="270px">
                           <a href="https://www.google.com/">
                         <Card style={{ width: "100%", margin:"1%" }} >
                           <Card.Img
                             variant="top"
                             src={"http://" + pet.imageUrl}
                           />
                           <Card.Body>
                             <Card.Title>{pet.brandName}</Card.Title>
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