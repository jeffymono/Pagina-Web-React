import React, { Component, Suspense } from "react";
import CarouselImage from './CarouselImage'
import SpinnerCategory from './SpinnerCategory'
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
              fallback={<SpinnerCategory/>}
            >
              <CategoryList />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
