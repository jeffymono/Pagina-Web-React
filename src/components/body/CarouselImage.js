import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
export default class CarouselImage extends Component {
  render() {
    return (
      <Carousel style={{ paddingTop: '6.6rem'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://previews.123rf.com/images/ylivdesign/ylivdesign1709/ylivdesign170910338/86856402-soccer-awards-banner-horizontal-concept-ilustraci%C3%B3n-plana-de-f%C3%BAtbol-premios-banner-vector-horizontal-concep.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://previews.123rf.com/images/ylivdesign/ylivdesign1709/ylivdesign170910338/86856402-soccer-awards-banner-horizontal-concept-ilustraci%C3%B3n-plana-de-f%C3%BAtbol-premios-banner-vector-horizontal-concep.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/*  <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://previews.123rf.com/images/ylivdesign/ylivdesign1709/ylivdesign170910338/86856402-soccer-awards-banner-horizontal-concept-ilustraci%C3%B3n-plana-de-f%C3%BAtbol-premios-banner-vector-horizontal-concep.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
