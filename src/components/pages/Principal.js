import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../header/Navbar'
import Body from '../body/Body'
import Contact from './Contact'
import Footer from '../footer/Footer'
import ProductCategory from "../pages/ProductCategory";

class Principal extends React.Component{
    render(){
        return(
            <BrowserRouter>

                <Navbar/>
                <Redirect
                    from="/" to="/home" />
                <div>
                    <Switch>
                        <Route path="/home/contact" component={Contact} />
                    </Switch>
                </div>
                <Body
                />
                <Footer
                />

            </BrowserRouter>
        )
    }
}
export default Principal