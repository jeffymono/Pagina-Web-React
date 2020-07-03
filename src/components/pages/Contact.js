import React from 'react'

class Contact extends React.Component {
    render(){
        return(
            <div className="container" style={{ paddingTop: '9rem', paddingBottom: '6%'}}>
                <h1>Contáctanos</h1>
                <hr />
                <br />
                <form>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Ingresa tus nombres" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Ingresa tus apellidos" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tú correo electrónico"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Asunto"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje" />
                    </div>
                    <div className="col-12 text-right">
                        <button type="submit" className="btn btn-outline-secondary" >Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Contact
