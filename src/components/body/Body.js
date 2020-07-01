import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail';
import ProductApi from './ProductApi';
import ProductCategory from "../pages/ProductCategory";
export default class Body extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={ProductApi}/>
          <Route path="/home/category/:idCategory/productDetail/:id" component={ProductDetail}/>
          <Route path="/home/ProductCategory/:id" component={ProductCategory}/>
        </Switch>
      </div>
    )
  }
}
