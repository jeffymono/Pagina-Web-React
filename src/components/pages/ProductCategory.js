import React, {Component} from 'react'
import ProductList from '../body/ProductList'
import CarouselImage from '../body/CarouselImage'
import { Encabezado } from '../body/Encabezado';

export default class ProductCategory extends Component {

    componentDidMount(){
        this.mounted=true
        const requestApi={
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:"bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMTQ4NTIsIm5iZiI6MTU5MzAxNDg1MiwianRpIjoicGdidXpZcXF2c3BOMnRqTCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.l9uCd28YRw2uWrNDxyOatmB-Rb6tJ5nGYlboDHdrQRc"
            }
        }
        fetch("https://api-xiaominario.herokuapp.com/categories/2",requestApi)
        .then(response=>response.json())
        .then(result=>console.log(result))
        .catch(error=>{
            console.log(error)
        })
    }
    componentWillUnmount(){
        this.mounted=false
    }
render(){
    return(
        <div style={{ paddingTop: '6.6rem'}}>
            HOLA MUNDO
        </div>
    )
}
}
