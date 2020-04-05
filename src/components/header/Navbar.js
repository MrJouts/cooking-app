import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Cook App</Link>
                  <div className="collapse navbar-collapse" >
                    <Menu />
                    <div className="ml-auto">login</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
