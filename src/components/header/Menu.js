import React from 'react'

function Menu(props) {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Recetas</a>
            </li>
            <li className="ml-auto nav-item">
                <a href="" className="nav-link">Contacto</a>
            </li>
        </ul>
    )
}

export default Menu;