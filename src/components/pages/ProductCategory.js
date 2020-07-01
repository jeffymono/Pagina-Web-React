import React, {Component} from 'react'
import {Container,Row,Col  } from "react-bootstrap";
import Product from '../body/Product'

export default class ProductCategory extends Component {
state={products:[]}
mounted=false
fetchCategory(id){
    const requestApi={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:"bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE1OTMwMTQ4NTIsIm5iZiI6MTU5MzAxNDg1MiwianRpIjoicGdidXpZcXF2c3BOMnRqTCIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.l9uCd28YRw2uWrNDxyOatmB-Rb6tJ5nGYlboDHdrQRc"
        }
    }
    fetch(`https://api-xiaominario.herokuapp.com/categories/${id}/products`,requestApi)
    .then(response=>response.json())
    .then(result=>{
        console.log(result)
        this.setState({products:result})
    })
    .catch(error=>{
        console.log(error)
    })
}
    
    componentDidMount(){
        this.mounted=true
        if(this.mounted){
            const {id} = this.props.match.params
            this.fetchCategory(id)
        }
        
    }
    componentWillUnmount(){
        this.mounted=false
    }
render(){
    console.log(this.state.products)
    return(
        <div style={{ paddingTop: '7.5rem'}}>
<Container fluid>
    <Row>
            {this.state.products.map(product=>{
                return(
                    <Col sm={2} width="270px" key={product.id}>
                <Product
                imageUrl={product.pro_imagen}
                brandName={product.pro_marca}
                id={product.id}
                />
                </Col>
                )
            })}
            </Row>
            </Container>
        </div>
    )
}
}
