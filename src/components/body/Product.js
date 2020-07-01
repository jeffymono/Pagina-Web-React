import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card} from "react-bootstrap";
export default class Product extends Component {

  render() {
    const {imageUrl,brandName,id,idCategory} = this.props
console.log("-> render Product")
    return (
      <Link to={`/home/category/${idCategory}/productDetail/${id}`} style={{ textDecoration:"none"}}>
      <Card style={{ width: "100%",margin:"2%" }}>
      <Card.Img variant="top" src={imageUrl}/* {`data:image/jpeg;base64,${imageUrl}`} */ />
      <Card.Body>
        <Card.Title>{brandName}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
    )
  }
}