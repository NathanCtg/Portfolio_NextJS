import React from "react";

function APropos() {
    return (
        <div className="py-12 px-1 text-center bg-[#0d1116] text-white w-full min-h-[50vh] shadow-[0_4px_20px_rgba(0,0,0,0.5)]" id="APropos">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-2xl mb-8 font-bold text-[#fefefe]">À propos de moi</h1>
                <p className="text-lg mb-12 leading-relaxed">
                    Je m'appelle Nathan Cartegnie, étudiant en troisième année de BUT Informatique en alternance.
                    Passionné par le développement logiciel, j'ai l'occasion de renforcer mes compétences techniques
                    dans divers langages et frameworks, tout en restant à l'affût des dernières innovations technologiques.
                    Motivé et curieux, je suis toujours prêt à apprendre et à relever de nouveaux défis.
                </p>
                <a href="" download className="bg-[#fefefe] text-[#121212] px-6 py-3 rounded-md no-underline text-base transition-colors duration-300 hover:bg-gray-300">
                    Télécharger mon CV
                </a>
            </div>
            <div className="my-12" />
        </div>
    );
}

export default APropos;
