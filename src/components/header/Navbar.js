import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar(props) {

    const showModal = () => props.showModal();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Cook App</Link>
                <div className="collapse navbar-collapse" >
                    <Menu />
                    <div className="btn btn-outline-primary" onClick={showModal}>
                        <i className="far fa-user mr-2"></i>
                        Login
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
