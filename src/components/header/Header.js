import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {

    state = {
        menuStyle: null
    }

    showModal = () => this.props.showModal();

    toggleMenu = () => {
        if (this.state.menuStyle === "is-active") {
            this.setState({ menuStyle: null })
        } else {
            this.setState({ menuStyle: "is-active" })
        }
    }

    render() {
        return (
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">
                                <i className="fas fa-cookie-bite"></i>
                                <strong>Cook App</strong>
                            </Link>
                            <button className={`button is-text navbar-burger burger ${this.state.menuStyle}`} onClick={this.toggleMenu} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </button>
                        </div>

                        <div id="navbarBasicExample" className={`navbar-menu ${this.state.menuStyle}`}>
                            <div className="navbar-start">
                                <Link to="/recetas" className="navbar-item">Recetas</Link>
                                <Link to="/contacto" className="navbar-item">Contacto</Link>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <button className="button is-primary"><strong>Registrarme</strong></button>
                                        <button className="button is-light" onClick={this.showModal}>Ingresar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>   
        )
    }
}

export default Header;
