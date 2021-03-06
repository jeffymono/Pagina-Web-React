import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import ElementBody from "./ElementBody";
import ProductCategory from "../pages/ProductCategory";
import StaticContext from "../context/StaticContext";
import { getApis } from "./getApis";
const listCategories = getApis();
export default class Body extends Component {
  render() {
    return (
      <StaticContext.Provider value={listCategories}>
        <div>
          <Switch>
            <Route exact path="/home" component={ElementBody} />
            <Suspense fallback={<h2>Loading..</h2>}>
              <Route
                path="/home/category/:idCategory/productDetail/:id"
                component={ProductDetail}
              />
              <Suspense fallback={<h2>Loading..</h2>}>
                <Route
                  path="/home/ProductCategory/:id"
                  component={ProductCategory}
                />
              </Suspense>
            </Suspense>
          </Switch>
        </div>
      </StaticContext.Provider>
    );
  }
}
