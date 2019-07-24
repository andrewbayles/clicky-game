import React from "react";

function Navbar() {
    return(
        <div className="navbar">

            <header className="App-header">
                <h1>Clicky Game</h1>
                <p>Click an image to begin!</p>
                <h2>Score: {} | Top Score: {}</h2>
            </header>

        </div>
    );
}

export default Navbar;