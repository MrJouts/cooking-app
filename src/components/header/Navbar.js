import React from "react";
import Menu from "./Menu";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Cook App</a>
                  <div className="collapse navbar-collapse" >
                    <Menu />
                    <div className="ml-auto">
                        login
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
