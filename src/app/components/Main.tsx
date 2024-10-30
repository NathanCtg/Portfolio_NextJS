import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Main.css";

function Main() {
    return (
        <div className="container" id="Main">
            <div className="about-section">
                <div className="image-wrapper">
                    <img src="https://img.freepik.com/vecteurs-premium/avatar-ours-profil-ours-abstrait-isole-ours-costume-affaires_118339-4190.jpg" alt="Avatar" />
                </div>
                <div className="content">
                    <div className="social-icons">
                        <a href="https://github.com/NathanCtg" target="_blank" rel="noreferrer" className="icon github-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/Nathan Cartegnie/" target="_blank" rel="noreferrer" className="icon linkedin-icon">
                            <FaLinkedin />
                        </a>
                    </div>
                    <h1>Nathan Cartegnie</h1>
                    <div className="text-container">
                        <p>Alternant en Développement Informatique</p>
                    </div>
                    <div className="mobile-social-icons">
                        <a href="https://github.com/NathanCtg" target="_blank" rel="noreferrer" className="icon github-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/Nathan Cartegnie/" target="_blank" rel="noreferrer" className="icon linkedin-icon">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;