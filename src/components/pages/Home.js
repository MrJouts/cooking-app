import React from "react";

import "../../App.scss";


function Home(props) {

    const styles = {
        backgroundImage: "logo192.png"
    }

    return (
        <div>

            {/* Title */}
            <section className="hero is-medium is-light">
                <div className="hero-home hero-body level" style={styles}>
                    <div className="field has-addons">
                        <div className="control">
                            <input class="input is-large" type="text" placeholder="¿Que vas a preparar hoy?" />
                        </div>
                        <div class="control">
                            <button class="button is-info is-large">Buscar receta</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
