import React, { Component, Suspense } from "react";
import {Spinner} from 'react-bootstrap'
import CarouselImage from './CarouselImage'
const CategoryList = React.lazy(() => import('./CategoryList'));

export default class ElementBody extends Component {
  render() {
    return (
      <div style={{ paddingBottom: "6%" }}>
        <div>
          <CarouselImage />
        </div>
        <div className="container">
          <div
            className="mb-5"
            style={{ minHeight: "120vh", textAlign: "center" }}
          >
            <br />
            <br />
            <Suspense
              fallback={
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              }
            >
              <CategoryList />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
