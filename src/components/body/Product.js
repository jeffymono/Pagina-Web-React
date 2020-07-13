import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card} from "react-bootstrap";
import '../css/body.css'
export default class Product extends Component {

  render() {
    const {imageUrl,brandName,id,idCategory} = this.props
    return (
      <Link to={`/home/category/${idCategory}/productDetail/${id}`} style={{ textDecoration:"none"}}>
      <Card style={{ width: "100%",margin:"2%",border: "none" }}>
      <Card.Img variant="top" className="margenProduct" width="148" height="158" src={imageUrl}/* {`data:image/jpeg;base64,${imageUrl}`} */ />
      <div className="card-footer bg-transparent ">
        <small className="text-muted cardFooterProduct"><strong>{brandName}</strong></small>
      </div>
    </Card>
    </Link>
    )
  }
}