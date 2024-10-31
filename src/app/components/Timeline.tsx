import React from 'react';
import { experiences } from '../data';

const Timeline = () => {
    return (
        <div id="Parcours_Scolaire" className="p-10 bg-[#0d1116]">
            <div className="max-w-5xl mx-auto text-center px-4">
                <h1 className="text-3xl text-white font-bold mb-10">Mon Parcours Scolaire</h1>
                <div className="relative flex flex-col items-center">
                    {/* Ligne de la timeline */}
                    <div className="absolute left-1/2 top-0 w-[3px] h-full bg-[#add8e6] transform -translate-x-1/2"></div>
                    {experiences.map((exp, index) => (
                        <div
                            className={`relative mb-16 flex w-full ${
                                index % 2 === 0 ? 'justify-start' : 'justify-end'
                            }`}
                            key={index}
                        >
                            <div
                                className={`bg-gradient-to-tr from-[#ffffff] to-[#f0f0f0] p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 w-full max-w-[600px] ${
                                    index % 2 === 0 ? 'mr-6' : 'ml-6'
                                }`}
                            >
                                <span className="text-base font-semibold text-gray-400 mb-2">{exp.date}</span>
                                <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                                <h4 className="text-base text-gray-600 my-1">{exp.subtitle}</h4>
                                <p className="text-base text-gray-500 mt-2">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
