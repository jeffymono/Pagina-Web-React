import React, {Component} from 'react'
import Audio from './Audio'
import Toy from './Toy'
import Gadget from './Gadget'
import Pet from './Pet'
import Cleaning from './Cleaning'
import Charger from './Charger'
import Home from './Home'
import Illumination from './Illumination'
export default class ProductApi extends Component {
  state = { products: {} };
  componentDidMount() {
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "9bf4eeee26msh75557ea69b8ed4bp1111f6jsn9a7fc86ca27a",
        },
      }
    )
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
        <br />
        <h2>Audio</h2>
        <hr align="left" width="70%" />
        <Audio products={this.state.products} />
        <br />
        <h2>Juguetes</h2>
        <hr align="left" width="70%" />
        <Toy products={this.state.products} />
        <br />
        <h2>Artilujios</h2>
        <hr align="left" width="70%" />
        <Gadget products={this.state.products} />
        <br />
        <h2>Mascotas</h2>
        <hr align="left" width="70%" />
        <Pet products={this.state.products} />
        <br />
        <h2>Limpieza</h2>
        <hr align="left" width="70%" />
        <Cleaning products={this.state.products} />
        <br />
        <h2>Cargadores</h2>
        <hr align="left" width="70%" />
        <Charger products={this.state.products} />
        <br />
        <h2>Hogar</h2>
        <hr align="left" width="70%" />
        <Home products={this.state.products} />
        <br />
        <h2>Iluminación</h2>
        <hr align="left" width="70%" />
        <Illumination products={this.state.products} />
      </div>
    );
  }
}
