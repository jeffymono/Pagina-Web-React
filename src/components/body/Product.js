import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card} from "react-bootstrap";
import '../css/body.css'
export default class Product extends Component {

  render() {
    const {imageUrl,brandName,id,idCategory} = this.props
console.log("-> render Product")
    return (
      <Link to={`/home/category/${idCategory}/productDetail/${id}`} style={{ textDecoration:"none"}}>
      <Card style={{ width: "100%",margin:"2%",border: "none" }}>
      <Card.Img variant="top" className="margenProduct" width="148" height="200" src={imageUrl}/* {`data:image/jpeg;base64,${imageUrl}`} */ />
      <Card.Footer>
        <small className="text-muted cardFooterProduct"><strong>{brandName}</strong></small>
      </Card.Footer>
    </Card>
    </Link>
    )
  }
}