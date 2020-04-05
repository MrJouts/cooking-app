import React from "react";
import Navbar from "./Navbar";

function Header(props) {

    const showModal = () => props.showModal();

    return (
        <div>
            <Navbar showModal={showModal} />
        </div>
    )
}

export default Header;
