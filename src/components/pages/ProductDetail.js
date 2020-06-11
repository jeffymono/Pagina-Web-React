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
          "x-rapidapi-key": "9e6c6faf1dmshd637a57c0c96969p17c95bjsnee124d6bae5b"
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
    this.mounted = true
    if(this.mounted){
    const {id} = this.props.match.params
    this.fetchProduct(id)
    }
  }
  componentWillUnmount(){
    this.mounted=false
  }

  render() {
    const {product} = this.state
    return (
      <div style={{ paddingTop: '6.6rem'}}>
        <h1>{product.name}</h1>
        
      </div>
    );
  }
}