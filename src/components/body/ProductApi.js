import React, {Component} from 'react'
import ProductList from './ProductList'
import CarouselImage from './CarouselImage'
import { Encabezado } from './Encabezado';

export default class ProductApi extends Component {
    //Crear estados para cada producto(categoria)
    //Y manda por props para el ProductList
  state = { products: {},categoryName:"" }; 
  componentDidMount() {
    this.mounted = true
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "asos2.p.rapidapi.com",
		"x-rapidapi-key": "58de42f635msheb7346205035345p157c8ajsn041a095b9368"
	}
})
      .then((response) => response.json())
      .then((data) => {
        if(this.mounted){
        const { products,categoryName } = data;
        this.setState({ products,categoryName });
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
      <div>
        <div>
          <CarouselImage />
        </div>

        <div className="container">
          <div className="mb-5">
            <br /><br />
            
            <Encabezado categoryName={this.state.categoryName}>Audio</Encabezado>
            <ProductList products={this.state.products} />

            <Encabezado>Juguetes</Encabezado>
            <ProductList products={this.state.products} />
            
            <Encabezado>Artilujios</Encabezado>
            <ProductList products={this.state.products} />

            <Encabezado>Mascotas</Encabezado>
            <ProductList products={this.state.products} />

            <Encabezado>Limpieza</Encabezado>
            <ProductList products={this.state.products} />

            <Encabezado>Cargadores</Encabezado>
            <ProductList products={this.state.products} />

            <Encabezado>Hogar</Encabezado>
            <ProductList products={this.state.products} />

            <Encabezado>Iluminación</Encabezado>
            <ProductList products={this.state.products} />
          </div>
        </div>
      </div>
    )
  }
}
