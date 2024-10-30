import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const experiences = [
        {
            title: "BUT Informatique (Alternance)",
            subtitle: "Développeur Web",
            date: "2024 - 2025",
            description: "Institut Universitaire de Technologie de Lens / SNCF Voyageurs - Technicentre d'Hellemmes"
        },
        {
            title: "BUT Informatique",
            subtitle: "Spécialité Développement d'Applications",
            date: "2022 - 2024",
            description: "Institut Universitaire de Technologie de Lens"
        },
        {
            title: "Baccalauréat Général",
            subtitle: "Spécialité Mathématiques & NSI",
            date: "2019 - 2022",
            description: "Lycée Voltaire - Wingles"
        }
    ];

    return (
        <div id="School-careers">
            <div className="items-container">
                <h1>Mon Parcours Scolaire</h1>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <span className="timeline-date">{exp.date}</span>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-subtitle">{exp.subtitle}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
