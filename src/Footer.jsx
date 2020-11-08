import React from "react";
import './index.css'

function Footer() {
    return (
        <footer className="footer-container">
            <h2 className="footer">Made with React {React.version}</h2>
            <h2 className="disclaimer"> most css properties is taken from Brian Design (Youtube channel)</h2>
        </footer>
    );
};

export default Footer;