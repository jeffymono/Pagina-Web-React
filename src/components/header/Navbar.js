import React from 'react'

import '../css/Navbar.css'

class Navbar extends React.Component{
    render(){
        
        return(
            <nav className="navbar navbar-expand-lg  navbar-light bg-light nav">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse links" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active ">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Interesantes <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Más vendidos <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Más baratos <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorías
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Audio</a>
                                <a className="dropdown-item" href="#">Cámaras</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Cargadores</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 buscador">
                        <input className="form-control mr-sm-2 input-buscador" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go!</button>
                    </form>
                </div>
            </nav>
            )
    }
}
export default Navbar
