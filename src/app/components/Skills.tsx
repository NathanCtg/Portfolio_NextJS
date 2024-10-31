import React from "react";
import { FaCode } from "react-icons/fa";
import { VscTerminalCmd } from "react-icons/vsc";
import '../styles/Skills.css';
import { skills } from "../data"; // Importer les données

function Expertise() {
    return (
        <div className="container" id="Compétences">
            <div className="skills-container p-12 flex flex-col text-left bg-gray-900 w-full mx-auto">
                <h1 className="text-3xl text-white font-bold mb-8 text-center">Mes Compétences</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FaCode className="text-3xl mb-4 text-white" />
                        <div className="skill-content">
                            <h3 className="text-lg text-white font-semibold my-4 transition-colors duration-300 hover:text-indigo-300">Compétences Techniques en Développement</h3>
                            <p className="text-gray-300 text-sm leading-6 mb-6">En tant qu'étudiant, j'ai acquis une expertise dans des langages et frameworks variés tels
                                que Python, Java et TypeScript. Je développe des applications performantes et évolutives, en
                                combinant mes connaissances en développement frontend et backend.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {skills.technical.map((label, index) => (
                                    <span key={index} className="chip">{label}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="skill">
                        <VscTerminalCmd className="text-3xl mb-4 text-white" />
                        <div className="skill-content">
                            <h3 className="text-lg text-white font-semibold my-4 transition-colors duration-300 hover:text-indigo-300">DevOps & Automation</h3>
                            <p className="text-gray-300 text-sm leading-6 mb-6">Après avoir développé des applications, j'accompagne mes projets académiques dans la mise en
                                place de tests DevOps, pipelines CI/CD et automatisation du déploiement pour assurer un
                                Go-Live réussi.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {skills.devops.map((label, index) => (
                                    <span key={index} className="chip">{label}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
