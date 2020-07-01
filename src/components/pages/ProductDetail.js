import React, {Component} from 'react'
/* import {Card,Container,Row,Col  } from "react-bootstrap"; */
export default class ProductDetail extends Component {
  state = {product:{}};
  mounted=false

  fetchProduct(idProduct,idCategory){
    const requestApi={
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          Authorization:"bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMTQ4NTIsIm5iZiI6MTU5MzAxNDg1MiwianRpIjoicGdidXpZcXF2c3BOMnRqTCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.l9uCd28YRw2uWrNDxyOatmB-Rb6tJ5nGYlboDHdrQRc"
      }
    }
    fetch(`https://api-xiaominario.herokuapp.com/categories/${idCategory}/products/${idProduct}`,requestApi)
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
    const {id,idCategory} = this.props.match.params
    console.log( this.props.match.params)
    this.fetchProduct(id,idCategory)
    }
  }
  componentWillUnmount(){
    this.mounted=false
  }

  render() {
    const {product} = this.state
    return (
      <div style={{ paddingTop: '6.6rem'}}>
        <h1>{product.pro_marca}</h1>
        
      </div>
    );
  }
}