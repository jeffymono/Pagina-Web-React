import React, {Component} from 'react'
/* import {Card,Container,Row,Col  } from "react-bootstrap"; */
export default class ProductDetail extends Component {
  state = {product:{}};
  fetchProduct(id){
    fetch(
      `https://asos2.p.rapidapi.com/products/detail?sizeSchema=US&store=US&lang=en-US&currency=USD&id=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key": "58de42f635msheb7346205035345p157c8ajsn041a095b9368"
        },
      }
    )
      .then((response) => response.json())
      .then((product) => {
        this.setState({ product });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    const {id} = this.props.match.params
    this.fetchProduct(id)
  }

  render() {
    const {product} = this.state
    return (
      <div>
        <h1>{product.name}</h1>
        
      </div>
    );
  }
}