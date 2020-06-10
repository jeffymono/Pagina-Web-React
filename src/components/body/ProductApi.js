import React, {Component} from 'react'
import ProductList from './ProductList'
import CarouselImage from './CarouselImage'

export default class ProductApi extends Component {
    //Crear estados para cada producto(categoria)
    //Y manda por props para el ProductList
  state = { products: {} }; 
  componentDidMount() {
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "asos2.p.rapidapi.com",
		"x-rapidapi-key": "58de42f635msheb7346205035345p157c8ajsn041a095b9368"
	}
})
      .then((response) => response.json())
      .then((data) => {
        const { products } = data;
        this.setState({ products });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <CarouselImage />
        </div>

        <div className="container">
          <div className="mb-5">
          <br />
            <h2>Interesantes</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Más vendidos</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Mas baratos</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <br />
            <h2>Audio</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Juguetes</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Artilujios</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Mascotas</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Limpieza</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Cargadores</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Hogar</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
            <br />
            <h2>Iluminación</h2>
            <hr align="left" width="70%" />
            <ProductList products={this.state.products} />
          </div>
        </div>
      </div>
    )
  }
}
