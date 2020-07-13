import React, {Component} from 'react'
import CarouselImage from './CarouselImage'
import { Encabezado } from './Encabezado';

export default class ProductApi extends Component {
    //Crear estados para cada producto(categoria)
    //Y manda por props para el ProductList
  state = { products: [],categoryName:"", }; 
  mounted=false
  componentDidMount() {
    this.mounted = true

    fetch(`https://api-xiaominario.herokuapp.com/products`, {
	"method": "GET",
	"headers": {
		"Content-Type": "application/json",
		"authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMjM2NDgsIm5iZiI6MTU5MzAyMzY0OCwianRpIjoiWDZYU3BLemhhUjd1aFYzSiIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.iYMa9nqazn_X4tM0cosUhGmtnGJMVrl7thJodXjhUl4"
	}
})
      .then((response) => response.json())
      .then((products) => {
        if(this.mounted){
        this.setState({ products });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillUnmount(){
    this.mounted = false

  }

  render() {
    return (
      <div style={{ paddingBottom: '6%'}}>
        <div>
          <CarouselImage />
        </div>

        <div className="container">
          <div className="mb-5">
            <br /><br />
            <Encabezado 
            products={this.state.products}
            />
          </div>
        </div>
      </div>
    )
  }
}
