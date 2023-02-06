import { Component } from "react";
import carrito from './img/carrito.jpg'

class NavBar extends Component{
    render(){
        return(
            <div className="NavBar">
                <h1 className="titulo">Tienda D'Amico</h1>
                <ul>
                    <li ><a href="default.asp">Inicio</a></li>
                    <li ><a href="news.asp">Vehiculos</a></li>
                    <li ><a href="contact.asp">Motor</a></li>
                    <li ><a href="about.asp">Carroceria</a></li>
                </ul>
                <div>
                    <a href=""><img className="imagen" src={carrito}/></a>
                    <p className="parrafo">3</p>
                </div>
            </div>
        )
    }
};

export default NavBar;