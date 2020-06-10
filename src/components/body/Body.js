import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProductList from './ProductList'
import CarouselImage from './CarouselImage'
import ProductDetail from '../pages/ProductDetail';
import ProductApi from './ProductApi';
export default class Body extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ProductApi}/>
          <Route path="/productDetail/:id" component={ProductDetail}/>
        </Switch>
      </div>
    )
  }
}
