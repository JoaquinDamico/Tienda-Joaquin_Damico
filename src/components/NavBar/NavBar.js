import { Component } from "react";
import carrito from './img/carrito.jpg'
import { Link } from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div className="NavBar">
                <h1 className="titulo">Tienda D'Amico</h1>
                <ul>
                    <li > <Link to="/category/Vehiculos">Vehiculos</Link></li>
                    <li > <Link to="/category/Volkswagen">Volkswagen</Link></li>
                    <li > <Link to="/category/Chevrolet">Chevrolet</Link></li>
                    <li > <Link to="/category/Audi">Audi</Link></li>
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