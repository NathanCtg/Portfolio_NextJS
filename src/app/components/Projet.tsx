import React from "react";
import '../styles/Projet.css';
import Image from 'next/image';
import img1 from '../../../public/images/portfolio.webp';
import img2 from '../../../public/images/rtx.webp';
import img3 from '../../../public/images/pokedex.webp';
import img4 from '../../../public/images/flatcraft.webp';
import img5 from '../../../public/images/jo.webp';
import img6 from '../../../public/images/puissance_4.webp';

function Projet() {
    return (
        <div className="projects-container" id="Projets">
            <h1>Projets Personnels</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer">
                        <Image src={img1} className="zoom" alt="thumbnail" width={700} height={475} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Portfolio</h2></a>
                    <p>Portfolio mettant en avant mes projets en développement web et en programmation, illustrant mes compétences techniques et ma créativité.</p>
                </div>
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer">
                        <Image src={img3} className="zoom" alt="thumbnail" width={700} height={475} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Pokédex</h2></a>
                    <p>Création d'un Pokédex avec Flask : conception d'une base de données, récupération de données d'une API et développement de fichiers HTML et CSS.</p>
                </div>
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer">
                        <Image src={img2} className="zoom" alt="thumbnail" width={700} height={475} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer"><h2>RTX</h2></a>
                    <p>Implémentation d'un lanceur de rayons en Java pour générer des rendus 3D avec gestion des ombres et des reflets, incluant des calculs d'intersections pour un affichage précis des formes et des couleurs.</p>
                </div>
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer">
                        <Image src={img4} className="zoom" alt="thumbnail" width={700} height={475} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Flatcraft</h2></a>
                    <p>Développement de FlatCraft en Java : un jeu 2D inspiré de Minecraft, avec des fonctionnalités ajoutées au fil du projet, réalisé en équipe de trois.</p>
                </div>
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer">
                        <Image src={img6} className="zoom" alt="thumbnail" width={700} height={475} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Puissance 4</h2></a>
                    <p>Réalisation du jeu de société Puissance 4 en Python : affichage dans la console avec la possibilité de choisir une colonne pour placer un pion à l'aide de coordonnées saisies.</p>
                </div>
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer">
                        <Image src={img5} className="zoom" alt="thumbnail" width={700} height={475} />
                    </a>
                    <a href="" target="_blank" rel="noreferrer"><h2>Site JO Paris 2024</h2></a>
                    <p>Création d'un site web en Laravel présentant les jeux des JO de 2024, permettant aux administrateurs et aux créateurs de jeux de les ajouter, modifier ou supprimer, ainsi que de les filtrer selon divers critères.</p>
                </div>
            </div>
        </div>
    );
}

export default Projet;
