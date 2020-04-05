import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/recetas" className="nav-link">Recetas</Link>
            </li>
            <li className="ml-auto nav-item">
                <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
        </ul>
    )
}

export default Menu;