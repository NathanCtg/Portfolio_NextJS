import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const navItems = [
    ['À propos de moi', 'APropos'],
    ['Compétences', 'Compétences'],
    ['Parcours', 'Parcours_Scolaire'],
    ['Projets', 'Projets']
];

interface NavigationProps {
    parentToChild: {
        mode: string;
    };
    modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
    const { mode } = parentToChild;

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const scrollToSection = (section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            const navbarHeight = document.getElementById("navigation")?.clientHeight || 0;
            const sectionPosition = sectionElement.offsetTop - navbarHeight;
            window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
            setMobileOpen(false);
        } else {
            console.error(`Element with id "${section}" not found`);
        }
    };

    return (
        <div>
            <nav
                id="navigation"
                className={`fixed w-full z-50 bg-[#222] text-white shadow-md transition-all duration-300 py-5`}
            >
                <div className="flex justify-between items-center px-5">
                    <button className="md:hidden bg-transparent text-white text-lg" onClick={handleDrawerToggle}>
                        <FaBars />
                    </button>

                    <button
                        className="bg-transparent text-white text-lg"
                        onClick={modeChange}
                    >
                        {mode === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
                    </button>

                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <button key={item[0]} className="bg-transparent text-white text-lg" onClick={() => scrollToSection(item[1])}>
                                {item[0]}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {mobileOpen && (
                <div className="fixed left-0 top-0 w-1/2 h-full bg-[#444] text-white transition-transform duration-300 z-40 overflow-auto">
                    <div className="flex flex-col items-center p-5">
                        <ul className="w-full flex flex-col items-center">
                            {navItems.map((item, index) => (
                                <li key={item[0]} className={`mb-4 ${index === 0 ? 'mt-16' : ''}`}>
                                    <button className="bg-transparent text-white text-lg" onClick={() => scrollToSection(item[1])}>
                                        {item[0]}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navigation;
