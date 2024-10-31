import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import newAvatar from '../../../public/images/avatar.avif';
import "../styles/Main.css";

function Main() {
    return (
        <div className="container" id="Main">
            <div className="about-section">
                <div className="image-wrapper">
                    <Image
                        src={newAvatar}
                        alt="Avatar"
                        width={200}
                        height={200}
                        sizes="(max-width: 768px) 100vw, 200px"
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