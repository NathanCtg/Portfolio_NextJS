import React from "react";
import { FaCode } from "react-icons/fa";
import { VscTerminalCmd } from "react-icons/vsc";
import './Skills.css';

const labelsFirst = [
    "Python",
    "Java",
    "HTML5",
    "CSS3",
    "PHP",
    "JavaScript",
    "TypeScript",
    "React",
    "Flask",
    "SQL",
    "PostgreSQL",
];

const labelsSecond = [
    "Git",
    "Docker",
    "Linux",
    "Selenium",
];

function Expertise() {
    return (
        <div className="container" id="Skills">
            <div className="skills-container">
                <h1>Mes Compétences</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FaCode className="icon" />
                        <div className="skill-content">
                            <h3>Compétences Techniques en Développement</h3>
                            <p>En tant qu'étudiant, j'ai acquis une expertise dans des langages et frameworks variés tels
                                que Python, Java et TypeScript. Je développe des applications performantes et évolutives, en
                                combinant mes connaissances en développement frontend et backend.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {labelsFirst.map((label, index) => (
                                    <span key={index} className="chip">{label}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="skill">
                        <VscTerminalCmd className="icon" />
                        <div className="skill-content">
                            <h3>DevOps & Automation</h3>
                            <p>Après avoir développé des applications, j'accompagne mes projets académiques dans la mise en
                                place de tests DevOps, pipelines CI/CD et automatisation du déploiement pour assurer un
                                Go-Live réussi.</p>
                            <div className="flex-chips">
                                <span className="chip-title">Tech stack:</span>
                                {labelsSecond.map((label, index) => (
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
