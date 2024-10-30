import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/NathanCtg" target="_blank" rel="noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/nathan-cartegnie-05b210286/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="icon" />
                </a>
            </div>
            <p>
                A portfolio designed & built by Nathan Cartegnie
            </p>
        </footer>
    );
}

export default Footer;