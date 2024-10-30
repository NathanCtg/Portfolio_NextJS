import React from "react";
import "./AboutMe.css";

function AboutMe() {
    return (
        <div className="about-me-container" id="About me">
            <h1>A propos de moi</h1>
            <p>Je m'appelle Nathan Cartegnie, étudiant en troisième année de BUT Informatique en alternance.
                Passionné par le développement logiciel, j'ai l'occasion de renforcer mes compétences techniques dans
                divers langages et frameworks, tout en restant à l'affût des dernières innovations technologiques.
                Motivé et curieux, je suis toujours prêt à apprendre et à relever de nouveaux défis.</p>
            <a href="" download className="download-cv-button">Télécharger mon CV</a>
        </div>
    );
}

export default AboutMe;