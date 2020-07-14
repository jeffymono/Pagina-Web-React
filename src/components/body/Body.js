import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail';
import ElementBody from './ElementBody';
import ProductCategory from "../pages/ProductCategory";
export default class Body extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={ElementBody}/>
          <Route path="/home/category/:idCategory/productDetail/:id" component={ProductDetail}/>
          <Route path="/home/ProductCategory/:id" component={ProductCategory}/>
        </Switch>
      </div>
    )
  }
}
