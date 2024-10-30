import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image"; // Importer le composant Image de Next.js
import "./Main.css";

function Main() {
    return (
        <div className="container" id="Main">
            <div className="about-section">
                <div className="image-wrapper">
                    {/* Remplacez <img> par <Image> */}
                    <Image
                        src="https://img.freepik.com/vecteurs-premium/avatar-ours-profil-ours-abstrait-isole-ours-costume-affaires_118339-4190.jpg"
                        alt="Avatar"
                        width={200} // Définir une largeur (adaptable selon vos besoins)
                        height={200} // Définir une hauteur (adaptable selon vos besoins)
                        layout="responsive" // Optionnel, pour que l'image s'ajuste à son conteneur
                    />
                </div>
                <div className="content">
                    <div className="social-icons">
                        <a href="https://github.com/NathanCtg" target="_blank" rel="noreferrer" className="icon github-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-cartegnie-05b210286/" target="_blank" rel="noreferrer" className="icon linkedin-icon">
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
                        <a href="https://www.linkedin.com/in/nathan-cartegnie-05b210286/" target="_blank" rel="noreferrer" className="icon linkedin-icon">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
