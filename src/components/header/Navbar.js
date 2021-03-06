import React from 'react'
import '../css/Navbar.css'
import logo from'../img/logo2.png'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

class Navbar extends React.Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                <Link className="nav-link" to="/home"><img src={logo} className="App-logo" alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse links" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active ">
                            <Link className="nav-link" to="/home">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <HashLink className="nav-link" to="/home/#Audio">Audio<span className="sr-only">(current)</span></HashLink>
                        </li>
                        <li className="nav-item active">
                            <HashLink className="nav-link" to="/home/#Juguetes">Juguetes<span className="sr-only">(current)</span></HashLink>
                        </li>
                        <li className="nav-item active">
                            <HashLink className="nav-link" to="/home/#Gadgets">Gadgets<span className="sr-only">(current)</span></HashLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Más categorías
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <HashLink className="dropdown-item" to="/home/#Cámaras">Cámaras<span className="sr-only">(current)</span></HashLink>
                                <HashLink className="dropdown-item" to="/home/#Limpieza">Limpieza<span className="sr-only">(current)</span></HashLink>
                                <HashLink className="dropdown-item" to="/home/#Cargadores">Cargadores<span className="sr-only">(current)</span></HashLink>
                                <HashLink className="dropdown-item" to="/home/#Hogar">Hogar<span className="sr-only">(current)</span></HashLink>
                                <HashLink className="dropdown-item" to="/home/#Iluminación">Iluminación<span className="sr-only">(current)</span></HashLink>
                               
                            </div>
                        </li>
                        <li className="nav-item active">
                        <Link className="nav-link" to="/home/contact">Contacto <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 buscador">
                        <input className="form-control mr-sm-2 input-buscador" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button className="bg-transparent border-0 btn" type="submit"><svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg></button>
                    </form>
                </div>
            </nav>
        )
    }
}
export default Navbar
