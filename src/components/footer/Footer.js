import React from 'react'
import '../css/Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark footer">
                <a className="navbar-brand" style={{ paddingLeft: "4%"}} href="#">Xiaominari © 2020</a>
            </nav>
        )
    }
}
export default Footer