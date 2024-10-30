import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import './Navigation.css';

const navItems = [['A propos de moi', 'About me'], ['Compétences', 'Skills'], ['Parcours', 'School-careers'], ['Projet', 'Project']];

interface NavigationProps {
    parentToChild: {
        mode: string;
    };
    modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
    const { mode } = parentToChild;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navigation");
            if (navbar) {
                const scrolled = window.scrollY > navbar.clientHeight;
                setScrolled(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            const navbarHeight = document.getElementById("navigation")?.clientHeight || 0;
            const sectionPosition = sectionElement.offsetTop - navbarHeight;
            window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
        } else {
            console.error(`Element with id "${section}" not found`);
        }
    };

    return (
        <div>
            <nav id="navigation" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="toolbar">
                    <button className="menu-button" onClick={handleDrawerToggle}>
                        <FaBars />
                        {mobileOpen && <span>Menu</span>}
                    </button>
                    <button className="mode-toggle" onClick={modeChange}>
                        {mode === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
                    </button>
                    <div className="nav-items">
                        {navItems.map((item) => (
                            <button key={item[0]} onClick={() => scrollToSection(item[1])}>
                                {item[0]}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
            {mobileOpen && (
                <div className="drawer">
                    <div className="drawer-content" onClick={handleDrawerToggle}>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item[0]}>
                                    <button onClick={() => scrollToSection(item[1])}>
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