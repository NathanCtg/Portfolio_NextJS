import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#121212] text-[#f5f5f5] py-5 text-center">
            <div className="flex justify-center gap-5 mb-2">
                <a href="https://github.com/NathanCtg" target="_blank" rel="noreferrer">
                    <FaGithub className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-[#1da1f2]" />
                </a>
                <a href="https://www.linkedin.com/in/nathan-cartegnie-05b210286/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-2xl transition-transform duration-300 hover:scale-110 hover:text-[#1da1f2]" />
                </a>
            </div>
            <p className="text-sm mt-3">
                A portfolio designed & built by Nathan Cartegnie
            </p>
        </footer>
    );
}

export default Footer;
