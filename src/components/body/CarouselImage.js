import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

const IMAGES_BANNER={  
  imageUno: require('../img/banner1.jpg'),
  imagenDos: require('../img/banner2.jpg'),
  imagenTres: require('../img/banner3.jpg')
}

export default class CarouselImage extends Component {


  CarouselItemImage(){
      return(
        Object.keys(IMAGES_BANNER).map((image,indice)=>{
        return(
          <Carousel.Item key={indice}>
             {/* Width=1300 y height=433  */}
          <img 
            className="d-block w-100"
            src= {IMAGES_BANNER[image]}
            alt={image}
          />
         {/*  <Carousel.Caption>
            <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        )
      })
      )
  }
  render() {

    return (
      <Carousel>
        {this.CarouselItemImage()}
      </Carousel>
    );
  }
}
